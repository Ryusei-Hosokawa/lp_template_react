/**
 * ボタンアクション関連のロジック関数
 */

import { companyInformation } from "../LpData";
import { scrollToForm } from "./scrollLogics";

/**
 * ボタンのタイプに応じたクリックイベントを処理する関数
 * @param type ボタンのタイプ (line, mail, tel など)
 * @param link リンク先URL
 */
export function handleButtonClick(type: string, link?: string): void {
  switch (type) {
    case "line":
      // LINEのリンクにアクセス
      if (link) {
        window.open(link, "_blank"); // 新しいタブでLINEを開く
      }
      break;
    case "mail":
      // フォームまでスクロール
      scrollToForm();
      break;
    case "tel":
      // 電話をかける
      const telNumber = companyInformation.tel;
      window.location.href = `tel:${telNumber}`;
      break;
    default:
      // その他のリンク
      if (link) {
        window.location.href = link;
      }
      break;
  }
} 