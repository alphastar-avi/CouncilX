# Project Development Log

This document outlines the steps taken to develop the Council X website.

## 1. Initial Setup

- Created the basic project structure with `index.html`, `style.css`, and `script.js` files.
- Added the basic HTML5 boilerplate to `index.html`.

## 2. Content Integration

- Added the content provided by the user to the `index.html` file.
- The content was structured into `<header>`, `<main>`, and `<footer>` sections.

## 3. Styling

- Designed a dark-themed, professional-looking website using CSS.
- Focused on typography, spacing, and a clean layout.
- Implemented responsive design using media queries to ensure the website looks good on different screen sizes.
- Centered the main content text as requested by the user.
- Adjusted the font size and vertical position of the text based on user feedback.

## 4. On-scroll Animations

- Implemented on-scroll fade-in animations for the main sections of the page.
- Used the Intersection Observer API to detect when elements enter the viewport.
- Added a `data-animation` attribute to the HTML elements to be animated.
- Created a `.is-visible` class in CSS to trigger the animation.

## 5. Typography Animations

### Letter-by-letter animation

- Implemented a letter-by-letter fade-in and slide-up animation for the `h1` and `h3` headings.
- Used JavaScript to split the text of the headings into individual letters, each wrapped in a `<span>` element.
- Applied a CSS transition with a delay to each letter to create the animation effect.

### Shuffle animation

- Implemented a shuffling text animation for the paragraphs in the main content, as requested by the user.
- Used the `splitting.js` library to split the text into characters.
- Used the `TypeShuffle` class from a Codrops reference to create the shuffle effect.
- Integrated the `splitting.js` library using a CDN.
- Added the `TypeShuffle` class and its dependencies to the `script.js` file.
- Triggered the animation using the Intersection Observer API when the paragraphs enter the viewport.

## 6. Debugging

The development process involved several debugging steps:

- **Animation not working:** The shuffle animation was not working initially. I used `alert()` statements to debug the JavaScript code and found that the Intersection Observer was not being triggered. This was due to a broken `index.html` file with duplicated content.
- **Blank page:** The page appeared blank at one point. This was caused by incorrect CDN links for the `splitting.js` library. I fixed this by updating the URLs in the `index.html` file.
- **JavaScript errors:** I encountered `SyntaxError: Can't create duplicate variable: 'Cell'` and `ReferenceError: Can't find variable: Splitting`. I fixed these errors by rewriting the `script.js` file to avoid duplicate declarations and by using the correct CDN links for `splitting.js`.
