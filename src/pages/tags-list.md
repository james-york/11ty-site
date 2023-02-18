---
layout: page
permalink: /tags/
title: "Tags and Topics"
---



{% if collections.all %}
<p>
{% for tag in collections.all | getAllTags | filterTagList | sort %}
  {%- if tag != "posts" -%}
    {% set tagUrl %}/tags/{{ tag }}/{% endset %}
    #<a href="{{ tagUrl | url }}" rel="tag">{{ tag }}</a> | {{ collections[tag] | length }}
  {%- endif -%}
{% endfor %}
</p>
{% endif %}