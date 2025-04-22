import React from "react";
import { sideData } from "../../LpData";
import { Image } from "../../components";

/**
 * サイドバナーコンポーネント
 * ページの左右に固定バナーを表示します
 */
export default function SideBanner() {
    return (
        <div className="fixed bottom-0 left-[50%] translate-x-[-50%] w-full h-[100vh] z-[-1]">
            {Object.values(sideData).map((side) => (
                <div key={side.imageName}
                    className={`
                        max-[780px]:hidden absolute
                        ${side.size}
                        ${side.position}
                `}>
                    <Image src={`${side.imageName}`} />
                </div>
            ))}
        </div>
    );
} 