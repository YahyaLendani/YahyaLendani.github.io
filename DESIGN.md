---
name: Waybill
description: Courier waybills and parcel labels on an airmail-blue ground; the visual system of yahyalendani.me.
colors:
  blue: "#1f3fd6"
  blue-deep: "#1730a8"
  glo: "#e6ff3d"
  pink: "#ff4d8d"
  label: "#fbfcff"
  ink: "#0b0d17"
  ink-soft: "#3a4060"
  white: "#ffffff"
  ink-muted: "#b8bdd6"
typography:
  display:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(3.4rem, 9.4vw, 7.25rem)"
    fontWeight: 900
    lineHeight: 0.84
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 66"
  headline:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(2.7rem, 7.4vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.9
    fontVariation: "'wdth' 68"
  headline-label:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(2rem, 4.4vw, 3.25rem)"
    fontWeight: 900
    lineHeight: 0.92
    fontVariation: "'wdth' 70"
  title:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(1.3rem, 2.4vw, 1.75rem)"
    fontWeight: 800
    lineHeight: 1.05
    fontVariation: "'wdth' 78"
  wide:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 800
    letterSpacing: "0.04em"
    fontVariation: "'wdth' 125"
  body:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 500
    lineHeight: 1.55
  data:
    fontFamily: "B612 Mono, ui-monospace, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    letterSpacing: "0.02em"
  label:
    fontFamily: "B612 Mono, ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    letterSpacing: "0.12em"
  barcode:
    fontFamily: "Libre Barcode 39 Text, B612 Mono, ui-monospace, monospace"
    fontSize: "3rem"
    fontWeight: 400
    lineHeight: 0.8
rounded:
  focus: "2px"
  stamp: "3px"
  button: "4px"
  label: "6px"
  pill: "999px"
  sticker: "50%"
spacing:
  field: "16px"
  strip: "22px"
  cell: "24px"
  caption-gutter: "46px"
  label-gap: "clamp(40px, 6vw, 72px)"
  section: "clamp(72px, 10vw, 136px)"
  page: "min(1240px, 100% - clamp(32px, 6vw, 96px))"
components:
  label-stock:
    backgroundColor: "{colors.label}"
    textColor: "{colors.ink}"
    rounded: "{rounded.label}"
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.button}"
    padding: "12px 18px"
  button-primary-hover:
    backgroundColor: "{colors.glo}"
    textColor: "{colors.ink}"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    padding: "12px 18px"
  button-quiet-hover:
    backgroundColor: "{colors.glo}"
    textColor: "{colors.ink}"
  stamp-live:
    backgroundColor: "{colors.glo}"
    textColor: "{colors.ink}"
    rounded: "{rounded.stamp}"
    padding: "8px 11px"
  stamp-prototype:
    backgroundColor: "{colors.pink}"
    textColor: "{colors.ink}"
    rounded: "{rounded.stamp}"
    padding: "8px 11px"
  stamp-open-source:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.glo}"
    rounded: "{rounded.stamp}"
    padding: "8px 11px"
  stamp-research:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.white}"
    rounded: "{rounded.stamp}"
    padding: "8px 11px"
  sticker:
    backgroundColor: "{colors.glo}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sticker}"
    width: "clamp(104px, 12vw, 156px)"
  declaration-pill:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "2px 12px 3px"
  field-caption:
    textColor: "{colors.ink-soft}"
    typography: "{typography.label}"
  nav-link:
    textColor: "{colors.white}"
    typography: "{typography.data}"
    padding: "6px 0"
  contact-row:
    textColor: "{colors.white}"
    padding: "22px 8px"
  contact-row-hover:
    backgroundColor: "{colors.glo}"
    textColor: "{colors.ink}"
---

# Design System: Waybill

## Overview

**Creative North Star: "The Waybill"**

Every piece of work is a parcel, and every surface is the paperwork stuck to it. The page is an airmail-blue ground at full strength. On it sit thermal-white labels divided into ruled cells, each with a tracking strip, a barcode, a set of form fields and a status stamp slapped on at a small angle. Two strips of printed packing tape cross the page; one section turns the whole ground day-glo; the last turns it ink. A dashed route line runs down the left margin from the first waybill to the signature, and a small parcel marker travels it with scroll.

The system is loud, flat-coloured and typographically heavy. Hierarchy comes from Archivo's width axis: the same family is squeezed to 62 to 78 percent width for names and headings and stretched to 125 percent for form headers and tape. Facts are set in mono inside ruled cells. Nothing is hidden when it is unknown: a field with no value stays printed and is hatched as void. The world replaces the dark-terminal portfolio and the white card grid; neither is a fallback.

Motion is the behaviour of the materials. Labels print in top-down (clip-path reveal, 1.15s), stamps and the round sticker land with a scale-down slap, tape runs as a marquee whose speed follows scroll velocity, and a pink scan beam crosses a label's barcode strip on hover. The hero waybill prints on load with CSS keyframes; every later label is armed by a `js` class and released by an IntersectionObserver. With JavaScript off or reduced motion on, everything is visible and static.

**Key Characteristics:**
- Saturated blue ground; white label stock is the only place long text lives.
- Ruled form cells (2px ink) with rotated field captions and mono data.
- One type family across its width axis, plus mono for codes and a real Code 39 barcode face.
- Stickers and stamps at small angles (2 to 12 degrees); labels tilted under 1 degree.
- Soft blue-tinted shadows only, to lift paper off the ground.
- Unknown values are printed as void, never omitted.

## Colors

Three full-strength colours and a paper-and-ink pair. No tints, no gradients, no transparency except hairlines and hatching.

### Primary
- **Airmail Blue** (`blue`): the ground of the page and the sticky nav. On label stock it is also an ink: the Research stamp, the slash separator in the origin line, and the focus ring on any light surface.

### Secondary
- **Day-Glo** (`glo`): the sticker colour. Round sticker, Live stamp, first tape, the travelled part of the route and its marker, the full contents band, text selection, focus rings on dark grounds, and every hover fill (manifest rows, buttons, contact rows, nav underline). Always carries ink text.

### Tertiary
- **Hot Pink** (`pink`): the second sticker colour. As built it appears in exactly three places: the Prototype stamp, the second tape, and the barcode scan beam. Always carries ink text.

### Neutral
- **Thermal White** (`label`): label stock. Background of the waybill, parcel labels and the sender label.
- **Ink** (`ink`): text and 2px rules on label stock and on day-glo; primary button fill; Open source stamp fill; the ground of the contact section.
- **Soft Ink** (`ink-soft`): field captions, manifest descriptions, void values and the "in transit" hold line, on label stock only.
- **White** (`white`): text on blue and on ink. Dashed white at 28 percent alpha is the hairline on those grounds; at 50 percent it is the untravelled route.
- **Muted on Ink** (`ink-muted`): captions, void rows and the footer line in the contact section.
- **Deep Blue** (`blue-deep`): scrollbar track only.

### Named Rules
**The Ink On Stickers Rule.** Day-glo and pink never carry white text. Their text is ink, every time.

**The Paper Holds The Prose Rule.** Sentences longer than a lede sit on label stock (or on the ink ground in contact), not directly on blue. On blue: headings, one lede, the nav.

**The One Hover Colour Rule.** Every interactive fill resolves to day-glo with ink text. There is no second hover colour.

## Typography

**Display Font:** Archivo variable, width 62 to 125, weight 100 to 900 (fallback Arial Narrow, sans-serif)
**Body Font:** Archivo at normal width, weight 500
**Label/Mono Font:** B612 Mono 400 and 700 (fallback ui-monospace)
**Barcode Font:** Libre Barcode 39 Text, loaded with `display=block`

**Character:** One grotesque doing every job by changing width. Condensed black capitals read as stencilled consignee names; the 125 percent width reads as printed form headers and tape. B612 Mono, a cockpit-display face, sets everything a scanner would read. Width is set with `font-stretch`.

### Hierarchy
- **Display** (900, width 66, `clamp(3.4rem, 9.4vw, 7.25rem)`, line-height 0.84, uppercase): the name on the hero waybill. The origin code beside it is a one-off at width 62 and `50cqi` of its cell.
- **Headline** (900, width 68, `clamp(2.7rem, 7.4vw, 6rem)`, 0.9, uppercase, balanced): section headings. One word may be day-glo on blue or ink grounds.
- **Headline, label** (900, width 70, `clamp(2rem, 4.4vw, 3.25rem)`, 0.92, uppercase): the parcel name on each label.
- **Title** (800, width 78, `clamp(1.3rem, 2.4vw, 1.75rem)`, 1.05): manifest rows; contact rows use the same cut up to 2.75rem; declaration pills use 800 at width 75, uppercase.
- **Wide** (800 to 900, width 125, uppercase, 0.03 to 0.04em): nav name, the waybill header strip, tape text.
- **Body** (500, 1.0625rem, 1.55): running text; 1.125rem for ledes and the sender body. Measure 34em to 60ch, `text-wrap: pretty`.
- **Data** (B612 Mono 400, 0.8125rem, 0.02em): tracking codes, dates, counts, nav links (uppercase, 0.06em), footer line. Tabular figures throughout.
- **Label** (B612 Mono 400, 0.6875rem, 0.12em, uppercase, soft ink): field captions and `dt` labels. This is the smallest size in the system; it is for two- or three-word field names, never for sentences.
- **Barcode** (Libre Barcode 39 Text, 3rem, line-height 0.8; 2rem and 1.5rem on small screens): decorative, `aria-hidden`, wrapped in asterisks so it is a valid Code 39 string.

### Named Rules
**The Width Is The Voice Rule.** Size alone never makes a heading. Headings are condensed (62 to 78) and black; form furniture is expanded (125); reading text stays at 100.

**The Mono Means Machine Rule.** Mono is for values a scanner or an API would produce, and for the captions that name them. Prose is never mono.

## Layout

A single column of labels on a full-bleed ground. The page measure is `min(1240px, 100% - clamp(32px, 6vw, 96px))`; full-bleed bands (nav, contents, contact) use the same 1240px measure as horizontal padding. Parcel labels are capped at 900px and alternate sides: odd left, even pushed right, with opposite tilts (-0.6 and 0.7 degrees). The hero waybill tilts -0.9 degrees, the sender label 0.5.

Inside a label, layout is a ruled grid: a header strip across the top, then two columns (about 1.15fr to 1fr, or 1.3fr to 1fr on the waybill) split by a 2px ink rule, then a footer strip. Data fields are a two-column grid of cells with rules between them, never around the outside. Cells that carry a rotated caption reserve a 46px left gutter for it.

Vertical rhythm is fluid: labels are separated by `clamp(40px, 6vw, 72px)`, sections by roughly `clamp(72px, 10vw, 136px)`. The two tapes span 112vw at -2.4 and 1.6 degrees and bleed off both edges.

The route line sits in the left page margin (46px outside the measure, 10px from the edge when there is no margin, 6px at 820px and below), 4px wide with a 10px dash. It starts at the hero and its height is set in script to end at the bottom of the contact signature. The line passes under the tapes and under the day-glo contents band, and that band draws its own ink dashed continuation at the same position. The marker travels above every band; while it crosses the contents band it turns ink with a day-glo icon. The marker is 14px at 820px and below, 20px above that, and 40px from 1400px up.

**Responsive.** At 820px and below every label goes flat (no rotation, no hover lift) and single-column; column rules become row rules; the status stamp moves to the top right of the label; manifest and contact rows stack their caption above the value. At 480px and below the nav stops being sticky and centres, caption gutters narrow to 38px, and the waybill's header barcode is removed.

## Elevation & Depth

Paper on a table. The ground, the bands and everything printed on a label are flat; only objects that are physically stuck on or lying on the ground cast a shadow. All shadows are soft, offset downward, negative-spread, and tinted deep blue (`rgba(4, 10, 70, …)`), never black and never hard-edged.

### Shadow Vocabulary
- **Label rest** (`0 22px 48px -18px rgba(4,10,70,.55), 0 3px 8px -2px rgba(4,10,70,.3)`): waybill, parcel labels, sender label.
- **Label lifted** (`0 34px 60px -20px rgba(4,10,70,.7), 0 4px 10px -2px rgba(4,10,70,.3)`): parcel hover, with the label straightening and rising 6px.
- **Sticker** (`0 10px 22px -8px rgba(4,10,70,.6)`): the round sticker.
- **Stamp on label edge** (`0 8px 16px -6px rgba(4,10,70,.55)`): the large status stamp overhanging a parcel label. Inline manifest stamps have none.
- **Tape** (`0 10px 24px -12px rgba(4,10,70,.7)`): both tape strips.
- **Marker** (`0 8px 18px -6px rgba(4,10,70,.7)`): the route marker.

### Named Rules
**The Stuck-On Rule.** A shadow means "this is a separate piece of paper or tape". Cells, rules, buttons and pills inside a label are printed and stay flat.

## Shapes

Die-cut paper. Label stock has a small 6px corner; stamps 3px; buttons 4px; the route marker 5 to 6px. Two true rounds exist: the circular sticker and the fully rounded declaration pills. Everything else is a straight 2px ink rule (3px for the declaration rows). Rules divide cells and never box a label; the label edge is the paper edge, with no border.

Rotation is part of the form language: labels under 1 degree, stamps 2 to 4 degrees with a direction fixed per status, the round sticker 12 degrees, tapes about 2 degrees. Void fields are filled with a -45 degree hairline hatch (1px every 7px, ink at 10 percent; white at 9 percent on the ink ground).

## Components

### Buttons
- **Shape:** squared tab (4px radius), 2px ink border, 12px 18px padding, Archivo 800 at width 110, 0.9375rem, with an 18px inline arrow.
- **Primary:** ink fill, white text.
- **Quiet:** transparent fill, ink text, same border.
- **Hover / Focus:** both turn day-glo with ink text over 0.3s; the arrow slides 6px right on the expo-out ease. They exist only on label stock, in a label's footer strip.

### Stamps
- **Style:** B612 Mono 700, 0.75rem, uppercase, 0.1em, 8px 11px padding, 3px radius, rotated. Not interactive.
- **Status map:** Live is day-glo with ink (-4 degrees); Prototype is pink with ink (3); Open source is ink with day-glo text (-2); Research is blue with white (4). One status per parcel, the same in the manifest and on the label.
- **On a label:** a larger cut (0.875rem, 10px 14px) overhangs the right edge by 14px and lands 0.6s after the label starts printing.

### Sticker
- A day-glo circle, `clamp(104px, 12vw, 156px)`, Archivo 900 at width 70, uppercase, rotated 12 degrees, overhanging the top right corner of the waybill. It is a link; on hover it swings to -6 degrees and scales to 1.06.

### Labels (waybill, parcel, sender)
- **Corner Style:** 6px.
- **Background:** thermal white, ink text.
- **Shadow Strategy:** label rest; parcel labels lift on hover (see Elevation).
- **Border:** none outside; 2px ink rules between cells.
- **Header strip:** mono tracking code left, barcode right, 12px 22px 8px, ruled below. On hover a 3px pink beam with a pink glow sweeps 340px leftward from the right edge in 1.1s.
- **Internal Padding:** 22px 24px 26px for the main cell; 12px 16px 14px for data fields; 14px 22px for the footer strip.
- **Field captions:** each data field is a mono label over a bold value. The waybill and sender label carry one rotated caption per cell, reading bottom-to-top in the 46px left gutter. A caption names a ruled form cell; it is not used as a line above a section heading.
- **Void field:** soft-ink value at weight 500 over the hatch, stating why it is empty.
- **Hold line:** when a label has no link, the footer carries one mono sentence in soft ink instead of a button.

### Manifest rows
- Rows inside the waybill: title, soft-ink description, stamp; ruled between. On hover or focus a day-glo fill wipes in from the left edge of the label (0.45s), running under the caption gutter.

### Tape
- Full-bleed strips, day-glo and pink, ink text in Archivo 900 at width 125, uppercase, items separated by an ink dot. The track is duplicated and translated -50 percent on a 36s (44s reversed for the second) linear loop; scroll speed raises the playback rate up to 6x. Decorative and `aria-hidden`.

### Declaration rows and pills
- On the day-glo band: a 3px ink rule that draws in from the left (0.9s), a mono category label, then values as outlined pills (2px ink, fully rounded, Archivo 800 at width 75, `clamp(1.35rem, 3vw, 2.25rem)`, uppercase) that rise in with a 60ms stagger. Pills are not interactive.

### Navigation
- A blue strip, sticky, dashed white hairline below. Name in Archivo 800 at width 125; four mono uppercase links. Hover and focus draw a 2px day-glo underline from the left (0.35s). Static and centred at 480px and below.

### Contact rows
- On the ink ground: mono caption, large title value, 28px arrow, ruled above and below in white at 28 percent. Hover and focus fill the row day-glo, turn the text ink and widen the horizontal padding. An undeclared channel is a void row: hatched, muted, not a link.

### Route line and signature
- The route is the system's one continuous line (see Layout). Its travelled part and marker are day-glo; the marker rotates two full turns over the page. The contact signature is a 4px day-glo stroke that draws itself in 2.2s when the section enters view.

### Focus
- 3px outline, 3px offset: day-glo on blue and ink grounds, blue on label stock and on the day-glo band.

## Do's and Don'ts

### Do:
- **Do** put every project on its own label with a tracking strip, a barcode, four data fields and exactly one status stamp.
- **Do** print unknown or private values as void fields with the reason, hatched; a missing link becomes a hold line.
- **Do** make headings by narrowing Archivo (width 62 to 78, weight 900, uppercase) and form furniture by widening it (125).
- **Do** set codes, dates and counts in B612 Mono with tabular figures.
- **Do** resolve every hover and focus fill to day-glo with ink text, and move things on `cubic-bezier(.16, 1, .3, 1)`.
- **Do** tint shadows `rgba(4, 10, 70, …)` and reserve them for labels, stickers, overhanging stamps, tape and the marker.
- **Do** flatten labels to zero rotation and one column at 820px and below.
- **Do** ship every entrance so that content is visible without JavaScript and static under reduced motion.

### Don't:
- **Don't** set white text on day-glo or pink.
- **Don't** run paragraphs directly on the blue ground.
- **Don't** box a label with a border or put a shadow on anything printed inside one.
- **Don't** rotate a label more than 1 degree, or rotate anything at 820px and below.
- **Don't** use a barcode as real content; it stays `aria-hidden` beside a readable mono code.
- **Don't** drop a field because its value is unknown.
- **Don't** fall back to a dark terminal look or a white card grid.
