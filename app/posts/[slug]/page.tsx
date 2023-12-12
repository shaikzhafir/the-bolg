import { TinaMarkdown } from "tinacms/dist/rich-text";
import { client } from "../../../tina/__generated__/databaseClient";
import { Layout } from "../../../components/Layout";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await client.queries.post({
    relativePath: `${params.slug}.mdx`,
  });
  console.log(post);

  return (
    <Layout>
      <h1>Page: {params.slug}</h1>
      <TinaMarkdown content={post?.data?.post.body} />
    </Layout>
  );
}
