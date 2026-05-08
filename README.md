# News MERN App(A complete full stack web applicataion)

A full-stack MERN application that fetches News stories, allows users to register/login using JWT authentication, and bookmark stories.


# Project Flow

1. Created backend using Node.js and Express.js
2. Connected MongoDB database using Mongoose
3. Created scraper using Axios and Cheerio
4. Scraped Hacker News stories and stored them in MongoDB
5. Built frontend using React.js
6. Displayed stories with title, author, points, and time
7. Added JWT Authentication (Login/Register)
8. Added Bookmark functionality
9. Created protected Bookmarks page

# Features

- User Registration
- User Login Authentication
- JWT Protected Routes
- Fetch  News Stories
- Bookmark Stories
- Remove Bookmarks
- View Bookmarked Stories
- Responsive UI
- MongoDB Database Integration



# Tech Stack

## Frontend
- React.js
- React Router DOM
- Axios
- CSS

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

---

# Project Structure

```bash
frontend/
│
├── src/
│   ├── Pages/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Stories.jsx
│   │   └── Bookmarks.jsx
│   │
│   ├── App.jsx
│   └── App.css
│
backend/
│
├── controllers/
├── routes/
├── middleware/
├── Models/
├── Scraper/
└── server.js