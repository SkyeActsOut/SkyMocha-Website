// create youtube player
var player, playerWeb, text;
var unity;
var finished;

function onReady(callback) {
    var intervalId = window.setInterval(function() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
        window.clearInterval(intervalId);
        callback.call(this);
        }
    }, 50);
}

// Loads site
function onYouTubePlayerAPIReady() {
  var player = new YT.Player('playerMobile', {
    height: '192vw',
    width: '342vw',
    videoId: 'maaBz6N1m5Q',

    events: {
      // 'onReady': onPlayerReady,
      // 'onStateChange': onPlayerStateChange,
      'color': 'white',
    }
  });

  onReady(function() {
    changeSite();
    setInterval ("changeSite()", 100);
    setTimeout(() => {
        let body = document.getElementById("invis")
        body.classList.remove ("invisible")
        let invisLoader = document.getElementById ("load-spinner")
        invisLoader.classList.add("invisible")
    }, 20);
  });
}

// autoplay video
function onPlayerReady(event) {
    event.target.playVideo();
}

// when video ends
function onPlayerStateChange(event) {
  if(event.data === 0) {
    finished = true;            
    var unity = document.getElementById("unity");
    unity.classList.remove ("invisible");
    var player = document.getElementById("player");
    player.classList.remove ("webgl-content");
    player.classList.add("invisible");
    // var player2 = document.getElementById("playerMobile");
    // player.classList.remove ("webgl-content")
    // player2.classList.add("invisible");
    var unityInstance = UnityLoader.instantiate("unityContainer", "Build/WebBuild2.json", {onProgress: UnityProgress});
  }
}

// Changes site between mobile and web
function changeSite () {
    // Ratio of height to width
    var windowRatio = window.innerHeight/window.innerWidth;
    // Changes body to mobile
    if (windowRatio > 0.65) {
      if (windowRatio > 0.85) {
        var web = document.getElementById("hWeb");
        var mobile = document.getElementById("hMobile");
        web.style.display = "none";
        mobile.style.display = "initial";
      }

      let github = document.getElementById("github")
      let ludumdare = document.getElementById("ld")
      github.classList.remove("githubWeb")
      github.classList.add("github")
      ludumdare.classList.remove("ldWeb")
      ludumdare.classList.add("ld")

      if (!finished) {
        playerDiv = document.getElementById("player")
        playerDiv.classList.add("invisible")
        playerDiv = document.getElementById("playerMobile")
        playerDiv.classList.remove("invisible")
        text = document.getElementById("text")
        text.classList.add("text")
        text.classList.remove("invisible")
      }
    }
    // Changes to web
    else {
      var web = document.getElementById("hWeb");
      var mobile = document.getElementById("hMobile");
      web.style.display = "initial";
      mobile.style.display = "none";

      playerWeb = new YT.Player('player', {
        height: '540vw',
        width: '960vw',
        videoId: 'maaBz6N1m5Q',
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange,
          'disablekb': 1,
          'controls': 0,
          'color': 'white',
          }
      });

      let github = document.getElementById("github")
      let ludumdare = document.getElementById("ld")
      github.classList.add("githubWeb")
      github.classList.remove("github")
      ludumdare.classList.add("ldWeb")
      ludumdare.classList.remove("ld")

      if (!finished) {
        playerDiv = document.getElementById("player")
        playerDiv.classList.remove("invisible")
        text = document.getElementById("text")
        text.classList.remove("text")
        text.classList.add("invisible")
      }
    }
}