import styled from 'styled-components';

export const Wrapper = styled.div({
  display: 'inline-block',
  width: '210px',
  boxSizing: 'border-box',
  marginRight: '12px',
});

export const YoutubeImage = styled.div({
  width: '100%',
  height: '118px',
  overflow: 'hidden',
  position: 'relative',
  img: {
    width: '100%',
  },
  p: {
    position: 'absolute',
    color: 'white',
    bottom: '6px',
    right: '6px',
    margin: '0',
    background: 'black',
    padding: '4px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: '500',
  },
});

export const YoutubeTitle = styled.p({
  fontSize: '14',
  fontWeight: 'bold',
  textTransform: 'capitalize',
  color: 'dimgrey',
  margin: '0',
});

export const YoutubeDesc = styled.p({
  fontSize: '12px',
  color: 'rgb(148, 147, 147)',
  margin: '0',
});