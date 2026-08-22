# Design Direction: Sourav Maity Animated Portfolio

## Three Initial Approaches

### Theme Name: Editorial Monochrome
**Very Brief Intro:** A magazine-inspired black-and-white portfolio that pairs monumental serif typography with documentary-style image treatments. It feels confident, cultured, and deliberately paced.

**Probability:** 0.07

### Theme Name: Kinetic Studio
**Very Brief Intro:** A monochrome creative studio site driven by oversized moving type, smooth section reveals, and image panels that react to cursor and scroll. It feels energetic without relying on color.

**Probability:** 0.04

### Theme Name: Archive in Motion
**Very Brief Intro:** A refined personal archive built from high-contrast panels, index markers, and a continuous vertical narrative. It gives Sourav's work the texture of a curated collection rather than a static résumé.

**Probability:** 0.09

## Chosen Direction: Archive in Motion

### Design Movement
Contemporary Swiss editorial design combined with a kinetic digital archive. The interface uses disciplined black-and-white contrast, large typographic scale, structured ruled lines, and intentionally asymmetric compositions.

### Core Principles
1. Make each scroll position feel like a new spread in a creative monograph.
2. Use animation to reveal hierarchy and create a sense of momentum, never as visual noise.
3. Let photography and project artwork become monochrome, high-contrast evidence of real work.
4. Balance dense professional information with generous negative space and crisp visual indexing.

### Color Philosophy
The visual world is strictly black, off-white, and graphite. Black provides authority and immersion; off-white prevents glare and creates an archival-paper warmth; graphite separates information without introducing color. Existing assets are treated with grayscale and contrast so every image belongs to one coherent system.

### Layout Paradigm
A vertical archive with a slim, persistent index rail and irregular content spreads. Hero copy sits offset from the portrait, portfolio cards follow a staggered gallery rhythm, and long-form material appears as numbered records rather than uniform blocks.

### Signature Elements
1. Oversized outlined initials and section numerals that act as visual landmarks.
2. Hairline horizontal rules and small monospace metadata labels that mimic a design archive.
3. Monochrome image frames with a moving spotlight overlay and index counters.

### Interaction Philosophy
Scrolling is the primary interaction. Content enters with concise staggered lifts and masked wipes, image cards sharpen from grayscale softness on hover, and the navigation updates to expose the active section. Every clickable element compresses slightly on press and shifts with a sharp, controlled response.

### Animation
The experience uses `transform` and `opacity` based motion only, with a strong ease-out curve. The hero reveals in a short sequence; text lines unmask on entering the viewport; portfolio cards rise and their image crop subtly shifts; stat counters animate once when revealed; skill indicators draw from left to right. A reduced-motion mode makes all content immediately visible without autoplay movement.

### Typography System
Cormorant Garamond is used for expressive editorial display moments and italic emphasis. Space Grotesk carries titles and navigation with precise modern geometry. IBM Plex Mono serves for labels, dates, tags, prices, and microcopy. Display type is highly scaled and left-led; body text remains compact and readable.

### Brand Essence
**Sourav Maity is a multidisciplinary creator for artists and ambitious businesses who need digital work with both technical clarity and emotional resonance.**

Personality: **precise, expressive, independent**.

### Brand Voice
Headlines are direct and evocative; CTAs are concise and action-led; metadata reads like a professional record rather than sales copy.

Example lines:
- “Digital work with a pulse.”
- “Browse the archive →”

### Wordmark & Logo
The brand mark is an interlocking `SM` monogram constructed from a vertical rule and a sculptural serif letterform. The text wordmark uses a deliberately tracked `SOURAV MAITY` set in Space Grotesk, paired with a single oversized italic initial in editorial moments.

### Signature Brand Color
**Archive Black — #0A0A0A**

## Asset Constraint
Every visual image used in the finished site must come from the original portfolio at `https://sourav-maity-cv.vercel.app/`. No external or generated images will be introduced. All source images will be used and placed into the monochrome visual system with non-destructive CSS grayscale treatment.
