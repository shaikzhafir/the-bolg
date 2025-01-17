"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { RiTwitterXFill, RiGithubFill, RiMoonFill } from "react-icons/ri";
import { RxSun, RxDividerVertical } from "react-icons/rx";

export default function Header() {
  // For dark mode switcher
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="mt-16 mb-20 flex justify-between content-center items-center text-base font-sans">
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
      <div className="flex justify-between gap-4">
        <Link href="https://x.com/tinacms">
          <RiTwitterXFill />
        </Link>
        <Link href="https://github.com/tinacms/tina-blog-template">
          <RiGithubFill />
        </Link>
      </div>
    </header>
  );
}
