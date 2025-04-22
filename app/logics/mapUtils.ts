/**
 * Google マップのiframe文字列からsrcのURLを抽出するユーティリティ関数
 * 
 * @param iframeString - Google マップの埋め込みiframe文字列
 * @returns 抽出されたsrcのURL、抽出できない場合はnull
 */
export const extractMapSrcFromIframe = (iframeString: string): string | null => {
    if (!iframeString) return null;
    
    const srcMatch = iframeString.match(/src="([^"]+)"/);
    return srcMatch ? srcMatch[1] : null;
}; 