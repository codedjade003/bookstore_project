# Bookstore App Documentation

## Overview
This is an AI-powered bookstore application featuring a **book inventory system**, **AI-powered blog**, and **chatbot support**. The application is built using modern web technologies and follows an appealing design for an enhanced user experience.

## Features
- **Book Inventory System**: Manage books with CRUD operations.
- **AI-Powered Blog**: Auto-generates daily blog posts using AI.
- **Chatbot Integration**: AI-powered chatbot for customer queries.
- **Modern UI**: Styled with TailwindCSS and Flowbite components.
- **Secure API**: Backend developed using Express and MongoDB.
- **Scheduled Tasks**: Uses `node-cron` to automate blog generation.
- **Book Search Feature**: Uses Open Library's Book Search API for a Book search feature.

## Installation
Make sure you have your environment variables set up and ready for installation. You'll need the following Environment Variables and APIs
[MongoDB](cloud.mongodb.com),
[HuggingFace](huggingface.co),
[Firebase](console.firebase.google.com)

### Frontend Setup
```sh
cd frontend
npm install
npm install -D tailwindcss@3.3.3 postcss autoprefixer
npm install react-router-dom localforage match-sorter sort-by
npm install swiper
npm i flowbite-react
npm install react-icons
npm install firebase
npm install dotenv
```
after that, create a .env file and copy the content of the .env.development.local file into it
```sh
touch .env
cp .env.development.local .env
```
after that, run this to start the client
```sh
npm run dev
```

NOTE: Firebase does not allow access to all domains, if you're using a cloud codespace like github or gitpod, be sure to whitelist the domain before proceeding, else certain features (i.e google sign in) may not work

# create a new terminal for the backend setup

### Backend Setup
```sh
cd backend
npm install express cors mongodb dotenv mongoose node-cron @huggingface/inference nodemon
```
after that, create a .env file and copy the content of the .env.development.local file into it
```sh
touch .env
cp .env.development.local .env
```

replace with your own apis and run this to start the server
```sh
npm start
```
feel free to use postman to add some books to a mongodb database

## APIs Used
- **Hugging Face Inference API**: Used for AI-generated blog posts and chatbot responses.
- **MongoDB Atlas**: Database for storing books, users, and blog content.
- **Firebase**: Authentication and real-time storage (if implemented).
- **Postman**: API testing and documentation.

## Deployment
The application is **not yet deployed**, but deployment instructions will be added later.

## License
Licensed under **Apache 2.0**.

## Credits
Special thanks to the following developers and tools for making this project possible:
- **Chatbase Devs**
- **Flowbite Devs**
- **Swiper Devs**
- **React DOM Devs**
- **Hugging Face Devs**
- **Tailwind Devs**
- **Firebase Devs**
- **Postman Devs**

### Special Shoutout
A special thanks to **Md Al Mamun YouTube Channel** for the video build guide, images, and assets used in the project.

---
This documentation will be updated with deployment details once the application goes live.

