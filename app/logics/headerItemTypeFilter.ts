/**
 * ヘッダーアイテムのタイプによるフィルタリング機能
 */

/**
 * ヘッダーデータの型定義
 */
type HeaderItem = {
  link?: string;
  imageName?: string;
  imageNameSp?: string;
  imageUse?: boolean;
  logoWidth?: string;
  logoMaxWidth?: string;
  logoWidthSp?: string;
  background?: string;
  [key: string]: any;
};

type HeaderData = {
  logo: HeaderItem;
  line: HeaderItem;
  mail: HeaderItem;
  tel: HeaderItem;
  header: HeaderItem;
  [key: string]: HeaderItem;
};

/**
 * 指定されたタイプのヘッダーアイテムをフィルタリングする関数
 * @param headerData ヘッダーデータオブジェクト
 * @param types フィルタリングするタイプの配列
 * @returns フィルタリングされたアイテムの配列
 */
export const filterHeaderItemsByType = (
  headerData: HeaderData,
  types: string[]
): Array<HeaderItem & { type: string }> => {
  return Object.keys(headerData)
    .filter(key => types.includes(key))
    .map(key => ({ type: key, ...headerData[key] }));
};

/**
 * リンク系アイテム（line, mail, tel, link）をフィルタリングする関数
 * @param headerData ヘッダーデータオブジェクト
 * @returns リンク系アイテムの配列
 */
export const filterLinkItems = (
  headerData: HeaderData
): Array<HeaderItem & { type: string }> => {
  return filterHeaderItemsByType(headerData, ["line", "mail", "tel", "link"]);
};

/**
 * アイコン系アイテムをフィルタリングする関数
 * @param headerData ヘッダーデータオブジェクト
 * @returns アイコン系アイテムの配列
 */
export const filterIconItems = (
  headerData: HeaderData
): Array<HeaderItem & { type: string }> => {
  return filterHeaderItemsByType(headerData, ["icon"]);
};

/**
 * 指定されたタイプのヘッダーアイテムを取得する関数
 * @param headerData ヘッダーデータオブジェクト
 * @param type 取得するアイテムのタイプ
 * @returns 見つかったアイテムまたはundefined
 */
export const findItemByType = (
  headerData: HeaderData,
  type: string
): (HeaderItem & { type: string }) | undefined => {
  if (type in headerData) {
    return { type, ...headerData[type] };
  }
  return undefined;
}; 