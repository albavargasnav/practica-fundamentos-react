import classNames from 'classnames';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { getLatestAdverts } from './service';
import Button from '../shared/Button';
import Layout from '../layout/Layout';

const styleInline = {
  backgroundColor: 'lightblue',
};

const AdvertsPage = props => {
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
    <Layout title="What's going on..." {...props}>
      <div
        //   className={className}
        className={styles.advertsPage}
        //   style={{
        //     backgroundColor: theme === 'light' ? 'lightblue' : 'darkblue',
        //   }}
      >
        {!!adverts.length ? (
          <ul>
            {adverts.map(advert => (
              <li key={advert.id}>{advert.name}</li>
            ))}
          </ul>
        ) : (
          <Button variant="primary">Be the first one...</Button>
        )}
      </div>
    </Layout>
  );
};


export default AdvertsPage;