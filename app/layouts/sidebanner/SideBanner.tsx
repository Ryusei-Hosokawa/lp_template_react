import React from "react";
import { headerData, sideData } from "../../LpData";
import { Image } from "../../components";

const sideBannerStyle = () => {
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

/**
 * サイドバナーコンポーネント
 * ページの左右に固定バナーを表示します
 */
export default function SideBanner() {
    sideBannerStyle()
    return (
        <div className="fixed bottom-0 left-[50%] translate-x-[-50%] w-full h-[100vh] z-[-1]">
            {Object.values(sideData).map((side) => (
                <div key={side.imageName}
                    className={`
                        side-banner
                        absolute
                        ${side.size}
                        ${side.position}
                `}>
                    <Image src={`${side.imageName}`} />
                </div>
            ))}
        </div>
    );
} 