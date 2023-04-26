import { useParams } from 'react-router-dom';
import Layout from '../layout/Layout';

const AdvertPage = props => {
  const params = useParams();
  return (
    <Layout title="Advert detail" {...props}>
      <div>Advert detail {params.advertId}</div>
    </Layout>
  );
};

export default AdvertPage;