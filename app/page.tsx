import { HomePage } from "../components/home";
import { client } from "../tina/__generated__/databaseClient";
import Link from "next/link";
import { Layout } from "../components/Layout";
import { tinaField, useTina } from "tinacms/dist/react";
import { ReadingNow } from "../components/ReadingNow";

export default async function Home() {
  // main page server content
  const res = await client.queries.page({
    relativePath: "home.md",
  });

  // posts server content
  const postsResponse = await client.queries.postConnection();
  const posts = postsResponse.data.postConnection.edges;

  return (
    <Layout>
      <div className="text-3xl">welcome to the bolg</div>
      <div className="min-h-[20rem]">
        <div className="my-16">
          <ReadingNow
            data={JSON.parse(JSON.stringify(res.data))}
            query={res.query}
            variables={res.variables}
          />
        </div>
        <p className="text-2xl mb-10">My Posts</p>
        <ul className="list-disc list-inside mb-16">
          {posts?.map((post) => (
            <li key={post?.node?.id} className="py-1">
              <Link href={`/posts/${post?.node?._sys.filename}`}>
                <span>
                  {post?.node?.title}
                  <span className="text-sm text-gray-500">
                    {" "}
                    - {post?.node?.date}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
