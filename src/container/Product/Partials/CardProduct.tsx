import React from 'react';
import {
  Card,
  CardImage,
  CardTitle,
  CardPrice,
  CardCounter,
  ButtonCount,
} from '../Product.styles';
import { IStateProduct, IPropsProduct } from '../Product.types';

class CardProduct extends React.Component<IPropsProduct, IStateProduct> {
  constructor(props: IPropsProduct) {
    super(props);
    this.state = {
      order: 0,
    };
  }

  counterChangeHandler = (order: number) => {
    this.props.onCounterChange(order);
  };

  plusButtonHandler = () => {
    this.setState((prevState) => ({ 
      order: prevState.order + 1,
    }), () => {
      this.counterChangeHandler(this.state.order);
    });
  };

  minusButtonHandler = () => {
    if (this.state.order > 0) {
      this.setState((prevState) => ({ 
        order: prevState.order - 1,
      }), () => {
        this.counterChangeHandler(this.state.order);
      });
    }
  };

  render() {
    return (
      <Card>
        <CardImage>
          <img src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/MTA-2498302/bango_bango_kecap_manis_-220_ml-_flatpack-_67019477-_full01_rs2i4jwm.jpeg" alt="" />
        </CardImage>
        <CardTitle>Kecap bango</CardTitle>
        <CardPrice>Rp 10.500</CardPrice>
        <CardCounter>
          <ButtonCount className="minus" onClick={this.minusButtonHandler}>-</ButtonCount>
          <input type="text" value={this.state.order} />
          <ButtonCount className="plus" onClick={this.plusButtonHandler}>+</ButtonCount>
        </CardCounter>
      </Card>
    );
  }
}

export default CardProduct;