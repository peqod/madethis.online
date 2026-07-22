---
title: Archiplayer
tagline: Decades of freeform radio, turned into a library you can actually use.
role: Creator · Product design and engineering
period: 2026 | present
order: 2
hero: /assets/projects/archiplayer/app-show.png
hero_fit: contain
composed_case: true
body_class: case-page archiplayer-page
published: true
links:
  - label: Visit Archiplayer
    url: https://peqod.github.io/Archiplayer/
  - label: View source
    url: https://github.com/peqod/Archiplayer
---

<section class="archi-opening">
<div class="archi-opening-copy" markdown="1">

WFMU has spent decades building one of the internet's great freeform-radio archives. The material is public, but discovery still asks listeners to understand an archive assembled show by show, playlist by playlist, over many generations of the web.

Archiplayer turns that history into a personal desktop library and a compact player.

</div>
<div class="archi-overview-aside">
  <img class="archi-logo" src="{{ '/assets/projects/archiplayer/ID_Archiplayer512.gif' | relative_url }}" alt="Archiplayer" decoding="async">
  <dl class="archi-snapshot" aria-label="Archiplayer at a glance">
    <div><dt>Archive</dt><dd>≈580 shows</dd></div>
    <div><dt>Audio</dt><dd>≈200k hours</dd></div>
    <div><dt>Platforms</dt><dd>Windows · macOS · Linux</dd></div>
  </dl>
</div>
</section>

<section class="archi-opportunity">
<div class="archi-section-title">
  <p class="archi-index">01 / Discovery</p>
  <h2>The opportunity</h2>
</div>
<div class="archi-section-copy" markdown="1">

An archive creates value only when people can find their way back into it. For a listener, that means searching by show, DJ, episode, or track; resuming where they stopped; saving favourites; and carrying broadcasts somewhere the network cannot follow.

For WFMU, better discovery gives old broadcasts a longer useful life and creates more paths back to the station. Archiplayer is intentionally independent and non-commercial, but the product problem is broadly commercial: turn a large, irregular content catalogue into an experience that feels coherent, current, and worth returning to.

</div>
</section>

<section class="archi-private">
<div class="archi-private-inner">
  <div class="archi-section-title">
    <p class="archi-index">02 / Private by design</p>
    <h2>Local first, because listening is personal</h2>
  </div>
  <div class="archi-section-copy" markdown="1">

The application browses roughly 580 current and defunct shows, searches DJs and cached playlists, starts playback from individual track timestamps, manages a queue, remembers listening history, and downloads episodes for offline use.

There is no Archiplayer account and no cloud copy of a listener's behaviour. Favourites, history, cached metadata, and download choices live in a local SQLite database. The archive remains WFMU's; the library remains the listener's.

  </div>
  <figure class="archi-screen archi-screen--profile">
    <div class="archi-screen-frame">
      <img src="{{ '/assets/projects/archiplayer/user-profile.png' | relative_url }}" alt="Archiplayer profile view showing private listening statistics, favourite shows, and saved episodes." loading="lazy" decoding="async">
    </div>
    <figcaption><span>Private listening history</span> Useful to the listener, invisible to everyone else.</figcaption>
  </figure>
</div>
</section>

<section class="archi-adaptive" aria-labelledby="archi-adaptive-title">
<header class="archi-adaptive-heading">
  <p class="archi-index">03 / Adaptable by design</p>
  <h2 id="archi-adaptive-title">A library when you need it.<br>A player when you don't.</h2>
</header>
<div class="archi-adaptive-grid">
  <figure class="archi-detail archi-detail--themes">
    <div class="archi-detail-label"><span>Make it yours</span><span>Full controls</span></div>
    <div class="archi-detail-stage">
      <img src="{{ '/assets/projects/archiplayer/app-themes.png' | relative_url }}" alt="Archiplayer theme editor with five colour presets and individual colour controls." loading="lazy" decoding="async">
    </div>
    <figcaption>Five presets and fine-grained colour controls make the interface personal.</figcaption>
  </figure>
  <figure class="archi-detail archi-detail--collapsed">
    <div class="archi-detail-label"><span>Keep it close</span><span>Compact mode</span></div>
    <div class="archi-detail-stage">
      <img src="{{ '/assets/projects/archiplayer/app-collapsed.png' | relative_url }}" alt="Archiplayer collapsed into a compact desktop player." loading="lazy" decoding="async">
    </div>
    <figcaption>The full library gets out of the way without interrupting playback.</figcaption>
  </figure>
</div>
</section>

<section class="archi-build">
<div class="archi-section-title" markdown="1">

<p class="archi-index">04 / End to end</p>

## What I built

Archiplayer is a complete product rather than a player skin.

</div>
<div class="archi-build-detail" markdown="1">

- a Svelte 5 desktop interface packaged with Tauri 2 and a Rust application layer;
- cache-first parsing for WFMU's public KenzoDB pages, which do not expose an official archive API;
- playlist-aware playback, queueing, favourites, history, CSV export, and offline downloads;
- Windows, macOS, and Linux release automation with reproducible checks and published hashes;
- a standalone download site and open-source contribution path.

The design challenge was to respect the strangeness of freeform radio without reproducing the strangeness of the underlying information architecture. The interface makes the common paths obvious while preserving enough context for wandering: the behaviour that makes an archive like WFMU valuable in the first place.

</div>
</section>

<section class="archi-impact">
<div>
  <p class="archi-index">05 / Why it matters</p>
  <h2>Old systems can hold new value.</h2>
  <p>Archiplayer demonstrates a reusable kind of product work: finding durable value inside an existing public system, designing a calmer interface around it, and shipping the operational details that turn a prototype into software someone can keep.</p>
</div>
</section>
