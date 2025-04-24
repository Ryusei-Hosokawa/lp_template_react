/**
 * スクロール関連のロジック関数
 */
import { useEffect, useLayoutEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router";

/**
 * 指定されたIDの要素へスムーズにスクロールする
 * @param elementId - スクロール先の要素ID
 */
export const scrollToElement = (elementId: string): void => {
    document
        .querySelector(`#${elementId}`)
        ?.scrollIntoView({ behavior: "smooth" });
};

/**
 * フォームセクションへスクロールする
 */
export const scrollToForm = (): void => {
    scrollToElement("from");
};

/**
 * 強制的にスクロール位置をリセットする関数
 * 複数の要素に対して適用し、タイムアウトを使って確実に実行する
 */
export const resetScrollPosition = (): (() => void) => {
    // 即時スクロールリセット
    window.scrollTo(0, 0);
    document.documentElement.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
    
    // レンダリング後のスクロールリセット
    const timeoutId = setTimeout(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTo(0, 0);
        document.body.scrollTo(0, 0);
    }, 0);
    
    // クリーンアップ関数を返す
    return () => clearTimeout(timeoutId);
};

/**
 * ページ遷移時に画面上部にスクロールするカスタムフック
 * ScrollRestorationよりも優先的に実行され、強制的に画面上部にスクロールする
 */
export const useScrollToTop = (): void => {
    const { pathname } = useLocation();
    
    // useLayoutEffectを使用してDOMの更新前に実行
    useLayoutEffect(() => {
        // 強制的にスクロール位置をリセット
        const cleanup = resetScrollPosition();
        
        // さらに少し遅らせて再度スクロールリセット
        const secondTimeoutId = setTimeout(() => {
            resetScrollPosition();
        }, 50);
        
        // さらに遅延させて3度目のスクロールリセット（非同期コンテンツのロード後も対応）
        const thirdTimeoutId = setTimeout(() => {
            resetScrollPosition();
        }, 200);
        
        return () => {
            cleanup();
            clearTimeout(secondTimeoutId);
            clearTimeout(thirdTimeoutId);
        };
    }, [pathname]);
};

/**
 * スクロール位置をリセットしながらナビゲーションするカスタムフック
 * useNavigateを拡張し、ナビゲーション前にスクロール位置をリセットする
 */
export const useNavigateWithScrollReset = () => {
    const navigate = useNavigate();
    
    return useCallback(
        (to: string, options?: any) => {
            // ナビゲーション前にスクロール位置をリセット
            resetScrollPosition();
            
            // 100ms後に再度リセット（SPAの遷移時に確実に効かせるため）
            setTimeout(() => {
                resetScrollPosition();
            }, 100);
            
            // 通常のナビゲーションを実行
            navigate(to, options);
        },
        [navigate]
    );
};