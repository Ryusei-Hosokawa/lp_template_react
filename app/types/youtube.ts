/**
 * YouTube関連の型定義
 */

/**
 * YouTubeプレイヤーの型定義
 */
export type PlayerProps = {
    videoId: string;
    containerClass?: string;
    wrapperClass?: string;
}

/**
 * YouTubeセクションの型定義
 */
export type YoutubeProps = {
    videoId: string;
    title?: string;
    titleClass?: string;
    containerClass?: string;
    wrapperClass?: string;
} 