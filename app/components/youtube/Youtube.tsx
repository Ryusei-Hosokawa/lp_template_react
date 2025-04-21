import React, { memo } from "react";
import Title from "./Title";
import Player from "./Player";
import { extractYoutubeVideoId } from "../../logics";
import type { YoutubeProps } from "../../types/youtube";

/**
 * YouTubeセクション全体を表示するコンポーネント
 */
export default memo(function Youtube({
    videoId,
    title,
    containerClass,
    titleClass,
    wrapperClass,
}: YoutubeProps) {
    // URLが渡された場合は動画IDに変換、すでに動画IDの場合はそのまま使用
    const processedVideoId = videoId ? extractYoutubeVideoId(videoId) || videoId : '';
    
    if (!processedVideoId) return null;
    
    return (
        <div className={containerClass}>
            {title && <Title title={title} titleClass={titleClass || ''} />}
            <Player videoId={processedVideoId} wrapperClass={wrapperClass} />
        </div>
    );
});
