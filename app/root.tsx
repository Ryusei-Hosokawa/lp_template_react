// Reactライブラリをインポート - UIコンポーネントの作成に必要
import React, { useEffect, memo } from "react";
// React Routerからルーティング関連の機能をインポート
import {
    isRouteErrorResponse, // エラーレスポンスかどうかを判定する関数
    Outlet, // 子ルートのコンポーネントを表示する場所を指定
    Scripts, // JavaScriptを読み込むためのコンポーネント
    ScrollRestoration, // ページ遷移時のスクロール位置を復元するコンポーネント
    useLocation, // 現在のURLロケーションを取得するフック
    Meta,
    Links,
} from "react-router";
import * as layouts from "./layouts"; // レイアウト関連のコンポーネントをインポート（ヘッダー、フッターなど）
import type { Route } from "./+types/root"; // 型定義をインポート
import "./app.css"; // グローバルCSSをインポート
import MainBackground from "./components/MainBackground"; // 背景設定用のコンポーネントをインポート
import { useHeaderResizeEffect } from "./logics/headerResizeObserver"; // ヘッダーのリサイズ監視
import { fontLinks } from "./layouts/head/fontLinks";

// フォントリンクをエクスポート
export const links: Route.LinksFunction = () => [
    ...fontLinks(),
];

// メモ化されたヘッドコンポーネント - 再レンダリングを防止
const MemoizedHead = memo(function Head() {
    return (
        <head>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <Meta />
            <Links />
        </head>
    );
});

// メモ化されたヘッダーコンポーネント - 再レンダリングを防止
const MemoizedHeader = memo(layouts.Header);

// メモ化されたフッターコンポーネント - 再レンダリングを防止
const MemoizedFooter = memo(layouts.Footer);

// アプリケーションのルートコンポーネント - React Routerのエントリーポイント
export default function App() {
    // ロケーションの変更を監視
    const location = useLocation();
    
    // ヘッダーのリサイズ監視（ページ遷移時にのみ再実行）
    useEffect(() => {
        // ヘッダーのリサイズを監視する
        const cleanup = useHeaderResizeEffect();
        
        return () => {
            // コンポーネントがアンマウントされるときにクリーンアップ
            if (cleanup) cleanup();
        };
    }, [location.pathname]); // URLが変わるたびに再実行

    // Layoutは1回だけレンダリングされ、内部のOutletだけがページ遷移時に変更される
    return (
        <html lang="ja">
            <MemoizedHead />
            <body
                className={`
                    relative
                    min-h-screen
                    z-[-100]
                `}
            >
                <MainBackground />
                <MemoizedHeader />
                <noscript>
                    <div style={{ 
                        padding: '20px', 
                        textAlign: 'center', 
                        backgroundColor: '#ffeeee',
                        border: '1px solid #ff0000',
                        margin: '20px'
                    }}>
                        <p>このサイトはJavaScriptを有効にする必要があります。</p>
                        <p>Please enable JavaScript to view this website properly.</p>
                    </div>
                </noscript>
                
                {/* Outletのみがページ遷移時に変更される */}
                <Outlet />
                
                <MemoizedFooter />
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

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
