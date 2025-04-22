/**
 * CTA（コールトゥアクション）関連の型定義
 */

/**
 * CTAボタンコンポーネントのプロップス型定義
 */
export interface CtaButtonProps {
    isFirstView?: boolean; // ファーストビュー内かどうかのフラグ
    isFirstViewWithCta?: boolean; // ファーストビュー内専用CTAボタンかどうかのフラグ
}

/**
 * 固定CTAボタンコンポーネントのプロップス型定義
 */
export interface FixedCtaButtonProps {
    isFirstViewWithCta?: boolean; // ファーストビュー内専用CTAボタンかどうかのフラグ
}

/**
 * CTA背景コンポーネントのプロップス型定義
 */
export interface CtaBackgroundProps {
    className?: string; // 追加のCSSクラス
}

/**
 * CTAコンポーネントのプロップス型定義
 */
export interface CtaProps {
    show: boolean; // 表示するかどうかのフラグ
} 