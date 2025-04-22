import React from "react";
import { headerData } from "../../LpData";
import CompanyLogo from "./CompanyLogo";
import Tel from "./Tel";
import { Image } from "../../components/";
import { handleButtonClick } from "../../logics/buttonActions";
import { filterLinkItems } from "../../logics/headerItemTypeFilter";

/**
 * スタンダードレイアウト用のヘッダーコンポーネント
 */
export default function StandardHeader() {
    // リンク系アイテムをフィルタリングして取得
    const linkData = filterLinkItems(headerData.items);
    const { standardLayout } = headerData;
    
    // 現在のレイアウトタイプがモダンかどうか
    const isModernLayout = headerData.layoutType === "modern";
    
    // レスポンシブ条件に基づく表示/非表示のクラス
    // 画面幅が指定された幅より小さい場合は表示、モダンレイアウトで大きい画面の場合は非表示
    const visibilityClass = isModernLayout ? `min-[${headerData.responseWidth + 1}px]:hidden` : "";

    return (
        <header className={`
            standard-header
            fixed top-0 left-0 w-full mx-auto 
            ${standardLayout.zIndex}
            ${standardLayout.shadow}
            ${standardLayout.background}
            ${visibilityClass}
        `}><style>{`@media (min-width: ${headerData.responseWidth + 1}px) {.standard-header {display: none;}}`}</style>
            <div
                className={`
                w-full mx-auto flex justify-between items-center 
                ${standardLayout.maxWidth}
                ${standardLayout.padding}
                ${standardLayout.paddingSp}
            `}
            >
                {/* ヘッダーの中身を配置するためのコンテナ */}
                <CompanyLogo /> {/* 会社のロゴを表示 */}
                <div
                    className={`
                    flex items-center justify-between
                    ${standardLayout.navWidth}
                    ${standardLayout.navMaxWidth}
                    ${standardLayout.navWidthSp}
                `}
                >
                    {/* ナビゲーションメニュー */}
                    <ul className=" flex justify-between items-center h-auto">
                        {/* フィルタリングしたリンクデータを使ってリストアイテムを生成 */}
                        {linkData.map((item, index) => (
                            <li key={index} className={`
                                ${ ["line","mail","tel","link"].includes(item.type) ? "block" : "" }
                                ${standardLayout.itemWidth} ${standardLayout.itemWidthSp}
                                hoverAction
                            `}>
                                <button 
                                    className="block h-auto bg-transparent border-0 p-0 cursor-pointer w-full"
                                    onClick={() => handleButtonClick(item.type,item.link)}
                                >
                                    {item.type !== "tel" ? (
                                        <picture>
                                            <source srcSet={`images/sp_icons/${item.imageNameSp}`} media="(max-width: 780px)"/>
                                            <Image src={`${item.imageName}`} />
                                        </picture>
                                    ) : (
                                        <Tel
                                            link={ item.link }
                                            imageName={ item.imageName }
                                            imageNameSp={ item.imageNameSp }
                                            imageUse={ item.imageUse || false }
                                        />
                                    )}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
} 