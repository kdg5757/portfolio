import mockImage from "~/assets/images/mock-image.jpeg";

import ProjectCard from "../components/ProjectCard";

type ProjectCardData = React.ComponentProps<typeof ProjectCard>;

const field = "コーダー / フロントエンド";

export const projectCards: ProjectCardData[] = [
  {
    image: mockImage,
    title: "企業向けオフィシャルサイト",
    field,
    description:
      "地域の中小企業向けにオフィシャルサイトの制作を担当。レスポンシブデザインの実装、SEO対策、パフォーマンス最適化を行いました。",
    technologies: ["WordPress", "JavaScript", "PHP", "CSS", "MySQL"],
    features: ["レスポンシブデザイン", "SEO対策", "パフォーマンス最適化"],
  },
  {
    image: mockImage,
    title: "商品紹介用ランディングページ",
    field,
    description: "新製品の発売に伴い、商品紹介用のランディングページを制作。",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    image: mockImage,
    title: "歯科向け予約メディアサイト",
    field,
    description:
      "歯科医院向けの予約システムと情報提供サイトのフロントエンド開発を担当。",
    technologies: ["WordPress", "JavaScript", "PHP", "CSS", "AMP", "MySQL"],
    features: ["外部API連携"],
  },
  {
    image: mockImage,
    title: "小規模ECサイト（独自PHPフレームワーク）",
    field: "バックエンド / フルスタック",
    description:
      "PHPで独自フレームワークを構築し、小規模ECサイトを開発。決済やカートなどの基幹機能に加え、配送業務向けのCSV出力や配送状況の確認機能まで実装しました。",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    features: [
      "カード決済",
      "カート機能",
      "配送用CSVデータ抽出",
      "アカウント登録＆ログイン",
      "マイページ",
      "配送状況確認",
    ],
  },
  {
    image: mockImage,
    title: "ヘルスケアアプリ内 WebView（Flutter連動）",
    field: "フロントエンド",
    description:
      "Flutterベースのヘルスケアアプリ内で表示するWebアプリを担当。新規開発〜運用まで、JSブリッジ連携・データ可視化・健康診断データ表示などを実装しました。",
    technologies: [
      "TypeScript",
      "React",
      "JavaScript",
      "WebView",
      "Chart",
      "REST API",
    ],
    features: [
      "ヘルスケア権限許可確認（Flutter連動・JSブリッジ）",
      "モバイル取得データのチャート表示",
      "体重の手動更新",
      "AIメッセージ表示（API連携）",
      "健康診断データのUI表示",
    ],
  },
  {
    image: mockImage,
    title: "ヘルスケアアプリ向け Web登録・決済サービス",
    field: "フロントエンド",
    description:
      "ヘルスケアアプリの新規登録と決済をWebでも完結できるサービスを担当。新規開発〜運用まで対応し、API連携の登録フローとSBPS決済を実装しました。",
    technologies: ["TypeScript", "React", "JavaScript", "REST API", "SBPS"],
    features: [
      "API連携のアカウント登録",
      "カード決済（SBまとめ決済）",
      "SBPSリンク型決済の導入",
    ],
  },
  {
    image: mockImage,
    title: "外部サービス認証連携用Webアプリケーション",
    field: "フロントエンド",
    description:
      "外部サービスとの認証連携を行うWebアプリケーションのフロントエンド開発を担当。",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "MSW",
      "Storybook",
      "Vitest",
    ],
    features: ["API連携のアカウント登録", "カード決済", "SBPS API型決済の導入"],
  },
];
