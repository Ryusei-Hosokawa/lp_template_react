import React from "react";
import * as ReactRouter from "react-router";
import { headerData } from "../../LpData";
import { Image } from "../../components";
import { findItemByType } from "../../logics";
const { Link } = ReactRouter;

/**
 * ヘッダーに表示する会社ロゴコンポーネント
 */
export default function CompanyLogo() {
    // headerData.itemsから特定のタイプのアイテムを取得
    // 型エラーを回避するためにany型にキャスト
    const logoItem = findItemByType(headerData.items as any, "logo");

    // ロゴアイテムが見つからない場合は何も表示しない
    if (!logoItem) return null;

    // レイアウトタイプに応じたスタイルを適用
    const isModernLayout = headerData.layoutType === "modern";
    const modernStyles = isModernLayout ? `
        absolute
        ${headerData.modernLayout.logoPosition}
        ${headerData.modernLayout.logoVerticalPosition}
        ${headerData.modernLayout.logoTransform}
    ` : '';

    return (
        <h1 className={`
            hoverAction
            ${logoItem.logoWidth}
            ${logoItem.logoMaxWidth}
            ${logoItem.logoWidthSp}
            ${modernStyles}
        `}>
            <Link to={`${logoItem.link}`}>
                <Image src={`${logoItem.imageName}`} />
            </Link>
        </h1>
    );
}