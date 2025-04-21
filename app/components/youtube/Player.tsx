import React, { memo } from "react";
import { generateEmbedUrl } from "../../logics";

type PlayerProps = {
    videoId: string;
    wrapperClass: string;
};
/**
 * YouTube動画プレイヤーを表示するコンポーネント
 */
export default memo(function Player({ videoId, wrapperClass }: PlayerProps) {
    // URLからの動画ID変換を適用
    const embedUrl = generateEmbedUrl(videoId);

    return (
        <div className={`
            ${wrapperClass}
            overflow-hidden aspect-video
        `}>
            <iframe
                src={embedUrl}
                title="Video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className={` w-full h-full`}
            />
        </div>
    );
});
