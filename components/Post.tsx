import Link from "next/link";
import CategoryLabel from "./CategoryLabel";
import { convDate } from "../utils/index";
import type { BasePost } from "../interface";
import Image from "next/image";
import React from "react";

type Props = {
  post: BasePost;
  compact?: boolean;
};

export default function Post({ post, compact }: Props) {
  return (
    <div className="w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6">
      {!compact && (
        <Image
          src={post.frontmatter.cover_image}
          alt=""
          height={420}
          width={600}
          className="mb-4 rounded"
        />
      )}
      <div className="flex justify-between items-center">
        <span className="text-gray-600">{convDate(post.frontmatter.date)}</span>
        <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
      </div>

      <div className="mt-2">
        <Link
          href={`/blog/${post.slug}`}
          className="text-2xl text-gray-700 font-bold hover:underline hover:text-gray-700"
        >
          {post.frontmatter.title}
        </Link>
        <p className="mt-2 text-gray-600">{post.frontmatter.excerpt}</p>
      </div>

      {compact && (
        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center">
            <Image
              src={post.frontmatter.author_image}
              alt="Author Image"
              width={40}
              height={40}
              className="mx-4 object-cover rounded-full hidden sm:block"
            />
            <h3 className="text-gray-700 font-bold">
              {post.frontmatter.author}
            </h3>
          </div>
        </div>
      )}
      <Link href={`/blog/${post.slug}`}>
        <div className="material-button">
          <p className="material-btnText">Read More</p>
          <div className="material-btnTwo">
            <p className="material-btnTwoText">Go!!</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
