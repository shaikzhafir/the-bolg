import { Post } from "../../components/post";
import { client } from "../../tina/__generated__/databaseClient";

export default async function BlogPost() {
  const { data, query, variables } = await client.queries.postConnection();
  const postList = data.postConnection.edges;
  console.log(postList?.length);

  // need to parse the response into the different blogposts
  // then pass each blogpost into the Post component
  return (
    <div>
      <ul className="list-disc">
        {postList?.map((post) => (
          <li key={post?.node?._sys?.filename}>
            <Post
              // https://github.com/vercel/next.js/issues/47447
              body={post?.node?.body}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
