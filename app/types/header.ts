/**
 * ヘッダー関連の型定義
 */

/**
 * ヘッダーアイテムの型定義
 */
export type HeaderItem = {
    link?: string;
    imageName?: string;
    imageNameSide?: string;  // サイドメニュー用の画像名
    imageNameSp?: string;
    imageUse?: boolean;
    background?: string;
    logoWidth?: string;      // ロゴの幅
    logoMaxWidth?: string;   // ロゴの最大幅
    logoWidthSp?: string;    // スマホ用ロゴ幅
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

export type ModernLayout = {
    logoWidthPc: string;
    logoPosition: string;
    buttonPosition: string;
    buttonWidth: string;
    buttonSpacing: string;
    background: string;
    shadow: string;
    width: string;
    height: string;
    zIndex: string;
}

/**
 * ヘッダーデータの型定義
*/
export type HeaderData = {
    layoutType: 'standard' | 'modern';
    responseWidth: number;
    standardLayout: LayoutSettings;
    modernLayout: ModernLayout;
    items: {
        [key: string]: HeaderItem;
    };
}