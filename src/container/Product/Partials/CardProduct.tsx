import React from 'react';
import {
  Card,
  CardImage,
  CardTitle,
  CardPrice,
} from '../Product.styles';
import Counter from './Counter';

const CardProduct = () => {
  return (
    <Card>
      <CardImage>
        <img src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/MTA-2498302/bango_bango_kecap_manis_-220_ml-_flatpack-_67019477-_full01_rs2i4jwm.jpeg" alt="" />
      </CardImage>
      <CardTitle>Kecap bango</CardTitle>
      <CardPrice>Rp 10.500</CardPrice>
      <Counter onCounterChange={() => {}}/>
    </Card>
  );
};

export default CardProduct;
