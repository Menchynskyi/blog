export type Post = {
  id: string;
  title: string;
  body: string;
  comments?: Comment[];
};

export type Comment = {
  id: string;
  postId: string;
  body: string;
};
