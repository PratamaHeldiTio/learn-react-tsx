import styled from 'styled-components';

export const Title = styled.p({
  fontWeight: 'bold',
  marginLeft: '20px',
  fontSize: '24px',
});

export const Form = styled.div({
  boxShadow: '0 0 16px rgba(0, 0, 0, 0.5)',
  width: '500px',
  marginLeft: '20px',
  padding: '10px',
  marginBottom: '50px',
  borderRadius: '4px',
  label: {
    display: 'block',
    fontSize: '14px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  'input, textarea': {
    outline: 'none',
    border: '1px solid #607D8B',
    padding: '12px',
    borderRadius: '4px',
    marginBottom: '20px',
    width: '100%',
    boxSizing: 'border-box',
    fontSize: '12px',
    color: '#607D8B',
  },
});


export const ButtonSubmit = styled.button({
  outline: 'none',
  border: '1px solid #2196F3',
  padding: '10px 30px',
  borderRadius: '4px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  color: '#2196F3',
  '&:hover': {
    cursor: 'pointer',
  },
});
