---
title: Archiplayer
tagline: Decades of freeform radio, turned into a library you can actually use.
role: Creator · Product design and engineering
period: 2026–present
order: 2
hero: /assets/projects/archiplayer/archiplayer-hero.png
published: true
links:
  - label: Visit Archiplayer
    url: https://peqod.github.io/Archiplayer/
  - label: View source
    url: https://github.com/peqod/Archiplayer
---

WFMU has spent decades building one of the internet's great freeform-radio archives. The material is public, but discovery still asks listeners to understand an archive assembled show by show, playlist by playlist, over many generations of the web.

Archiplayer turns that history into a personal desktop library.

## The opportunity

An archive creates value only when people can find their way back into it. For a listener, that means searching by show, DJ, episode, or track; resuming where they stopped; saving favourites; and carrying broadcasts somewhere the network cannot follow.

For WFMU, better discovery gives old broadcasts a longer useful life and creates more paths back to the station. Archiplayer is intentionally independent and non-commercial, but the product problem is broadly commercial: turn a large, irregular content catalogue into an experience that feels coherent, current, and worth returning to.

## Local first, because listening is personal

The application browses roughly 580 current and defunct shows, searches DJs and cached playlists, starts playback from individual track timestamps, manages a queue, remembers listening history, and downloads episodes for offline use.

There is no Archiplayer account and no cloud copy of a listener's behaviour. Favourites, history, cached metadata, and download choices live in a local SQLite database. The archive remains WFMU's; the library remains the listener's.

## What I built

Archiplayer is a complete product rather than a player skin:

- a Svelte 5 desktop interface packaged with Tauri 2 and a Rust application layer;
- cache-first parsing for WFMU's public KenzoDB pages, which do not expose an official archive API;
- playlist-aware playback, queueing, favourites, history, CSV export, and offline downloads;
- Windows, macOS, and Linux release automation with reproducible checks and published hashes;
- a standalone download site and open-source contribution path.

The design challenge was to respect the strangeness of freeform radio without reproducing the strangeness of the underlying information architecture. The interface makes the common paths obvious while preserving enough context for wandering—the behaviour that makes an archive like WFMU valuable in the first place.

## Why it matters

Archiplayer demonstrates a reusable kind of product work: finding durable value inside an existing public system, designing a calmer interface around it, and shipping the operational details that turn a prototype into software someone can keep.
