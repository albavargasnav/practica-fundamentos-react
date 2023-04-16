import classNames from 'classnames';

import styles from './styles.module.css';

import { useEffect, useState } from 'react';
import { getLatestAdverts } from './service';

const styleInline = {
  backgroundColor: 'lightblue',
};

const AdvertsPage = () => {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    getLatestAdverts().then(adverts => setAdverts(adverts));
  }, []);

  const theme = 'dark';
  const className = classNames(
    'advertsPage',
    {
      light: theme === 'light',
      dark: theme === 'dark',
    },
    'otherclass',
  );

  return (
    <div
      //   className={className}
      className={styles.advertsPage}
      //   style={{
      //     backgroundColor: theme === 'light' ? 'lightblue' : 'darkblue',
      //   }}
    >
      <ul>
        {adverts.map(adverts => (
          <li key={adverts.id}>{adverts.content}</li>
        ))}
      </ul>
    </div>
  );
};


export default AdvertsPage;