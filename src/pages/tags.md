---
layout: page
pagination:
  data: collections
  size: 1
  alias: tag
permalink: /tags/{{ tag }}/
---
<style>
  .post {
  padding: 5px 10px;
  background: #E5E5EA;
  border-radius: 15px;
  }
</style>

<h2>Tagged “{{ tag }}”</h2>

- - -
🔙 Back to the [tags list](/tags/).
<ol>
{% set taglist = collections[ tag ] %}
{% for post in taglist | reverse %}
  <li class="post">
    <b><a href="{{ post.url }}">{{ post.data.title }}</a> || </b><span style="font-size: 14px">Posted: {{ post.data.date }}</span>
    <br>
    <span style="font-size: 18px;"><b>Description:</b> {{ post.data.description }}</span>
  </li>
{% endfor %}
</ol>


