---
name: github-pages-setup
description: 'GitHub Pages の新規構築、公開設定、カスタムドメイン設定、Actions デプロイを実施するスキル。Use when: GitHub Pages setup, pages deployment, custom domain, Jekyll site, static site publishing.'
argument-hint: 'サイト種別、公開方式 (branch or actions)、カスタムドメイン有無を指定'
---

# GitHub Pages Setup

## このスキルが行うこと
- GitHub Pages サイトを公開可能な状態まで構築する
- 公開方式を分岐して設定する
- 公開後の検証チェックを実施する

## 使うタイミング
- 新規に GitHub Pages を公開したい
- 既存リポジトリを Pages 公開に切り替えたい
- 独自ドメインを設定したい

## 必要入力
- リポジトリ名
- サイト種別: 単純静的ファイル / Jekyll / その他静的サイトジェネレーター
- 公開方式: branch / actions
- カスタムドメインの有無
- 失敗診断時の追加入力: 失敗した実行URL、失敗ジョブ名、直近で変更したファイル

## 手順
1. 目的と前提を確定する
- 公開対象のブランチ、出力ディレクトリ、想定URLを確認する
- Organization のポリシーやリポジトリ権限を確認する

2. 公開方式を選択する
- 条件分岐:
- branch を選ぶ場合: シンプルな静的サイトや最小構成向け
- actions を選ぶ場合: ビルド工程が必要なサイト向け

3. Pages を有効化する
- branch 方式:
- Repository settings の Pages で対象ブランチとフォルダを指定する
- actions 方式:
- GitHub Actions ワークフローを作成し、Pages へデプロイする

4. サイト生成物を配置する
- branch 方式: 公開対象フォルダに index.html を含む成果物を配置する
- actions 方式: ビルド成果物を Actions で Pages アーティファクトとして公開する

5. 公開確認を実施する
- Actions の成功、Pages URL の応答、主要ページの表示を確認する
- 反映遅延がある場合は待機後に再確認する

6. カスタムドメインを設定する (任意)
- DNS レコードを設定する
- GitHub Pages 側でカスタムドメインを登録する
- HTTPS 有効化状態を確認する

## 完了条件
- Pages の公開 URL でトップページが表示される
- 公開方式に応じた設定が再現可能な形で残っている
- カスタムドメイン利用時は DNS と HTTPS が有効化されている

## トラブルシュート
- 404 が出る: index.html の配置先と Pages 公開元設定を確認する
- 反映されない: Actions 実行結果、Pages のビルド状態、キャッシュを確認する
- ドメインが未解決: DNS 伝播待ちとレコード設定を確認する

## 活用1: 失敗診断テンプレート (Actions/Pages)
以下は、デプロイ失敗時に毎回同じ順序で実行する診断フロー。

1. 症状を分類する
- A: Workflow が起動しない
- B: Workflow は起動するが失敗する
- C: 成功しているのに公開サイトが壊れている

2. A の診断 (起動しない)
- on トリガー (push/pull_request/workflow_dispatch) と branch/path 条件を確認する
- 対象 workflow ファイルがデフォルトブランチ上に存在するか確認する
- concurrency や if 条件でスキップされていないか確認する

3. B の診断 (実行失敗)
- 失敗ジョブの最初のエラー行を特定する
- permissions 不足 (Resource not accessible) を確認する
- キャッシュ不整合の可能性があればキャッシュキーと restore-keys を確認する
- deploy ステップの入力値 (artifact path, output path, base path) を再確認する

4. C の診断 (公開後不具合)
- Pages URL と配下パスの整合 (project pages の base path) を確認する
- 404 対象URLが成果物に含まれているか確認する
- カスタムドメイン利用時は DNS レコードと HTTPS 状態を確認する
- 必要に応じて直前の安定コミットへロールバックする

5. 再発防止を追加する
- workflow に concurrency を設定する
- 権限を最小化しつつ必要権限を明示する
- デプロイ後の smoke check (トップページと主要リンク確認) を追加する
- 失敗時の確認項目を PR テンプレートまたは runbook に記録する

## 診断完了の判定
- 原因が「トリガー設定 / 権限 / 成果物 / DNS」のいずれかに分類されている
- 修正コミット後に再実行し、Workflow 成功と Pages 表示成功を確認している
- 再発防止の設定が少なくとも 1 つ追加されている

## 活用2: branch/actions 切替チェックリスト
公開方式を切り替えるときは、次を上から順に確認する。

1. branch -> actions へ切替
- Pages 設定で source を GitHub Actions に変更する
- 既存の公開フォルダ (docs など) への依存を解除する
- build 出力先と upload-pages-artifact の path を一致させる
- actions/deploy-pages の実行に必要な permissions を明示する

2. actions -> branch へ切替
- Pages 設定で branch と folder を指定する
- 静的成果物が branch 上に存在することを確認する
- 不要になった deploy workflow の自動実行条件を見直す

3. 切替後の共通確認
- 旧URLから新URLへ遷移して 404 が増えていない
- README の公開手順が現行方式と一致している
- チーム運用手順 (runbook) が更新されている

## 活用3: カスタムドメイン運用チェック
DNS と Pages 設定の不整合を防ぐためのチェック。

1. サブドメイン (例: www.example.com)
- DNS: CNAME を <owner>.github.io に向ける
- Pages: Custom domain に同一ホスト名を設定する

2. ルートドメイン (例: example.com)
- DNS: A/AAAA レコードを GitHub Pages 推奨値に設定する
- Pages: apex ドメインを設定し、www へのリダイレクト方針を決める

3. 運用確認
- 証明書発行前は HTTPS 強制を急いで有効化しない
- DNS 伝播後に HTTPS を有効化する
- 証明書更新失敗に備えて失効監視を入れる

## 活用4: Actions 最小テンプレート (Project Pages)
ビルドが必要な静的サイト用の最小構成。

```yaml
name: deploy-pages

on:
	push:
		branches: [main]
	workflow_dispatch:

permissions:
	contents: read
	pages: write
	id-token: write

concurrency:
	group: pages
	cancel-in-progress: true

jobs:
	build:
		runs-on: ubuntu-latest
		steps:
			- name: Checkout
				uses: actions/checkout@v4
			- name: Setup Node
				uses: actions/setup-node@v4
				with:
					node-version: 20
			- name: Install
				run: npm ci
			- name: Build
				run: npm run build
			- name: Upload artifact
				uses: actions/upload-pages-artifact@v3
				with:
					path: ./dist

	deploy:
		needs: build
		runs-on: ubuntu-latest
		environment:
			name: github-pages
			url: ${{ steps.deployment.outputs.page_url }}
		steps:
			- name: Deploy
				id: deployment
				uses: actions/deploy-pages@v4
```

注記:
- セキュリティ重視運用では、uses はタグではなく commit SHA 固定を推奨する
- path は必ず実際のビルド出力先に合わせる

## 活用5: 運用Runbook (定期点検)
週次またはリリース時に以下を実施する。

1. ワークフロー健全性
- 直近の失敗ランを確認し、同一原因の再発有無をチェックする
- 実行時間が増加していないか確認する

2. 公開健全性
- トップページ、主要導線、404 ページを実ブラウザで確認する
- 多言語サイトは各言語トップを確認する

3. セキュリティ
- pages 関連 workflow の permissions を見直す
- 不要な secrets が残っていないか確認する

4. 変更管理
- 公開方式変更時は PR に「切替チェックリスト結果」を添付する
- 障害対応後は「原因・再発防止」を runbook に追記する

## 活用6: 受け入れテスト (公開前ゲート)
デプロイを完了扱いにする前に、次を満たす。

1. 機能
- 主要URLが 200 を返す
- 主要アセット (CSS/JS/画像) が読み込める

2. 表示
- モバイル幅とデスクトップ幅でレイアウト崩れがない
- 日本語/英語など多言語導線が正しく切り替わる

3. 運用
- Actions 実行履歴に失敗ジョブが残っていない
- Pages 設定、README、Skill 記述が一致している

## 公式リファレンス
- About GitHub Pages: https://docs.github.com/ja/pages/getting-started-with-github-pages/about-github-pages
- GitHub Pages Quickstart: https://docs.github.com/ja/pages/quickstart
- Custom domain: https://docs.github.com/ja/pages/configuring-a-custom-domain-for-your-github-pages-site
- Custom workflows with GitHub Pages: https://docs.github.com/ja/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
