import { useEffect, useState } from 'react';
import { getLatestAdverts } from './service';
import Button from '../shared/Button';
import Layout from '../layout/Layout';
import Advert from './Advert';

const EmptyList = () => (
  <div style={{ textAlign: 'center' }}>
    <p>Be the first one!</p>
    <Button variant="primary">Create Advert</Button>
  </div>
);

const AdvertsPage = props => {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    getLatestAdverts().then(adverts => setAdverts(adverts));
  }, []);

  return (
    <Layout title="What's going on..." {...props}>
      <div>
        {!!adverts.length ? (
          <ul>
            {adverts.map(advert => (
              <Advert key={advert.id} advert={advert}></Advert>
            ))}
          </ul>
        ) : (
          <EmptyList />
        )}
      </div>
    </Layout>
  );
};


export default AdvertsPage;