"use client";
import { useEffect, useState } from "react";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { title, subtitle } from "@/components/primitives";

import { AppCard } from "@/components/app-card";
import { Post } from "@/types";
import { postsApi } from "./api";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchItems = async () => {
    const items = await postsApi.getPosts()
    setPosts(items.slice(0, 10));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Beautiful, fast and modern </span>
        <span className={title({ color: "violet" })}>Blog&nbsp;</span>
        <div className={subtitle({ class: "mt-4" })}></div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {posts.map((post: Post) => (
          <AppCard
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>

    </section>
  );
}
