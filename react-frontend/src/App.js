import { useState } from 'react';
import './App.css';

function App() {
  // setting state for data
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  // setting state for pending data retrieval
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // start loading animation upon submit
    setIsLoading(true);

    // fetching for backend data
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });
      const data = await res.json();
      setResponse(data.result);
    } catch (error) {
      console.error('Error:', error);
    }
    // stop loading animation
    setIsLoading(false);
  };

  const isSubmitButtonDisabled = query.length < 3;

  return (
    <div className='app-container'>
      <div className='card'>
        <div className='card-image'>
          <img src='/drone.jpg' alt='drone' />
        </div>
        <div className='card-content'>
          <h1 className='card-title'>Drone Queries</h1>
          <form className='query-form' onSubmit={handleSubmit}>
            <input
              className='query-input'
              type='text'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder='Enter your question'
            />
            <button
              // handle submit button based on input length
              className={`submit-button ${isSubmitButtonDisabled ? 'disabled' : ''}`}
              type='submit'
              disabled={isSubmitButtonDisabled}
            >
              Submit
            </button>
          </form>
          <div className='response-container'>
            <h2>Response:</h2>
            <div className='response-content'>
              {/* Display response placeholder on initial load*/}
              {isLoading ? (
                <div className='loading-animation'>
                  <div className='circle'></div>
                  <div className='circle'></div>
                  <div className='circle'></div>
                </div>
              ) : response ? (
                <p className='response-text'>{response}</p>
              ) : (
                <p className='response-placeholder'>Please enter your query and click Submit</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
