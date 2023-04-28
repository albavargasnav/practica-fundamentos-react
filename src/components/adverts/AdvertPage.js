import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Layout from '../layout/Layout';
import { useEffect, useState } from 'react';
import { getAdvert } from './service';

const AdvertPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [advert, setAdvert] = useState(null);

  useEffect(() => {
    getAdvert(params.Id)
      .then(advert => setAdvert(advert))
      .catch(error => {
        if (error.status === 404) {
          return navigate('/404');
        }
        setError(error);
      });
  }, [params.Id, navigate]);

  const advertSale = advert.sale ? 'En venta' : 'Se busca';

  // if (error?.status === 404) {
  //   return <Navigate to="/404" />;
  // }
  return (
    <Layout title="Advert Page">
      {advert && advert.id && 
        <div>
          <div className="advert-header">
        <span className="advert-name">{advert.name}</span>
      <div className="advert-username">Sale: {advert.tags}</div>
      <div className="advert-username">Price: {advert.price}€</div>
      <div className="advert-username">Tags: {advertSale}</div>
          <span className="advert-separator">·</span>
        </div>
        </div>}
    </Layout>
  );
};

export default AdvertPage;