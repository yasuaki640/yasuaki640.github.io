# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is yasuaki640's personal portfolio website (yasuaki640.github.io) - a static HTML site with JavaScript enhancements. The site is performance-optimized with lazy-loaded fonts and CSS, using Web API features for animations and page view tracking.

## Development Commands

- `npm run prettier` - Format code using Prettier (only dev dependency)
- No build process required - static HTML site served directly from repository

## Architecture

### Structure

- **index.html** - Main portfolio page with Japanese content
- **assets/css/** - Styling with main.css (custom styles) and reset.css
- **assets/js/** - Two main JavaScript modules:
  - `increment-count.js` - Page view counter with external API integration
  - `marquee.js` - Animated marquee text using Web Animations API
- **assets/fonts/** - Self-hosted Noto Sans JP fonts (regular + bold)
- **assets/images/** - Optimized WebP images (background, portrait)
- **assets/icons/** - Social media platform icons
- **resume.md** - Japanese resume/CV linked from main page

### Key Features

- **Page View Counter**: Uses external Cloudflare Workers API at `page-view-counter-api.yasuaki640.workers.dev` with localStorage-based visitor ID generation
- **Performance Optimizations**: Lazy-loaded fonts and CSS using `media="print" onload="this.media='all'"` pattern
- **Animations**: CSS marquee effect enhanced with Web Animations API for smooth scrolling
- **Responsive Design**: Viewport meta tag and mobile-optimized layout

### Technical Patterns

- Self-contained vanilla JavaScript modules (no external dependencies)
- WebP image format for optimal loading
- Font subsetting for Japanese/Latin characters only
- External links use proper `rel="noopener noreferrer"` security attributes

## Site Content

Portfolio site for yasuaki640, a Japanese programmer specializing in web development (TypeScript, PHP, Java), with sections for self-introduction, resume, social links, personal motto, and hobbies.
