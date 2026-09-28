---
name: Your Office Partners Business Card
description: A dark plum ledger card that gets one person into your contacts, then a light company page below the ruler.
colors:
  plum: "#65063c"
  plum-hover: "#7a0b4a"
  plum-deep: "#3d0424"
  ink: "#140810"
  slab: "#21111b"
  slab-hover: "#2c1824"
  tile: "#120710"
  bone: "#f6f0f3"
  bone-soft: "#c3b3bd"
  bone-faint: "#8c7885"
  focus-rose: "#f0c9dd"
  paper: "#f3f1f3"
  paper-white: "#ffffff"
  paper-ink: "#2b1622"
  paper-soft: "#5e4b57"
  paper-edge: "#e1dbe0"
  tick-minor: "#b7a2b0"
  whatsapp: "#12813f"
  linkedin: "#0a66c2"
typography:
  display:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 11.5vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 94"
  headline:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 6.4vw, 1.875rem)"
    fontWeight: 760
    lineHeight: 1.12
    letterSpacing: "-0.028em"
    fontVariation: "'wdth' 96"
  title:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 560
    lineHeight: 1.5
    letterSpacing: "-0.005em"
  body:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "'tnum' 1"
  label-action:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 650
    lineHeight: 1.5
    letterSpacing: "-0.01em"
  label-caps:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "0.12em"
    fontVariation: "'wdth' 108"
  label-list:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "0.2em"
    fontVariation: "'wdth' 110"
rounded:
  pill: "999px"
  slab: "18px"
  tile: "14px"
spacing:
  stack: "10px"
  row-inset: "12px"
  md: "16px"
  gutter: "20px"
  section: "36px"
  screen: "48px"
  column: "26rem"
  column-wide: "32rem"
components:
  pill-primary:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
    typography: "{typography.label-action}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "56px"
  pill-primary-saved:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.plum}"
  pill-ghost:
    backgroundColor: "{colors.slab}"
    textColor: "{colors.bone}"
    typography: "{typography.label-action}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "56px"
  pill-ghost-hover:
    backgroundColor: "{colors.slab-hover}"
  pill-brand:
    backgroundColor: "{colors.plum}"
    textColor: "{colors.paper-white}"
    typography: "{typography.label-action}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "54px"
  pill-brand-hover:
    backgroundColor: "{colors.plum-hover}"
  pill-paper:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.paper-ink}"
    typography: "{typography.label-action}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "54px"
  channel-row:
    backgroundColor: "{colors.slab}"
    textColor: "{colors.bone}"
    rounded: "{rounded.slab}"
    padding: "12px 18px 12px 12px"
    height: "76px"
  channel-icon-tile:
    backgroundColor: "{colors.tile}"
    textColor: "{colors.bone}"
    rounded: "{rounded.tile}"
    size: "52px"
---

# Design System: Your Office Partners Business Card

## Overview

**Creative North Star: "The Ledger Card"**

The phone becomes a dark business card in the company's own plum. One narrow centered column, bone-white type on a near-black aubergine ground, a single bone-filled pill that means "save me", and three contact slabs that flood with their channel's colour when touched. A ruler of ledger ticks is the seam into a second, lighter world: cool off-white paper where plum takes over as the action colour and the logo appears in full.

The system is deliberately small and dense in the way a physical card is dense: nothing decorative, every element tappable or identifying. Depth is soft and tonal on the dark screen, soft and lifted on the paper screen. Motion is quiet on arrival (a blur-rise, once) and expressive only in response to the visitor: the fill sweep, the check-mark draw, the tick wave that travels with scroll.

The world is a translation of a user-supplied reference card into Your Office Partners material, so its grammar (dark top, centered name, pills, colour-sweep rows, ruler divider, light company screen) is binding, and its colour and mark are YOP's.

**Key Characteristics:**
- Two grounds only: aubergine ink above the ruler, cool paper below it.
- One typeface (Archivo variable) doing everything through weight and width, from 800 condensed display to 700 expanded tracked caps.
- Pills for actions, 18px slabs for contact rows, square-ish icon tiles inside the slabs.
- Brand plum is the owner colour; channel colours appear only as interaction fills.
- The ruler is the only divider between the screens.

## Colors

A monochrome plum family, warmed to aubergine on the dark screen and cooled to a lilac-grey paper on the light one, with plum as the only saturated brand voice.

### Primary
- **Account Plum** (`plum`): The brand. On paper it fills the website pill and colours major ruler ticks (at 55% opacity); on ink it tints the top-of-screen radial glow (28% alpha), the Email row's sweep fill, the saved-state label, and text selection. Hover deepens to **Lit Plum** (`plum-hover`).
- **Pressed Plum** (`plum-deep`): The company headline on paper. Darker than the brand so large display text reads as ink rather than as a button.

### Neutral
- **Aubergine Ink** (`ink`): The dark screen ground, the page `html` background, and the browser `theme-color`.
- **Slab** (`slab`): Raised surface for contact rows and the ghost pill; hovers to `slab-hover`. Edges are a hairline of rose-white at 6% (rows) or 12% (ghost pill).
- **Tile** (`tile`): Icon wells inside contact rows, a step darker than the slab so the well reads as recessed.
- **Bone** (`bone`): Primary text on ink and the fill of the primary pill.
- **Bone Soft** (`bone-soft`): Role line, company lockup, row details, save hint.
- **Bone Faint** (`bone-faint`): The list label and the row arrow. Lowest-contrast text on ink; never go lower.
- **Focus Rose** (`focus-rose`): The 2px focus ring on the dark screen. On paper the ring switches to plum.
- **Paper** (`paper`) / **Paper White** (`paper-white`): The company screen ground and the secondary pill / saved-pill fill.
- **Paper Ink** (`paper-ink`) / **Paper Soft** (`paper-soft`) / **Paper Edge** (`paper-edge`): Text, secondary text and the inset hairline on paper.
- **Tick Grey** (`tick-minor`): Minor ruler ticks.

### Channel fills
- **WhatsApp Green** (`whatsapp`) and **LinkedIn Blue** (`linkedin`): Used only as the sweep fill behind their contact row on hover, focus and press. Email uses plum.

### Named Rules
**The Two Grounds Rule.** Ink above the ruler, paper below it. No third ground, no gradients beyond the single plum glow at the top of the dark screen.

**The Borrowed Colour Rule.** Third-party channel colours exist only as momentary fills behind their own row. At rest every row is plum-family slab.

## Typography

**Display Font:** Archivo Variable (with Archivo, system-ui)
**Body Font:** Archivo Variable
**Label Font:** Archivo Variable, expanded

**Character:** One grotesque stretched across its width axis: condensed and heavy for the name, normal for reading, expanded and tracked for small caps. Width variation replaces a second family.

### Hierarchy
- **Display** (800, clamp 2.5rem to 3.75rem, 0.98, width 94%): The person's name only, balanced, one per card.
- **Headline** (760, clamp 1.5rem to 1.875rem, 1.12, width 96%): The company headline on paper, in pressed plum.
- **Title** (560, 1.125rem): The role line under the name.
- **Body** (400, 1.0625rem, 1.6): Company description, capped at 34ch (40ch at 720px and up), `text-wrap: pretty`.
- **Body Small** (400, 0.9375rem, tabular numerals): Contact row details; single line with ellipsis. 0.875rem is used for the save hint and on phones under 400px.
- **Label Action** (650, 1rem, -0.01em): All pill labels. Row labels share the size at 700.
- **Label Caps** (700, 0.8125rem, 0.12em, uppercase, width 108%): The company lockup beside the mark.
- **Label List** (700, 0.6875rem, 0.2em, uppercase, width 110%): The label naming the contact list, followed by a hairline that runs to the column edge.

### Named Rules
**The One Family Rule.** Hierarchy comes from Archivo's weight and width axes. Do not introduce a second typeface.

**The Tight Top, Tracked Bottom Rule.** Large type is negatively tracked and condensed; small caps are positively tracked and expanded. Never track display type open.

## Layout

A single centered column (`column`, 26rem) with a gutter of at least 20px that respects safe-area insets; the company column widens to 32rem at 720px. The dark screen is `100svh` minus 22px so the top of the ruler peeks in at the fold as the scroll cue, and its content is vertically centered. Actions sit in a two-up equal grid on the dark screen and a wrapping flex row on paper (they stack to full width on phones). Rhythm: 10px between pills and between rows, 12px row inset, 16px icon-to-text, 36px (44px at 720px) under the identity block and under the logo, 48 to 64px screen padding. Under 400px the rows tighten (46px tiles, 14px gap, 0.875rem details). There are exactly two screens; the layout never grows sections.

## Elevation & Depth

Hybrid and soft. On ink, depth is tonal: slab over ink, tile recessed into slab, hairline inset edges at 6 to 22% rose-white. The only cast shadow on ink is a soft bone glow under the primary pill. On paper, pills lift with soft, negatively spread shadows tinted in plum or paper-ink.

### Shadow Vocabulary
- **Bone glow** (`box-shadow: 0 10px 28px -10px rgba(246, 240, 243, 0.35)`; hover `0 16px 34px -12px rgba(246, 240, 243, 0.45)`): Primary pill on ink.
- **Slab edge** (`box-shadow: inset 0 0 0 1px rgba(255, 236, 246, 0.06)`): Contact rows. Ghost pill uses 0.12, 0.22 on hover.
- **Plum lift** (`box-shadow: 0 12px 26px -12px rgba(101, 6, 60, 0.6)`; hover `0 18px 30px -14px rgba(101, 6, 60, 0.7)`): Brand pill on paper.
- **Paper lift** (`box-shadow: inset 0 0 0 1px var(--paper-edge), 0 6px 18px -12px rgba(43, 22, 34, 0.3)`): Secondary pill on paper.

### Named Rules
**The Soft Light Rule.** Shadows are diffuse, offset downward only, with negative spread. No hard offset shadows, no borders heavier than a 1px inset hairline.

## Shapes

Three radii and nothing else: fully round pills (`pill`) for every button, 18px slabs (`slab`) for contact rows, 14px tiles (`tile`, 13px under 400px) for icon wells. Icons are 1.5 to 2px stroked SVG at 18 to 22px. The diamond-bracket-and-check from the YOP logo is the recurring mark: in the company lockup, the favicon and the saved state of the primary pill. The ruler is 1px ticks every 12px, every fifth one plum and taller.

## Components

### Buttons (pills)
Tactile and weighted, the card's only buttons.
- **Shape:** Fully round (999px), 56px tall on ink, 54px on paper, 22px side padding, icon and label with a 10px gap.
- **Primary (ink):** Bone fill, ink label, bone glow. Only one per screen: Save contact.
- **Saved state:** Fill turns white, label turns plum, the logo's check mark draws itself in (0.6s stroke) and a platform-specific hint fades in beneath.
- **Ghost (ink):** Slab fill with hairline inset edge, bone label.
- **Brand (paper):** Plum fill, white label, plum lift.
- **Paper (paper):** White fill, paper-ink label, paper lift.
- **Hover / Focus / Active:** Filled pills rise 2px and their shadow deepens; the ghost pill brightens its fill and edge. Press scales to 0.97 in 0.12s. Focus is a 2px ring offset 3px (focus rose on ink, plum on paper). Hover effects are gated behind `(hover: hover)`.

### Contact rows (signature)
- **Corner Style:** 18px slab, min 76px tall, 12px inset (18px on the arrow side).
- **Background:** Slab with a 6% hairline edge; a 52px tile well holds the channel icon.
- **Content:** Label (700) over detail (bone soft, tabular numerals, ellipsis), trailing up-right arrow in bone faint.
- **Interaction:** On hover, focus or press the channel colour sweeps in from the left (scaleX over 0.55s, expo-out), the tile darkens to 20% black, detail and arrow go to 88% white, and the arrow nudges up-right 2px.

### List label
Small expanded caps in bone faint followed by a 1px hairline (12% rose-white) running to the column edge. It names the contact list it sits above; it is not a heading ornament.

### Company lockup
The white diamond-check mark (30px) beside the company name in label caps, centered under the role.

### Ledger ruler
The seam between screens: a 44px paper band of 1px ticks every 12px, minor ticks tick grey, every fifth plum at 55%. As the page scrolls, a smooth wave crest travels across the ticks, lifting them. Decorative (`aria-hidden`) and static under reduced motion.

### Motion
Easing is one curve, `cubic-bezier(0.16, 1, 0.3, 1)`. Every visit opens on a paper intro where the logo folds together (the brand's 3s "Fold" motion). The moment the motion ends, the paper lifts off upward (clip-path, 0.55s, no hold and no skip label) with a ledger-tick edge, uncovering the card. While the intro is up, the card's entrance waits paused on its first frame. The name is then uncovered from below, the lockup mark replays the fold in miniature, and one sheen passes across Save contact. The rest of the dark screen rises in (14px plus 6px blur, 0.9s, 70ms stagger); the paper screen resolves on scroll via view timelines where supported. Reduced motion removes all animation and leaves the check mark drawn.

## Do's and Don'ts

### Do:
- **Do** keep exactly one bone-filled primary pill on the dark screen and one plum pill on paper.
- **Do** build hierarchy from Archivo's weight and width axes (800 at 94% width for display, 700 at 108 to 110% width for tracked caps).
- **Do** use the three radii only: 999px pills, 18px slabs, 14px tiles.
- **Do** let channel colours appear only as the sweep fill behind their own row, from the left, on hover, focus and press.
- **Do** keep the top of the ruler visible at the fold as the scroll cue.
- **Do** gate hover effects behind `(hover: hover)` and honour reduced motion by removing animation, not just shortening it.

### Don't:
- **Don't** add a third ground colour or a section between the dark card and the paper page; the ruler is the only seam.
- **Don't** introduce a second typeface or track display type open.
- **Don't** use hard offset shadows or borders heavier than a 1px inset hairline.
- **Don't** place small tracked caps above headlines as kickers; tracked caps are reserved for the company lockup and the contact list label.
- **Don't** show channel brand colours at rest.
