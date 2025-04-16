import React from "react";
import { imageData } from "../LpData";
import { Cta, ContactForm, CompanyInfo } from "../components";
import { useHeaderResizeEffect } from "../logics/headerResizeObserver";

export default function Main() {
    // ヘッダー高さ自動調整機能を適用
    useHeaderResizeEffect();

    // 画像配列を生成（1からimageItem数まで）
    const imageNumbers = Array.from(
        { length: imageData.imageItem },
        (_, i) => i + 1
    );

    return (
        <main
            className={`
                max-w-[470px]
                mx-auto
                drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]
            `}
        >
            <div className="h-[auto]">
                {imageNumbers.map((imageNumber) => {
                    // 画像ファイル名は1から始まるので、そのまま使用
                    return (
                        <React.Fragment key={imageNumber}>
                            <img
                                src={`/images/img_${imageNumber}.${imageData.extension}`}
                                className="w-full"
                            />
                            {!imageData.ctaButton.includes(imageNumber) && (
                                <Cta />
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
            <ContactForm /> {/* フォーム内容 */}
            <CompanyInfo /> {/* 会社概要 */}
        </main>
    );
}
