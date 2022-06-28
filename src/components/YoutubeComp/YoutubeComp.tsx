import React from 'react';
import {
  Wrapper,
  YoutubeImage,
  YoutubeTitle,
  YoutubeDesc,
} from './YoutubeComp.styles';
import thumb from './thumb.jpg';
import { IPropsYoutube } from './YoutubeComp.types';

const YoutubeComp = ({ time, title, desc }: IPropsYoutube) => {
  return (
    <Wrapper>
      <YoutubeImage>
        <img src={thumb} alt="thumbnail" />
        <p >{time}</p>
      </YoutubeImage>
      <YoutubeTitle>{title}</YoutubeTitle>
      <YoutubeDesc>{ desc}</YoutubeDesc>
    </Wrapper>
  );
};

YoutubeComp.defaultProps = {
  time: '00.00',
  title: 'title here',
  desc: 'desc here',
};
export default YoutubeComp;
