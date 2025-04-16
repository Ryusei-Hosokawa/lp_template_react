import React from "react";
import { sideData } from "../../LpData";

/**
 * サイドバナーコンポーネント
 * ページの左右に固定バナーを表示します
 */
export default function SideBanner() {
    // Tailwind CSSのボーダー指定例（実際には使用しない参考コード）
    const borderExamples = {
        // 基本的なボーダー指定
        basic: "border", // 1pxの標準ボーダー（全辺）
        
        // ボーダーの太さ指定
        width: {
            thin: "border", // 1px（デフォルト）
            medium: "border-2", // 2px
            thick: "border-4", // 4px
            custom: "border-[3px]", // カスタム幅 3px
        },
        
        // ボーダーの色指定
        color: {
            default: "border border-gray-300", // デフォルトグレー
            custom: "border border-[#bcbcbb]", // カスタムカラー
            namedColor: "border border-red-500", // 名前付きカラー
        },
        
        // 特定の辺のみのボーダー
        sides: {
            top: "border-t", // 上辺のみ
            right: "border-r", // 右辺のみ
            bottom: "border-b", // 下辺のみ
            left: "border-l", // 左辺のみ
            horizontal: "border-x", // 左右辺
            vertical: "border-y", // 上下辺
        },
        
        // ボーダースタイル（実際にはTailwindではデフォルトでは提供されていない）
        // JITモードやカスタム設定が必要
        style: {
            solid: "border border-solid", // 実線（デフォルト）
            dashed: "border border-dashed", // 破線
            dotted: "border border-dotted", // 点線
            custom: "border-[1px_solid_#bcbcbb]", // カスタム指定（幅・スタイル・色）
        },
        
        // 組み合わせ例
        combined: {
            complex: "border-t-2 border-r-4 border-blue-500 border-l-0",
            topOnly: "border-t border-gray-300 border-b-0 border-x-0",
        }
    };

    return (
        <div
            className="
                fixed
                bottom-0
                left-0
                w-full
                max-w-[1500px]
                h-[100vh]
                mx-auto
                flex
                justify-between
                pointer-events-none
                z-[800]
            "
        >
            {sideData.map((side) => (
                <div
                    key={side.type}
                    className={`
                        max-[780px]:hidden
                        absolute
                        max-w-[200px]
                        ${side.size}
                        ${side.position}
                    `}
                >
                    <img src={`images/${side.imageName}`} />
                </div>
            ))}
        </div>
    );
} 