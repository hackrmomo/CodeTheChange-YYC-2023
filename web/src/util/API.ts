export type Post = {
  title: String;
  handle: String;
  description: String;
  votes: any;
};

export const fetchTrendingPosts = async () => {
  const endpoint = `http://localhost:3000/posts/trending`;
  const data = await (await fetch(endpoint)).json();

  return data.results.map((post: Post) => ({
    ...post,
  }));
};
