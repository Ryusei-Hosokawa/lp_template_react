/**
 * ヘッダーの高さを監視し、メインコンテンツのpaddingを動的に調整するロジック
 */

// ヘッダー要素とメインコンテンツの要素を監視するための関数
export function observeHeaderHeight() {
    // DOMContentLoadedイベントで実行
    document.addEventListener("DOMContentLoaded", () => {
        // 監視対象のヘッダー要素を取得
        const header = document.querySelector("header");
        // メインコンテンツを取得
        const main = document.querySelector("main");

        if (!header || !main) return;

        // 初期設定：現在のヘッダーの高さでメインコンテンツのpaddingを設定
        updateMainPadding(header, main);

        // ResizeObserverを使用してヘッダーの高さ変更を監視
        const resizeObserver = new ResizeObserver(() => {
            updateMainPadding(header, main);
        });

        // ヘッダーの監視を開始
        resizeObserver.observe(header);

        // ウィンドウのリサイズも監視
        window.addEventListener("resize", () => {
            updateMainPadding(header, main);
        });
    });
}

// メインコンテンツのpaddingをヘッダーの高さに合わせて更新する関数
function updateMainPadding(header: Element, main: Element) {
    const headerHeight = header.getBoundingClientRect().height;
    (main as HTMLElement).style.paddingTop = `${headerHeight}px`;
}

// コンポーネント内で使用するためのカスタムフック
export function useHeaderResizeEffect() {
    if (typeof window !== "undefined") {
        // クライアントサイドでのみ実行
        observeHeaderHeight();
    }
}
