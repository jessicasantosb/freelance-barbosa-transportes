# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

People and small businesses in Belo Horizonte, MG who need something moved or delivered: households planning a mudança, shops sending mercadorias, offices sending documents or small items. Most arrive on a phone from search, Instagram, or a WhatsApp referral. They are comparing a few informal transport options and need to feel, within seconds, that the person behind the wheel is reliable, reachable, and will care for their cargo.

## Product Purpose

Promote Sidinei Barbosa's owner-operated HR-truck delivery and freight service, answer the questions that block a booking, and convert interest into a WhatsApp quote request. Success is a qualified WhatsApp conversation started from the site.

## Positioning

A single, directly accountable driver with an HR truck — not a dispatcher or a fleet. The owner answers, quotes, drives, and delivers. Agility, care, and a real person on the other end are the product.

## Operating Context

Quotes are worked out in conversation, not on the site: the visitor supplies name, origin, destination, cargo category, urgency, and optional notes, and the site hands a formatted message to WhatsApp. Instagram is the public face of recent work. Service area is Belo Horizonte and nearby routes by arrangement.

## Capabilities and Constraints

- Routes: home, FAQ (`/faq`), useful tips (`/dicas-uteis`).
- Multi-step quote form (Zustand + React Hook Form + Zod) ending in a prefilled WhatsApp message.
- Light and dark themes, system-aware.
- Portuguese (pt-BR) copy throughout.
- One HR truck. No pricing table, online payment, live tracking, or booking calendar exists.
- No testimonials, customer logos, certifications, or fleet photography are on hand; do not fabricate them.

## Brand Commitments

- Name: Barbosa Transportes. Operator: Sidinei Barbosa — entregas e fretes em geral.
- Logo files `logo-light.svg` / `logo-dark.svg` and favicon: red "B" with a deep-navy location pin.
- Core palette is red and deep navy; the brief allows evolving the surrounding system while keeping these recognizable.
- Voice: plain, warm, direct Brazilian Portuguese; no corporate jargon.

## Evidence on Hand

- Five real FAQ entries (`src/data/faq-questions.ts`).
- Eight real packing/planning tips (`src/data/tips.ts`).
- Real service description and WhatsApp number via `NEXT_PUBLIC_WHATSAPP_NUMBER`.
- Illustration assets in `public/images/` (truck, stamp, shield, Storyset figures).

## Product Principles

1. Make the real person and the real truck visible; trust comes from specificity, not claims.
2. The quote is one obvious action, reachable from any point of the page.
3. Answer objections before they are asked: service area, cargo types, timing, scheduling.
4. Speak like the driver talks — short, concrete, no freight-industry abstraction.
5. Never invent proof. Build credibility from real answers, real service details, and craft.

## Accessibility & Inclusion

Standard web accessibility: keyboard-operable dialog and menus, visible focus, sufficient contrast in both themes, reduced-motion support.
