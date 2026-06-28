import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "開発、チーム、日々の発見について記録するブログです。",
  alternates: {
    canonical: "/blog",
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
  openGraph: {
    type: "website",
    url: "/blog",
    title: "Blog | 株丹優一郎",
    description: "開発、チーム、日々の発見について記録するブログです。",
    images: [{ url: posts[0].cover, alt: "株丹優一郎のBlog" }],
  },
};

export default function BlogPage() {
  const [featured] = posts;

  return (
    <>
      <header className="blog-header blog-home-header">
        <nav aria-label="メインナビゲーション">
          <Link className="blog-nav-link blog-nav-arrow" href="/">
            Portfolio <ArrowRightIcon />
          </Link>
        </nav>
      </header>

      <main>
        <section className="blog-hero">
          <Image
            className="blog-hero-image"
            src={featured.cover}
            alt={featured.coverAlt}
            fill
            priority
            sizes="100vw"
          />
          <div className="blog-hero-shade" aria-hidden="true" />
          <div className="blog-hero-content">
            <div className="blog-hero-heading">
              <p>THOUGHTS / NOTES / RECORDS</p>
              <h1>Blog</h1>
              <span className="blog-hero-tagline">コードの外側まで、書き残す。</span>
            </div>

            <Link className="hero-latest" href={`/blog/${featured.slug}`}>
              <div className="hero-latest-label">
                <span>LATEST</span>
                <time dateTime={featured.date}>{featured.displayDate}</time>
              </div>
              <strong>{featured.title}</strong>
              <span className="hero-read">Read article <ArrowRightIcon /></span>
            </Link>
          </div>
          <span className="hero-scroll">SCROLL TO EXPLORE</span>
        </section>

        <section className="blog-index" aria-labelledby="latest-heading">
          <div className="blog-section-heading">
            <div>
              <span className="section-eyebrow">ARCHIVE</span>
              <h2 id="latest-heading">All writing</h2>
            </div>
            <span>{String(posts.length).padStart(2, "0")} ARTICLES</span>
          </div>

          <div className="post-list">
            {posts.map((post, index) => (
              <Link className="post-row" href={`/blog/${post.slug}`} key={post.slug}>
                <span className="post-number">0{index + 1}</span>
                <div className="post-thumbnail">
                  <Image src={post.cover} alt="" fill sizes="(max-width: 800px) 96px, 200px" />
                </div>
                <div className="post-row-copy">
                  <div className="post-meta">
                    <span>{post.category}</span>
                    <time dateTime={post.date}>{post.displayDate}</time>
                    <span>{post.readingTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </div>
                <ArrowRightIcon className="post-arrow" />
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="blog-footer">
        <span>© {new Date().getFullYear()} Yuichiro Kabutan</span>
        <div className="blog-footer-links">
          <Link href="/rss.xml">RSS</Link>
          <Link href="/">Back to portfolio</Link>
        </div>
      </footer>
    </>
  );
}
