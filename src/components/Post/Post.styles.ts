import styled from 'styled-components';


export const PostStyled = styled.div({
  width: '500px',
  padding: '10px',
  boxShadow: '0 0 16px rgba(0, 0, 0, 0.5)',
  borderRadius: '4px',
  margin: '0 0 20px 20px',
  display: 'flex',
});


export const PostImage = styled.div({
  width: '200px',
  height: '150px',
  marginRight: '10px',
  img: {
    objectFit: 'cover',
  },
});

export const PostContent = styled.div({
  flex: '1',
});


export const PostTitle = styled.p({
  margin: '0',
  fontSize: '20px',
  fontWeight: 'bold',
  color: 'darkslategrey',
  marginBottom: '16px',
  '&:hover': {
    cursor: 'pointer',
  },
});


export const PostDesc = styled.p({
  margin: '0',
  fontSize: '16px',
  color: 'darkslategrey',
});

export const Button = styled.button({
  padding: '12px 18px',
  borderRadius: '4px',
  margin: '1rem .5rem 0 .5rem',
  border: 'none',
  '&:hover': {
    cursor: 'pointer',
  },
});

export const ButtonDanger = styled(Button)({
  background: '#E91E63',
  color: 'white',
});

export const ButtonSuccess = styled(ButtonDanger)({
  background: '#8BC34a',
});