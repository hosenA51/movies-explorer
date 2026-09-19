# 🎬 Movie Explorer

A responsive movie and TV show discovery application built with **React**, **React Router**, **Tailwind CSS**, and the **TVMaze API**.

Movie Explorer allows users to browse available shows, search for specific titles, view ratings and genres, and explore detailed information about individual titles.

---

## 🌐 Live Demo

🔗 **Live Website:** [Add your Netlify/Vercel live link here]

## 📦 GitHub Repository

🔗 **GitHub:** [Add your GitHub repository link here]

---

## ✨ Features

### 🏠 Home Page

* Modern and responsive hero section
* Application branding and navigation
* Movie discovery-focused introduction
* Call-to-action buttons
* Responsive design for different screen sizes

### 🎬 Movie Listing

* Fetches shows from the TVMaze API
* Displays movie/show posters
* Shows title, release year, rating, genres, and summary
* Responsive grid layout
* Reusable movie card component

### 🔎 Search

* Search movies/shows by title
* Uses the TVMaze search API
* Search results update dynamically
* Debounced search requests
* Search loading state
* Empty search result state
* Clear search functionality

### 📋 Movie Details

* Dedicated dynamic details page
* Large poster/image
* Title and show type
* Rating
* Release year
* Runtime
* Genres
* Overview/summary
* Language
* Status
* Network/Web channel
* Premiered date
* Official website link when available

### ⚡ User Experience

* Loading indicators
* Error handling
* Retry functionality
* Image fallback when a poster is unavailable
* Responsive mobile navigation
* Custom 404 page
* Smooth hover interactions

---

## 🛠️ Technologies Used

* **React**
* **JavaScript (ES6+)**
* **React Router**
* **Tailwind CSS**
* **TVMaze API**
* **Fetch API**
* **Vite**

---

## 📡 API

This project uses the free **TVMaze API** for movie/show data.

### Get All Shows

```text
https://api.tvmaze.com/shows
```

Used to fetch the available shows displayed on the movie listing page.

### Search Shows

```text
https://api.tvmaze.com/search/shows?q=:query
```

Used to search for shows by title.

### Show Details

```text
https://api.tvmaze.com/shows/:id
```

Used to retrieve detailed information about a specific show.

---

## 📱 Responsive Design

The application is designed to work across different screen sizes.

### Mobile

* Single-column movie layout
* Responsive navigation menu
* Touch-friendly buttons
* Stacked movie details

### Tablet

* Multi-column movie grid
* Responsive spacing and typography

### Desktop

* 3–4 column movie grid
* Expanded navigation
* Optimized movie details layout

---

## 🚀 Getting Started

Follow the steps below to run the project locally.

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project directory

```bash
cd movie-explorer
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:5173
```

---

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## ☁️ Deployment

This project can be deployed using platforms such as:

* Netlify
* Vercel
* GitHub Pages

For Netlify deployment, the typical Vite settings are:

```text
Build command:
npm run build

Publish directory:
dist
```

Because this application uses React Router, the `public/_redirects` file should contain:

```text
/*    /index.html   200
```

This allows direct access to routes such as:

```text
/movies
/movies/1
/movies/2
```

after deployment.

---

## 🎯 Assignment Requirements Covered

The project implements the main requirements of the Movie Explorer assignment:

* ✅ React-based application
* ✅ Responsive Home Page
* ✅ Application logo/brand
* ✅ Navigation links
* ✅ Movie listing page
* ✅ Search by movie/show title
* ✅ TVMaze API integration
* ✅ Reusable movie cards
* ✅ Poster images
* ✅ Movie/show title
* ✅ Release year/date
* ✅ Rating
* ✅ See Details functionality
* ✅ Responsive grid layout
* ✅ Loading state
* ✅ Error handling
* ✅ Responsive design
* ✅ Public GitHub repository
* ✅ Live deployment

---

## 📸 Screenshots

Add screenshots of your project here after deployment.

### Home Page

```text
[ Add Home Page Screenshot ]
```

### Movie Listing

```text
[ Add Movie Listing Screenshot ]
```

### Movie Details

```text
[ Add Movie Details Screenshot ]
```

### Mobile View

```text
[ Add Mobile Screenshot ]
```

---

## 👨‍💻 Author

**Hosen Ahmed**

Frontend Developer & Aspiring Full-Stack AI Integration Developer

---

## 📄 License

This project was created for educational and assignment purposes.

Movie and TV show data are provided by the **TVMaze API**.

---

## 🙏 Acknowledgements

* [TVMaze](https://www.tvmaze.com/) — API and show data
* React — Frontend library
* React Router — Client-side routing
* Tailwind CSS — Styling
* Vite — Development and build tooling
