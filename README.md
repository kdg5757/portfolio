# Portfolio

ポートフォリオのトップページと、電話番号ログイン/登録のUIフローを含むReactアプリです。

## 概要

- トップページ: Profile / About / Project / Skill / Contact セクション
- アカウントフロー: 電話番号入力 → パスワード入力 → SMS認証(OTP)
- ルーティング: React Routerでページ遷移

## 技術スタック

- React 18 + TypeScript
- Vite 7
- UI: Ant Design / antd-mobile
- Styling: Emotion / Sass
- Data/Async: TanStack Query
- Router: React Router
- Testing: Vitest, Testing Library, Storybook, MSW

## セットアップ

```bash
pnpm install
```

## 開発コマンド

```bash
pnpm dev          # 開発サーバー
pnpm build        # 本番ビルド
pnpm preview      # ビルドのプレビュー
pnpm lint         # ESLint
pnpm fmt          # Prettier
pnpm test         # Vitest (CI向け)
pnpm test:ui      # Vitest UI + Coverage
pnpm storybook    # Storybook
pnpm build-storybook
```

## ディレクトリ構成

- `src/pages`: 画面ごとの実装 (Top / Account など)
- `src/components`: 共通コンポーネント
- `src/router`: ルーティング定義
- `src/hooks`: カスタムフック
- `src/apis` / `src/http`: APIクライアント関連
- `src/models`: 型定義
- `src/store`: 状態管理
- `src/__mocks__`: MSWのモックとテストユーティリティ
- `public`: MSW worker出力先

## 補足

- パスエイリアス: `~` → `src` (`tsconfig.json` / `vite.config.ts`)
- テストはStorybookのstoryを使ったインタラクションテストが中心
