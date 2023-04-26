import { useEffect, useState } from 'react';
import { getLatestAdverts } from './service';
import Button from '../shared/Button';
import Layout from '../layout/Layout';
import Advert from './Advert';
import { Link } from 'react-router-dom';

const EmptyList = () => (
  <div style={{ textAlign: 'center' }}>
    <p>Be the first one!</p>
    <Button as={Link} variant="primary" to="/tweets/new">
      Create tweet
    </Button>
  </div>
);

const AdvertsPage = props => {
  const [isLoading, setIsLoading] = useState(true);
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getLatestAdverts().then(adverts => {
      setAdverts(adverts);
      setIsLoading(false);
    });
  }, []);

  return (
    <Layout title="What's going on..." {...props}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {!!adverts.length ? (
            <ul>
              {adverts.map(advert => (
                <li key={advert.id}>
                  <Link to={`/adverts/${advert.id}`}>
                    <Advert key={advert.id} advert={advert} />
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyList />
          )}
        </div>
      )}
    </Layout>
  );
};


export default AdvertsPage;