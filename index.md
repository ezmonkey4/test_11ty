---
layout: base.liquid
---

# Welcome to my site!

Not to brag, but it's pretty great.
This could be something

{% for post in collections.posts reversed %}
  <a href="{{ post.url }}">
    <h2>{{ post.data.title }}</h2>
    <time>{{ post.data.date | date: "%B %d, %Y" }}</time>
  </a>
{% endfor %}