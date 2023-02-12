---
layout: page
permalink: /tags/
title: "Tags and Topics"
---

{% for tag in collections.all | getAllTags | filterTagList %}
  {% set tagUrl %}/tags/{{ tag }}/{% endset %}
  <a href="{{ tagUrl }}" class="post-tag">{{ tag }}</a> | 
{% endfor %}