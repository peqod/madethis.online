# madethis.online

Portfolio for Wiktor Kaczmarek, built with Jekyll and deployed to GitHub Pages.

## Editing

Case-study content lives in `_case_studies/`. Shared presentation lives in `_layouts/case-study.html`; homepage cards use `_includes/project-card.html`.

Set `published: false` to keep an unfinished case study out of the build. CopyTo remains unpublished until it has a working public destination, approved copy, and imagery.

The HTML resume lives in `resume.md`. A reviewed static download is committed at `assets/wiktor-kaczmarek-resume.pdf`; replace that file manually when the resume changes.

## Local build

```sh
bundle install
bundle exec jekyll serve
```

The local site is available at `http://localhost:4000`.
