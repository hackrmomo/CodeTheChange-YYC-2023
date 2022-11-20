export type Post = {
  authorID: string;
  createdAt: string;
  description: string;
  id: string;
  title: string;
};

export type PostState = Post & {likes: string};

export const fetchTrendingPosts = async () => {
  const endpoint = `http://localhost:3000/posts/trending`;
  const data = await (await fetch(endpoint)).json();

  return data.popularPosts.map((post: Post) => ({...post, likes: 3}))

};
