import { useQuery } from "react-query";
const fetchData = async () => {
  const res = await fetch(" https://jsonplaceholder.typicode.com/posts");
  return res.json();
};
const PostsComponent = () => {
  const { data, error, isLoading } = useQuery("fetchData", fetchData);
  if (isLoading) return <div>loading...</div>;
  if (error) return <div>error loading data</div>;

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
      <button onClick={fetchData}>refresh</button>
    </div>
  );
};

export default PostsComponent;
