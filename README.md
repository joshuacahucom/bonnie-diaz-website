# Bonnie Diaz website

Static site (plain HTML, CSS and JavaScript, no build step). It follows the Bonnie Diaz Website Brief.

**Branding:** black, white and hints of red, inspired by a tailored black suit with a red tie, plus shades of gray. Colors are defined once at the top of `assets/css/styles.css`:

| Token | Hex | Used for |
| --- | --- | --- |
| `--red` | `#75140C` | The client's swatch: labels, links, dividers, buttons (the earlier `#C7372C` read as orange) |
| `--red-deep` | `#4E0C07` | Hover / pressed |
| `--red-line` | `#9A1D13` | The same red lifted slightly, only for thin lines on black (menu underline, banner and footer edges) |
| `--ink` | `#191211` | Text, header, page banners, dark bands |
| `--gray-dark` | `#4A4743` | Secondary text |
| `--gray` | `#94938F` | Captions and small text on black |
| `--gray-light` | `#D6D7D2` | Borders, light text on black (`#EFEFEC` tint for light sections) |

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

## Photos and videos

Photos and videos come from the team's Drive folder, "BonnieDiaz-Website content" (subfolder "Bonnie Content for Ana"). Photos were converted from HEIC to JPEG with location and camera data removed. Videos were re-encoded to H.264 MP4 at 1280 px (2-3.2 Mbps, web fast-start) to keep each file under 40 MB; any video shows a placeholder until its file exists.

| File | Used on | Drive source |
| --- | --- | --- |
| `assets/video/bio-reel.mp4` | Home: opening video (autoplays muted, "Watch with sound") | BioReel_v2.mov |
| `assets/video/intro.mp4` | About | BonnieDiaz_WebsiteVideo_V1.mp4 |
| `assets/video/4dp-principles.mp4` | Home 4DP section, 4DP Training | Principles of the 4DP |
| `assets/video/why-i-created-4dp.mp4` | 4DP Training | Why Bonnie Created 4DP |
| `assets/video/lifcon-2026-keynote.mp4` | Events | LIFCON Video Reel |
| `assets/video/testimonial-lablast-2.mp4` | Events | LaBlast Event Testimonial #2 |
| `assets/video/book-bonnie.mp4` | Book Bonnie | Book Bonnie Diaz |
| `assets/img/photos/bonnie-black-hat.jpg` | Home | Bonnie Diaz with black hat and white background |
| `assets/img/photos/bonnie-suit.jpg` | About | IMG_0879 |
| `assets/img/photos/bonnie-blazer.jpg` | Book Bonnie | IMG_1035 |
| `assets/img/photos/bonnie-street-2.jpg` | 4DP Training | IMG_0986 |
| `assets/img/photos/bonnie-white-shirt.jpg`, `bonnie-street-1.jpg` | About gallery | White Button Down with Hat, IMG_0985 |
| `assets/img/video-posters/*.jpg` | Every video | Frame from each video |

Not provided yet: "What is 4DP?" (IMG_1011), a 4DP demonstration, "Why 4DP matters to women", and more testimonials. Their spots were removed rather than left as empty placeholders; HTML comments mark where they go.

Hosting video files on Vercel uses bandwidth on every view (the Home reel is 23 MB). For a busy production site, consider moving the videos to Vimeo, YouTube or Mux and embedding them.

### Content from bonniediaz.com

Photos, flyers, the book cover and video thumbnails came from Bonnie's current site (`assets/img/events`, `gallery`, `video-thumbs`). The 6 dance reels (About) and 2 Times Square billboard videos (Events) are on Vimeo. Their privacy settings only allow embedding on approved domains, so the site shows thumbnail cards that open each video on Vimeo. To play them in-page instead, add the new site's domain under each video's Vimeo embed settings, then swap the card for `<iframe src="https://player.vimeo.com/video/<id>">`.

To add a new video, convert .MOV files to MP4 (H.264) first, e.g. with HandBrake or:

```bash
ffmpeg -i IMG_1011.MOV -c:v libx264 -crf 23 -preset slow -c:a aac -movflags +faststart what-is-4dp.mp4
```

## Still needed before launch

- **Contact details:** phone, email and social links. Search the HTML for `class="todo"`; they're in the footer of every page and on Book Bonnie.
- **Contact form:** set `FORM_ENDPOINT` in `assets/js/main.js` to a form service (e.g. Formspree) that emails Bonnie. Until then the form only shows a preview message.
- **4DP description:** replace the placeholder paragraph on `4dp-training.html` with Bonnie's own text.
- **Decisions pending from Bonnie:** see "Open questions" in the brief. Items awaiting confirmation are marked with HTML comments in the pages.
