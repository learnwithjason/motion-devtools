import { animate, scroll } from 'motion';
import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.querySelectorAll('img').forEach((img) => {
      scroll(
        animate(img, {
          opacity: [0, 1],
        }),
        {
          target: img,
          offset: ['start end', 'start center'],
        },
      );
    });
  }, []);

  return (
    <div className="App">
      <div className="waggle-text">
        <p>
          <span>W</span>
          <span>a</span>
          <span>d</span>
          <span>d</span>
          <span>u</span>
          <span>p</span>
          <span>?</span>
        </p>
      </div>
      <div className="scroll">
        <img
          src="https://images.unsplash.com/photo-1560008581-09826d1de69e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlJTIwY3JlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"
          alt="ice cream"
        />
        <img
          src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aWNlJTIwY3JlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"
          alt="ice cream"
        />
        <img
          src="https://images.unsplash.com/photo-1623595119708-26b1f7300075?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aWNlJTIwY3JlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"
          alt="ice cream"
        />
        <img
          src="https://images.unsplash.com/photo-1562790879-dfde82829db0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aWNlJTIwY3JlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"
          alt="ice cream"
        />
      </div>
    </div>
  );
}

export default App;
