# Requirements

## Scope
神山まるごと高専の紹介ページを GitHub Pages で公開し、学校概要・教育・キャンパス/アクセスの情報を分かりやすく提示する。

## User Stories
- 見学を検討する中高生・保護者として、学校の特徴を短時間で把握したい。
- 地域連携に関心のある企業/自治体として、教育方針と学習スタイルを把握したい。
- サイト運用者として、GitHub へ push するだけで安定公開したい。

## Functional Requirements (EARS)
- WHEN ユーザーがトップページを開いたとき, THE SYSTEM SHALL 学校の要点を 1 画面目で提示する。
- WHEN ユーザーがナビゲーションを操作したとき, THE SYSTEM SHALL 学校概要ページへ遷移できる。
- WHEN ユーザーがナビゲーションを操作したとき, THE SYSTEM SHALL 教育ページへ遷移できる。
- WHEN ユーザーがナビゲーションを操作したとき, THE SYSTEM SHALL キャンパス・アクセスページへ遷移できる。
- WHEN 各ページが読み込まれたとき, THE SYSTEM SHALL レスポンシブレイアウトで表示崩れなく表示する。
- WHEN ユーザーがスクロールしたとき, THE SYSTEM SHALL セクションのフェード表示演出を行う。
- WHEN ユーザーが公式サイト導線を選択したとき, THE SYSTEM SHALL 公式サイトを新規タブで開く。
- WHEN `main` ブランチへ push されたとき, THE SYSTEM SHALL GitHub Actions により Pages を自動デプロイする。
- IF デプロイが失敗したとき THEN THE SYSTEM SHALL Actions 実行ログで失敗箇所を特定可能にする。

## Non-Functional Requirements (EARS)
- WHILE サイトが公開中である間, THE SYSTEM SHALL `github.io` ドメインで到達可能である。
- WHEN モバイル幅 (<= 900px) で表示するとき, THE SYSTEM SHALL 1 カラム構成で可読性を維持する。
- WHEN デスクトップ幅で表示するとき, THE SYSTEM SHALL タイポグラフィと余白を強調したデザインを維持する。
- THE SYSTEM SHALL 外部依存を最小化した静的ファイル構成で動作する。

## Constraints
- 公開方式は GitHub Actions + GitHub Pages。
- カスタムドメインは使用しない。
- 画像は当面フリー素材の仮置き。
- 文体は親しみやすい広報調。

## Acceptance Criteria
- トップ・学校概要・教育・キャンパス/アクセスの 4 ページが相互遷移可能。
- 主要ブラウザで閲覧でき、モバイル/デスクトップ双方で表示崩れがない。
- `Deploy Pages` ワークフロー成功後に公開 URL で閲覧可能。
- README にローカル確認手順と公開手順が明記されている。

## Edge Cases
- GitHub Actions が失敗する (権限不足、artifact path 不一致)。
- 画像配信先の応答遅延/失敗。
- 将来ページ追加時のナビゲーション整合崩れ。

## Confidence
- Confidence Score: 90%
- Rationale: ユーザー要件 (ページ構成・公開方式・デザイン方向) が明確で、既に実装済み構造が存在するため。