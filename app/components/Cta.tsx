import React from "react";
import { CtaData } from "../LpData";
import { scrollToForm } from "../logics/scrollLogics";
import { Image } from "./Image";

const ctaBg = CtaData.filter((cta) => cta.type === "bg");
const ctaButton = CtaData.filter((cta) => cta.type === "button");

// CTAボタンのタイプ定義
type CtaButtonType = {
    type: string;
    imageName: string;
    position: string;
    actionType?: "scrollToForm" | "linkUrl";
    linkUrl?: string;
};

export default function Cta() {
    // ボタンクリック時のハンドラー関数
    const handleCtaClick = (button: CtaButtonType) => {
        if (button.actionType === "linkUrl" && button.linkUrl) {
            // LINEリンクに飛ぶ場合
            window.open(button.linkUrl, "_blank", "noopener,noreferrer");
        } else {
            // デフォルトはフォームにスクロール
            scrollToForm();
        }
    };

    return (
        <div className="relative">
            {ctaBg.map((cta) => {
                return (
                    <div key={cta.imageName} className="w-full">
                        <Image className=" w-full inline-block" src={`${cta.imageName}`} />
                    </div>
                );
            })}
            {ctaButton.map((cta) => {
                return (
                    <button
                        key={cta.imageName}
                        className={`
                            block absolute w-[80%] h-auto z-100 top-[50%] left-[50%] bg-cover
                            bg-center bg-no-repeat cursor-pointer buttonAnimation transition-all duration-300 ease-in-out hover:opacity-80
                            ${cta.position}
                        `}
                        onClick={() => handleCtaClick(cta as CtaButtonType)}
                    >
                        <Image className=" w-full inline-block" src={`${cta.imageName}`} />
                    </button>
                );
            })}
        </div>
    );
}
