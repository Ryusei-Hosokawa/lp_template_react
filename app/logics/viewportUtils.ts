/**
 * ビューポートに関するユーティリティ関数
 */
import { useState, useEffect, useCallback } from 'react';

/**
 * 現在のビューポート幅を取得する
 * @returns ビューポート幅（ピクセル）
 */
export function getCurrentViewportWidth(): number {
    // クライアントサイドでのみ実行
    if (typeof window === 'undefined') {
        return 0;
    }
    return window.innerWidth;
}

/**
 * 画面幅が特定の値以下かどうかをチェックする
 * @param threshold 閾値（ピクセル）
 * @returns 画面幅が閾値以下であればtrue、そうでなければfalse
 */
export function isViewportWidthBelow(threshold: number): boolean {
    return getCurrentViewportWidth() <= threshold;
}

/**
 * 画面幅がリアルタイムで監視するReactフック
 * @returns 現在の画面幅（ピクセル）
 */
export function useViewportWidth(): number {
    // SSRの場合は0を返す
    const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
    
    useEffect(() => {
        // クライアントサイドでない場合は何もしない
        if (typeof window === 'undefined') {
            return;
        }
        
        // リサイズイベントのハンドラ
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        
        // 初期値を設定
        handleResize();
        
        // リサイズイベントをリッスン
        window.addEventListener('resize', handleResize);
        
        // クリーンアップ関数
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    return width;
}

/**
 * 特定の閾値に基づいてメディアクエリを監視するReactフック
 * @param threshold 閾値（ピクセル）
 * @returns 画面幅が閾値以下であればtrue、そうでなければfalse
 */
export function useMediaQuery(threshold: number): boolean {
    const width = useViewportWidth();
    return width <= threshold;
} 