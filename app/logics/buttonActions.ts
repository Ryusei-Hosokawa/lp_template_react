/**
 * ボタンアクション関連のロジック関数
 */
import { headerData } from "../LpData";
import { scrollToForm, resetScrollPosition } from "./scrollLogics";
import { findItemByType } from "./headerItemTypeFilter";

/**
 * 安全に新しいタブでURLを開く関数
 * noopener/noreferrerと同等のセキュリティ対策を実装
 * @param url 開くURL
 */
function safeOpenInNewTab(url: string): void {
  // 新しいウィンドウを開く
  const newWindow = window.open(url, '_blank');
  
  // セキュリティ対策: opener参照を削除 (noopener相当)
  if (newWindow) {
    newWindow.opener = null;
  }
}

/**
 * ボタンのタイプに応じたクリックイベントを処理する関数
 * @param type ボタンのタイプ (line, link, mail, tel など)
 * @param link リンク先URL
 */
export function handleButtonClick(type: string, link?: string): void {
    // headerData.itemsからタイプを取得
    const headerItem = findItemByType(headerData.items, type);
    
    switch (type) {
        case "line":
        case "link":
            // LINEまたは外部リンクにアクセス
            if (link || (headerItem && headerItem.link)) {
                const targetUrl = link || (headerItem?.link ?? "");
                if (targetUrl) {
                    // セキュリティ対策を施した関数で開く
                    safeOpenInNewTab(targetUrl);
                }
            }
            break;
        case "mail":
            // フォームまでスクロール
            scrollToForm();
            break;
        case "tel":
            // 電話をかける
            if (headerItem && headerItem.link) {
                window.location.href = `tel:${headerItem.link}`;
            }
            break;
        default:
            // その他のリンク
            if (link) {
                // スクロール位置をリセットしてからリンク先に移動
                resetScrollPosition();
                window.location.href = link;
            }
            break;
    }
}