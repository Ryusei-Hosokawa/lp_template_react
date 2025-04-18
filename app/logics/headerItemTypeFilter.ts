/**
 * ヘッダーアイテムのタイプによるフィルタリング機能
 */

/**
 * 指定されたタイプのヘッダーアイテムをフィルタリングする関数
 * @param items ヘッダーアイテムの配列
 * @param types フィルタリングするタイプの配列
 * @returns フィルタリングされたアイテムの配列
 */
export const filterHeaderItemsByType = (
  items: Array<{ type: string; [key: string]: any }>,
  types: string[]
): Array<{ type: string; [key: string]: any }> => {
  return items.filter((item) => types.includes(item.type));
};

/**
 * リンク系アイテム（line, mail, tel, link）をフィルタリングする関数
 * @param items ヘッダーアイテムの配列
 * @returns リンク系アイテムの配列
 */
export const filterLinkItems = (
  items: Array<{ type: string; [key: string]: any }>
): Array<{ type: string; [key: string]: any }> => {
  return filterHeaderItemsByType(items, ["line", "mail", "tel", "link"]);
};

/**
 * アイコン系アイテムをフィルタリングする関数
 * @param items ヘッダーアイテムの配列
 * @returns アイコン系アイテムの配列
 */
export const filterIconItems = (
  items: Array<{ type: string; [key: string]: any }>
): Array<{ type: string; [key: string]: any }> => {
  return filterHeaderItemsByType(items, ["icon"]);
};

/**
 * 指定されたタイプのヘッダーアイテムを取得する関数
 * @param items ヘッダーアイテムの配列
 * @param type 取得するアイテムのタイプ
 * @returns 見つかったアイテムまたはundefined
 */
export const findItemByType = (
  items: Array<{ type: string; [key: string]: any }>,
  type: string
): { type: string; [key: string]: any } | undefined => {
  return items.find((item) => item.type === type);
}; 