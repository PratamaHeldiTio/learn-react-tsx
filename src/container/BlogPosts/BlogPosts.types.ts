export interface BlogPostItem {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IStateBlogPosts {
  posts: BlogPostItem[];
  formBlogPost: BlogPostItem;
  isUpdate: boolean;
}

export const DefaultState: BlogPostItem = {
  userId: 1,
  id: 0,
  title: '',
  body: '',
};
