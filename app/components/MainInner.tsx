import React from "react";
import type { ReactNode } from "react";
import { mainData } from "../LpData";

type MainInnerWrapperProps = {
    children: ReactNode;
};

/**
 * メインコンテンツの内側エリアを包むラッパーコンポーネント
 * 影やサイズを設定し、子コンポーネントを格納
*/
export default function MainInnerWrapper({ children }: MainInnerWrapperProps) {
    return (
        <div id="main_inner" 
            className={`mx-auto drop-shadow-[0_0_10px_rgba(0,0,0,0.3)] z-[999]
                ${mainData.mainWidth}
            `}
        >
            {children}
        </div>
    );
} 