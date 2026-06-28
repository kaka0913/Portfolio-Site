# ポートフォリオサイト

このリポジトリは、 [Next.js](https://nextjs.org)を使用したポートフォリオサイトのソースコードです。

プロジェクトは [`create-next-app`](<https://www.google.com/search?q=%5Bhttps://nextjs.org/docs/app/api-reference/cli/create-next-app%5D(https://nextjs.org/docs/app/api-reference/cli/create-next-app)>) を使用して初期設定しましたしました。

## デプロイについて

このサイトは [Vercel Platform](https://vercel.com) を利用してホストしています。

現在公開しているポートフォリオサイトは、以下のURLでご覧いただけます。

## **サイトURL**

[https://www.kabu-engineer.com](https://www.kabu-engineer.com)

## 開発環境の準備

リポジトリをクローンしてディレクトリに移動してから、以下のコマンドで開発サーバーを起動します。

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## 本番環境の準備

本番ビルドを作成

```bash
npm run build
```

本番ビルドでサーバーを起動

```bash
npm start
```

ブラウザで [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) を開くと、開発中のサイトを確認できます。

## Blog

BlogはNext.js App Routerで静的生成されます。

- 一覧: `/blog`
- 記事: `/blog/[slug]`
- RSS: `/rss.xml`
- サイトマップ: `/sitemap.xml`

記事を追加・編集する場合は、`app/blog/posts.ts` の `posts` 配列を更新します。各記事の `slug` はURLとして使用され、`generateStaticParams` によりビルド時にHTMLが生成されます。

公開URLは既定で `https://www.kabu-engineer.com` です。Preview環境などで変更する場合は、`NEXT_PUBLIC_SITE_URL` を設定してください。
