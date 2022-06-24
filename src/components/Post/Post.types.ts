export interface IPropsPost {
  data: {
    id: number;
    title: string;
    body:string;
  };
  remove(value: number): void;
}
