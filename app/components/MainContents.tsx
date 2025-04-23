import React from "react";
import { mainData, CtaData } from "../LpData";
import { Cta, Image } from "./";
import Youtube from "./youtube/Youtube";
import CtaButton from "./cta_ui/CtaButton";
import { generateImageNumbers } from "../logics";

/**
 * メインコンテンツエリアコンポーネント
 * 画像、CTA、YouTubeセクションなどを配置
 */
export default function MainContents() {
    // 画像配列を生成（1からimageItem数まで）
    const imageNumbers = generateImageNumbers(mainData.imageItem);

    return (
        <div className="h-[auto] z-[999]">
            {imageNumbers.map((imageNumber: number) => {
                // 画像ファイル名は1から始まるので、そのまま使用
                const isFirstViewWithCta = imageNumber === 1 && CtaData.cta_fv.firstViewCta;

                return (
                    <React.Fragment key={imageNumber}>
                        <div className={`w-full ${isFirstViewWithCta && 'relative'}`}> {/* ファーストビュー内に専用のCTAボタンを表示するかどうか */}
                            <Image src={`img_${imageNumber}.jpg`}/>
                            {isFirstViewWithCta && <CtaButton isFirstView={true} isFirstViewWithCta={true} />} {/* ファーストビュー内に専用のCTAボタンを表示するかどうか */}
                        </div>
                        {!CtaData.ctaButton.includes(imageNumber) && (<Cta show={CtaData.cta_type.type === "normal"}/>)}
                        {mainData.youtubeData.enabled.includes(imageNumber) && (<Youtube videoId={mainData.youtubeData.videoUrl} wrapperClass={mainData.youtubeData.wrapperClass}/>)}
                    </React.Fragment>
                );
            })}
        </div>
    );
} 