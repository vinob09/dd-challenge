# Flask/React User Query Challenge

## Table of Contents
1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Local Installation](#local-installation)
4. [Running the Flask backend](#running-the-flask-backend)
5. [Running the React frontend](#setup-and-running-the-react-frontend)

## Introduction
This is a simple Flask/React application that integrates with the OpenAI API to search and retrieve relevant data from a predetermined dataset.

## Prerequisites
* Python 3.7 or higher
* Node.js and npm (for React frontend)
* OpenAI API key

## Local installation
1. First, clone the repository from GitHub:
    ```bash
    git clone https://github.com/vinob09/dd-challenge.git
    cd dd-challenge
    ```
2. Set Up the Backend (Flask):
    * Create a virtual environment to keep dependencies isolated
        ```bash
        python -m venv venv
        ```
    * Activate the virtual environment
        - On macOS/Linux
            ```bash
            source venv/bin/activate
            ```
        - On Windows
            ```bash
            venv\Scripts\activate
            ```
    * Install backend dependencies
        ```bash
        pip install -r requirements.txt
        ```
    * Setup the OpenAI API Key
        - Create a `.env` file in the root directory and add the following line
            ```bash
            OPENAI_API_KEY="your-api-key-here"
            ```

## Running the Flask backend
1. Start the development server:
    - `flask run`
> This will start the Flask development server using port 5000 by default.
> If you would like to run the backend on a different port, you can specify the port using the `--port` option: `flask run --port 5001`


## Setup and Running the React frontend
1. In another terminal window, navigate to the frontend directory:
    ```bash
    cd react-frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Configure proxy (if needed):
    * If the Flask backend is running on a port other than 5000, update the proxy field in react-frontend/package.json to match, for example:
    ```bash
    "proxy": "http://localhost:5001"
    ```
4. Run the frontend server
    ```bash
    npm start
    ```
    > This will start the React server on port 3000 by default.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
