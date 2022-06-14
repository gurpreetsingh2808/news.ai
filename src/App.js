import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useState, useEffect } from 'react';
import NewsCards from './components/NewsCards/NewsCards';

const alanKey = 'c0baf96f186d1c212184ec8b7b1b9f1f2e956eca572e1d8b807a3e2338fdd0dc/stage';

function App() {

  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({command, articles}) => {
        if(command === 'newHeadlines') {
          console.log(articles);
          setNewsArticles(articles);
        }
      }
    });
  }, []);
  return (
    <div className="App">
       <h1>Alan AI News Application</h1>
       <NewsCards articles={newsArticles} />
    </div>
  );
}

export default App;
