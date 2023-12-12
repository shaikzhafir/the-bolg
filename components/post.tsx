"use client";

import { PageQuery } from "../tina/__generated__/types";
import Image from "next/image";
import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export function Post(props: any) {
  const { data } = useTina(props);
  console.log(data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <article className="mx-auto w-full max-w-2xl prose-xl text-gray-600 dark:prose-invert dark:text-gray-200">
        <TinaMarkdown content={props.body} />
      </article>
    </main>
  );
}
