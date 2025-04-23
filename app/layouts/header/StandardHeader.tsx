import React from "react";
import { headerData } from "../../LpData";
import CompanyLogo from "./CompanyLogo";
import Tel from "./Tel";
import ModernStyle from "./ModernStyleComponent";
import { Image } from "../../components/";
import { handleButtonClick } from "../../logics/buttonActions";
import { filterLinkItems } from "../../logics/headerItemTypeFilter";

/**
 * スタンダードレイアウト用のヘッダーコンポーネント
 */
export default function StandardHeader({
    isModernLayout,
}: {
    isModernLayout: boolean;
}) {
    // リンク系アイテムをフィルタリングして取得
    const linkData = filterLinkItems(headerData.items);
    const { standardLayout } = headerData;

    return (
        <>
            <ModernStyle isModernLayout={isModernLayout} />
            <header
                className={`
                standard-header
                fixed top-0 left-0 w-full mx-auto 
                ${standardLayout.zIndex}
                ${standardLayout.shadow}
                ${standardLayout.background}
        `}
            >
                <div
                    className={`
                w-full mx-auto flex justify-between items-center 
                ${standardLayout.maxWidth}
                ${standardLayout.padding}
                ${standardLayout.paddingSp}
            `}
                >
                    {/* ヘッダーの中身を配置するためのコンテナ */}
                    <CompanyLogo isModernLayout={isModernLayout} />{" "}
                    {/* 会社のロゴを表示 */}
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
                                <li
                                    key={index}
                                    className={`
                                ${
                                    ["line", "mail", "tel", "link"].includes(
                                        item.type
                                    )
                                        ? "block"
                                        : ""
                                }
                                ${standardLayout.itemWidth} ${
                                        standardLayout.itemWidthSp
                                    }
                                hoverAction
                            `}
                                >
                                    <button
                                        className="block h-auto bg-transparent border-0 p-0 cursor-pointer w-full"
                                        onClick={() =>
                                            handleButtonClick(
                                                item.type,
                                                item.link
                                            )
                                        }
                                    >
                                        {item.type !== "tel" ? (
                                            <picture>
                                                <source
                                                    srcSet={`images/sp_icons/${item.imageNameSp}`}
                                                    media="(max-width: 780px)"
                                                />
                                                <Image
                                                    src={`${item.imageName}`}
                                                />
                                            </picture>
                                        ) : (
                                            <Tel
                                                link={item.link}
                                                imageName={item.imageName}
                                                imageNameSp={item.imageNameSp}
                                                imageUse={
                                                    item.imageUse || false
                                                }
                                            />
                                        )}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
}
