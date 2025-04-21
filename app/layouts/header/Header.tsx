// ヘッダーに必要なデータとコンポーネントをインポート
import React, { memo } from "react";
import { headerData } from "../../LpData"; // ヘッダーに表示するデータをインポート
import { CompanyLogo, Tel } from "./index"; // 会社のロゴと電話ボタンコンポーネントをインポート
import { Image } from "../../components/";
import { handleButtonClick } from "../../logics/buttonActions"; // ボタンアクション関連のロジック
import { filterLinkItems } from "../../logics/headerItemTypeFilter"; // リンク系アイテムをフィルタリングする関数

// Headerコンポーネントを定義し、メモ化
export default memo(function Header() {
    // リンク系アイテムをフィルタリングして取得
    const linkData = filterLinkItems(headerData.items);

    // 選択されたレイアウトタイプ
    const isModernLayout = headerData.layoutType === "modern";
    const { modernLayout, standardLayout } = headerData;

    // 標準レイアウト用のヘッダーをレンダリング
    if (!isModernLayout) {
        return (
            <header
                className={`
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
                        <ul
                            className="
                            flex justify-between
                            items-center h-auto
                        "
                        >
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

    // モダンレイアウト用のヘッダーをレンダリング
    return (
        <header className={`
            fixed top-0 left-0 w-full
            ${modernLayout.height}
            ${modernLayout.background}
            ${modernLayout.shadow}
            ${modernLayout.zIndex}
        `}>
            {/* ロゴエリア */}
            <div className={`
                absolute
                ${modernLayout.logoPosition}
                ${modernLayout.logoVerticalPosition}
                ${modernLayout.logoTransform}
            `}>
                <CompanyLogo />
            </div>

            {/* CTAボタンエリア */}
            <div className={`
                absolute flex items-center
                ${modernLayout.ctaPosition}
                ${modernLayout.ctaVerticalPosition}
                ${modernLayout.ctaTransform}
                ${modernLayout.ctaSpacing}
            `}>
                {linkData.map((item, index) => (
                    <button key={index} className="hoverAction"
                        onClick={() => handleButtonClick(item.type, item.link)}
                    >
                        <picture>
                            <source srcSet={`images/sp_icons/${item.imageNameSp}`} media="(max-width: 780px)"/>
                            <Image src={`${item.imageName}`} />
                        </picture>
                    </button>
                ))}
            </div>
        </header>
    );
});
