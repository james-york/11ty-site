---
title: Student Games
permalink: /student-games.html
description: A list of the games that students have made
layout: page
youtube: true
---

On this page, you'll find a link to all the games that my students have made.

<ul>
{%- for post in collections['student game'] -%}
  <li><a href="{{ post.url}}">{{ post.data.title }}</a></br><p>{{ post.data.description }}</p></li>
{%- endfor -%}
</ul>