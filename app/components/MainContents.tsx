import React from "react";
import { mainData, CtaData } from "../LpData";
import { Cta, Image, Youtube } from "./";
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
        <div className="h-[auto]">
            {imageNumbers.map((imageNumber: number) => {
                // 画像ファイル名は1から始まるので、そのまま使用
                const isFirstViewWithCta = imageNumber === 1 && CtaData.cta_fv.firstViewCta;

                return (
                    <React.Fragment key={imageNumber}>
                        <div className={`w-full ${isFirstViewWithCta && 'relative'}`}> {/* ファーストビュー内に専用のCTAボタンを表示するかどうか */}
                            <Image src={`img_${imageNumber}.jpg`}/>
                            {isFirstViewWithCta && <CtaButton isFirstView={true} />} {/* ファーストビュー内に専用のCTAボタンを表示するかどうか */}
                        </div>
                        {!mainData.ctaButton.includes(imageNumber) && (
                            <Cta show={CtaData.cta_type.type === "normal"}/>
                        )}
                        {mainData.youtubeData.enabled.includes(imageNumber) && (
                            <Youtube
                                videoId={mainData.youtubeData.videoUrl}
                                title={mainData.youtubeData.title}
                                titleClass={mainData.youtubeData.titleClass}
                                containerClass={mainData.youtubeData.containerClass}
                                wrapperClass={mainData.youtubeData.wrapperClass}
                            />
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
} 