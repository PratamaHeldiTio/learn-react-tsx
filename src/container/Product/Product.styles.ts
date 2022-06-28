import styled from 'styled-components';

export const Header = styled.div({
  background: 'lightskyblue',
  display: 'flex',
  width: '400px',
  justifyContent: 'space-between',
  padding: '20px',
  boxSizing: 'border-box',
  marginBottom: '40px',
});

export const HeaderTroley = styled.div({
  position: 'relative',
  img: {
    width: '30px',
  },
});

export const Counter = styled.p({
  background: 'rgba(6, 35, 167, 0.781)',
  padding: '10px',
  borderRadius: '50%',
  minWidth: '10px',
  height: '10px',
  lineHeight: '10px',
  textAlign: 'center',
  color: 'white',
  fontSize: '11px',
  position: 'absolute',
  bottom: '-8px',
  left: '-13px',
});

export const HeaderLogo = styled.div({
  position: 'relative',
  img: {
    width: '100px',
  },
});

export const Card = styled.div({
  border: '1px solid rgba(0, 0, 0, 0.3)',
  padding: '10px',
  width: '320px',
  borderRadius: '4px',
  margin: '50px',
});

export const CardImage = styled.div({
  width: '100%',
  img: {
    width: '100%',
  },
});


export const CardTitle = styled.p({
  fontSize: '14px',
  fontWeight: 'bold',
  textTransform: 'capitalize',
});

export const CardPrice = styled.p({
  fontSize: '14px',
  fontWeight: 'bold',
  color: 'orange',
});

export const CardCounter = styled.div({
  input: {
    height: '25px',
    border: '1px solid rgba(0, 0, 0, 0.3)',
    textAlign: 'center',
  },
});

export const ButtonCount = styled.button({
  background: 'rgba(6, 35, 167, 0.781)',
  color: 'white',
  width: '30px',
  height: '30px',
  margin: '0 20px',
  border: 'none',
  borderRadius: '5px',
});