import os
import openai
from flask import Flask, request, jsonify, json
from flask_cors import CORS

# instantiate Flask
app = Flask(__name__)
# enable CORS for React frontend integration
CORS(app)

# retrieve OpenAI API key
openai.api_key = os.environ.get('OPENAI_API_KEY')

# open and read dataset
with open('data/dataset.json', 'r') as f:
    # load file into dictionary
    dataset = json.load(f)

# use GPT3 to process query from request
@app.route('/', methods=['POST'])
def process_query():
    '''Generates text response based on user query'''

    query = request.json.get('query')
    if not query:
        return jsonify({'error': 'No valid query provided'}), 400

    # pass dataset into prompt
    prompt = f'''
    Given the following dataset (with information about images), answer the user's question based on the data.

    Dataset: {dataset}

    User Query: {query}

    Answer:
    '''

    # create response
    response = openai.ChatCompletion.create(
        model='gpt-3.5-turbo',
        messages=[
            {'role': 'system', 'content': 'You are an assistant tasked with answering questions based on the provided dataset.'},
            {'role': 'user', 'content': prompt}
        ],
        max_tokens=150,
        temperature=0.5
    )

    # check for presence and length of choices array
    if 'choices' in response and len(response['choices']) > 0:
        # extract generated response
        answer = response['choices'][0]['message']['content'].strip()
    else:
        return jsonify({'error': 'No valid response from GPT-3'}), 500

    return jsonify({'result': answer})
