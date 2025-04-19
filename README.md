📺 YouTube Clone
A modern YouTube-like video streaming platform built using React, Redux Toolkit, TailwindCSS, and other powerful libraries. This project replicates many core features of YouTube, including video browsing, search suggestions, live chat, and more.

🚀 Features
✅ YouTube-Like Experience
UI closely mirrors YouTube’s layout and functionality.

🎥 Video List
Fetches and displays videos from the YouTube API.

Supports pagination and lazy loading for smoother browsing.

🔍 Smart Search
Displays search suggestions while typing.

Optimized with debouncing (to reduce unnecessary API calls).

Uses caching to quickly show previous search results.

📽️ Video Preview
Clicking a video opens a preview window.

Shows the video along with its title, description, and view count.

💬 Comments Section
Shows threaded YouTube comments.

Allows users to read and post replies.

💬 Live Chat (Real-Time)
Live chat using API polling.

Continuously fetches new messages and updates the UI in real-time.

⚡ Performance Optimizations
Debounced scrolling: Limits API calls while scrolling.

Efficient rendering using best practices for large-scale applications.

🛠️ Getting Started
1. Clone the Repository
git clone https://github.com/your-username/youtube-clone.git
cd youtube-clone
2. Install Dependencies
npm install
3. Setup Environment Variables
Create a .env file in the root directory and add your YouTube API key:
REACT_APP_GOOGLE_API_KEY=your-api-key
4. Start the Development Server
npm run dev
5. Open in Browser
Visit: http://localhost:5173/

📦 Dependencies
This project uses the following major libraries:

React – UI Framework

Redux Toolkit – State management

TailwindCSS – Styling

React Router DOM – Routing

React Icons – Icon library

Moment.js – Date formatting

All dependencies are listed in package.json.

📌 Conclusion
This YouTube Clone is a great example of building a feature-rich, modern web app using React and supporting tools. It demonstrates:

API integration

Real-time updates via polling

Debounced & cached search

Scalable UI with TailwindCSS

Modular and maintainable codebase

Use this project as a foundation or learning resource for building powerful, scalable front-end apps.

