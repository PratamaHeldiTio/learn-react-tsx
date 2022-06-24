export interface PostItem {
  userId: number;
  id: number;
  title: string;
  body:string;
}

export interface IPropsPost {
  data: PostItem
  remove(value: number): void;
  update(value: PostItem): void;
}
