import React from 'react';
//import formatDistanceToNow from 'date-fns/formatDistanceToNow';

//import LikeButton from './LikeButton';
import Photo from '../shared/Photo';
import './Advert.css';

const Advert = ({advert}) => {
  const advertSale = advert.sale ? 'En venta' : 'Se busca';
  return (
    <article className="advert bordered">
      <div className="left">
        <Photo className="advert-photo" />
      </div>
      <div className="right">
        <div className="advert-header">
        <span className="advert-name">{advert.name}</span>
      <div className="advert-username">Sale: {advertSale}</div>
      <div className="advert-username">Price: {advert.price}€</div>
      <div className="advert-username">Tags: {advert.tags}</div>
          <span className="advert-separator">·</span>
        </div>
      </div>
    </article>
  );
};

export default Advert;