import React from "react";
import { headerData } from "../../LpData";
import CompanyLogo from "./CompanyLogo";
import ModernStyle from "./ModernStyleComponent";
import { Image } from "../../components/";
import { handleButtonClick } from "../../logics/buttonActions";
import { filterLinkItems } from "../../logics/headerItemTypeFilter";

/**
 * モダンレイアウト用のヘッダーコンポーネント
 */
export default function ModernHeader({
    isModernLayout,
}: {
    isModernLayout: boolean;
}) {
    // リンク系アイテムをフィルタリングして取得
    const linkData = filterLinkItems(headerData.items);
    const { modernLayout } = headerData;

    return (
        <>
            <ModernStyle isModernLayout={isModernLayout} />
            <header className={`
                modern-header
                fixed top-0 right-0 w-[30vw]
                ${modernLayout.height}
                ${modernLayout.background}
                ${modernLayout.shadow}
                ${modernLayout.zIndex}
                ${!isModernLayout ? 'hidden' : ''}
            `}>
                {/* スタイルを内部に配置 */}
                <style>{`
                    @media (max-width: ${headerData.responseWidth}px) {
                        .modern-header {
                            display: none !important;
                        }
                    }
                `}</style>
                
                {/* ロゴエリア */}
                <div className={`
                    absolute
                    ${modernLayout.logoPosition}
                `}>
                    <CompanyLogo isModernLayout={isModernLayout} />
                </div>

                {/* CTAボタンエリア */}
                <div className={`
                    absolute flex flex-col items-center
                    ${modernLayout.buttonPosition}
                    ${modernLayout.buttonWidth}
                    ${modernLayout.buttonSpacing}
                `}>
                    {linkData.map((item, index) => (
                        <button key={index} className="hoverAction"
                            onClick={() => handleButtonClick(item.type, item.link)}
                        >
                            <picture>
                                <source srcSet={`images/sp_icons/${item.imageNameSp}`} media="(max-width: 780px)"/>
                                <Image src={`${item.imageNameSide}`} />
                            </picture>
                        </button>
                    ))}
                </div>
            </header>
        </>
    );
}
