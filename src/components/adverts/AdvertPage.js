import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Layout from '../layout/Layout';
import { useEffect, useState } from 'react';
import { getAdvert } from './service';
import placeholderImage from '../../assets/placeholder.jpg';

const AdvertPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [advert, setAdvert] = useState(null);
  const advertSale = advert && advert.sale ? 'En venta' : 'Se busca';

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

  

  // if (error?.status === 404) {
  //   return <Navigate to="/404" />;
  // }
  return (
    <Layout title="Advert Page">
      {advert && advert.id && 
        <div>
          <div className="advert-header">
        <span className="advert-name">{advert.name}</span>
      <div className="advert-username">Sale: {advertSale}</div>
      <div className="advert-username">Price: {advert.price}€</div>
      <div className="advert-username">Tags: {advert.tags}</div>

      <div className="advert-photo">
              {advert.photo ? (
                <img src={advert.photo} alt={advert.name} />
              ) : (
                <img src={placeholderImage} alt="Foto Placeholder" />
              )}
            </div>

          <span className="advert-separator">·</span>
        </div>
        </div>}
    </Layout>
  );
};

export default AdvertPage;