/**
 * 画像配列を生成するユーティリティ関数
 */

/**
 * 1から指定された数までの連番配列を生成する
 * @param count 生成する配列の要素数
 * @returns 1からcountまでの連番配列
 */
export const generateImageNumbers = (count: number): number[] => {
    if (count <= 0) return [];
    
    // 1からcountまでの連番配列を生成
    return Array.from(
        { length: count },
        (_, i) => i + 1
    );
}; 