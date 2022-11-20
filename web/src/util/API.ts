import { IPost } from '../models/Post';

export type PostState = IPost & {likes: string};

export const fetchTrendingPosts = async () => {
  const endpoint = `http://localhost:3000/posts/trending`;
  const data = await (await fetch(endpoint)).json();
  

  return data['popularPosts'].map((post: IPost) => ({...post, likes: 3}))

};
