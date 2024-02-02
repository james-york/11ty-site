---
title: 'York Game Lab' 
permalink: /games/index.html
description: "All of the games and activities we've made or worked on"
layout: page
tags:
- game design
- york game lab
---

This page features all of the games we've made (or worked on.

<ul>
{%- for post in collections['york game lab game'] -%}
  <li><h3><a href="{{ post.url}}">{{ post.data.title }}</a></h3></br><p>{{ post.data.description }}</p></li>
{%- endfor -%}
</ul>

- - - 

## Games and prototypes we've made in class

Check out some of the games that we've prototyped, too.
<ul>
{%- for post in collections['student game'] -%}
  <li><a href="{{ post.url}}">{{ post.data.title }}</a></br><p>{{ post.data.description }}</p></li>
{%- endfor -%}
</ul>