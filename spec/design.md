# Design

## Architecture
- Type: Static multi-page site
- Runtime: Browser-only (no backend)
- Deployment: GitHub Actions -> GitHub Pages
- Content root: `site/`

## Directory Design
- `site/index.html`: トップ
- `site/about.html`: 学校概要
- `site/education.html`: 教育
- `site/campus.html`: キャンパス/アクセス
- `site/styles.css`: 共通デザインシステム・レイアウト
- `site/script.js`: スクロール reveal 演出
- `.github/workflows/deploy-pages.yml`: Pages デプロイ

## UI/Visual Direction
- 参照イメージ: 佐久間宣行氏のポートフォリオサイト https://nob-sakuma.com/ を参照し、編集的でタイポグラフィ主導のポートフォリオ表現を採用する
- 参照方針
  - 直接的な模写は避け、余白設計、文字組み、情報の見せ順、静かな高級感を参考にする
  - ヒーローで大きな見出しを強く見せ、補助情報は抑えたコントラストで配置する
  - セクション間はカードの羅列ではなく、誌面のように強弱を付けて展開する
  - 写真や図版は装飾ではなく、見出しや本文のリズムを支える役割として配置する
- Design Tokens (CSS variables)
  - 背景: 明るい生成り系のベースに、空気感を出すための淡い重なりを加える
  - 文字: 黒に近い本文色と、やや乾いた補助色で階層を分ける
  - 強調: 強い色面は避け、リンク、区切り線、要所のラベルに限定して使う
- Typography
  - 見出し: `Cormorant Garamond` (serif) を主体に、大きめサイズと詰めた行間で印象を作る
  - 本文: `Zen Kaku Gothic New` (sans) で読みやすさを確保する
  - ラベル/補助情報: 小さめの uppercase 風表現で誌面的な整理感を出す

## Layout Principles
- ファーストビューは「強い見出し + 短い説明 + 補助情報」の3層で構成する
- コンテンツ幅は広めに取りつつ、本文は読みやすい行長に制御する
- 2カラムや非対称グリッドを使い、単調な縦積みを避ける
- セクションごとに密度を変え、読者の視線が止まるポイントを意図的に作る
- モバイルでは1カラムに再構成しつつ、見出しの力と余白の印象を落とさない

## Interaction Design
- Sticky header で常時ナビゲーション可能
- `IntersectionObserver` による reveal 表示
- Hover 時の下線/アクセント表示
- 動きは控えめに保ち、スクロール時の空気感を壊さない範囲で reveal / drift を適用する

## Data Flow
1. Browser requests HTML in `site/`
2. HTML loads `styles.css` and `script.js`
3. script observes `.reveal` elements and toggles `visible`
4. user navigates between static pages

## Deployment Sequence
1. Trigger: push to `main` or `workflow_dispatch`
2. Checkout repository
3. Configure Pages
4. Upload artifact from `site/`
5. Deploy to Pages environment

## Security/Operations Considerations
- Actions permissions: `contents: read`, `pages: write`, `id-token: write`
- Concurrency: single `pages` group with cancel-in-progress
- No secrets required for current setup

## Error Handling Matrix
| Error | Detection | Mitigation |
|---|---|---|
| Workflow not triggered | Actions run absent | `on.push.branches` and default branch を確認 |
| Artifact path mismatch | Upload step failure | `path: site` を維持 |
| Permission error | Deploy step error | workflow permissions を再設定 |
| Broken external image | visual QA で発見 | 代替画像 URL に差し替え |

## Testing Strategy
- Manual visual test
  - Desktop (>= 1200px)
  - Tablet (~768px)
  - Mobile (~390px)
- Navigation test
  - 4ページ相互遷移
  - 外部リンク遷移
- Deployment test
  - Actions 成功
  - 公開 URL 到達

## Future Extensions
- ニュース/問い合わせページ追加
- 画像ローカル管理化
- Lighthouse 指標改善