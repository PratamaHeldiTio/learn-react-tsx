import React from 'react';
import '../Product.styles.css';
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
      <div className="card">
        <div className="card__image">
          <img src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/MTA-2498302/bango_bango_kecap_manis_-220_ml-_flatpack-_67019477-_full01_rs2i4jwm.jpeg" alt="" />
        </div>
        <p className="card__title">Kecap bango</p>
        <p className="card__price">Rp 10.500</p>
        <div className="card__counter">
          <button className="minus" onClick={this.minusButtonHandler}>-</button>
          <input type="text" value={this.state.order} />
          <button className="plus" onClick={this.plusButtonHandler}>+</button>
        </div>
      </div>
    );
  }
}

export default CardProduct;