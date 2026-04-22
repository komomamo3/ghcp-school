# 神山まるごと高専 紹介サイト (非公式)

[![Deploy](https://github.com/komomamo3/ghcp-school/actions/workflows/deploy.yml/badge.svg)](https://github.com/komomamo3/ghcp-school/actions/workflows/deploy.yml)

徳島県神山町にある「神山まるごと高等専門学校」を紹介する、**非公式**の紹介サイトです。
和モダン（オフホワイト × 墨色）デザインで、概要・教育・キャンパス・アクセス・お問い合わせをまとめています。

> 公式情報は <https://kamiyama.ac.jp/> をご確認ください。

公開URL: <https://komomamo3.github.io/ghcp-school/>

---

## 技術スタック

- [Astro](https://astro.build/) v4 (静的サイト生成)
- [Tailwind CSS](https://tailwindcss.com/) v3 (`@tailwindcss/typography`)
- 標準 i18n ルーティング (ja デフォルト / en サブパス)
- 画像: [Unsplash](https://unsplash.com/) のフリー素材
- デプロイ: GitHub Actions (`actions/deploy-pages`)

## ディレクトリ構成

```
.
├─ astro.config.mjs        # site / base / i18n 設定
├─ tailwind.config.mjs     # 和モダンカラー・フォント
├─ src/
│  ├─ layouts/BaseLayout.astro
│  ├─ components/          # Header / Footer / Hero / Card / MapEmbed ...
│  ├─ data/site.ts         # ヒーロー & ハイライト用テキスト
│  ├─ i18n/                # ja.json / en.json / index.ts
│  ├─ pages/               # 日本語ページ (デフォルト)
│  │  └─ en/               # 英語ページ
│  └─ styles/global.css    # Tailwind ベース + カスタム
├─ public/favicon.svg
└─ .github/workflows/deploy.yml
```

## 開発

```bash
npm install
npm run dev      # http://localhost:4321/ghcp-school/
npm run build    # dist/ を生成
npm run preview  # ビルド成果物をローカルで確認
npm run check    # astro check (型チェック)
npm run format   # Prettier 整形
```

ベースパスは `/ghcp-school` のため、ローカルでもサブパス配下で配信されます。

## デプロイ

1. リポジトリの **Settings → Pages** で `Source` を **GitHub Actions** に設定
2. `main` ブランチへ push すると `.github/workflows/deploy.yml` が走り、自動で公開されます

## 言語切替

- 既定: 日本語 (`/`)
- 英語: `/en/...`
- ヘッダー右上のスイッチで現在ページに対応する言語へ遷移します

## 画像・素材について

ヒーローやギャラリーの写真は Unsplash のフリー素材を仮置きしています。
本番運用時は権利関係に注意のうえ、自前撮影や許諾済み素材へ差し替えてください。

## ライセンス・注記

- 本サイトは個人による非公式の紹介ページです。
- 学校に関する正確・最新の情報は必ず公式サイトをご確認ください。
- 写真クレジット: [Unsplash](https://unsplash.com/license)

