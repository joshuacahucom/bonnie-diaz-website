# Bonnie Diaz website

Static site (plain HTML, CSS and JavaScript, no build step). It follows the Bonnie Diaz Website Brief.

| Page | File |
| --- | --- |
| Home | `index.html` |
| About (bio + accolades) | `about.html` |
| 4DP Training | `4dp-training.html` |
| Events | `events.html` |
| Book Bonnie + Contact form | `book-bonnie.html` (form at `#contact`) |

## Preview locally

```bash
python3 -m http.server 5180 --directory bonnie-diaz-website
```

Then open http://localhost:5180.

## Adding photos and videos

Placeholders show until the matching file is added. Drop files in with these exact names and they appear automatically:

| File | Used on | Source |
| --- | --- | --- |
| `assets/img/bonnie-portrait.jpg` | Home, About | Added: headshot from bonniediaz.com (746×800). Swap in a larger or full-length photo if Bonnie has one |
| `assets/video/intro.mp4` | Home, About | Intro video (being edited) |
| `assets/video/what-is-4dp.mp4` | 4DP Training | IMG_1011.MOV |
| `assets/video/4dp-principles.mp4` | 4DP Training | IMG_1018.MOV |
| `assets/video/4dp-demonstration.mp4` | 4DP Training | Not received |
| `assets/video/4dp-for-women.mp4` | 4DP Training | Not received |
| `assets/video/why-i-created-4dp.mp4` | 4DP Training | Google Drive |
| `assets/video/lifcon-2026-keynote.mp4` | Events | 52-min recording, edit to highlights |
| `assets/video/testimonial-lablast-2.mp4` | Events | LaBlast testimonial #2 |
| `assets/video/testimonial-2.mp4`, `testimonial-3.mp4` | Events | Not received |
| `assets/video/4dp-real-world.mp4` | Book Bonnie | IMG_1026.MOV |

### Content from bonniediaz.com

Photos, flyers, the book cover and video thumbnails came from Bonnie's current site (`assets/img/events`, `gallery`, `video-thumbs`). The 6 dance reels (About) and 2 Times Square billboard videos (Events) are on Vimeo. Their privacy settings only allow embedding on approved domains, so the site shows thumbnail cards that open each video on Vimeo. To play them in-page instead, add the new site's domain under each video's Vimeo embed settings, then swap the card for `<iframe src="https://player.vimeo.com/video/<id>">`.

Convert the .MOV files to MP4 (H.264) first, e.g. with HandBrake or:

```bash
ffmpeg -i IMG_1011.MOV -c:v libx264 -crf 23 -preset slow -c:a aac -movflags +faststart what-is-4dp.mp4
```

Large videos such as the full keynote are better hosted on YouTube or Vimeo and embedded with an `<iframe>` in place of the `<video>` tag.

## Still needed before launch

- **Contact details:** phone, email and social links. Search the HTML for `class="todo"`; they're in the footer of every page and on Book Bonnie.
- **Contact form:** set `FORM_ENDPOINT` in `assets/js/main.js` to a form service (e.g. Formspree) that emails Bonnie. Until then the form only shows a preview message.
- **4DP description:** replace the placeholder paragraph on `4dp-training.html` with Bonnie's own text.
- **Decisions pending from Bonnie:** see "Open questions" in the brief. Items awaiting confirmation are marked with HTML comments in the pages.
