// LOAD USER
const config = require('./config.json');

// LOAD EPRESS
const express = require('express');
const res = require('express/lib/response');
const app = express()
const port = 3000

var cors = require('cors')
app.use(cors(
  {
    origin: true
  }
));

const axios = require('axios').default

const {TwitterClient} = require('twitter-api-client')

const twitterClient = new TwitterClient({
  apiKey: config.TWITTER_API,
  apiSecret: config.TWITTER_API_SECRET,
  accessToken: config.TWITTER_ACCESS,
  accessTokenSecret: config.TWITTER_ACCESS_SECRET
})

// const base = `http://144.172.70.99:3000/api/v1`
const base = '/api/v1'

const YTSearch = require ('yt-channel-info');
const channelID = "UC_K4EmF_Ks9xmSlL0ZudM4w"

const base_insta = `https://graph.instagram.com/v13.0`
const insta_post_uri = `${base_insta}/me/media?fields=id,media_type,media_url,permalink,timestamp&access_token=${config.INSTA_ACCESS_TOKEN}`

/**
 *
 * @returns {Promise} an array of the 6 latest instagram posts as objects
 */
async function instaPosts () {

  let posts = []

  await axios.get(insta_post_uri).then (d => {

    let IDs = d.data.data.slice(0, 6)

    IDs.forEach (p => {

      posts.push (p)

    })

  } )

  return await posts;

}

/**
 * Loads n Tweets
 * @param {*} n
 * @returns {Promise} returns the latest n tweets
 */
async function loadTweets (n=3) {

  var tweet_base = []

  await twitterClient.tweets.statusesUserTimeline ( { q: 'skymochi64', count: n+6, exclude_replies: true }  ).then (d => {

    d.forEach ( tweet => {

      let media = tweet.entities.media
      let img = []
      if (media != undefined)
        img = media[0].media_url_https

      tweet_base.push(

        {
          time: tweet.created_at.split(' ').slice(0, 3).join(' '),
          text: tweet.text,
          rts: tweet.retweet_count,
          likes: tweet.favorite_count,
          img: img
        }

      )

    }

    )
  })

  let tweets = await tweet_base.filter ( ( tweet ) => {
    return !tweet.text.toLowerCase().startsWith ('rt')
  }).slice (0, n)

  return await tweets;

}

/**
 * Loads twitter user
 * @returns {Promise} Returns twitter user
 */
async function loadUser () {
  var user = {}

  await twitterClient.accountsAndUsers.usersSearch( { q: 'skymochi64' }).then (d => {

    let u = d[0];
    user = {
      name: u.name,
      screen_name: u.screen_name,
      url: u.url
    }

  })

  return await user;
}

const recommended = [
  'Catgirl Redpilled'.toLowerCase(),
  'Minorities, STEM, The College Board | An Analysis'.toLowerCase(),
  'Why The Trans Programmer? | An Analysis'.toLowerCase()
]

/**
 * Gets recommended YouTube videos :)
 * @returns {Promise}
 */
async function loadChannel () {

  var channel = []

  await YTSearch.getChannelVideos( { channelId: channelID, sortBy: "newest" } ).then (d => {

    d.items.forEach (video => {

      if (recommended.includes(video.title.toLowerCase())) {

        channel.push ( {

          'title': video.title,
          'id': video.videoId,
          'views': video.viewCount,
          'length': video.durationText,
          'published': video.publishedText,
          'thumb': video.videoThumbnails[3],
          'url': `https://youtu.be/${video.videoId}`

        } )

      }

    })

  })

  return await channel.slice(0, 3);

}

var tweets, twt_user, videos, posts;
function update () {
  loadTweets().then (d => tweets = d)
  loadUser().then (d => twt_user = d)
  loadChannel().then (d => videos = d)
  instaPosts().then (d => posts = d)
}
update();
setInterval(update, 1000*60*60)

// Epress paths
app.get(`${base}/twitter/timeline`, (req, res) => {

  res.json (tweets);

})

app.get(`${base}/twitter/user`, (req, res) => {

  res.json (twt_user);

})

app.get(`${base}/youtube/videos`, (req, res) => {

  res.json (videos);

})

app.get (`${base}/insta/posts`, (req, res) => {

  res.json (posts);

})

app.listen(port, () => {
  console.log(`API ${port}`)
  console.log (`ENDPOINTS: \n
    http://localhost:3000${base}/twitter/timeline
    http://localhost:3000${base}/twitter/user

    http://localhost:3000${base}/youtube/videos
    http://localhost:3000${base}/insta/posts
    `)
})
