import React from "react";
import { headerData } from "../../LpData";

interface ModernStyleProps {
    isModernLayout: boolean;
    isTopPage: boolean;
}

/**
 * モダンレイアウト用のスタイルを提供するコンポーネント
 * isModernLayoutとisTopPageに基づいて、適切なスタイルを提供します
 */
export default function ModernStyle({
    isModernLayout,
    isTopPage,
}: ModernStyleProps) {
    return (
        <>
            {/* スタンダードレイアウトの場合かつ、topページの場合のみ表示 */}
            {isTopPage && !isModernLayout && (
                <style>
                    {`{
                        .standard-header {
                            display: block;
                        }
                    }`}
                </style>
            )}
            {/* モダンレイアウトの場合かつ、topページの場合のみ表示 */}
            {isTopPage && isModernLayout && (
                <style>
                    {`@media (min-width: ${headerData.responseWidth + 1}px) {
                        .standard-header {
                            display: none;
                        }
                    }`}
                </style>
            )}
            {/* モダンレイアウトの場合かつ、topページ以外の場合の表示 */}
            {!isTopPage && isModernLayout && (
                <style>
                    {`{
                        .standard-header {
                            display: block;
                        }
                    }`}
                </style>
            )}
        </>
    );
}
