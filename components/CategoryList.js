import Link from "next/link";
import Image from 'next/image'
import Category from "./Category";

export default function CategoryList({ categories }) {
  if (!categories) return null;


  return (
    <ul className="flex  flex-row-reverse flex-wrap-reverse justify-around p-4 md:p-8">
      {categories.map((category) => (
        <li key={category.slug} {...category.children} className="mr-4 md:mr-10">
          <Link href={`/categories/${category.slug}`}>
            <a className="categories text-xl text-black">
              <Category {...category} />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}