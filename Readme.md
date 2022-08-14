![SkyMocha Page](https://skymocha.net/res/public/Screenshot%202022-05-22%20105509.png)

# SkyMocha Website

[www.skymocha.net](https://www.skymocha.net): My personal website with on and off work for 3+ years!

Always a work-in-progress! :)

## Summer Updates 6/7/2022 -> 8/20/2022

Completely re-creating /Projects/ and making it into /portfolio/ using the React framework. /portfolio/ will be built around a .json file in order to make the addition and editing of projects far easier than creating individual .html pages for each project. Also creating a publications.html to support indexing in Google Scholar for the release of _Fight C'ub's Incel To Exploitable Chad Pipeline_.

## 5/22/2022

Ramping up for the (eventual) release of _Fight Club's Incel to Exploitable Chad Pipeline_. As a result I started going through and re-designing the landing page to not necessarily with the intent of looking more stylish; but to be more optimized, have cleaner code, and be more legible & information-dense. This overall leads to a slicker and cleaner UI.

Index.css has had roughly 300 lines of CSS removed during restructuring, some of which has been un-used CSS for years. Also index.html _finally_ has only one overlay/body for both portrait and landscape instead of two separate bodies that are toggled between, and on top of this only one background is used. This should hopefully speed up performance immensely. Only down-side of this work is the YouTube section has been removed, but most people will likely be coming from my YouTube.

## Overview

The website is currently split into three sections:

1. Front Page Website
2. Portfolio
3. Back-end SkyMocha API

### Front Page Website

The front page acts as a sort-of linktree for various social medias; while also containing links to my main projects, my resume, and a showcase of my Instagram feed using the back-end SkyMocha API.

The front-end website runs on Apache2 on a cloudflare protected server, with custom HTML5 and (mostly) custom-made CSS. Although not the most functional, doing everything myself has allowed for the greatest degree of artistic freedom, customizability, and it has been a really great learning experinece.

Primary end-points are:

> [www.skymocha.net](https://www.skymocha.net/) > _Landing_

> [www.skymocha.net/Projects/](https://www.skymocha.net/Projects/) > _Portfolio_

> [www.skymocha.net/resume.pdf](https://www.skymocha.net/resume.pdf) > _Resume_

### Portfolio

The portfolio section is an independent app built on the React.JS framework. It's built around a .json file to make it far easier to add and edit project pages compared to vast amount of individual .html files. Currently a WIP.

### Back-End API

A back-end API currently gathering my Twitter, Instagram, and YouTube feeds for use on the index page or for use on the [SkyMocha Discord Bot](https://github.com/SkyMocha/SkyMochaBot).

All endpoints originate from `https://api.skymocha.net/api/v1/`

Current end-points:

> [/insta/posts/](https://api.skymocha.net/api/v1/insta/posts) > &nbsp;Gathers latest n Instagram posts from @skymochi64

> [/twitter/timeline/](https://api.skymocha.net/api/v1/twitter/timeline) > &nbsp;Gathers latest n Twitter posts from @skymochi64

> [/youtube/videos/](https://api.skymocha.net/api/v1/youtube/videos) > &nbsp;Gathers latest n YouTube videos from @skymocha

An example endpoint from [/twitter/timeline/](https://api.skymocha.net/api/v1/twitter/timeline) may respond with:

```json
[
	{
		"time": "Tue May 03",
		"text": "I make questionable 7 AM decisions for research purposes...",
		"rts": 0,
		"likes": 1,
		"img": []
	}
]
```
