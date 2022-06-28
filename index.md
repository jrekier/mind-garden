---
layout: default
title: Home page
---
# Welcome!

This website is an attempt to collect some thoughts and ideas into a [mind garden](https://www.mentalnodes.com/a-gardening-guide-for-your-mind). It is built with [11ty](https://www.11ty.dev/), using a [template](https://github.com/binyamin/eleventy-garden) by [@binyamingreen](https://twitter.com/binyamingreen).

{% for note in collections.notes %}
    {{ note.data.title }}
{% endfor %}