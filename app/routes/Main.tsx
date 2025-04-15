import React from "react";
import { imageData, CtaData, headerData } from "../LpData";
import { Cta, ContactForm, CompanyInfo } from "../components";

export function Main() {
    // 画像配列を生成（1からimageItem数まで）
    const imageNumbers = Array.from({ length: imageData.imageItem }, (_, i) => i + 1);

    return (
        <main className={`
                pt-[${headerData.find((item) => item.type === "header")?.height}]
                max-w-[470px]
                mx-auto
                drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]
            `}
        >
            <div id="main-contents-wrapper">
                <div className="h-[auto]">
                    {imageNumbers.map((num) => {
                        // 画像ファイル名は1から始まるので、そのまま使用
                        const imageNum = num;
                        return (
                            <React.Fragment key={imageNum}>
                                <img
                                    src={`/images/img_${imageNum}.${imageData.extension}`}
                                    alt={`コンテンツ画像 ${imageNum}`}
                                    className="w-full"
                                />
                                {!imageData.ctaButton.includes(imageNum) && <Cta />}
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
            <ContactForm /> {/* フォーム内容 */}
            <CompanyInfo /> {/* 会社概要 */}
        </main>
    );
}
