export interface BlogPostItem {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IStateBlogPosts {
  posts: BlogPostItem[];
  formBlogPost: BlogPostItem;
}
