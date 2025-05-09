/**
 * ヘッダーの高さを監視し、メインコンテンツのマージンを動的に調整するロジック
 */
import { mainData } from "../LpData"; // メインデータのみインポート

// 監視オブジェクトをグローバルに保持
let resizeObserver: ResizeObserver | null = null;
let mutationObserver: MutationObserver | null = null;

// 画面幅がメインコンテンツの幅より大きい場合にtrueを返す
// この関数は元の実装でheaderData.layoutTypeを使っていたが、現在は常にfalseを返す
function shouldDisableHeaderResize(): boolean {
    // レイアウトタイプに関わらず、常に機能するためfalseを返す
    return false;
}

// ヘッダー要素とメインコンテンツの要素を監視するための関数
export function observeHeaderHeight() {
    // 以前のObserverをクリーンアップ
    cleanupObservers();
    
    const initObserver = () => {
        // 監視対象のヘッダー要素を取得（standard-headerクラスを持つ要素）
        const header = document.querySelector(".standard-header");
        // メインコンテンツを取得
        const main = document.querySelector("main");

        if (!header || !main) {
            // 要素が見つからない場合は少し遅延して再試行
            setTimeout(initObserver, 50);
            return;
        }

        // 初期設定：現在のヘッダーの高さでメインコンテンツのマージンを設定
        updateMainMargin(header, main);

        // ResizeObserverを使用してヘッダーの高さ変更を監視
        resizeObserver = new ResizeObserver(() => {
            updateMainMargin(header, main);
        });

        // ヘッダーの監視を開始
        resizeObserver.observe(header);

        // ウィンドウのリサイズも監視
        window.addEventListener("resize", handleResize);
        
        // DOM変更の監視（ヘッダーの内容が動的に変更される場合）
        if (window.MutationObserver) {
            mutationObserver = new MutationObserver(() => {
                updateMainMargin(header, main);
            });
            
            mutationObserver.observe(header, {
                attributes: true,
                childList: true,
                subtree: true
            });
        }
    };

    // リサイズイベントハンドラ
    const handleResize = () => {
        const header = document.querySelector(".standard-header");
        const main = document.querySelector("main");
        
        if (header && main) {
            updateMainMargin(header, main);
        }
    };

    // DOMContentLoadedとloadの両方で試行
    if (document.readyState === 'loading') {
        document.addEventListener("DOMContentLoaded", initObserver);
    } else {
        // DOMが既に読み込まれている場合は直接実行
        initObserver();
    }
    
    // 画像読み込み完了後にも再度試行
    window.addEventListener("load", initObserver);
}

// 以前のObserverをクリーンアップする関数
function cleanupObservers() {
    if (resizeObserver) {
        resizeObserver.disconnect();
        resizeObserver = null;
    }
    
    if (mutationObserver) {
        mutationObserver.disconnect();
        mutationObserver = null;
    }
    
    // リサイズイベントリスナーを削除
    window.removeEventListener("resize", handleResize);
}

// リサイズイベントハンドラ（グローバルスコープに移動）
function handleResize() {
    const header = document.querySelector(".standard-header");
    const main = document.querySelector("main");
    
    if (header && main) {
        updateMainMargin(header, main);
    }
}

// メインコンテンツのマージンをヘッダーの高さに合わせて更新する関数
function updateMainMargin(header: Element, main: Element) {
    const headerHeight = header.getBoundingClientRect().height;
    (main as HTMLElement).style.marginTop = `${headerHeight}px`;
}

// ReactのuseEffect内で使用するためのカスタムフック
export function useHeaderResizeEffect() {
    if (typeof window !== "undefined") {
        // クライアントサイドでのみ実行
        observeHeaderHeight();
        
        // クリーンアップ関数を返す
        return () => {
            cleanupObservers();
        };
    }
    return undefined;
}
