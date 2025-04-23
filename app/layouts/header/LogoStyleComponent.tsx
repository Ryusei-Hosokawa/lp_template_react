import React from "react";
import { headerData } from "../../LpData";

interface LogoStyleProps {
    isModern: boolean;
    isTopPage: boolean;
}

/**
 * ロゴ用のスタイルを提供するコンポーネント
 * モダンレイアウトとスタンダードレイアウトに応じて適切なスタイルを提供します
 */
export default function LogoStyle({ isModern, isTopPage }: LogoStyleProps) {
    return (
        <>
            {/* モダンレイアウトの場合のスタイル */}
            {isModern && isTopPage && (
                <style>
                    {`@media (min-width: ${headerData.responseWidth + 1}px) {
                        h1.logo {
                            position: absolute !important;
                            width: ${headerData.modernLayout.logoWidthPc} !important;
                            ${headerData.modernLayout.logoPosition.split(' ').join(' !important; ')} !important;
                        }
                    }
                    @media (max-width: ${headerData.responseWidth}px) {
                        h1.logo {
                            max-width: ${headerData.standardLayout.logoMaxWidth} !important;
                            width: ${headerData.standardLayout.logoWidth} !important;
                        }
                    }`}
                </style>
            )}
            {/* スタンダードレイアウトの場合のスタイル */}
            {!isModern && (
                <style>
                    {`h1.logo {
                        max-width: ${headerData.standardLayout.logoMaxWidth} !important;
                        width: ${headerData.standardLayout.logoWidth} !important;
                    }`}
                </style>
            )}
            {/* スタンダードレイアウトの場合のスタイル */}
            {isModern && !isTopPage && (
                <style>
                    {`h1.logo {
                        max-width: ${headerData.standardLayout.logoMaxWidth} !important;
                        width: ${headerData.standardLayout.logoWidth} !important;
                    }`}
                </style>
            )}
        </>
    );
}