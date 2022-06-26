import React from 'react';
import './YoutubeComp.styles.css';
import thumb from './thumb.jpg';
import { IPropsYoutube } from './YoutubeComp.types';

const YoutubeComp = ({ time, title, desc }: IPropsYoutube) => {
  return (
    <div className="youtube__wrapper">
      <div className="youtube__image">
        <img src={thumb} alt="thumbnail" />
        <p className="youtube__image-time">{ time }</p>
      </div>
      <p className="youtube__title">{ title }</p>
      <p className="youtube__desc">{ desc }</p>
    </div>
  );
};

YoutubeComp.defaultProps = {
  time: '00.00',
  title: 'title here',
  desc: 'desc here',
};
export default YoutubeComp;
