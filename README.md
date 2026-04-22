# ghcp-school-intro

神山まるごと高専の紹介ページを GitHub Pages で公開するための静的サイトです。

## 構成

- `site/index.html` : トップページ
- `site/about.html` : 学校概要
- `site/education.html` : 教育・カリキュラム
- `site/campus.html` : キャンパス・アクセス
- `site/styles.css` : 共通スタイル
- `site/script.js` : スクロール表示演出
- `.github/workflows/deploy-pages.yml` : GitHub Pages 自動デプロイ

## ローカル確認

以下のコマンドでローカル起動できます。

```bash
cd site
python3 -m http.server 8000
```

ブラウザで `http://localhost:8000` を開いて確認してください。

## GitHub Pages 公開

1. `main` ブランチへ push
2. Actions の `Deploy Pages` が実行
3. リポジトリの Settings > Pages で公開 URL を確認

このリポジトリは `site/` ディレクトリを Pages 成果物としてデプロイします。