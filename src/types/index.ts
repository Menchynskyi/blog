export type Post = {
  id: number;
  title: string;
  body: string;
  comments?: Comment[];
};

export type Comment = {
  id: number;
  postId: string;
  body: string;
};
