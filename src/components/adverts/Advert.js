import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import LikeButton from './LikeButton';
import Photo from '../shared/Photo';
import './Advert.css';

const Advert = ({ content, updatedAt, user, likes }) => {
  return (
    <article className="advert bordered">
      <div className="left">
        <Photo className="advert-photo" />
      </div>
      <div className="right">
        <div className="advert-header">
          <span className="advert-name">{user.name}</span>
          <span className="advert-username">{user.username}</span>
          <span className="advert-separator">·</span>
          <time dateTime={updatedAt}>
            {formatDistanceToNow(new Date(updatedAt))}
          </time>
        </div>
        <div>
          {content}
          <div className="advert-actions">
            <LikeButton
              onLike={event => console.log(event)}
              likes={likes.length}
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Advert;