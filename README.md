# 🚀 Arun Prabhu | Technical Blog & Portfolio

Welcome to my personal developer hub and technical blog. This repository houses my cloud engineering portfolio, project case studies, and deep-dive technical articles. 

Built with the [Hugo Toha Theme](https://github.com/hugo-themes/toha) and automatically deployed via [Vercel](https://vercel.com).

---

## 🛠️ Tech Stack & Architecture

- **Static Site Generator:** [Hugo Extended](https://gohugo.io) (v0.163.0+)
- **Theme:** Toha v4 (Managed via Hugo/Go Modules)
- **Styling & Assets:** Tailwind CSS & Node.js ecosystem
- **Hosting & CI/CD:** Vercel Global Edge Network

---

## 💻 Local Development

Ensure you have **Hugo Extended**, **Go**, and **Node.js** installed on your system before running the site locally.

### 1. Clone the Repository
```bash
git clone https://github.com
cd tech-blog
```

### 2. Install Dependencies & Tidy Modules
```bash
# Fetch and synchronize the remote Toha theme assets
hugo mod tidy

# Pack theme-specific Node.js requirements and install them
hugo mod npm pack
npm install
```

### 3. Spin Up the Development Server
```bash
hugo server -w
```
Navigate to `http://localhost:1313/` in your browser to view your live changes.

---

## 📂 Project Structure

- `/assets/images/author/` ➔ Contains profile avatars and branding assets.
- `/content/posts/` ➔ Markdown documentation sheets and technical articles.
- `/data/` ➔ Multilingual configuration datasets (`en/`, `fr/`) for portfolio timelines, experience metrics, and skill sets.
- `hugo.yaml` ➔ Main configuration engine governing navbar layouts, branding flags, and feature parameters.

---

## 🚀 Deployment

This site is wired with native Git-integration. Every push to the `main` branch triggers an isolated production build environment on **Vercel** with the following override configurations:

- **Framework Preset:** Hugo
- **Build Command:** `hugo mod npm pack && npm install && hugo --gc --minify`
- **Environment Variables:** `HUGO_VERSION = 0.163.0`
