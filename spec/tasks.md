# Tasks

## Plan

### 1. Requirements Baseline
- Objective: 要件を仕様化し、受け入れ条件を明確化する。
- Output: `spec/requirements.md`
- Dependency: none
- Status: completed

### 2. Technical Design
- Objective: アーキテクチャ、UI方針、デプロイ設計を文書化する。
- Output: `spec/design.md`
- Dependency: Task 1
- Status: completed

### 3. Page Skeleton Implementation
- Objective: 4ページと共通ナビゲーションを作成する。
- Output: `site/index.html`, `site/about.html`, `site/education.html`, `site/campus.html`
- Dependency: Task 2
- Status: completed

### 4. Visual System Implementation
- Objective: トークン、タイポ、グリッド、レスポンシブを実装する。
- Output: `site/styles.css`
- Dependency: Task 3
- Status: completed

### 5. Interaction Implementation
- Objective: スクロール reveal 演出を実装する。
- Output: `site/script.js`
- Dependency: Task 3
- Status: completed

### 6. Deployment Workflow
- Objective: push で Pages 自動デプロイ可能にする。
- Output: `.github/workflows/deploy-pages.yml`
- Dependency: Task 3
- Status: completed

### 7. Documentation
- Objective: ローカル確認と公開手順を README に追記する。
- Output: `README.md`
- Dependency: Task 6
- Status: completed

### 8. Validation
- Objective: 構文エラーと表示・導線の最終確認。
- Output: エラーなし、公開可能状態
- Dependency: Tasks 3-7
- Status: completed

## Open Follow-ups
- [ ] 本番ロゴ/画像素材に差し替え
- [ ] 公式/非公式表記の最終確定
- [ ] 問い合わせ導線 (フォームまたはメール) の確定
- [ ] ニュースページ追加要否の判断