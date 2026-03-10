# Modern React Portfolio Website

A modern, responsive portfolio website built using React functional components, Tailwind CSS, React Router, and Framer Motion.

## Features

- Fixed responsive navbar with mobile hamburger menu
- Home, About, Skills, Projects, Education, Resume, and Contact sections/pages
- Dark professional gradient theme
- Framer Motion animations
- Smooth scrolling behavior
- Responsive layout for mobile, tablet, and desktop

## Required npm Packages

Install these packages:

```bash
npm install react-router-dom
npm install tailwindcss
npm install framer-motion
npm install react-icons
```

Or install all at once:

```bash
npm install react-router-dom tailwindcss framer-motion react-icons @tailwindcss/vite
```

## Installation Steps

1. Clone or download the project.
2. Open terminal in the project folder.
3. Install dependencies:

```bash
npm install
```

4. Start development server:

```bash
npm run dev
```

5. Open the local URL shown in terminal (usually `http://localhost:5173`).

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```text
src/
	components/
		Navbar.jsx
		Footer.jsx
	sections/
		Home.jsx
		About.jsx
		Skills.jsx
		Projects.jsx
		Education.jsx
		Resume.jsx
		Contact.jsx
	App.jsx
	main.jsx
	index.css
```

## Notes

- Update placeholder links (GitHub, LinkedIn, project demos, email, phone) with your own details.
- Replace the sample resume URL used in `src/sections/Resume.jsx` with your own resume PDF file link.
