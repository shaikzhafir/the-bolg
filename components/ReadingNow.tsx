"use client";

import { PageQuery } from "../tina/__generated__/types";
import { tinaField, useTina } from "tinacms/dist/react";
import Image from "next/image";

export function ReadingNow(props: {
  data: PageQuery;
  variables: object;
  query: string;
}) {
  const { data } = useTina(props);
  console.log(data);
  return (
    <div className="max-w-3xl mx-auto">
      <p className="mx-auto max-w-lg text-center mb-10 text-xl">
        Currently reading
      </p>
      <div className="flex gap-10 justify-center">
        <div>
          <Image
            // @ts-ignore
            data-tina-field={tinaField(data.page.reading, "url")}
            src={
              data.page.reading?.url
                ? data.page.reading?.url
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Books_and_Scroll_Ornament_with_Open_Book.png/175px-Books_and_Scroll_Ornament_with_Open_Book.png"
            }
            alt="Picture of the author"
            width={150}
            height={150}
          />
        </div>
        <div className="flex flex-col w-4/6 space-y-6">
          <div className="flex">
            <p className="w-1/3 font-semibold">Title:</p>
            <p
              // @ts-ignore
              data-tina-field={tinaField(data.page.reading, "header")}
              className="flex-1"
            >
              {data.page.reading?.header}
            </p>
          </div>
          <div className="flex">
            <p className="w-1/3 font-semibold">Description:</p>
            <p
              // @ts-ignore
              data-tina-field={tinaField(data.page.reading, "description")}
              className="flex-1"
            >
              {data.page.reading?.description}
            </p>
          </div>
          <div className="flex items-center">
            <p className="w-1/3 font-semibold">Progress:</p>
            <div className="bg-gray-200 h-6 flex-1">
              <div className="bg-blue-600 h-6 w-[80%] animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
