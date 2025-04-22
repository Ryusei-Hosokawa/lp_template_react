/**
 * YouTubeのURLから動画IDを抽出するユーティリティ関数
 */

/**
 * 様々な形式のYouTube URLから動画IDを抽出する
 * @param url YouTubeのURL (https://www.youtube.com/watch?v=XXX, https://youtu.be/XXX など)
 * @returns 抽出した動画ID、無効なURLの場合は空文字列
 */
export const extractYoutubeVideoId = (url: string): string => {
    if (!url) return '';

    // 標準的なYouTube URL (https://www.youtube.com/watch?v=XXXXXXXXX)
    let match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/|youtube\.com\/e\/|youtube\.com\/user\/.+\/|youtube\.com\/shorts\/|youtube\.com\/watch\?.*v=)([^#\&\?\/]*)/);
    if (match && match[1]) {
        return match[1];
    }

    // YouTubeショート形式 (https://youtube.com/shorts/XXXXXXXXX)
    match = url.match(/(?:youtube\.com\/shorts\/)([^#\&\?\/]*)/);
    if (match && match[1]) {
        return match[1];
    }

    return '';
};

/**
 * 動画IDから埋め込み用URLを生成する
 * @param videoId YouTubeの動画ID
 * @returns 埋め込み用のURL
 */
export const generateEmbedUrl = (videoId: string): string => {
    if (!videoId) return '';
    return `https://www.youtube.com/embed/${videoId}`;
};

/**
 * YouTubeのURLを埋め込み用URLに変換する
 * @param url YouTubeのURL
 * @returns 埋め込み用のURL
 */
export const convertToEmbedUrl = (url: string): string => {
    const videoId = extractYoutubeVideoId(url);
    return generateEmbedUrl(videoId);
}; 