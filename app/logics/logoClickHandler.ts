import type { NavigateFunction } from 'react-router';
import { resetScrollPosition } from './scrollLogics';

/**
 * ロゴがクリックされたときの処理を行う関数
 * 現在のパスに基づいて、ホームページへの遷移またはページ上部へのスクロールを実行
 * 
 * @param pathname 現在のパス
 * @param navigate ナビゲーション関数
 */
export const handleLogoClick = (pathname: string, navigate: NavigateFunction): void => {
    // ホームページ（/）にいる場合は、ページ最上部にスクロール
    if (pathname === "/" || pathname === "") {
        window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
        // それ以外の場合はホームページへ遷移し、スクロール位置もリセット
        resetScrollPosition();
        navigate("/");
        
        // 非同期処理の後にもう一度スクロール位置をリセット
        setTimeout(() => {
            resetScrollPosition();
        }, 100);
    }
};