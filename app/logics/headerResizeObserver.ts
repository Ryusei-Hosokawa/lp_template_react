/**
 * ヘッダーの高さを監視し、メインコンテンツのマージンを動的に調整するロジック
 */
import { headerData, mainData } from "../LpData"; // ヘッダーとメインデータをインポート

// 監視オブジェクトをグローバルに保持
let resizeObserver: ResizeObserver | null = null;
let mutationObserver: MutationObserver | null = null;

// 画面幅がメインコンテンツの幅より大きく、モダンレイアウトが使用されている場合にtrueを返す
function shouldDisableHeaderResize(): boolean {
    // レイアウトタイプがモダンかどうか
    const isModernLayout = headerData.layoutType === "modern";
    
    // メインコンテンツの最大幅を解析（Tailwindのクラスから数値を抽出）
    const maxWidthMatch = mainData.mainWidth.match(/max-w-\[(\d+)px\]/);
    const maxWidthValue = maxWidthMatch ? parseInt(maxWidthMatch[1], 10) : 660; // デフォルト値
    
    // 現在の画面幅
    const currentWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    
    // モダンレイアウトで、かつ画面幅がメインコンテンツの幅より大きい場合
    return isModernLayout && currentWidth > maxWidthValue;
}

// ヘッダー要素とメインコンテンツの要素を監視するための関数
export function observeHeaderHeight() {
    // モダンレイアウトで大きい画面の場合は何もしない
    if (shouldDisableHeaderResize()) {
        cleanupObservers(); // 既存のオブザーバーをクリーンアップ
        return; // 以降の処理を実行しない
    }

    // 以前のObserverをクリーンアップ
    cleanupObservers();
    
    const initObserver = () => {
        // モダンレイアウトで大きい画面の場合は何もしない（遅延実行時に再チェック）
        if (shouldDisableHeaderResize()) {
            return;
        }

        // 監視対象のヘッダー要素を取得（より具体的なセレクタを使用）
        const header = document.querySelector("body > header");
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
            // レイアウト変更があった場合に再チェック
            if (shouldDisableHeaderResize()) {
                cleanupObservers();
                return;
            }
            updateMainMargin(header, main);
        });

        // ヘッダーの監視を開始
        resizeObserver.observe(header);

        // ウィンドウのリサイズも監視
        window.addEventListener("resize", handleResize);
        
        // DOM変更の監視（ヘッダーの内容が動的に変更される場合）
        if (window.MutationObserver) {
            mutationObserver = new MutationObserver(() => {
                // レイアウト変更があった場合に再チェック
                if (shouldDisableHeaderResize()) {
                    cleanupObservers();
                    return;
                }
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
        // レイアウト変更があった場合に再チェック
        if (shouldDisableHeaderResize()) {
            cleanupObservers();
            return;
        }

        const header = document.querySelector("body > header");
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
    // レイアウト変更があった場合に再チェック
    if (shouldDisableHeaderResize()) {
        cleanupObservers();
        return;
    }

    const header = document.querySelector("body > header");
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
        // モダンレイアウトで大きい画面の場合は何もしない
        if (shouldDisableHeaderResize()) {
            // クリーンアップ関数だけ返す
            return () => {
                cleanupObservers();
            };
        }

        // クライアントサイドでのみ実行
        observeHeaderHeight();
        
        // クリーンアップ関数を返す
        return () => {
            cleanupObservers();
        };
    }
    return undefined;
}
