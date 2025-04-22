/**
 * ヘッダー関連の型定義
 */

/**
 * ヘッダーアイテムの型定義
 */
export type HeaderItem = {
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

/**
 * レイアウト設定の型定義
 */
export type LayoutSettings = {
    maxWidth?: string;
    padding?: string;
    paddingSp?: string;
    navWidth?: string;
    navMaxWidth?: string;
    navWidthSp?: string;
    itemWidth?: string;
    itemWidthSp?: string;
    shadow?: string;
    zIndex?: string;
    background?: string;
    logoPosition?: string;
    logoVerticalPosition?: string;
    logoTransform?: string;
    ctaPosition?: string;
    ctaVerticalPosition?: string;
    ctaTransform?: string;
    ctaSpacing?: string;
    height?: string;
    [key: string]: string | undefined;
};

/**
 * ヘッダーデータの型定義
*/
export type HeaderData = {
    layoutType: 'standard' | 'modern';
    responseWidth: number;
    standardLayout: LayoutSettings;
    modernLayout: LayoutSettings;
    items: {
        [key: string]: HeaderItem;
    };
}