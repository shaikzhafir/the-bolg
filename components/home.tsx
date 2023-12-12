"use client";

import { PageQuery } from "../tina/__generated__/types";
import Image from "next/image";
import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export function HomePage(props: any) {
  const { data } = useTina(props);
  console.log(data);

  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
}
