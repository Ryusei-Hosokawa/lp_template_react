import React from "react";
import { headerData } from "../../LpData";

// 電話ボタン用のpropsの型定義
type TelProps = {
    link?: string;
    imageName?: string;
    imageNameSp?: string;
    imageUse: boolean;
};

// 電話ボタンコンポーネント
export default function Tel({
    link,
    imageName,
    imageNameSp,
    imageUse,
}: TelProps) {
    return (
        <>
            <div className="w-full">
                <div className="text-center pt-[2.5px] pb-[2px] bg-[#222] mb-[2%]">
                    <span className="block text-[#fff] text-[70%] leading-[1em]">
                        お電話はこちら
                    </span>
                </div>
                <div className="flex items-center justify-between font-bold text-lg">
                    <span className="w-[1em] min-w-[1em]">
                        <img src="./images/tel_pc_icon.svg" />
                    </span>
                    <span
                        className="
                            text-[clamp(0px,2.6vw,22px)]
                            leading-[1em]
                            font-[#222]
                            font-[700]
                            font-oswald
                            whitespace-nowrap
                            tracking-[0.03em]
                        "
                    >
                        {link}
                    </span>
                </div>
            </div>
        </>
    );
}
