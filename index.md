---
layout: default
title: madethis.online
description: Selected product design and engineering work by Wiktor Kaczmarek.
body_class: home-page
permalink: /
---

{% assign projects = site.case_studies | sort: 'order' %}
<section class="home-intro">
  <p class="eyebrow">Wiktor Kaczmarek · Product design &amp; engineering</p>
  <h1>I make ambitious technology feel simple enough to use.</h1>
  <div class="home-intro-foot">
    <p>Currently building browser-native cultural experiences, local-first software, and the systems behind them.</p>
    <a href="#projects">Selected projects ↓</a>
  </div>
</section>

<section class="selected-projects" id="projects" aria-labelledby="projects-title">
  <div class="section-heading">
    <h2 id="projects-title">Selected projects</h2>
    <p>Strategy, identity, interfaces, and working software.</p>
  </div>
  <div class="project-list">
    {% for project in projects %}
      {% include project-card.html project=project index=forloop.index %}
    {% endfor %}
  </div>
</section>

<section class="home-archive">
  <p class="eyebrow">The longer view</p>
  <h2>Twenty years of design work did not fit on one homepage.</h2>
  <p>Broadcast, VFX, brand systems, experimental games, and ongoing project writing live in the blog archive.</p>
  <a class="button" href="https://madethis.blog/work/index.html">Previous projects <span aria-hidden="true">↗</span></a>
</section>
