/**
 * ヘッダーアイテムのタイプによるフィルタリング機能
 */

import type { HeaderItem } from "../types/header";

/**
 * ヘッダーアイテム辞書の型定義
 */
type HeaderItemsDictionary = {
    [key: string]: HeaderItem;
};

/**
 * 指定されたタイプのヘッダーアイテムをフィルタリングする関数
 * @param itemsDict ヘッダーアイテム辞書オブジェクト
 * @param types フィルタリングするタイプの配列
 * @returns フィルタリングされたアイテムの配列
 */
export const filterHeaderItemsByType = (
    itemsDict: HeaderItemsDictionary,
    types: string[]
): Array<HeaderItem & { type: string }> => {
    return Object.keys(itemsDict)
        .filter((key) => types.includes(key))
        .map((key) => ({ type: key, ...itemsDict[key] }));
};

/**
 * リンク系アイテム（line, mail, tel, link）をフィルタリングする関数
 * @param itemsDict ヘッダーアイテム辞書オブジェクト
 * @returns リンク系アイテムの配列
 */
export const filterLinkItems = (
    itemsDict: HeaderItemsDictionary
): Array<HeaderItem & { type: string }> => {
    return filterHeaderItemsByType(itemsDict, ["line", "mail", "tel", "link"]);
};

/**
 * アイコン系アイテムをフィルタリングする関数
 * @param itemsDict ヘッダーアイテム辞書オブジェクト
 * @returns アイコン系アイテムの配列
 */
export const filterIconItems = (
    itemsDict: HeaderItemsDictionary
): Array<HeaderItem & { type: string }> => {
    return filterHeaderItemsByType(itemsDict, ["icon"]);
};

/**
 * 指定されたタイプのヘッダーアイテムを取得する関数
 * @param itemsDict ヘッダーアイテム辞書オブジェクト
 * @param type 取得するアイテムのタイプ
 * @returns 見つかったアイテムまたはundefined
 */
export const findItemByType = (
    itemsDict: HeaderItemsDictionary,
    type: string
): (HeaderItem & { type: string }) | undefined => {
    if (type in itemsDict) {
        return { type, ...itemsDict[type] };
    }
    return undefined;
};
