import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import CodeBlock from "../CodeBlock";
import { getPost, posts } from "../posts";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      url: `/blog/${post.slug}`,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      images: [{ url: post.cover, alt: post.coverAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.cover],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const currentIndex = posts.findIndex((item) => item.slug === slug);
  const nextPost = posts[(currentIndex + 1) % posts.length];

  return (
    <>
      <header className="blog-header article-header">
        <Link className="blog-brand" href="/">
          <span>YUICHIRO KABUTAN</span>
        </Link>
        <Link className="back-link" href="/blog"><ArrowLeftIcon /> All articles</Link>
      </header>

      <main className="article-page">
        <article>
          <header className="article-lead">
            <div className="post-meta">
              <span>{post.category}</span>
              <time dateTime={post.date}>{post.displayDate}</time>
              <span>{post.readingTime} read</span>
            </div>
            <h1>{post.title}</h1>
            <p>{post.excerpt}</p>
          </header>

          <div className="article-cover">
            <Image
              src={post.cover}
              alt={post.coverAlt}
              fill
              priority
              sizes="(max-width: 960px) 100vw, 1120px"
            />
          </div>

          <div className="article-layout">
            <aside className="article-toc" aria-label="目次">
              <span>CONTENTS</span>
              {post.sections.map((section, index) => (
                <a href={`#section-${index + 1}`} key={section.heading}>
                  <b>0{index + 1}</b>{section.heading}
                </a>
              ))}
            </aside>

            <div className="article-body">
              {post.sections.map((section, index) => (
                <section id={`section-${index + 1}`} key={section.heading}>
                  <span className="section-index">0{index + 1}</span>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.points && (
                    <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>
                  )}
                  {section.code && <CodeBlock {...section.code} />}
                </section>
              ))}
            </div>
          </div>
        </article>

        <Link className="next-post" href={`/blog/${nextPost.slug}`}>
          <span>NEXT ARTICLE</span>
          <strong>{nextPost.title}</strong>
          <ArrowRightIcon />
        </Link>
      </main>

      <footer className="blog-footer">
        <span>© {new Date().getFullYear()} Yuichiro Kabutan</span>
        <div className="blog-footer-links">
          <Link href="/rss.xml">RSS</Link>
          <Link href="/blog">All articles</Link>
        </div>
      </footer>
    </>
  );
}
