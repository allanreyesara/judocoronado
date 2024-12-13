# Sports page using MERN

## This is a work in progress

## You can see the live version at https://judocoronado.com/


## Setup
-Clone the code

```
gh repo clone allanreyesara/judocoronado
```

-Build

```
npm install && npm install --prefix frontend && npm run build --prefix frontend
```
-Start

# Database setup

You will need accounts in `https://mongodb.com` and `https://cloudinary.com/` then you need to create an .env file in the root folder with this format:

```
MONGO_URI=<MONGO_URI>
PORT=<PORT:5000>
JWT_SECRET=<JWT_SECRET>
NODE_ENV=development

CLOUDINARY_CLOUD_NAME=<CLOUDINARY_CLOUD_NAME>
CLOUDINARY_CLOUD_KEY=<CLOUDINARY_CLOUD_KEY>
CLOUDINARY_API_SECRET=<CLOUDINARY_API_SECRET>
```

# FrontEnd

```
cd frontend
```
```
npm run dev
```

# Backend

```
cd backend
```
```
npm start
```




## Skills used in the project:

⚛️ Tech Stack: React.js, MongoDB, Node.js, Express, Tailwind

🔐 Authentication with JSONWEBTOKENS (JWT)

🔥 React Query for Data Fetching, Caching etc.

👥 Athlete profile with results and information

✍️ Trainer profile to manage performance on athletes

💬 Contact page

❤️ Home page for sport club

📝 Recent results, tournament countdown

🖼️ Edit Cover Image and Profile Image

📷 Image Uploads using Cloudinary
