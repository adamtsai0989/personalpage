# Personal Portfolio Page

A personal portfolio website built to demonstrate various frontend technologies and React concepts. The site showcases past projects, provides a brief introduction, displays work experiences via a modal, and includes a contact form — all within a multi-page SPA with dark mode support.

## Background

This project was created as a hands-on demonstration of commonly used React patterns and frontend tooling. Rather than a static page, it puts several concepts in practice together: client-side routing, component-driven UI, markdown rendering, third-party email integration, icon libraries, dark/light theming, and a responsive Tailwind CSS layout.

## Technologies

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI component library |
| [Vite 7](https://vite.dev/) | Build tool and dev server |
| [React Router DOM 7](https://reactrouter.com/) | Client-side routing |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first CSS styling |
| [React Icons 5](https://react-icons.github.io/react-icons/) | Icon components (FontAwesome, Material Design, etc.) |
| [react-markdown 10](https://github.com/remarkjs/react-markdown) | Rendering Markdown content in React |
| [EmailJS](https://www.emailjs.com/) | Sending emails from the contact form without a backend |
| [Firebase](https://firebase.google.com/) | Hosting and deployment |
| [ESLint](https://eslint.org/) | Code linting |

## Features

- **Multi-page routing** — separate pages for Home, Projects, Contact, Markdown demo, and Introduction, powered by React Router
- **Project showcase** — clickable image grid linking to live deployed React projects (reservation app, flashcard app, decoder app, recipe app)
- **Introduction page** — profile photo and bio rendered from a Markdown file with custom-styled components
- **Experience modal** — work experience details shown in an overlay modal triggered by a button
- **Contact form** — sends email directly via EmailJS with name, email, subject, and message fields
- **Dark / light mode toggle** — theme persisted to `localStorage`, applied via Tailwind's `dark` class
- **Markdown page** — standalone page that renders a `.md` file to demonstrate `react-markdown`
- **Social icons** — React Icons used to display links on the contact page

## Installation

**Prerequisites:** Node.js 18+

```bash
# 1. Clone the repository
git clone <repo-url>
cd personalpage

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173` by default.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server with hot reload |
| `npm run build` | Build for production (output in `build/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint on the source files |

## Deployment

This project is configured for Firebase Hosting. After building, deploy with:

```bash
npm run build
firebase deploy
```
