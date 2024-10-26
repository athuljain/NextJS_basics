async function serversideFetch() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  
    if (!res.ok) {
      throw new Error("failed to load");
    }
    return res.json();
  }
  
  type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
  
  async function fetchData() {
    const data = await serversideFetch();
    console.log(data);
  
    return (
      <div>
        fetch Data
        <div>
          {data.map((post: Post) => (
            <div style={{width:500,height:250,backgroundColor:"gray"}} key={post.id}>
              <h1>Title : {post.title}</h1>
              <p>Description :{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default fetchData;
  