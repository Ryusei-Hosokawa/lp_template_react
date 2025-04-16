// Reactライブラリをインポート - UIコンポーネントの作成に必要
import React from "react";
// React Routerからルーティング関連の機能をインポート
import {
    isRouteErrorResponse, // エラーレスポンスかどうかを判定する関数
    Outlet, // 子ルートのコンポーネントを表示する場所を指定
    Scripts, // JavaScriptを読み込むためのコンポーネント
    ScrollRestoration, // ページ遷移時のスクロール位置を復元するコンポーネント
} from "react-router";
import * as layouts from "./layouts"; // レイアウト関連のコンポーネントをインポート（ヘッダー、フッターなど）
import type { Route } from "./+types/root"; // 型定義をインポート
import "./app.css"; // グローバルCSSをインポート
import { backgroundData } from "./LpData"; // 背景設定用のデータをインポート

// アプリケーションの基本レイアウトを定義するコンポーネント
export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ja">
            <layouts.Head />{" "}
            {/* ヘッドセクション（メタタグ、タイトル、CSSリンクなど） */}
            {/* ボディセクション - 背景スタイルを適用 */}
            <body
                className={`
                    min-h-screen
                    z-[-100]
                    ${backgroundData.backgroundColor} 
                    ${backgroundData.backgroundImage} 
                    ${backgroundData.backgroundAttachment} 
                    ${backgroundData.backgroundSize} 
                    ${backgroundData.backgroundPosition} 
                    ${backgroundData.backgroundRepeat}
                `}
            >
                <layouts.Header />
                {/* ヘッダーコンポーネント - サイト上部に表示 */}
                <layouts.SideBanner /> {/* 固定バナーコンポーネントを表示 */}
                {children}
                {/* メインコンテンツ部分 - 子コンポーネントが表示される */}
                <layouts.Footer />
                {/* フッターコンポーネント - サイト下部に表示 */}
                <ScrollRestoration />
                {/* スクロール位置を復元するコンポーネント */}
                <Scripts /> {/* JavaScriptを読み込むコンポーネント */}
            </body>
        </html>
    );
}

// ================================================================================================ //
// アプリケーションのルートコンポーネント - React Routerのエントリーポイント
export default function App() {
    // Outletは現在のルートに一致する子ルートを表示する場所
    return <Outlet />;
}
// ================================================================================================ //

// ================================================================================================ //
// エラー発生時に表示されるコンポーネント
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
    // エラーメッセージの初期値を設定
    let message = "Oops!";
    let details = "An unexpected error occurred.";
    let stack: string | undefined;

    // エラーの種類に応じて表示内容を変更
    if (isRouteErrorResponse(error)) {
        // ルーティングエラーの場合（404など）
        message = error.status === 404 ? "404" : "Error";
        details =
            error.status === 404
                ? "The requested page could not be found."
                : error.statusText || details;
    } else if (import.meta.env.DEV && error && error instanceof Error) {
        // 開発環境での一般的なJavaScriptエラーの場合
        details = error.message;
        stack = error.stack; // スタックトレースを取得
    }

    // エラー画面のUIを返す
    return (
        <main className="pt-16 p-4 container mx-auto">
            <h1>{message}</h1>
            <p>{details}</p>
            {/* 開発環境でのみスタックトレースを表示 */}
            {stack && (
                <pre className="w-full p-4 overflow-x-auto">
                    <code>{stack}</code>
                </pre>
            )}
        </main>
    );
}
// ================================================================================================ //
