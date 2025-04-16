// ヘッダーに必要なデータとコンポーネントをインポート
import React from "react";
import { headerData } from "../../LpData"; // ヘッダーに表示するデータをインポート
import { CompanyLogo } from "../index"; // 会社のロゴを表示するコンポーネントをインポート

// Headerコンポーネントを定義
export default function Header() {
    // headerDataからリンクタイプのデータだけをフィルタリングして取得
    const linkData = headerData.filter((item) => item.type === "link");

    // ヘッダーのJSXを返す
    return (
        // ヘッダー全体のスタイルを設定
        <header
            className={`
                fixed
                top-0
                left-0
                w-full
                z-[900]
                mx-auto
                shadow-md
                ${headerData.find((item) => item.type === "header")?.background}
            `}
        >
            <div className="
                w-full
                max-w-[1500px]
                mx-auto
                flex
                justify-between
                items-center
                px-[5%]
                max-[780px]:px-[3%]
                py-[0.5%]
                max-[780px]:py-[1%]
            ">
                {/* ヘッダーの中身を配置するためのコンテナ */}
                <CompanyLogo /> {/* 会社のロゴを表示 */}
                <nav
                    className="
                    w-[60%]
                    max-w-[500px]
                    max-[780px]:w-[40%]
                    flex
                    items-center
                    justify-between
                "
                >
                    {/* ナビゲーションメニュー */}
                    <ul
                        className="
                    flex
                    justify-between
                    items-center
                    h-auto
                "
                    >
                        {/* フィルタリングしたリンクデータを使ってリストアイテムを生成 */}
                        {linkData.map((item, index) => (
                            <li
                                key={index}
                                className={`
                                    w-[32%]
                                    max-[780px]:w-[30%]
                                    hoverAction
                                    ${item.type === "link" ? "block" : ""}
                                `}
                            >
                                {/* リンクを表示 */}
                                <a href={item.link} className="block h-auto">
                                    <picture>
                                        {/* スクリーンサイズに応じて異なる画像を表示 */}
                                        <source
                                            srcSet={`images/sp_icons/${item.imageNameSp}`}
                                            media="(max-width: 780px)"
                                        />
                                        {/* デフォルトの画像を表示 */}
                                        <img src={`images/${item.imageName}`} />
                                    </picture>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
