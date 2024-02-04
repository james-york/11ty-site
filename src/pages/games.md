---
title: 'York Game Lab' 
permalink: /games/index.html
description: "All of the games and activities we've made or worked on"
layout: page
tags:
- game design
- york game lab
---

As part of my work at Meiji University, I (and students) are developing games for educational purposes. This page features all of the games we've made (or worked on) as part of the ✨**York Game Lab**✨.

You can also find a selection of video games that I've made over on [itch.io](https://cheapshot.itch.io/).

- - -

## 🛠️ Complete games

<ul>
{%- for post in collections['york game lab game'] -%}
  <li><h3><a href="{{ post.url}}">{{ post.data.title }}</a></h3></br><p>{{ post.data.description }}</p></li>
{%- endfor -%}
</ul>

- - - 

## 🚧 Game Prototypes

Check out some of the games that we've prototyped in class, too.
<ul>
{%- for post in collections['student game'] -%}
  <li><a href="{{ post.url}}">{{ post.data.title }}</a></br><p>{{ post.data.description }}</p></li>
{%- endfor -%}
</ul>