import React, { memo } from "react";
import { generateEmbedUrl } from "../../logics";
import type { PlayerProps } from "../../types/youtube";

/**
 * YouTube動画プレイヤーを表示するコンポーネント
 */
export default memo(function Player({ 
    videoId, 
    wrapperClass = "w-full rounded-lg shadow-lg overflow-hidden" 
}: PlayerProps) {
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
