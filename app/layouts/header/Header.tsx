// ヘッダーに必要なデータとコンポーネントをインポート
import React from "react";
import { headerData } from "../../LpData"; // ヘッダーに表示するデータをインポート
import { CompanyLogo, Tel } from "./index"; // 会社のロゴと電話ボタンコンポーネントをインポート
import { handleButtonClick } from "../../logics/buttonActions"; // ボタンアクション関連のロジック
import { Image } from "../../components/Image"; // 画像表示用コンポーネントをインポート
import { filterLinkItems } from "../../logics/headerItemTypeFilter"; // ヘッダーアイテムのフィルタリング

// Headerコンポーネントを定義
export default function Header() {
    // headerDataからリンクタイプのデータだけをフィルタリングして取得
    const linkData = filterLinkItems(headerData);

    // ヘッダーのJSXを返す
    return (
        // ヘッダー全体のスタイルを設定
        <header className={` fixed top-0 left-0 w-full z-[999] mx-auto shadow-md
            ${headerData.header.background}
        `}>
            <div className="
                w-full max-w-[1500px] mx-auto flex justify-between
                items-center px-[5%] max-[780px]:px-[3%] py-[0.5%] max-[780px]:py-[1%]
            ">
                {/* ヘッダーの中身を配置するためのコンテナ */}
                <CompanyLogo /> {/* 会社のロゴを表示 */}
                <nav className="
                        w-[60%] max-w-[500px] max-[780px]:w-[40%] flex items-center justify-between
                ">
                    {/* ナビゲーションメニュー */}
                    <ul className=" flex justify-between items-center h-auto">
                        {/* フィルタリングしたリンクデータを使ってリストアイテムを生成 */}
                        {linkData.map((item, index) => (
                            <li key={index} className={`w-[32%] max-[780px]:w-[30%] hoverAction
                                ${[ "line", "mail", "tel", "link" ].includes( item.type ) ? "block" : "" }
                            `}>
                                {/* リンクを表示 */}
                                <button onClick={() => handleButtonClick(item.type, item.link)}
                                    className="block h-auto bg-transparent border-0 p-0 cursor-pointer w-full"
                                >
                                    {item.type !== "tel" ? (
                                        <picture>
                                            <source
                                                srcSet={`images/sp_icons/${item.imageNameSp}`}
                                                media="(max-width: 780px)"
                                            />
                                            <Image src={`${item.imageName}`}/>
                                        </picture>
                                    ) : (
                                        <Tel link={item.link} imageName={item.imageName}
                                            imageNameSp={item.imageNameSp} imageUse={item.imageUse || false}
                                        />
                                    )}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
