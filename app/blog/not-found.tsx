import Link from "next/link";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

export default function BlogNotFound() {
  return (
    <main className="blog-not-found">
      <span>404 / ARTICLE NOT FOUND</span>
      <h1>この記事は見つかりませんでした。</h1>
      <p>URLが変わったか、記事が公開されていない可能性があります。</p>
      <Link href="/blog"><ArrowLeftIcon /> All articles</Link>
    </main>
  );
}
