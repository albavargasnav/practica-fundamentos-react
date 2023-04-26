import { useParams } from 'react-router-dom';
import Layout from '../layout/Layout';

const AdvertPage = () => {
  const params = useParams();
  return (
    <Layout title="Advert detail">
      <div>Advert detail {params.advertId}</div>
    </Layout>
  );
};

export default AdvertPage;