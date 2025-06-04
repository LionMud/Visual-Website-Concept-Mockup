# The Pizza Mafia – Story-First Homepage

## Overview
A bold, mafia-inspired pizza homepage built for storytelling and developer velocity. Uses React component structure, CSS modules, and is ready for Netlify/Vercel deployment.

## Structure
```
/public/images/           # All mascot, pizza, and brand images
/src/pages/index.jsx      # Main homepage
/src/components/          # All layout/story components
/src/styles/PizzaMafiaHome.module.css  # All mafia theme styles
```

## Tech Stack
- React (or Next.js/Remix)
- CSS Modules
- Netlify/Vercel ready
- GitHub for version control

## Visual Guide
- **Colors:** #0A0A0A (black), #E50914 (mafia red), #FFD700 (gold), #fff (white)
- **Fonts:** Cinzel Decorative (headers), Roboto Mono (body)
- **Image Style:** High-contrast, shadow-heavy, dramatic
- **FX:** Neon glows, gold hover, scroll/fade-in, parallax

## Getting Started
1. Clone the repo
2. Install dependencies (`npm install`)
3. Run locally (`npm run dev` or `npm start`)
4. Deploy to Netlify or Vercel for instant previews

## Accessibility
- All images have alt text
- ARIA labels and keyboard navigation for interactive elements

## Customization
- Swap images in `/public/images/`
- Edit story/sections in `/src/components/`
- Tweak theme in `/src/styles/PizzaMafiaHome.module.css`

---

# The Pizza Mafia – Developer Guide

## 🚀 Quick Start

1. **Install Node.js (if not already installed):**
   - [Download Node.js](https://nodejs.org/)

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the site locally:**
   ```sh
   npm run dev
   ```
   - Visit [http://localhost:3000](http://localhost:3000)

4. **Edit your site:**
   - Pages: `/src/pages`
   - Components: `/src/components`
   - Styles: `/src/styles/PizzaMafiaHome.module.css`
   - Images: `/public/images`

5. **Contact/Order Form:**
   - The form on the homepage is fully wired to a Netlify Function (`/netlify/functions/contact.js`).
   - Submissions are handled automatically—no extra setup needed.

6. **Deploy:**
   - Push to GitHub. Netlify will auto-deploy your site and serverless functions.

---

## 🛠️ Recommended VS Code Extensions

- **Prettier – Code formatter**
- **ESLint**
- **Netlify Extension for VS Code**
- **ES7+ React/Redux/React-Native snippets**
- **GitHub Pull Requests and Issues**
- **Path Intellisense**

---

## 🧩 Project Structure

- `/src/pages` – Main pages (index, about, menu, etc.)
- `/src/components` – Reusable UI components
- `/src/styles/PizzaMafiaHome.module.css` – Central styles
- `/public/_redirects` – SPA routing for Netlify
- `/netlify/functions/contact.js` – Serverless backend for forms
- `/NYP-Market-infographic/index.html` – Static visual mockup (for reference only)

---

## 🧑‍💻 Troubleshooting

- **Form not working?**
  - Make sure you are running the site with `npm run dev` and deploying to Netlify for serverless functions.
- **404 on page refresh?**
  - The `_redirects` file in `/public` handles SPA routing for Netlify.
- **Styling issues?**
  - Edit `/src/styles/PizzaMafiaHome.module.css` for all main styles.

---

## 📄 How to Extract All Content from Your PDF (Automatic Workflow)

1. **Install Poppler for Windows:**
   - Download from: https://github.com/oschwartz10612/poppler-windows/releases/
   - Unzip to a folder (e.g., `C:\poppler\`).
   - Add `C:\poppler\Library\bin` to your system PATH.

2. **Place your PDF in the project root.**
   - Example: `Pizza Mafia Curaçao – Deep Research Report.pdf`

3. **Run the extraction script:**
   - Open a PowerShell terminal in your project folder.
   - Run:
     ```pwsh
     ./extract_pdf_content.ps1
     ```
   - This will create:
     - `src/content/research-report.txt` (all text from the PDF)
     - Images in `public/images/` (named `pizzamafia_img-000.png`, etc.)

4. **Integrate into your site:**
   - Copy/paste each concept, section, or source from `research-report.txt` into the appropriate JSON file in `src/content/sections/` (e.g., `about.json`).
   - Reference the extracted image filenames in the `images` array in your JSON files.
   - Your React site will update automatically—no code changes needed.

5. **Repeat for any new PDF!**

---

## 🔑 Where to Put API Keys and Secrets

- Use the `.env.local` file in your project root for all API keys and secrets.
- Example:
  ```env
  OPENAI_API_KEY=sk-...
  GOOGLE_API_KEY=...
  NETLIFY_FUNCTION_SECRET=...
  ```
- **Never commit `.env.local` to GitHub!** (Add it to your `.gitignore` if not already.)
- In React/Next.js, use `process.env.NEXT_PUBLIC_...` for variables needed in the browser, and `process.env.XXX` for server-only secrets (like in Netlify Functions).
- In Netlify Functions, access secrets with `process.env.YOUR_KEY`.

---

## 💡 Need More?
- Want AI, Google integration, or a CMS? Just ask!
- For any feature or fix, describe what you want and it will be added for you.

---

*Welcome to the Family.*

Last updated: June 4, 2025
