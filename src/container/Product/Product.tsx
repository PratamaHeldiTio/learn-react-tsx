import React from 'react';
import {
  Header,
  HeaderTroley,
  HeaderLogo,
  Counter,
} from './Product.styles';
import { CardProduct } from './Partials';
import { IPropsProduct } from './Product.types';

import { connect } from 'react-redux';
import { IStateRedux } from '../../index.types';


const Product = (props:IPropsProduct) => {
  return (
    <>
      <Header>
        <HeaderLogo>
          <img src="https://www.static-src.com/frontend/static/img/logo-blibli-white.f8255fc.svg" alt="gambar" />
        </HeaderLogo>
        <HeaderTroley>
          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTguNjc0OCAzLjAxMjIzQzIwLjA3NDggMi44NjkyMyAyMS4yMjk4IDQuMDAyMjMgMjAuOTc3OCA1LjI3MjIzTDIwLjY0MzggNi45NDkyM0MxOS44MDc4IDExLjE1ODIgMTkuODk5OCAxNS40NzgyIDIwLjkxMjggMTkuNjU0MkMyMS4yMDQ4IDIwLjg1NzIgMjAuMjA0OCAyMS45OTkyIDE4Ljg1ODggMjEuOTk5Mkg1LjE2NDgzQzMuODE4ODMgMjEuOTk5MiAyLjgxODgzIDIwLjg1ODIgMy4xMTA4MyAxOS42NTQyQzQuMTIxODMgMTUuNDg3MiA0LjEyMTgzIDExLjE2NzIgMy4xMTA4MyA2Ljk5OTIzTDMuMDUwODMgNi43NTAyM0MyLjc3ODgzIDUuNjMwMjMgMy42Mjg4MyA0LjU0MzIzIDQuODcyODMgNC40MTYyM0wxOC42NzQ4IDMuMDEyMjNaTTE2LjUxMTggOC45OTkyM0MxNi41MTE4IDguNDQ3MjMgMTYuMDYzOCA3Ljk5OTIzIDE1LjUxMTggNy45OTkyM0MxNC45NTk4IDcuOTk5MjMgMTQuNTExOCA4LjQ0NzIzIDE0LjUxMTggOC45OTkyM0MxNC41MTE4IDkuNTUxMjMgMTQuOTU5OCA5Ljk5OTIzIDE1LjUxMTggOS45OTkyM0MxNi4wNjM4IDkuOTk5MjMgMTYuNTExOCA5LjU1MTIzIDE2LjUxMTggOC45OTkyM1pNOC41MTE4MyA3Ljk5OTIzQzkuMDYzODMgNy45OTkyMyA5LjUxMTgzIDguNDQ3MjMgOS41MTE4MyA4Ljk5OTIzQzkuNTExODMgOS41NTEyMyA5LjA2MzgzIDkuOTk5MjMgOC41MTE4MyA5Ljk5OTIzQzcuOTU5ODMgOS45OTkyMyA3LjUxMTgzIDkuNTUxMjMgNy41MTE4MyA4Ljk5OTIzQzcuNTExODMgOC40NDcyMyA3Ljk1OTgzIDcuOTk5MjMgOC41MTE4MyA3Ljk5OTIzWk03LjI2MTgzIDExLjk5OTJDNy4yNjE4MyAxNC42MTgyIDkuMzkyODMgMTYuNzQ5MiAxMi4wMTE4IDE2Ljc0OTJDMTQuNjMwOCAxNi43NDkyIDE2Ljc2MTggMTQuNjE5MiAxNi43NjE4IDExLjk5OTJDMTYuNzYxOCAxMS41ODUyIDE2LjQyNTggMTEuMjQ5MiAxNi4wMTE4IDExLjI0OTJDMTUuNTk3OCAxMS4yNDkyIDE1LjI2MTggMTEuNTg1MiAxNS4yNjE4IDExLjk5OTJDMTUuMjYxOCAxMy43OTEyIDEzLjgwMzggMTUuMjQ5MiAxMi4wMTE4IDE1LjI0OTJDMTAuMjE5OCAxNS4yNDkyIDguNzYxODMgMTMuNzkxMiA4Ljc2MTgzIDExLjk5OTJDOC43NjE4MyAxMS41ODUyIDguNDI1ODMgMTEuMjQ5MiA4LjAxMTgzIDExLjI0OTJDNy41OTc4MyAxMS4yNDkyIDcuMjYxODMgMTEuNTg1MiA3LjI2MTgzIDExLjk5OTJaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K" alt="img" />
          <Counter>{props.order}</Counter>
        </HeaderTroley>
      </Header>
      <CardProduct />
    </>
  );
};

const mapStateToProps = (state: IStateRedux) => {
  return {
    order: state.totalOrder,
  };
};

export default connect(mapStateToProps)(Product);
