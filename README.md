# Your Office Partners · Digital Business Card

A two-screen, mobile-first employee card built with React + Vite.

1. **Profile**: name, role, Save contact, Call, then WhatsApp / Email / LinkedIn rows.
2. **Company**: logo, short description, website and location buttons.

## Run it

```bash
npm install
npm run dev
```

Build for production with `npm run build`. The output goes to `dist/`.

## Employees and URLs

One site, one domain, one page per employee:

| URL | Employee | Contact file |
|---|---|---|
| `/` and `/saleem` | Mohamed Saleem, Founder & CEO | `/mohamed-saleem.vcf` |
| `/habeeb` | Habeeb Mohamed, HR Executive | `/habeeb.vcf` |
| `/farhan` | Mohamed Farhan, Tax & Accounting Executive | `/farhan.vcf` |

Addresses are forgiving: `/Habeeb/` opens Habeeb's card, and any unknown address shows the default card (Saleem).

## Change the details

Everything shown on the cards lives in **`src/config.js`**: the `employees` list plus the shared company text and links. The build creates each employee's page (`/<slug>/index.html`, with their name in the tab title and link previews) and their contact file from the same data, so the card and the saved contact always match.

To add an employee, copy one block in `employees`, change the values and give it a new `slug` (lowercase, no spaces). Leave `linkedin` empty to hide that row. Rebuild and redeploy.

Restart `npm run dev` after editing `config.js` so the contact files pick up the change.

Brand images are in `public/brand/`:

- `yop-logo.png`: full logo in brand plum and gray, used on the company screen
- `yop-mark.png` / `yop-mark-white.png`: the diamond-and-check mark

Both were recoloured from the official logo on yourofficepartners.com.

## How Save contact works

The button links to a real `.vcf` (vCard 3.0) file:

- **iPhone (Safari)**: opens the native contact sheet. Tap **Create New Contact**.
- **Android (Chrome)**: downloads the file. Opening it launches Contacts to import it.
- **Desktop**: downloads the file.

For iPhone to show the contact sheet, the host has to serve `.vcf` files as `text/vcard`. This is already set up for:

- **Netlify / Cloudflare Pages**: `public/_headers`
- **Vercel**: `vercel.json`
- **Apache / cPanel**: `public/.htaccess`

On any other host, add the MIME type `text/vcard` for `.vcf`.

In-app browsers (the ones inside Instagram, LinkedIn and similar apps) sometimes block downloads. If the button does nothing there, open the link in Safari or Chrome.
