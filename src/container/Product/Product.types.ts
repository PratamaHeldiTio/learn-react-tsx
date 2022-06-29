// export interface IStateProduct {
//   order: number;
// }

export interface IPropsCard {
  onCounterChange(value: number): void;
  order: number;
  handlePlus(): void;
  handleMinus(): void;
}

export interface IPropsProduct {
  order: number;
}

export interface CounterAction {
  type: string
}

export type IDispatch = (args: CounterAction) => CounterAction;