/**
 * スクロール関連のロジック関数
 */

/**
 * 指定されたIDの要素へスムーズにスクロールする
 * @param elementId - スクロール先の要素ID
 */
export const scrollToElement = (elementId: string): void => {
    document
        .querySelector(`#${elementId}`)
        ?.scrollIntoView({ behavior: "smooth" });
};

/**
 * フォームセクションへスクロールする
 */
export const scrollToForm = (): void => {
    scrollToElement("from");
};