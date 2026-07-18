# madethis.online

Portfolio for Wiktor Kaczmarek, built with Jekyll and deployed to GitHub Pages.

## Editing

Case-study content lives in `_case_studies/`. Shared presentation lives in `_layouts/case-study.html`; homepage cards use `_includes/project-card.html`.

Set `published: false` to keep an unfinished case study out of the build. CopyTo remains unpublished until it has a working public destination, approved copy, and imagery.

The resume has one editable source, `resume.md`. The Pages workflow renders `/resume/` and prints that page to `assets/wiktor-kaczmarek-resume.pdf` before deployment.

## Local build

```sh
bundle install
bundle exec jekyll serve
```

The local site is available at `http://localhost:4000`.
