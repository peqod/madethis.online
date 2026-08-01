# micro1 Performance Readthrough & Improvement Plan

**Source data:** `micro1-ai-interviews-studiomufna@gmail.com.csv` (10 interviews,
2026-05-06 → 2026-07-29), `micro1-job-applications-studiomufna@gmail.com.csv`
(10 applications), `micro1-talent-profile-studiomufna@gmail.com.csv`.

Citations below use `interviews:N` and `applications:N`, where N is the CSV file
line number (line 1 = header). All quotes are verbatim from the transcripts.

---

## 1. Bottom line

**46 skill ratings across 10 interviews. Every one is Mid-level or Junior. Zero
Senior.**

That looks like a skill ceiling. It isn't. Read the actual evaluator language:
every single rating uses some variant of *"would benefit from more
specificity / structure / precision."* Not one says "did not demonstrate,"
"incorrect," or "failed." The evaluator repeatedly signals that the underlying
competence is visible and the *explanation* is what fell short — `interviews:2`
literally says *"even if the explanation is a bit hard to follow verbally"*
while still crediting the answer.

You are being marked down for **legibility, not knowledge.**

And the data contains its own proof that this is fixable. On 2026-06-28
(`interviews:4`) three skills came back Junior. On 2026-07-29 (`interviews:7`)
the same three skills were re-tested. **Two of the three moved Junior → Mid**
— "Video quality evaluation & standards-based critique" and "Technical
communication & documentation." Nothing about your 20 years changed in those
four weeks. How you answered did.

The one skill that did *not* move — "Video dataset analysis, annotation, and
curation for AI training" — is the one where you have no hands-on work to draw
on. That distinction defines this whole report:

> **Presentation problems are fixable this week. Evidence gaps have to be
> built. Don't confuse the two, and don't apply the wrong fix to either.**

---

## 2. What the data actually says

Metrics computed directly from the transcript JSON (a turn array with `role`,
`skill.skill_name`, `content`, `timestamp`), across all 10 interviews:

| Interview | Date | Ratings | Duration | Your words | Avg answer |
|---|---|---|---|---|---|
| `interviews:2` | 06-29 | M M M M | 23m | 1968 | 109 |
| `interviews:3` | 06-28 | M M M M M | 27m | 2350 | 102 |
| `interviews:4` | 06-28 | M M **J J J** | 28m | 2386 | 99 |
| `interviews:5` | 06-30 | M M M M M | 27m | 2531 | 141 |
| `interviews:6` | 06-30 | M **J J J** | 22m | 1941 | 108 |
| `interviews:7` | 07-29 | M **J** M M M | 25m | 2272 | 99 |
| `interviews:8` | 05-06 | M M M M M | 28m | 2510 | 114 |
| `interviews:9` | 06-28 | **J J** M **J** | 24m | 2224 | 131 |
| `interviews:10` | 07-24 | M M **J** M | 21m | 1967 | 98 |
| `interviews:11` | 07-24 | M M M **J** M | 27m | 2600 | 130 |

Four things fall out of this:

**Answer length is not your problem.** You average 98–141 words per answer.
That is a healthy, substantial answer length. `interviews:9` — your worst
result, three Juniors — is your *second most verbose* interview at 131 words
per answer. **Talking more will not help you. It is currently hurting you.**

**You answer in the conditional, not the past.** Measured ratio of hypothetical
framing ("I would," "typically I," "generally," "you would") to past-tense
ownership ("I did," "we built," "on that project") runs from **5:1 up to 25:1**
depending on the interview. You describe what a competent person would do
rather than what you did. An evaluator cannot distinguish that from a
well-read beginner.

**Your numbers are textbook constants, not your track record.** "8-bit," "4K,"
"30fps," "one hundred percent" appear throughout. Numbers attached to *your own
outcomes* almost never do. `interviews:3` and `interviews:6` contain roughly
one quantified statement each across a full 25-minute interview.

**The interviewer is not asking for stories.** Only 2 of 202 interviewer turns
across all 10 interviews ask for a lived example. These are *scenario*
interviews — "how would you design X," "what threshold would you set." So the
fix is **not** "tell more STAR stories." The fix is: answer the scenario with a
decision-first structure and exact named mechanisms, then anchor it with one
sentence of real experience. Structure first, evidence as reinforcement.

---

## 3. Three failure modes — these cause almost every Junior

### Mode A — You hand the question back instead of stating an assumption

This is your single most consistent behaviour and the most expensive. It
appears in five interviews, and it survives being explicitly told to stop.

The clearest instance, `interviews:6`. The interviewer asks you to translate a
framing into a structured AI-agent evaluation workflow. You answer:

> *"Alright. I don't know the goals. Would you mind specifying the goals that
> we are aiming for?"*

The interviewer replies, unusually directly:

> *"I can't specify the goals for you in this interview, but you can state
> reasonable assumptions and proceed."*

You stall again — *"Alright. I would I"* — and on the third push you say:

> **"That's a fake and ambiguous question. Because I do not know about what we
> are aiming for, and the goals are established."**

That sentence is the literal source of the word *"defensive"* in that skill's
written feedback. It cost you a Junior on its own.

Same interview, a rich question — reconstruct a defensible timeline from
conflicting Slack excerpts, a Jira timeline, and an incident Zoom transcript.
Your entire first answer:

> **"Alright."**

More instances:
- `interviews:9` — *"should I assess my own criteria, or or would you like to
  more precise on that?"* The interviewer had to grant permission (*"Use your
  own example and criteria—that's fine"*) before you would begin.
- `interviews:10` — *"You are asking for a position in which I would be making
  quality checks, right, for somebody else. Is that correct?"*
- `interviews:4` — *"So that's a good question. Would you mind to make it more
  precise?"* and *"Right. I don't know the specifics. What do you mean by
  lightweight?"*
- `interviews:5` — on grid enforcement: *"before knowing the quantity of the
  content and the business case scenario, it's hard for me to say what choices
  I would make."*

**Why this is fatal:** your real reasoning does eventually appear — on the
second, narrower prompt. But the scoring model weights the first pass. In a
human interview, asking a clarifying question reads as rigor. In this one it
reads as an empty turn, because the interviewer is a script that cannot supply
the missing context and has nowhere to go but down a level.

Note the irony: `interviews:4` feedback *praises* you for asking scope
questions in one specific spot (*"Their final response appropriately asks for
scope/timeline details before committing to an audit plan"*). Clarifying is not
banned. Clarifying **instead of answering** is what's punished. Answer first
under a stated assumption, then offer the clarification.

### Mode B — "I don't know the numbers off the top of my head"

Near-verbatim in three separate interviews, every time an exact threshold,
formula, or named metric is requested.

- `interviews:3` — **LUFS was asked three separate times in one interview.**
  First you benchmarked on consumer earbuds and namedropped reference
  recordings. The interviewer re-asked explicitly for *"LUFS/true peak."* At
  timestamp 1277.46 it was asked a third time and your entire answer was:
  *"And I'm verifying these those. Gives."* A number was never given.
- `interviews:10` — asked about mAP: **"I am not familiar with that metric...
  Give me a hint."** The interviewer declined (*"I can't provide hints or
  define the acronym during the interview"*). This is the most explicit
  knowledge gap in the whole dataset.
- `interviews:7` — on legal levels: *"I don't know the numbers from top of my
  head. I could refer to the manual quickly... I am checking for the pass flag
  rather than correct number."*
- `interviews:10` — *"I don't know the numbers out of top of top of my head"*,
  and the answer then conflates model *confidence* with model *error* — the
  feedback flags exactly that imprecision.
- `interviews:9` — the KPI question named *numerator/denominator, reporting
  cadence, and intervention threshold* explicitly. Your answer supplied none of
  the three.
- `interviews:9` — the risk-register question asked for top-5 risks **with
  owners** and mitigation triggers. You named no owner for any risk, and item
  five trails off: *"the fifth one, let's say, was was the data data."*
- `interviews:9` — asked for the first 2–3 artifacts to align scope, metrics
  and resourcing, you named **zero** and answered *"This requires active
  listening and being present from the very start... As for the success
  metrics, once again, they depend."* A 20-year design-ops lead has creative
  brief, SOW, and production schedule sitting right there.

There are maybe fifteen numbers standing between you and a large share of these
downgrades. Section 7 lists them.

### Mode C — You substitute adjacent experience for the actual ask

- `interviews:6` — asked to structure a multi-step *agent evaluation* workflow
  with dependencies, blockers, and unresolved questions, you told a genuinely
  detailed and technically fluent story about debugging a Three.js
  shader-memory bug with Lighthouse and DOM stack tracing. It's a good story.
  It answers "how do you debug," which was not the question.
- `interviews:9` — asked how you measured and managed inter-rater reliability,
  you offered *"I'm not really sure about the this particular fact too. Have
  have been working with the OCR annotation translation into different
  languages, maybe that's relevant to the project you are seeking."* No kappa,
  no alpha, no percent-agreement.
- `interviews:2` — asked about determinism for AI-assisted steps (seeds, pinned
  model versions, bake-to-asset checkpoints), you answered with general FFmpeg
  batch QC. The feedback names the drift precisely: *"drifted toward general
  batch QC (FFmpeg checks) rather than AI-specific reproducibility controls."*
- `interviews:2` — asked to explain AE's colour pipeline, you answered *"I'm
  trying to steer clear from sort of an advanced color workflows because After
  Effects cannot handle it very well."* Avoidance framed as preference still
  scores as avoidance.
- `interviews:3` — on blending modes and layer order: *"Many. And that's a
  topic that you can ask me asking about in detail if you can talk."* Zero
  specific issues named.

Separately — and this is **not** a failure mode — you state genuine gaps
plainly: `interviews:7` *"I have not had a chance yet to do annotation on a...
longer scale. What I've did, I've played with YOLO with Python in the command
line"*; `interviews:10` *"I haven't worked with CVA[T] or label studio... I
would go to YouTube, and I would familiarize myself thirty minutes."* Honesty
is right and you should keep it. The problem is that nothing is offered
*alongside* it. See §7 for the pattern that keeps the honesty and recovers the
rating.

---

## 4. The counter-evidence: concreteness is the variable, not domain

Your own transcripts contain the fix. These are your highest-scoring moments:

- **`interviews:9`, the only Mid-level in your worst interview** —
  *"quickly diagnosed some pipeline traffic jams... straightened them...
  provide that, like, thirty or forty percent of quality improvement."* Same
  person, same lane, same hour as three Juniors. It scored higher because it
  had a number and a lived outcome.
- **`interviews:10`, two Mid ratings** come from the most jargon-fluent passage
  in the entire dataset: COCO-18 keypoints in OpenPose, starting from the wrist
  crease, anatomical centre-of-mass versus surface cue, and Blender's speed
  graph to detect jitter and drift between frames.
- **`interviews:7`** — *"instead of a MOV file that waits, I don't know, two
  gigabytes, you get one hundred and twenty megabyte of mp4 h265."* Feedback
  explicitly praises *"real familiarity with post/VFX workflows."*
- **`interviews:4`** — you named the employer ("Lightcraft") and a concrete
  artifact: a single-page PDF SOP handed to new editors for a national-TV
  commercial. **This is the model. Copy its shape into every answer.**

And the structuring instinct the ops questions needed is already in your
repertoire — `interviews:7`, describing a real pipeline in stages: *"drop the
files into materials... make a and b cuts... organize them usually by day...
separate off cuts."* Stages, artifacts, review gates. That is exactly what
`interviews:6` and `interviews:9` were asking for. You simply don't reach for
it when the question is dressed in PM or AI vocabulary.

**The variable is not which domain the question is in. It is whether the answer
is concrete.**

---

## 5. Lane diagnosis

### PM / ops / strategic — `interviews:9`, your worst result (3 of 4 Junior)

Ratings: Strategic Project Management **Junior**, Data Operations & Process
Optimization **Junior**, Cross-Functional Leadership & Stakeholder Management
Mid, GenAI Human Data Projects **Junior**.

The diagnosis is unusually clean. The one skill that escaped Junior is the one
where you told a real story with a real number. The three that didn't are the
three where you answered in abstractions — no artifacts named, no formula, no
threshold, no risk owner.

You have the underlying experience: you ran design operations across EMEA and
global campaigns in 40+ languages, coordinated a team of four designers, and
diagnosed a real pipeline bottleneck into a 30–40% quality gain. That is
operations work. It was not visible in that interview because you translated it
into borrowed data-ops vocabulary ("average handling time," "workflow
complexity") instead of naming the artifacts and risks you actually own.

**This lane is a presentation problem. It is the highest-return retake in the
whole set.**

### AI data / annotation — `interviews:4`, `7`, `10`

Ratings here are mixed, and the split is diagnostic. Where the task touches
visual judgment you score Mid — annotation accuracy, guideline adherence, video
quality critique. Where it touches ML measurement you score Junior — dataset
understanding (mAP, confidence vs. error), dataset analysis and curation (IAA,
rework thresholds).

You told the truth in both interviews: no production-scale annotation, no
CVAT/Label Studio. That is a **real evidence gap**, and no amount of interview
technique closes it. Note the pattern from §1: this was the one skill that
*didn't* improve on retake.

**This lane is half presentation, half genuine gap. Section 9 is how you close
the second half.**

### Creative / After Effects — `interviews:2`, `3`, `5`, `8`, `11`

Consistently Mid-level, and it is your floor rather than your ceiling. The
downgrades here are all specificity: LUFS never answered in three attempts,
Master Properties / Essential Graphics never named, ProRes 4444 and DNxHR 444
and premultiplied-vs-straight alpha not confidently handled (`interviews:11`),
nested styles and override-clearing steps missing (`interviews:5`).

This is the cheapest lane to lift, because the gaps are a finite list of names
and numbers you can memorize in an afternoon. It is also the lane where you
have the deepest real evidence to anchor to.

---

## 6. Profile, resume, and application defects

Ranked by damage.

### 6.1 Your identity is split across the platform — fix first

- `applications:11` (Adobe Specialist, Photoshop) submits as **Mariusz**
  Kaczmarek. Every other application submits as **Wiktor**.
- `interviews:8` (2026-05-06) has `name` = **Mariusz**, and the AI interviewer
  addresses you throughout: *"Hi Mariusz, my name is Zara..."*, *"Mariusz, when
  you're isolating a specific hue range..."*. `interviews:11` opens *"Good day,
  Wiktor."* This is baked into the stored session identity, not a display quirk.
- Two different LinkedIn URLs are in circulation:
  `/in/mariusz-kaczmarek-03b188a0/` (applications 2–6, 8, 11 — **and your
  talent profile itself**) versus `/in/wiktorkaczmarek` (applications 7, 9, 10).
- Your resume parses with the email `AllThingsDesignConsidered@gmail.com` while
  your account is `studiomufna@gmail.com`.
- Inside every `parsed_resume` the embedded name always reads "Wiktor
  Kaczmarek." Only the platform metadata diverges — so this is a profile-level
  fix, not a resume rewrite.

A recruiter cross-referencing your profile against your LinkedIn finds a
different first name and a different email. Whatever the personal reason for two
names, **the platform needs one.**

### 6.2 The same career, three different lengths

`years_of_experience` parses as **22.4** (applications 2–6, 8), **22.5**
(applications 7, 9, 10), and **17.3** (`applications:11`). Same history, same
earliest role (freelance from 2004). A five-year swing between versions of your
own resume.

### 6.3 The same achievement, two incompatible numbers

- Applications 2–6, 8, 11: *"cutting turnaround by 400% without a quality
  loss"*
- Applications 7, 9, 10: *"made multi-language delivery five times faster
  without quality loss"*

Same BBI Online pipeline. These are not the same claim: 5× faster is roughly an
80% reduction in time. A "400% cut" is not a coherent quantity — you cannot
remove more than 100% of anything. The second phrasing is the defensible one.
Use it everywhere, and be ready to say what the before and after actually were.

### 6.4 Inconsistent disclosure of an overlapping role

Marriott International ("Associate, Information System Team," 2017-01-01 →
2020-12-31) appears in only your three newest resumes (applications 7, 9, 10).
It overlaps BBI Online / Lionbridge (2017-01-01 → 2024-12-31) by four years.

To your credit the resume text *does* disclose it — *"concurrent with contract
design work through Lionbridge."* So nothing is hidden. But it is absent from
the other seven resumes and from your talent profile entirely. A dual role that
appears and disappears depending on which version someone reads looks worse
than the dual role itself. Include it everywhere, with the concurrency note.

Separately, your profile's own `experience_info` nests "Art Director / Lead
Designer" (2022–2023) fully inside "Design Operations Lead" (2017–2024) with no
note that one was part-time or contract, and leaves 2012–2016 covered only by
the open-ended freelance line.

### 6.5 Parse failures silently deleting your evidence

In all 10 applications:
- `education: []` — the ATS extracted **no education at all**, from every
  version. Your profile has it (Warszawska Szkoła Reklamy, 2003–2006); the
  resume does not parse it.
- `courses: []`, `certifications: []` — empty everywhere.
- **`project_link: ""` on every project of every application.** You list
  Tosee.art, Road2Moon, Archiplayer — and not one URL survives parsing. For a
  visual professional this is the most expensive line in the file: **no
  portfolio link has ever reached a recruiter through this platform.**
- `applications:9` — your most recent upload — additionally dropped `projects`
  to `[]` entirely. The newest resume shows a recruiter *no projects at all*.

### 6.6 Passive voice removes you from your own work

Every `about_me`, in both files:

> *"Work has been delivered for major brands and cultural institutions, with
> leadership applied to visual direction..."* (`applications:2`)
> *"Design leadership has been used to support fundraising outcomes..."*
> (`applications:5`)
> *"Significant delivery has been demonstrated for heritage, publishing,
> advertising..."* (`applications:7`)

Not one `about_me` in either file contains a first-person sentence. You are
never grammatically the person who did the work. This is the written form of
the exact habit costing you in interview — the achievement is present, the
actor is missing.

### 6.7 Smaller but cheap to fix

- Your **profile `about_me` is corrupted**: literal `&nbsp;` entities between
  every word, wrapped in `<p>` tags. It renders as one unbroken string. Retype
  it as plain text.
- **Skills are a flat unranked dump** — 28–34 entries per application as bare
  `{"skill": "X"}`, no years, no level, no grouping, with "Blender" beside
  "Jira" beside "DVD Authoring." And it's keyword-tailored per posting: "After
  Effects" appears in the skills array *only* on the After Effects application.
- **Two profile skills claim 15 years and appear in no resume**: "Training
  facilitation & instructional design" and "Communication, coaching, and
  feedback." Not traceable to any dated role. Either evidence them or drop them
  — and note they were tested in `interviews:8`.
- **Your profile omits the micro1 role** ("Human Expert Data Provider" /
  "AI Training Data Expert," 2026-01-01–present) that all 10 resumes carry.
- `applications:6` carries a stray `"DemoReel"` token with no URL — a hyperlink
  whose anchor text survived and whose href didn't.

### 6.8 Positioning: which applications were realistic

| Application | Verdict | Missing evidence |
|---|---|---|
| Graphic Designer (`:3`) | Well matched | — |
| Adobe Specialist, Photoshop (`:11`) | Well matched on craft | Submitted under the wrong first name, with the 17.3-year resume |
| Video Editor (`:6`) | Moderate | No role ever titled "editor"; Resolve framed as a design tool, not a cutting workflow |
| Video for AI training (`:8`, `:9`) | Moderate | Applied twice to the same title with two different resumes |
| Strategic Project Lead (`:2`) | Stretch | "Strategic" is asserted by job title only — no methodology, budget, or stakeholder language in any bullet |
| Adobe Specialist AE (`:4`), Creative Media Expert AE (`:10`) | Stretch | **After Effects is never named in a single project bullet across all 10 resumes** |
| CV Data Annotation Specialist (`:7`) | Major stretch | Qualifying credential is micro1 gig work itself; no CV tooling listed; "Machine Learning" tag absent from this row |
| Engineer (All Domains) (`:5`) | Major stretch | No engineering history, and this resume version predates Archiplayer — at submission there was **no code evidence in the file at all** |

---

## 7. Retake scripts

### 7.1 The one habit that fixes Mode A

Every ambiguous question gets this shape. Never hand the question back.

> **"I'll assume [X]. On that basis, here's how I'd do it — [answer]. If [X] is
> wrong, the part that changes is [Y]."**

Twelve words of assumption buys you the entire answer. It also *demonstrates*
judgment rather than requesting it. Compare to `interviews:6`, where the
interviewer explicitly invited exactly this and you still didn't take it.

If you genuinely don't know something, use this instead of stopping:

> **"I haven't used [tool] in production. What I have done is [closest real
> thing] — and here's how I'd expect it to map: [mapping]. The part I'd need to
> verify is [specific unknown]."**

This keeps your honesty — which is a real asset — while giving the evaluator
something to score. Compare with `interviews:10`, where *"I am not familiar
with that metric... Give me a hint"* left the turn empty.

### 7.2 Answer skeleton for every scenario question

1. **Decision first** (1 sentence) — what you'd do.
2. **Named mechanism** (2–3 sentences) — exact tools, fields, formulas,
   thresholds, artifacts.
3. **Anchor** (1 sentence) — the real thing you've done that this comes from.
4. **Stop.** Your answers already run 100–140 words. That is the whole budget.

### 7.3 Numbers to memorize

You lose ratings to roughly fifteen facts. Learn them cold.

**Audio (fixes `interviews:3`, asked three times):**
- Web/streaming: **−14 LUFS** integrated, **−1 dBTP** true peak. (YouTube,
  Spotify, Apple all normalize to roughly −14 to −16.)
- Broadcast EU: **EBU R128, −23 LUFS ±0.5**, true peak −1 dBTP.
- Broadcast US: **ATSC A/85, −24 LKFS**.
- Verify with: Resolve's Fairlight loudness meter, or `ffmpeg -af
  ebur128`.

**Video legal levels (fixes `interviews:4`, `interviews:7`):**
- **EBU R103**: luma legal range 0–100%, tolerance −1% to +103%; RGB gamut
  tolerance ±5%. Anything outside the tolerance is a hard reject; inside
  tolerance but outside legal is advisory.
- Check on: waveform for luma, vectorscope for gamut, RGB parade for casts.

**Alpha and delivery codecs (fixes `interviews:11`):**
- Alpha-capable masters: **ProRes 4444** (or 4444 XQ), **DNxHR 444**.
- **Straight** alpha keeps colour uncontaminated at the edge; **premultiplied**
  bakes the matte colour in. Mismatching them causes dark or light fringing.
  AE: interpret footage → alpha → guess/straight/premultiplied.

**CV metrics (fixes `interviews:10`):**
- **IoU** = area of intersection ÷ area of union between predicted and
  ground-truth box.
- **mAP** = mean Average Precision: the area under the precision–recall curve
  per class, averaged over classes, at a stated IoU threshold. **mAP@0.5** uses
  a single 0.5 IoU cutoff; **mAP@0.5:0.95** (the COCO standard) averages across
  IoU thresholds 0.5 to 0.95 in 0.05 steps and is much stricter about
  localization.
- **Confidence ≠ error.** Confidence is the model's predicted probability that
  a detection is correct. Error is the gap between prediction and ground truth.
  A model can be confidently wrong — that's exactly what calibration measures.
- Loose or inconsistent boxes **cap achievable mAP**, because the model learns a
  blurred target and the held-out set inherits the same noise in its labels.

**Annotation agreement (fixes `interviews:7`, `interviews:9`):**
- **Cohen's kappa** — 2 annotators, categorical. **Fleiss' kappa** — 3+
  annotators. **Krippendorff's alpha** — any number of annotators, tolerates
  missing data and any measurement scale.
- Rules of thumb: **> 0.8** excellent, **0.6–0.8** substantial, **< 0.6**
  triggers rework — guideline revision plus re-annotation of the affected slice.
- For bounding boxes, the agreement measure is **mean pairwise IoU between
  annotators**, not kappa. A common bar is **≥ 0.75** mean IoU.
- Audit design: **5–10% random sample, stratified** by annotator, class, and
  difficulty, plus **2–5% gold-standard/honeypot items** seeded into the queue
  to score annotators continuously.

### 7.4 Scripts for the questions that scored Junior

Each maps to a real question in the transcripts. Adapt the wording; keep the
shape.

---

**`interviews:9` — "What are the first 2–3 artifacts you create to align scope,
success metrics, and resourcing?"**
*(You named zero. You own all three.)*

> "Three artifacts, in this order. First a **one-page scope brief** — what's in,
> what's explicitly out, and who signs off; I keep it to a page so it actually
> gets read. Second an **acceptance-criteria sheet** — per deliverable, the
> quality bar, the throughput target, and the cost ceiling, each with a number
> and a way to measure it. Third a **resourcing and RACI grid** — who does the
> work, who reviews, who has authority to accept.
>
> I ran this shape at BBI Online for multi-language campaign delivery across
> 40-plus markets with a team of four designers. The scope brief is what stopped
> scope creep; the acceptance sheet is what let a reviewer in another market
> accept work without me in the room."

---

**`interviews:9` — "Build a risk register: top 5 risks, owners, mitigation
triggers."**
*(You named no owners. Owners are the entire point of a register.)*

> "Five risks, each with an owner and a numeric trigger.
>
> 1. **Annotator quality drift** — owner: QA lead. Trigger: weekly gold-standard
>    accuracy drops below 90%, or mean inter-annotator IoU falls under 0.75.
> 2. **Guideline ambiguity** — owner: me as project lead. Trigger: the same edge
>    case raised three times in a week, or disagreement clustering on one class.
> 3. **Throughput shortfall** — owner: ops manager. Trigger: weekly output under
>    80% of committed volume two weeks running.
> 4. **Annotator attrition** — owner: staffing lead. Trigger: any week losing
>    more than 10% of the active pool.
> 5. **Source data quality** — owner: data engineer. Trigger: automated intake
>    check rejects more than 5% of a batch.
>
> On pausing scaling: I pause when quality trends down two consecutive review
> cycles, not on a single bad batch — a single batch is usually source data, a
> trend is a process fault. I learned that distinction diagnosing pipeline
> bottlenecks at BBI, where fixing the process rather than the output got about
> a 30–40% quality improvement."

---

**`interviews:9` — "Which single KPI is your north star, and what's the exact
calculation (numerator/denominator), reporting cadence, and intervention
threshold?"**
*(The question named three things. Give all three.)*

> "North star: **first-pass acceptance rate**. Numerator: items accepted at
> first QA review with no rework. Denominator: total items submitted in the
> period. Reported **daily** on a rolling 7-day window, so one bad shift doesn't
> swing the trend.
>
> Thresholds: at **90%+** the pipeline is healthy and I scale volume. Between
> **80 and 90** I hold volume flat and run a guideline review. Below **80** I
> stop intake, sample 50 rejected items to find whether it's guideline,
> annotator, or source data, and fix that before restarting.
>
> I pick first-pass acceptance over raw throughput because rework is the hidden
> cost — throughput that generates rework is negative throughput. I'd pair it
> with two support metrics: cost per accepted item, and median review latency."

---

**`interviews:6` — "Structure a multi-step agent evaluation workflow: steps,
inputs/outputs per step, dependencies, blockers, unresolved questions."**
*(This is the one where you said "That's a fake and ambiguous question." Note
how close it is to the pipeline you already described in `interviews:7`.)*

> "I'll assume the goal is measuring whether an agent correctly reconstructs an
> incident timeline from fragmented sources, and that 'good' means factually
> accurate and traceable to a source. On that basis:
>
> **Step 1 — Intake.** In: raw Slack, Jira, logs, transcripts. Out: a normalized
> event list, each entry stamped with source and timestamp. Blocker: missing
> timestamps — flagged, not guessed.
> **Step 2 — Ground truth.** In: the normalized list. Out: a human-verified
> reference timeline. This is the dependency everything downstream needs; no
> scoring can start before it exists.
> **Step 3 — Agent run.** In: the same raw sources, ground truth withheld. Out:
> the agent's timeline plus its cited sources.
> **Step 4 — Scoring.** In: both timelines. Out: per-event correct / missing /
> hallucinated, plus a citation-validity rate.
> **Step 5 — Triage.** In: the failures. Out: each one classified as a retrieval
> failure, a reasoning failure, or genuine source ambiguity — which routes to
> three different fixes.
>
> **Stop conditions:** halt the run if the agent cites a source that doesn't
> exist, or if ground truth itself is contested — that's an unresolved question
> for a human, not something to score.
>
> This is the same stage-gate shape I use in post pipelines: ingest, organize,
> cut, review, deliver, with an explicit gate between each stage and nothing
> proceeding on unverified input."

---

**`interviews:6` — "You have a production database export with PII to reproduce
an issue. What exact steps do you follow to store, access, share, and dispose?"**
*(Your answer named no retention period, no access model, no location, no
disposal method. Name all four.)*

> "Four decision points.
>
> **Store:** encrypted volume on a company-managed machine, never personal
> hardware, never synced to consumer cloud. **Access:** role-based, just me and
> whoever is on the ticket, logged, and time-boxed to the investigation.
> **Retention:** delete at ticket close or **30 days**, whichever comes first —
> a fixed date, set when I take the export, not left open. **Dispose:** secure
> delete, then confirm no copies survive in temp dirs, downloads, or screenshots
> in the ticket thread.
>
> Before any of that, though: I try not to hold PII at all. First move is asking
> whether a **masked or synthetic subset** reproduces the issue — most of the
> time it does, and then the whole control problem disappears.
>
> If a vendor genuinely needs a subset: minimize to the fields required,
> pseudonymize identifiers, transfer over an approved encrypted channel, under a
> DPA that names retention and deletion, with a log of what went and when."

---

**`interviews:7` / `interviews:9` — "How do you measure annotation quality —
sampling plan, inter-annotator agreement, thresholds?"**
*(This is where you must lead with the honest gap and still deliver substance.)*

> "My hands-on annotation work is at project scale rather than a large managed
> pool — YOLO-based object work, and keypoint annotation using COCO-18 in
> OpenPose, where I checked drift frame-to-frame using Blender's speed graph.
> So let me tell you how I'd run the measurement side, and where I'd want a
> second opinion.
>
> **Sampling:** 5–10% random, stratified by annotator, class, and difficulty —
> unstratified sampling misses exactly the rare classes that matter. Plus 2–5%
> gold-standard items seeded into the live queue so every annotator carries a
> continuous score.
>
> **Agreement:** for categorical labels, Cohen's kappa for two annotators,
> Fleiss' or Krippendorff's alpha for more. For bounding boxes the meaningful
> measure is mean pairwise IoU between annotators, not kappa.
>
> **Thresholds:** kappa above 0.8 healthy, 0.6 to 0.8 watch, under 0.6 triggers
> rework — and rework means revising the guideline first, then re-annotating the
> affected slice, because if agreement is low the guideline is usually the
> defect, not the annotators.
>
> The part I'd want to calibrate with the team is the rework threshold, since
> the right cutoff depends on how the labels get consumed downstream."

---

**`interviews:11` — "What sections and artifacts go in the one-page spec?"**
*(Junior on technical documentation. You have literally done this — cite it.)*

> "Seven sections, one page. **Purpose** — one line on what the check is for.
> **Definitions** — what 'subtitle visibility' means numerically, e.g. minimum
> contrast ratio against the plate and minimum dwell time in frames.
> **Inputs** — file formats, resolutions, where they arrive. **Method** — the
> exact steps, reproducible by someone else. **Acceptance criteria** — pass,
> advisory, hard reject, each with a number. **Outputs** — a sample report, so
> the reader sees the artifact, not a description of it. **Owner and revision
> date.**
>
> The sample report is the part people skip and it's the part that makes the doc
> usable. When I onboarded editors at Lightcraft I wrote a single-page PDF SOP
> for a national TV commercial — the reason it worked was that it showed the
> finished thing, not just the rules."

---

**`interviews:10` — "Design a brief annotation guideline for a 'person'
bounding box handling occlusion, truncation, and tightness."**

> "Four rules, each with the ambiguous case resolved explicitly.
>
> **Tightness:** box the visible extent of the person, no padding — edges touch
> the outermost visible pixel. **Truncation:** if the person runs off frame, box
> only what's visible; do not extrapolate the body outside the frame.
> **Occlusion:** if the person is partially hidden but their extent is
> unambiguous, box the full inferred extent and set `occluded: true`. If the
> extent is genuinely ambiguous, box only what's visible and flag it. **Minimum
> size:** below a stated pixel threshold — say 16 px on the short edge — mark
> `crowd` or skip rather than guess.
>
> Then the part that actually drives agreement: **a reference sheet of 10
> worked examples, five of them edge cases,** with the correct box drawn. Text
> rules get interpreted; pictures don't. That's the same principle as a style
> guide in brand work — a written rule about logo clear space produces drift,
> the diagram doesn't."

---

## 8. Profile and resume rewrite

### 8.1 Replace `about_me` — first person, active, specific

Delete the passive version. Paste this into the profile field as **plain text**
(the current field is full of literal `&nbsp;`):

> I'm a motion designer and art director with 20 years across broadcast, VFX,
> branding, and interactive work. I've built visual systems for global brands,
> browser-native 3D products, and Web3 startups. At BBI Online I designed a
> data-driven asset pipeline that made multi-language delivery across 40+
> markets five times faster with no quality loss, and led a team of four
> designers. I currently co-found and run product design at Tosee.art, building
> browser-native 3D with Three.js, WebGL, photogrammetry, and 3D Gaussian
> splatting. I work end to end — scripting, storyboarding, animation,
> compositing — and I'm as comfortable fixing the pipeline as producing the
> frames.

Every sentence has a subject that is you. Two numbers, both defensible.

### 8.2 Resume fixes, in priority order

1. **One identity.** Pick Wiktor or Mariusz, and make the platform name, the
   LinkedIn URL, and the resume header agree. Update the profile's
   `linkedin_url` — it currently points to the `mariusz-` slug while the profile
   name says Wiktor.
2. **One email.** Change the resume header to `studiomufna@gmail.com` so it
   matches the account, or change the account. Not both as they are.
3. **Kill the "400%" claim.** Use "five times faster" everywhere.
4. **Restore portfolio links.** Every project currently parses with
   `project_link: ""`. Put bare URLs in the resume body as plain text —
   `tosee.art`, not a hyperlinked word. Hyperlinks are what the parser is
   dropping. Same fix for the orphaned `"DemoReel"` token.
5. **Make education parseable.** Add a plain `EDUCATION` heading with
   `Warszawska Szkoła Reklamy — Projektant Grafiki Użytkowej i Reklamowej,
   2003–2006`. All ten parses returned `education: []`.
6. **Re-upload after fixing the projects dropout.** Your newest resume
   (`applications:9`) parses with **zero projects**. Whatever changed in that
   version broke the section. Verify the parse before applying again.
7. **Name After Effects in a project bullet.** You applied to two AE roles; AE
   appears in no project bullet in any of the ten resumes. Add one concrete AE
   line to the Lightcraft or freelance entry.
8. **Add Marriott to every version**, with the concurrency note already in your
   text, and add it to the profile.
9. **Add the micro1 role to your profile** — all ten resumes have it, the
   profile has none.
10. **Group and tier the skills.** Replace the flat 30-item dump with grouped
    tiers, and stop swapping keywords per posting:

> **Expert (10+ yrs):** After Effects, Photoshop, Illustrator, motion graphics,
> compositing, brand identity, art direction
> **Strong (3–10 yrs):** Blender, DaVinci Resolve, Fusion, InDesign, storyboarding,
> design operations, pipeline design
> **Working (1–3 yrs):** Three.js, WebGL, photogrammetry, 3D Gaussian splatting,
> Python scripting, video annotation
> **Familiar:** Jira, GitHub, Draw.io

11. **Resolve or drop the two unevidenced profile skills** — "Training
    facilitation & instructional design" and "Communication, coaching, and
    feedback," both stamped 15 years, both absent from every resume. If the
    experience is real, add the dated role that proves it.
12. **Annotate the 2012–2016 gap** and the nested Insert Stonks / BBI overlap
    with a "concurrent freelance" note.

---

## 9. Evidence-gap backlog

Interview technique cannot fix these. `interviews:7` proved it — that was the
one Junior that a month of improvement didn't move.

**Gap 1 — no hands-on annotation tooling.**
Install **CVAT** or **Label Studio** locally. Annotate 200–500 frames of your
own footage. You now have a real answer to *"which annotation tools have you
used"* instead of *"I would go to YouTube... thirty minutes."*
*Done when:* you can describe the tool's actual review workflow from memory.

**Gap 2 — no measured agreement number of your own.**
Have one other person annotate 50 of the same frames. Compute mean pairwise IoU
and a kappa. Write down what you found and what you changed in the guideline
because of it.
*Done when:* you can say "I measured 0.7x mean IoU on my own set and here's what
caused the disagreement" — the single highest-leverage sentence available to you
in the AI-data lane.

**Gap 3 — no published annotation guideline.**
Write the person-bounding-box guideline from §7.4 as a real one-pager with the
ten worked examples, using your own frames. This simultaneously fixes the
documentation Junior in `interviews:11` and the guideline questions in
`interviews:10`.
*Done when:* it exists as a PDF you can link.

**Gap 4 — no visible engineering evidence.**
Archiplayer (Svelte/Tauri/Rust/SQLite) exists but appears in only three resumes
and has never once parsed with a link. Write it up properly: what it does, the
stack, and the one hard problem you solved.
*Done when:* it has a public URL or repo that survives resume parsing.

**Gap 5 — the ops track record is real but undocumented.**
The 30–40% pipeline improvement is your strongest single asset and currently
exists only as a spoken half-sentence. Write it up: what the bottleneck was,
how you found it, what you changed, before-and-after numbers.
*Done when:* it's a resume bullet with two numbers and a mechanism.

---

## 10. Action plan

### Before your next application — hours

- [ ] Resolve the name split: one name across profile, LinkedIn, and resume.
- [ ] Fix `linkedin_url` in your profile (currently the `mariusz-` slug under a
      "Wiktor" profile).
- [ ] Align the resume email with the account email.
- [ ] Retype `about_me` as plain text using §8.1 — kills the `&nbsp;`
      corruption and the passive voice in one move.
- [ ] Replace "400%" with "five times faster" everywhere.
- [ ] Add plain-text portfolio URLs; re-upload; **verify `projects` and
      `project_link` actually parse** before submitting.
- [ ] Add an `EDUCATION` block.
- [ ] Add the micro1 role to your profile; add Marriott to all versions.
- [ ] Regroup skills into tiers (§8.2.10).

### Before your next interview — days

- [ ] Memorize §7.3. Fifteen numbers. This is the cheapest rating lift available.
- [ ] Drill the assumption-first opener (§7.1) until it's automatic. **This one
      habit is worth more than everything else in this report** — it appears in
      five interviews and directly caused at least two Juniors.
- [ ] Rehearse the four anchors until each is one fluent sentence: the BBI
      pipeline (5× faster, 40+ markets, team of 4), the 30–40% bottleneck fix,
      the Lightcraft one-page SOP, the OpenPose/COCO-18 keypoint work.
- [ ] Practise the honest-gap pattern (§7.1, second template) out loud. You will
      need it, and it converts a dead turn into a scored one.
- [ ] Cap answers at ~120 words. You are already there on volume; spend the
      budget on specifics, not preamble.

### Retakes, in this order — the highest-return sequence

1. **`interviews:9` (Strategic PM / Data Ops / GenAI)** — three Juniors, and the
   diagnosis is pure presentation. Scripts exist in §7.4 for all three
   questions. Biggest single gain available.
2. **`interviews:6` (Workflow design / Confidentiality / Synthesis)** — three
   Juniors, same cause, scripts in §7.4.
3. **`interviews:11` (Technical documentation)** — one Junior, one script, plus
   the numbers in §7.3 will lift the AE ratings alongside it.
4. **`interviews:10` (CV Dataset Understanding)** — do this **after** Gaps 1–3,
   not before. The mAP and IoU definitions in §7.3 close the vocabulary half;
   the hands-on work closes the rest.
5. **`interviews:4` / `interviews:7` (dataset annotation)** — this is the one
   that resisted improvement once already. Retake only once Gap 2 gives you a
   real agreement number of your own.

**Note the platform mechanic:** micro1 reuses skill ratings across interviews
where names match — verified in `interviews:7`, which carried two Mid-level
ratings forward from `interviews:4`'s session rather than re-testing them. So a
rating you lift once can propagate to future applications, and a Junior you
leave in place will follow you. Retakes compound.

### Before claiming the AI-data or ops lane — weeks

- [ ] Gaps 1–3: CVAT/Label Studio hands-on, a measured agreement number, a
      published guideline.
- [ ] Gap 5: the ops story written up with real before/after numbers.
- [ ] Then re-apply to CV annotation and ops roles — which at that point stop
      being stretches.

---

## Appendix: reliability notes

- The transcripts are speech-to-text and contain artifacts: "human chromatomot,"
  "PenPort," "ExcaliDrill," "Sabyrinthine," "twenty five hundred sub apixel."
  Some passages read as conceptual gaps that may be transcription failures. I
  have not assumed which is which.

  **But note: the evaluator couldn't tell either.** It graded the transcript. If
  your delivery is disfluent enough that ASR mangles it, that mangling is being
  scored as imprecision. Slowing down and speaking in complete sentences is
  itself a rating lift, independent of content.
- Two `interviews:7` skill ratings carry `is_reused: true`, sourced from the
  2026-06-28 session — they were not fresh judgments on that transcript. No
  conclusion here treats them as new evidence.
- The "International" employer name in `interviews:9` is ASR-garbled and
  unverifiable.
- `interviews:10`'s claim of "years" using Blender for tracking carries no
  project name, team size, or dataset scale in the transcript — confident in
  tone, unsubstantiated in the record.
