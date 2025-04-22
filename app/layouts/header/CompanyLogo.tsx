import React from "react";
import * as ReactRouter from "react-router";
import { headerData } from "../../LpData";
import { Image } from "../../components";
import { findItemByType, handleLogoClick } from "../../logics";
const { useLocation, useNavigate } = ReactRouter;

/**
 * ヘッダーに表示する会社ロゴコンポーネント
 */
export default function CompanyLogo() {
    // headerData.itemsから特定のタイプのアイテムを取得
    // 適切な型を指定して型安全性を確保
    const logoItem = findItemByType(headerData.items, "logo");
    const location = useLocation();
    const navigate = useNavigate();

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
            <button 
                className="w-full border-0 p-0 bg-transparent cursor-pointer" 
                onClick={() => handleLogoClick(location.pathname, navigate)}
            >
                <Image src={`${logoItem.imageName}`} />
            </button>
        </h1>
    );
}