# Flask/React User Query Example
This is a simple Flask/React application that integrates with GPT-3 API to search and retrieve relevant data from a predetermined dataset.

## Prerequisites
* Python 3.7 or higher
* Node.js and npm (for React frontend)
* OpenAI API key

## Local installation
Follow these steps to setup and run the project locally:
1. Download and extract the project from the zip file into a directory of your choice
2. Install backend dependencies:
    - Option 1: Using `pip` (recommended for simplicity)
        * Install a virtual environment (recommended to keep dependencies isolated from other projects):
            * Create a virtual environment:
                ```bash
                python -m venv venv
                ```
            * Activate the virtual environment:
                - On macOS/Linux
                ```bash
                source venv/bin/activate
                ```
                - On Windows
                ```bash
                venv\Scripts\activate
                ```
        * Install dependencies:
            * Install the required Python dependencies from `requirements.txt`:
                ```bash
                pip install -r requirements.txt
                ```
    - Option 2: Using `pipenv` (optional, if you prefer Pipenv)
        * If you have `pipenv` installed and prefer to use it, you can install the dependencies with:
            ```bash
            pipenv install
            ```
        * To enter the virtual environment with Pipenv:
            ```bash
            pipenv shell
            ```
        > Note: `pipenv` is a tool that automatically manages virtual environments for you, but it requires
        installation via `pip install pipenv`. If you don't already have it, using `pip` and `requirements.txt` (Option 1) is simpler.
3. Set the OpenAI API Key:
    - Before running the app, make sure you have an **OpenAI API key**. Set this key in your environment variables by creating a .env file and add the following line:
        ```bash
        OPENAI_API_KEY="your-api-key-here"
        ```
    - Alternatively if you do not want to create a .env file, you can set in in the terminal:
        * On macOS/Linux
            ```bash
            export OPENAI_API_KEY="your-api-key-here"
            ```
        * On Windows
            ```bash
            set OPENAI_API_KEY="your-api-key-here"
            ```

## Running the Flask backend
1. Start the development server:
    - `flask run`
> This will start the Flask development server using port 5000 by default.
> If you would like to run the backend on a different port, you can specify the port using the `--port` option: `flask run --port 5001`



## Running the React frontend
1. Install the frontend dependencies:
    - `cd react-frontend`
    - `npm install`
2. Start the React development server:
    - `npm start`
> This will start the React development server at port 3000 by default.
> If you changed the backend port, you need to update the frontend proxy to correctly communicate with the backend. In the
`react-frontend` folder, open the `package.json` file and update the proxy field with the new backend URL. For example, if you
are using port `5001` for Flask, the `package.json` file should look like this:
```bash
"proxy": "http://localhost:5001"
```


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
