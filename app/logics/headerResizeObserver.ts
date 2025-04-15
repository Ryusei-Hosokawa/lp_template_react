/**
 * ヘッダーの高さを監視し、メインコンテンツのマージンを動的に調整するロジック
 */

// ヘッダー要素とメインコンテンツの要素を監視するための関数
export function observeHeaderHeight() {
    const initObserver = () => {
        // 監視対象のヘッダー要素を取得（より具体的なセレクタを使用）
        const header = document.querySelector("body > header");
        // メインコンテンツを取得
        const main = document.querySelector("main");

        if (!header || !main) return;

        // 初期設定：現在のヘッダーの高さでメインコンテンツのマージンを設定
        updateMainMargin(header, main);

        // ResizeObserverを使用してヘッダーの高さ変更を監視
        const resizeObserver = new ResizeObserver(() => {
            updateMainMargin(header, main);
        });

        // ヘッダーの監視を開始
        resizeObserver.observe(header);

        // ウィンドウのリサイズも監視
        window.addEventListener("resize", () => {
            updateMainMargin(header, main);
        });
        
        // DOM変更の監視（ヘッダーの内容が動的に変更される場合）
        if (window.MutationObserver) {
            const mutationObserver = new MutationObserver(() => {
                updateMainMargin(header, main);
            });
            
            mutationObserver.observe(header, {
                attributes: true,
                childList: true,
                subtree: true
            });
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

// メインコンテンツのマージンをヘッダーの高さに合わせて更新する関数
function updateMainMargin(header: Element, main: Element) {
    const headerHeight = header.getBoundingClientRect().height;
    (main as HTMLElement).style.marginTop = `${headerHeight}px`;
}

// コンポーネント内で使用するためのカスタムフック
export function useHeaderResizeEffect() {
    if (typeof window !== "undefined") {
        // クライアントサイドでのみ実行
        observeHeaderHeight();
    }
}
