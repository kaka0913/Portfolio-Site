export type BlogSection = {
  heading: string;
  paragraphs: string[];
  points?: string[];
  code?: {
    filename?: string;
    language: string;
    content: string;
  };
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  displayDate: string;
  readingTime: string;
  category: string;
  cover: string;
  coverAlt: string;
  sections: BlogSection[];
};

export const posts: BlogPost[] = [
  {
    slug: "first-month-at-dena",
    title: "内定者インターン、最初の1か月で考えたこと",
    excerpt:
      "学生からチームの一員へ。コードを書くこと以外に、仕事として開発するうえで大切だったことを振り返ります。",
    date: "2025-04-18",
    displayDate: "2025.04.18",
    readingTime: "6 min",
    category: "Career",
    cover: "/images/IMG_8487.png",
    coverAlt: "旅先で見た街の風景",
    sections: [
      {
        heading: "速く進むために、まず現在地を共有する",
        paragraphs: [
          "インターンが始まる前は、早く成果を出すことばかり考えていました。でも実際のチーム開発では、自分だけが速く進むより、今どこにいて何に困っているのかを共有するほうが、結果としてずっと速い。",
          "小さな疑問を抱えたまま進まないこと、相談するときは試したことも一緒に伝えること。この二つだけでも、レビューと実装の往復がかなり滑らかになりました。",
        ],
      },
      {
        heading: "レビューは答え合わせではない",
        paragraphs: [
          "レビューで直されることを減点のように捉えず、チームが持つ判断基準を知る機会として見るようになりました。なぜこの設計なのかまで聞くと、次の実装で使える視点が一つずつ増えていきます。",
        ],
        points: [
          "変更の意図をPull Requestの冒頭で説明する",
          "迷った選択肢と、採用しなかった理由を残す",
          "指摘されたルールではなく、背景の考え方を持ち帰る",
        ],
      },
      {
        heading: "次の1か月へ",
        paragraphs: [
          "まだ目の前のタスクに集中すると、プロダクト全体の目的を見失う瞬間があります。次は実装前にユーザーへの影響を一段深く考え、自分から選択肢を提示できる状態を目指します。",
        ],
      },
    ],
  },
  {
    slug: "try-swift-2025-staff",
    title: "try! Swift Tokyo 2025をスタッフとして歩いた3日間",
    excerpt:
      "参加者として見るカンファレンスとは違う景色。運営側で気づいた、技術コミュニティの温度について。",
    date: "2025-04-02",
    displayDate: "2025.04.02",
    readingTime: "5 min",
    category: "Community",
    cover: "/images/IMG_9413.png",
    coverAlt: "イベント会場へ向かう途中の風景",
    sections: [
      {
        heading: "場をつくる側に立ってみる",
        paragraphs: [
          "これまではセッションを聴き、知識を持ち帰る参加者でした。スタッフとして立つと、登壇者、参加者、スポンサーのあいだにある無数の小さな連携が、イベントの空気をつくっていることに気づきます。",
          "案内の一言や受付での短い会話も、その人にとってのカンファレンス体験の一部です。技術とは少し離れた仕事に見えて、プロダクト開発にも通じる感覚がありました。",
        ],
      },
      {
        heading: "技術コミュニティの余白",
        paragraphs: [
          "セッションの内容と同じくらい、廊下で始まる会話が面白い。完成された知識だけでなく、まだ名前のついていない悩みを話せる余白が、コミュニティの価値なのだと思います。",
        ],
        code: {
          filename: "ConferenceNote.swift",
          language: "Swift",
          content: `struct ConferenceNote: Identifiable {
    let id = UUID()
    let title: String
    let takeaway: String
}

let note = ConferenceNote(
    title: "Designing for everyone",
    takeaway: "余白が会話を生み、学びを深くする"
)`,
        },
      },
    ],
  },
  {
    slug: "watnow-team-building",
    title: "学生エンジニア組織で、ものづくりを続ける仕組みを考えた",
    excerpt:
      "watnowの副代表として年間計画をつくった経験から、熱量だけに頼らないチーム運営を整理します。",
    date: "2025-02-28",
    displayDate: "2025.02.28",
    readingTime: "8 min",
    category: "Team",
    cover: "/images/IMG_9108.png",
    coverAlt: "夕暮れの風景",
    sections: [
      {
        heading: "参加し続けられる設計",
        paragraphs: [
          "学生団体では、授業やアルバイトなど、それぞれの生活が最優先です。全員が同じ熱量で走り続ける前提では、少し忙しくなっただけで活動から離れやすくなります。",
          "そこで、活動量に波があっても戻ってこられるよう、役割と情報を個人に閉じない運営を意識しました。",
        ],
        points: [
          "短い期間で達成感が得られる区切りをつくる",
          "途中参加でも背景を追える記録を残す",
          "成果だけでなく、試した過程を共有する",
        ],
      },
      {
        heading: "リーダーが決めすぎない",
        paragraphs: [
          "計画を立てる役割ほど、すべてを整えたくなります。ただ、余白まで埋めるとメンバーが自分で選ぶ機会が減ってしまう。目的と制約は明確にしつつ、方法はチームに委ねるバランスを学びました。",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
