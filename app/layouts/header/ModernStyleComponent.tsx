import React from 'react';
import { headerData } from '../../LpData';

interface ModernStyleProps {
    isModernLayout: boolean;
}

/**
 * モダンレイアウト用のスタイルを提供するコンポーネント
 * isModernLayoutがtrueの場合、特定の画面幅でヘッダーの表示/非表示を制御するスタイルを提供
 */
export default function ModernStyle({ isModernLayout }: ModernStyleProps) {
    if (!isModernLayout) return null;
    
    return (
        <style>{`
            @media (min-width: ${headerData.responseWidth + 1}px) {
                .standard-header {
                    display: none;
                }
            }
        `}</style>
    );
} 