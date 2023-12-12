import { Collection } from "tinacms";
import { richTextComponents } from "../richTextSchema";

export const PostCollection: Collection = {
  label: "Posts",
  name: "post",
  path: "content/posts",
  format: "mdx",
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
      required: true,
      isTitle: true,
    },
    {
      type: "datetime",
      label: "Date",
      name: "date",
    },
    {
      type: "boolean",
      label: "Draft",
      name: "draft",
      description:
        "Removes this post from the list of posts so people can't find it (but it's still accessible via direct link)",
    },
    {
      type: "object",
      name: "seo",
      label: "SEO",
      fields: [
        {
          type: "string",
          name: "seoTitle",
          label: "SEO Title",
          description: "If left blank the post title will be used",
        },
        {
          type: "string",
          name: "seoDescription",
          label: "SEO Description",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "image",
          name: "seoImage",
          label: "SEO Image",
          description:
            "Facebook	1200 x 630 pixels, Twitter	1200 x 675 pixels (minimum), LinkedIn	1200 x 627 pixels, Pinterest	1000 x 1500 pixels (2:3 aspect ratio)",
        },
      ],
    },
    {
      label: "Body",
      name: "body",
      type: "rich-text",
      isBody: true,
    },
  ],
  ui: {
    router: ({ document }) => {
      return `/posts/${document?._sys?.filename}`;
    },
    filename: {
      slugify: (values) => {
        return `${(values.title || "")
          .toLowerCase()
          .replace(/ /g, "-")}`.replace(/[^\w\.\/-\s]/gi, "");
      },
    },
  },
};
