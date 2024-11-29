# password-manager
Using reactjs in front end and  Python Django in backend .

<hr>

# Django React Password Management Application with MFA

A fully functional password management application built with **Django** (backend) and **React** (frontend), featuring **Multi-Factor Authentication (MFA)** and strong encryption for storing credentials securely.

## Features

- User authentication (register, login, logout)
- Secure password storage (encrypted)
- Password generation (random, customizable criteria)
- Multi-Factor Authentication (TOTP with pyotp)
- Password strength checker
- Search and filter stored credentials
- User-friendly interface with React (using Bootstrap or Tailwind CSS)
- Secure session management
- Full-stack solution with Django backend and React frontend

## Table of Contents

- [Project Setup](#project-setup)
- [Backend Setup (Django)](#backend-setup-django)
- [Frontend Setup (React)](#frontend-setup-react)
- [Running the Application](#running-the-application)
- [Features](#features)
- [Testing](#testing)
- [Deployment](#deployment)
- [License](#license)

## Project Setup

This project consists of two parts: the Django backend and the React frontend. You will need to set up both parts to run the application.

### Backend Setup (Django)

1. Clone the repository:

    ```bash
    git clone <repository_url>
    cd <project_folder>
    ```

2. Set up a virtual environment:

    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

3. Install the required Python packages:

    ```bash
    pip install -r requirements.txt
    ```

4. Create the database and run migrations:

    ```bash
    python manage.py migrate
    ```

5. Set up your `.env` file for secret keys, database configurations, etc.

6. Start the Django development server:

    ```bash
    python manage.py runserver
    ```

### Frontend Setup (React)

1. Navigate to the `frontend` directory:

    ```bash
    cd frontend
    ```

2. Install the required Node.js packages:

    ```bash
    npm install
    ```

3. Build the React app:

    ```bash
    npm run build
    ```

4. The React app is now built and ready to be served by Django.

## Running the Application

1. Make sure both Django and React are set up properly.

2. Run the Django development server:

    ```bash
    python manage.py runserver
    ```

3. Visit the app in your browser (usually at `http://localhost:8000`).

4. You can also run React in development mode on a separate port (`localhost:3000`), but in production, both the React and Django apps will be served by Django.

## Features

- **User Authentication**: Register, login, and logout functionality using Django’s built-in user model.
- **Secure Password Storage**: Credentials are encrypted at rest using Django’s encryption features.
- **Password Generator**: Generate strong, random passwords with customizable criteria.
- **Multi-Factor Authentication (MFA)**: Implemented using TOTP and pyotp.
- **Password Strength Checker**: A real-time password strength checker (via zxcvbn).
- **Search and Filter**: Easily search and filter stored credentials.

## Testing

- This project includes unit tests for critical functionality.
- Run the tests using the following command:

    ```bash
    python manage.py test
    ```

## Deployment

### Deploying Backend (Django)

For deployment, you can use platforms like **Heroku**, **AWS EC2**, or **DigitalOcean**. Here's a quick guide for deploying Django on **Heroku**:

1. Install Heroku CLI and log in:

    ```bash
    heroku login
    ```

2. Create a Heroku app:

    ```bash
    heroku create <app_name>
    ```

3. Push the project to Heroku:

    ```bash
    git push heroku master
    ```

4. Set up environment variables on Heroku (e.g., database, secret keys):

    ```bash
    heroku config:set SECRET_KEY=<your_secret_key>
    ```

5. Access the app via the Heroku URL: `https://<app_name>.herokuapp.com`

### Deploying Frontend (React)

For deploying the React app, you can use platforms like **Netlify**, **Vercel**, or **GitHub Pages**.

1. Build the React app:

    ```bash
    npm run build
    ```

2. Upload the contents of the `build` folder to your hosting provider.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### **Example Project Folder Structure**:

```plaintext
django-react-password-manager/
├── backend/                         # Django backend project
│   ├── project/
│   ├── your_app/
│   ├── manage.py
│   ├── requirements.txt
│   └── settings.py
├── reactapp/                        # React frontend project
│   ├── build/                        # React build folder
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── .env
├── .gitignore
├── LICENSE
└── README.md
