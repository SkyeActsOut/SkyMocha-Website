![SkyMocha Page](https://skymocha.net/res/public/March11Interface.jpg)

# SkyMocha Website
[www.skymocha.net](https://www.skymocha.net): My personal website with on and off work for 2+ years!

Always a work-in-progress! :)

## Overview
The website is currently split into two sections:
1. Front-end Website
2. Back-end SkyMocha API

### Front-End Website
The front-end website runs on Apache2 on a cloudflare protected server, with custom HTML5 pages for each directory and (mostly) custom-made CSS. Although not the most functional, doing everything myself has allowed for the greatest degree of artistic freedom & customizability.

Primary end-points are:

> [www.skymocha.net](https://www.skymocha.net/)
> Index page

> [www.skymocha.net/Projects/](https://www.skymocha.net/Projects/)
> Portfolio

> [www.skymocha.net/resume.pdf](https://www.skymocha.net/Projects/)
> Resume

### Back-End API
A back-end API currently gathering my Twitter, Instagram, and YouTube feeds for use on the index page or for use on the [SkyMocha Discord Bot](https://github.com/SkyMocha/SkyMochaBot).

All endpoints originate from `https://api.skymocha.net/api/v1/`

Current end-points:
> [/insta/posts/](https://api.skymocha.net/api/v1/insta/posts)
> &nbsp;Gathers latest n Instagram posts from @skymochi64

> [/twitter/timeline/](https://api.skymocha.net/api/v1/twitter/timeline)
> &nbsp;Gathers latest n Twitter posts from @skymochi64

> [/youtube/videos/](https://api.skymocha.net/api/v1/youtube/videos)
> &nbsp;Gathers latest n YouTube videos from @skymocha