import React from "react";
import { Image } from "../../components";

// 電話ボタン用のpropsの型定義
type TelProps = {
    link?: string;
    imageName?: string;
    imageNameSp?: string;
    imageUse: boolean;
};
// 電話ボタンコンポーネント
export default function Tel({ link }: TelProps) {
    return (
        <>
            <div className="w-full max-[780px]:hidden">
                <div className="text-center pt-[2.5px] pb-[2px] bg-[#222] rounded-[2px]">
                    <span className="block text-[#fff] text-[70%] leading-[1em]">
                        お電話はこちら
                    </span>
                </div>
                <div className="flex items-center justify-between font-bold text-lg">
                    <span className="w-[9%]">
                        <Image src={`tel_pc_icon.svg`} />
                    </span>
                    <span className="
                        text-[clamp(0px,2.6vw,25.5px)]
                        font-[700]
                        font-num
                        text-[#222]
                        leading-[1em]
                        tracking-[-0.04em]
                        whitespace-nowrap
                    ">
                        {link}
                    </span>
                </div>
            </div>
            <div className="w-full max-[781px]:block hidden">
                <Image src={`sp_icons/tel_sp.svg`} />
            </div>
        </>
    );
}
