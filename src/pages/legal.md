---
title: Address
seo:
  title: Address
permalink: /imprint/index.html
description: Imprint infos
layout: page
---

{{ meta.address.firma }}
{{ meta.address.street }}
{{ meta.address.zip }}, {{ meta.address.city }}

Tel: <a href="tel:{{ meta.address.mobileCall }}">{{ meta.address.mobileDisplay }}</a>
Mail: <a href="mailto:{{ meta.address.email }}">{{ meta.address.email }}</a>

- - -
This website is built with [Eleventy](https://www.11ty.dev/) and the template is made by [Madrilene](https://github.com/madrilene/eleventy-excellent#built-with-eleventy-excellent).
