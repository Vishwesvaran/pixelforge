# 🧠 PixelForge -- AI Image SaaS Platform

PixelForge is a full-stack AI-powered image processing SaaS platform
that combines cutting-edge machine learning features with seamless user
experience and secure payment integration. Designed for creators,
developers, and professionals, it provides advanced AI image
transformation tools to elevate productivity and creativity.

------------------------------------------------------------------------

## ⚙️ Tech Stack

-   **Frontend:** Next.js, TypeScript, TailwindCSS, Shadcn
-   **Backend:** MongoDB, Cloudinary, Stripe, Clerk Authentication
-   **Architecture:** Modular, scalable, and reusable codebase for
    maintainability and future scalability.

------------------------------------------------------------------------

## 🔋 Features

👉 **Authentication and Authorization**\
Secure user access with Clerk for registration, login, and protected
routes.

👉 **Community Image Showcase**\
Explore user-generated image transformations with pagination for
effortless navigation.

👉 **Advanced Image Search**\
Search images based on content or detected objects intelligently and
accurately.

👉 **AI Image Tools**\
Includes multiple AI-powered image capabilities: - 🖼️ Image Restoration:
Repair and revive old or damaged images. - 🎨 Image Recoloring: Change
colors of objects or sections within images. - ✂️ Object Removal:
Precisely remove unwanted elements. - 🪄 Generative Fill: Fill missing
parts of images using AI. - 🧍 Background Removal: Extract subjects
cleanly from backgrounds.

👉 **Transformation Management**\
Edit, delete, or view detailed transformation data.

👉 **Credits System**\
Earn or purchase credits to perform image transformations with balance
tracking.

👉 **Stripe Integration**\
Securely purchase credits via Stripe for uninterrupted use.

👉 **Profile Dashboard**\
View personal transformations, credits, and manage your account
efficiently.

👉 **Responsive Design**\
Built with TailwindCSS and Shadcn for seamless experience across
devices.

------------------------------------------------------------------------

## 🚀 Quick Start

Follow these steps to set up the project locally on your system.

### Prerequisites

Ensure the following tools are installed: - Git\
- Node.js\
- npm (Node Package Manager)

### Cloning the Repository

``` bash
git clone https://github.com/Vishwesvaran/pixelforge.git
cd pixelforge
```

### Installation

Install dependencies using:

``` bash
npm install
```

### Environment Variables

Create a `.env.local` file in your project root and add:

``` bash
#NEXT
NEXT_PUBLIC_SERVER_URL=

#MONGODB
MONGODB_URL=

#CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

#CLOUDINARY
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

#STRIPE
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

Replace placeholder values with your real credentials from **Clerk**,
**MongoDB**, **Cloudinary**, and **Stripe**.

------------------------------------------------------------------------

### Running the Project

Start the development server:

``` bash
npm run dev
```

Then open <http://localhost:3000> in your browser to view the app.

------------------------------------------------------------------------

## 🧩 Architecture Overview

PixelForge follows a modular and scalable structure:

    /app
     ┣ 📂(auth)       → Authentication pages and routes
     ┣ 📂(api)        → API endpoints for transformations, users, and payments
     ┣ 📂(dashboard)  → User dashboard and profile management
     ┣ 📂(transform)  → Image processing functionalities
     ┣ 📂components   → Reusable UI components (Shadcn + Tailwind)
     ┣ 📂lib          → Utility and helper functions
     ┣ 📂constants    → App-wide constants and configurations
     ┗ 📜middleware.ts → Route protection and authorization logic

------------------------------------------------------------------------

## 💳 Payment Integration

Stripe enables secure credit-based purchases. All transactions are
verified with webhooks for fraud prevention and accurate credit
assignment.

------------------------------------------------------------------------

## ☁️ Cloudinary Integration

Used for image storage and optimized delivery. All images processed via
AI are securely uploaded and managed in Cloudinary for performance and
scalability.

------------------------------------------------------------------------

## 🔐 Authentication with Clerk

PixelForge leverages Clerk for modern, passwordless authentication with
support for Google, GitHub, and email-based sign-ins.

------------------------------------------------------------------------

## 🧠 AI Functionalities

PixelForge integrates advanced AI models for various image tasks: -
Restoration - Recoloring - Object Removal - Generative Fill - Background
Removal

Each feature is built to provide realistic, high-quality results with
minimal user input.

-----------------------------------------------------------------------

## 🤝 Credits

**Inspired by the work of [Adrian Hajdin](https://github.com/adrianhajdin)**  
Tutorial reference: [YouTube – Ahwoks_dawU](https://www.youtube.com/watch?v=Ahwoks_dawU)

…

## 💡 Author & Credit

Created and maintained by **Vishwesvaran M**  
This project is heavily inspired by Adrian Hajdin’s work and the YouTube tutorial linked above.

…

