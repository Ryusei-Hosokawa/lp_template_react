import React from "react";
import { sideData } from "../../LpData";

/**
 * サイドバナーコンポーネント
 * ページの左右に固定バナーを表示します
 */
export default function SideBanner() {
    return (
        <div
            className="
                sticky
                bottom-0
                left-0
                w-full
                max-w-[1500px]
                h-[100vh]
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