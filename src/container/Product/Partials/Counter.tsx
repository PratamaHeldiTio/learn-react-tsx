import React from 'react';
import {
  CardCounter,
  ButtonCount,
} from '../Product.styles';
import { IPropsCard, IDispatch } from '../Product.types';
import { IStateRedux } from '../../../index.types';
import { connect } from 'react-redux';


class Counter extends React.Component<IPropsCard> {
  // constructor(props: IPropsProduct) {
  //   super(props);
  //   this.state = {
  //     order: 0,
  //   };
  // }

  // counterChangeHandler = (order: number) => {
  //   this.props.onCounterChange(order);
  // };

  // plusButtonHandler = () => {
  //   this.setState((prevState) => ({ 
  //     order: prevState.order + 1,
  //   }), () => {
  //     this.counterChangeHandler(this.state.order);
  //   });
  // };

  // minusButtonHandler = () => {
  //   if (this.state.order > 0) {
  //     this.setState((prevState) => ({ 
  //       order: prevState.order - 1,
  //     }), () => {
  //       this.counterChangeHandler(this.state.order);
  //     });
  //   }
  // };

  render() {
    console.log(this.props);
    return (
      <CardCounter>
        <ButtonCount onClick={this.props.handleMinus}> - </ButtonCount>
        <input type="text" value={this.props.order} readOnly />
        <ButtonCount onClick={this.props.handlePlus}>+</ButtonCount>
      </CardCounter>
    );
  }
}

const mapStateToProps = (state: IStateRedux) => {
  return {
    order: state.totalOrder,
  };
};

const mapDispatchToProps = (dispatch: IDispatch) => {
  return {
    handlePlus: () => dispatch({ type: 'PLUS_ORDER' }),
    handleMinus: () => dispatch({ type: 'MINUS_ORDER' }),
  };
};

// * params 1 state global,  params 2 reducer
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
