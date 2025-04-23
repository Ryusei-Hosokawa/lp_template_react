import React from "react";
import { headerData } from "../../LpData";

/**
 * サイドバナー用のスタイルを提供するコンポーネント
 * レスポンシブ対応のためのスタイルを提供します
 */
export default function SideBannerStyle() {
    return (
        <style>{`
            @media (max-width: ${headerData.responseWidth}px) {
                .side-banner {
                    display: none;
                }
            }
        `}</style>
    );
} 