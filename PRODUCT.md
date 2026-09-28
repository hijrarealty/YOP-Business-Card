# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React + Vite, plain modern JavaScript and CSS (pinned by the user). No UI framework.

## Users

People who have just met a Your Office Partners employee (at a meeting, event, or via a shared link or NFC/QR card) and open the link on their phone. Their job: save the person's contact in a couple of taps, or reach them right away by call, WhatsApp, email or LinkedIn, then optionally learn what the company does.

## Product Purpose

A digital business card per employee. First card: Mohamed Saleem, Founder & CEO. Success = the visitor taps Save Contact and the phone's native contact sheet opens pre-filled.

## Operating Context

Opened mostly on mobile browsers (iOS Safari, Android Chrome, in-app browsers of WhatsApp/LinkedIn). Often seen seconds after a handshake, so it must load instantly and work one-handed.

## Capabilities and Constraints

- Exactly two scroll screens: (1) employee profile, (2) compact company profile. No About/Skills/Experience/forms/extra pages.
- Screen 1: name (main heading), role, phone/WhatsApp, email, LinkedIn, Call, Save Contact.
- Save Contact serves a vCard (.vcf) so the OS contact flow opens.
- Screen 2: company logo, short description, website button, location (maps) button.
- Intro: the animated YOP logo (the brand's "Fold" motion, ~3s) plays on paper, then the sheet lifts to reveal the card. Tap or any key skips it. (Added 2026-09-28 at the user's request, reversing the earlier "no splash" decision.)
- The WhatsApp row does not show the phone number; it reads "Send a message".
- All employee/company data lives in one config file so more employees can be added later.

## Brand Commitments

- Company: Your Office Partners LLC, Dubai. Tagline in logo: "Account on us".
- Logo: wordmark with diamond bracket + check mark. Brand plum #65063C, brand gray #A5A4A5. Official assets from yourofficepartners.com.
- The user supplied a reference video of another company's card (HILF Shipping) as the binding visual and interaction reference: dark top screen, centered bold name, pill buttons, contact rows with brand-colored hover fills, ruler-tick divider, light company screen below.

## Evidence on Hand

- Employee: Mohamed Saleem, Founder & CEO, saleem@yourofficepartners.com, +971 58 984 2522 (phone + WhatsApp), linkedin.com/in/mohamedsaleem-taxconsultant.
- Website https://yourofficepartners.com/, Google Maps place link for Your Office Partners LLC.
- Company description drafted from the company's own website copy and approved by the user.
- No street address confirmed; do not invent one in the vCard.

## Product Principles

1. Save Contact is the product; everything else supports it.
2. Two screens, no more.
3. One place to edit data.
4. Native affordances over clever ones (tel:, wa.me, mailto:, .vcf, maps links).
