/**
 * 文字列ユーティリティ関数
 */

/**
 * Tailwindのクラス文字列から数値部分を抽出する
 * 例: "max-w-[660px]" → 660
 * 
 * @param str 解析する文字列
 * @param defaultValue 解析に失敗した場合のデフォルト値
 * @returns 抽出された数値、解析失敗時はdefaultValue
 */
export function extractNumberFromTailwindClass(str: string, defaultValue = 660): number {
    const match = str.match(/\[(\d+)px\]/);
    return match ? parseInt(match[1], 10) : defaultValue;
} 