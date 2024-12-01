import { useQuery } from "react-query";
const fetchPosts = async () => {
  const res = await fetch(" https://jsonplaceholder.typicode.com/posts");
  return res.json();
};
const PostsComponent = () => {
  const { data, isError, isLoading } = useQuery("fetchPosts", fetchPosts, {
    cacheTime: 1000 * 60 * 5,
    staleTime: 1000 * 60,
    refetchOnWindowFocus: true,
    keepPreviousData: true,
  });
  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>error loading data</div>;

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
      <button onClick={fetchPosts}>refresh</button>
    </div>
  );
};

export default PostsComponent;
