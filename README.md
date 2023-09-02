# USER-AUTH

live link: https://user-authentication1.onrender.com

## Introduction

Welcome to the User Authentication project! This project demonstrates how to implement user authentication and authorization in your web application using Passport.js for local authentication and Google OAuth for third-party authentication.

## Features

- **Local Authentication**: Users can sign up and log in using their email and password.
- **Google OAuth Authentication**: Users can authenticate with their Google accounts.
- **Session Management**: User sessions are managed securely.
- **Password Hashing**: User passwords are securely hashed before storage.
- **Role-Based Access Control**: Implement role-based access control to restrict access to certain routes.
- **Customization**: Easily customize and extend the authentication system.



# Authentication Flow

Users can choose to sign up using their email and password or log in with Google.
For local authentication, passwords are securely hashed before storage.
Google OAuth authentication redirects users to Google's login screen.
Upon successful authentication, users are redirected back to the application with a user profile.
Passport.js manages user sessions and authentication.
