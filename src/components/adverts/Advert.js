import React from 'react';
//import formatDistanceToNow from 'date-fns/formatDistanceToNow';

//import LikeButton from './LikeButton';
import Photo from '../shared/Photo';
import './Advert.css';

const Advert = ({advert}) => {
  return (
    <article className="advert bordered">
      <div className="left">
        <Photo className="advert-photo" />
      </div>
      <div className="right">
        <div className="advert-header">
        <span className="advert-name">{advert.id}</span>
      <span className="advert-username">{advert.name}</span>
          <span className="advert-separator">·</span>
        </div>
      </div>
    </article>
  );
};

export default Advert;