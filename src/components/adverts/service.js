import client from '../../api/client';

const advertsUrl = '/api/v1/adverts';

export const getLatestAdverts = () => {
  const url = advertsUrl;
  return client.get(url);
};