![SkyMocha Page](https://skymocha.net/res/public/Screenshot%202022-05-22%20105509.png)

# SkyMocha Website

[www.skymocha.net](https://www.skymocha.net): My personal website with on and off work for 3+ years!

Always a work-in-progress! :)

## Current Update (5/22/2022)

Ramping up for the (eventual) release of _Fight Club's Incel to Exploitable Chad Pipeline_. As a result I started going through and re-designing the landing page to not necessarily with the intent of looking more stylish; but to be more optimized, have cleaner code, and be more legible & information-dense. This overall leads to a slicker and cleaner UI.

Index.css has had roughly 300 lines of CSS removed during restructuring, some of which has been un-used CSS for years. Also index.html _finally_ has only one overlay/body for both portrait and landscape instead of two separate bodies that are toggled between, and on top of this only one background is used. This should hopefully speed up performance immensely. Only down-side of this work is the YouTube section has been removed, but most people will likely be coming from my YouTube.

## Overview

The website is currently split into two sections:

1. Front-end Website
2. Back-end SkyMocha API

### Front-End Website

The front-end website runs on Apache2 on a cloudflare protected server, with custom HTML5 pages for each directory and (mostly) custom-made CSS. Although not the most functional, doing everything myself has allowed for the greatest degree of artistic freedom & customizability.

Primary end-points are:

> [www.skymocha.net](https://www.skymocha.net/) > _Landing_

> [www.skymocha.net/Projects/](https://www.skymocha.net/Projects/) > _Portfolio_

> [www.skymocha.net/resume.pdf](https://www.skymocha.net/resume.pdf) > _Resume_

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
