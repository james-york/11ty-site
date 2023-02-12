---
layout: page
permalink: /tags/
title: "Tags and Topics"
---
<ul>
{% for tag in collections.all | getAllTags | filterTagList | sort %}
<li>  {% set tagUrl %}/tags/{{ tag }}/{% endset %}
  <a href="{{ tagUrl | url }}" class="tag">{{ tag | title }}</a>
  </li>
{% endfor %}
</ul>