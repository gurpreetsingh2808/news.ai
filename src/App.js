import './styles.js';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useState, useEffect } from 'react';
import NewsCards from './components/NewsCards/NewsCards';
import classNames from 'classnames';
import useStyles from './styles.js';

const alanKey = 'c0baf96f186d1c212184ec8b7b1b9f1f2e956eca572e1d8b807a3e2338fdd0dc/stage';

function App() {
  const classes = useStyles();
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
    <div>
       <div className={classes.logoContainer}>
          <img src="https://46ba123xc93a357lc11tqhds-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/alan.jpg" className={classes.alanLogo} alt="Alan logo" />
       </div>
       <NewsCards articles={newsArticles} />
    </div>
  );
}

export default App;
