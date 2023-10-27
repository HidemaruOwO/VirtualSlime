import Link from "next/link";
import CategoryLabel from "./CategoryLabel";
import { convDate } from "../utils/index";
import type { BasePost } from "../interface";
import Image from "next/image";

type Props = {
  post: BasePost;
  compact?: boolean;
};

export default function Post({ post, compact }: Props) {
  return (
    <div className="mt-2 w-full rounded-lg bg-white px-10 py-6 shadow-md">
      {!compact && (
        <Image
          src={post.frontmatter.cover_image}
          alt="Cover Image"
          height={420}
          width={600}
          className="mb-4 rounded"
        />
      )}
      <div className="flex items-center justify-between">
        <span className="text-gray-600">{convDate(post.frontmatter.date)}</span>
        <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
      </div>

      <div className="mt-2">
        <Link
          href={`/blog/${post.slug}`}
          className="text-2xl font-bold text-gray-700 hover:text-gray-700 hover:underline"
        >
          {post.frontmatter.title}
        </Link>
        <p className="mt-2 text-gray-600">{post.frontmatter.excerpt}</p>
      </div>

      {compact && (
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src={post.frontmatter.author_image}
              alt="Author Image"
              width={40}
              height={40}
              className="mx-4 hidden rounded-full object-cover sm:block"
            />
            <h3 className="font-bold text-gray-700">
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
