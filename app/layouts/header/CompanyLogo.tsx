import React from "react";
import * as ReactRouter from "react-router";
import { headerData } from "../../LpData";
import { Image } from "../../components";
import { handleLogoClick } from "../../logics";
import LogoStyle from "./LogoStyleComponent";
const { useLocation, useNavigate } = ReactRouter;

/**
 * ヘッダーに表示する会社ロゴコンポーネント
 */
export default function CompanyLogo({ isModernLayout, isTopPage }: { isModernLayout: boolean, isTopPage: boolean }) {
    // headerData.itemsから特定のタイプのアイテムを取得
    // 適切な型を指定して型安全性を確保
    const logoItem = headerData.items.logo;
    const location = useLocation();
    const navigate = useNavigate();

    const isModern = isModernLayout;

    // ロゴアイテムが見つからない場合は何も表示しない
    if (!logoItem) return null;

    // スタイルを直接JSXの中に適用
    const logoStyle: React.CSSProperties = isModern 
        ? {}  // モダンレイアウトの場合はpositionがCSSセレクタで指定されている
        : { 
            maxWidth: headerData.standardLayout.logoWidth,
            width: "auto"
        };

    return (
        <>
            {/* LogoStyleコンポーネントを使用してスタイルを適用 */}
            <LogoStyle isModern={isModern} isTopPage={isTopPage} />
            
            <h1 
                className={`logo hoverAction ${isModern ? headerData.modernLayout.logoPosition : ''}`}
                style={logoStyle}
            >
                <button className="w-full border-0 p-0 bg-transparent cursor-pointer"
                    onClick={() => handleLogoClick(location.pathname, navigate)}
                >
                    <Image src={`${logoItem.imageName}`} />
                </button>
            </h1>
        </>
    );
}