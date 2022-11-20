export interface IPost {
  id: string;
  title: string;
  description: string;
  authorID: string;
  createdAt: string;
}

export type PostState = IPost & { likes: string };
