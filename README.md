ProjectX - Community Empowerment Exchange (CEE) Frontend
Built With React
App Concept: Community Empowerment Exchange (CEE)

Core Idea:
ProjectX (Community Empowerment Exchange) is a platform built to foster community collaboration, skill trading, and mutual aid. It empowers users to exchange skills, request assistance, and contribute to crowdfunding for community projects. The platform focuses on building local connections and making it easier for users to help one another, either by offering skills, completing small tasks, or contributing to larger projects.

This repository contains the frontend code for ProjectX.

Backend repo: ProjectX Backend Repository
Key Features

    Skill Exchange Barter:
    Users can trade skills or services without needing to exchange money.
    Example: “I’ll design your logo if you help me with content writing.”

    Neighborhood Assistance:
    Users can view tasks based on their location and offer or request help.
    Example: “Need someone to walk my dog on Saturday.”

    Crowdfunding & Task Completion Hybrid:
    Users can request both funding and volunteers for projects that benefit the community.
    Example: A user posts a community garden project, asking for donations and help with planting.

    Mutual Aid Network:
    A section where users can post requests for urgent help or offer resources to others.
    Example: “Looking for groceries” or “I have extra clothes to donate.”

    AI-Powered Matching & Recommendations:
    AI recommends users based on skills and location, offering personalized suggestions.

Tech Stack
Frontend

    React: For building the user interface.
    Redux: For state management across the application.
    React Router: For routing and navigation between different pages.
    Axios: For handling HTTP requests to the backend API.
    Google Maps Platform: For rendering maps in the Neighborhood Assistance feature, showing nearby tasks.
    Tailwind CSS: For a responsive and consistent design framework.
    Firebase Authentication: For secure user sign-in and sign-up.
    Cloudinary: For managing and storing user-uploaded images (if applicable).

Installation & Setup

Follow these steps to run the frontend locally:
Prerequisites:

    Node.js - Download and install Node.js from here.
    npm or yarn - Make sure you have npm (comes with Node.js) or yarn installed globally.

Steps:

    Clone this repository to your local machine:

    bash

git clone https://github.com/philiptitus/xproj.git

Navigate to the project directory:

bash

cd xproj

Install the dependencies:

bash

npm install

Set up the environment variables:
Create a .env file at the root of the project and add any required API keys (e.g., Google Maps API key, Firebase configuration). Example:

bash

REACT_APP_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
REACT_APP_FIREBASE_API_KEY=your-firebase-api-key

Start the development server:

bash

    npm start

    Open your browser and navigate to http://localhost:3000 to access the app locally.

Build for Production:

To create a production build, run the following command:

bash

npm run build

Project Structure

bash

src/
├── assets/         # Static images, icons, and other assets
├── components/     # Reusable UI components (buttons, cards, forms, etc.)
├── containers/     # Larger components (pages or sections of the app)
├── services/       # API call handlers (e.g., Axios instances)
├── store/          # Redux store configuration
├── styles/         # Global styles (CSS, Tailwind, etc.)
├── utils/          # Utility functions and helpers
├── App.js          # Main app component with routing logic
└── index.js        # Entry point of the app

API Integration

ProjectX uses Axios to interact with the backend, which can be found here. Below are some key API integrations:

    Skill Exchange Barter API:
    Fetches available skill exchange offers and allows users to negotiate trades.

    Neighborhood Assistance API:
    Lists nearby tasks and assistance requests based on user location.

    Crowdfunding API:
    Posts projects needing funding or volunteer help and tracks progress.

    Mutual Aid Network API:
    Allows users to post or respond to requests for mutual aid.

Each API call is handled in the services/ directory using Axios, and the responses are stored in the Redux state for easy access across the app.
Features In Development

ProjectX is still actively being developed. The following features are planned or in progress:

    Community Engagement Metrics:
    Track how much users contribute to their community, whether through volunteering, skill trading, or donating.

    AI-Powered Task Suggestions:
    AI will automatically suggest tasks or projects that match a user’s skills and location.

    Enhanced Push Notifications:
    Push notifications to alert users of nearby tasks, opportunities for mutual aid, or skill trades.

Contributions

Contributions are welcome! If you’d like to contribute to ProjectX’s frontend, please follow these steps:

    Fork this repository.
    Create a new branch for your feature:

    bash

git checkout -b feature/my-new-feature

Make your changes and commit them:

bash

git commit -m "Add some feature"

Push to the branch:

bash

    git push origin feature/my-new-feature

    Open a pull request.

Contact

For any questions or inquiries, feel free to reach out:

    Author: Philip Titus
    Email: mrphilipowade@gmail.com
    GitHub: https://github.com/philiptitus

© 2024 Philip Titus - All Rights Reserved.
