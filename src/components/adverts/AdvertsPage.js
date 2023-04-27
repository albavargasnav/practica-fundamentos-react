import { useEffect, useState } from 'react';
import { getLatestAdverts } from './service';
import Button from '../shared/Button';
import Layout from '../layout/Layout';
import Advert from './Advert';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const EmptyList = () => (
  <div style={{ textAlign: 'center' }}>
    <p>Be the first one!</p>
    <Button as={Link} variant="primary" to="/adverts/new">
      Create advert
    </Button>
  </div>
);

const AdvertsPage = () => {
  const isMounted = useRef(false);
  const [isLoading, setIsLoading] = useState(true);
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const adverts = await getLatestAdverts();

      setAdverts(adverts);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  return (
    <Layout title="What's going on...">
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