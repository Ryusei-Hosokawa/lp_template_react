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
                fixed top-0 left-0 w-full shadow-md z-[500]
                ${headerData.find((item) => item.type === "header")?.background}
            `}
        >
            {/* ヘッダーの中身を配置するためのコンテナ */}
            <div className="flex justify-between items-center max-w-screen-xl mx-auto px-[5%] py-[0.5%]">
                {/* 会社のロゴを表示 */}
                <CompanyLogo />
                {/* ナビゲーションメニュー */}
                <nav>
                    <ul className="flex items-center space-x-6 h-full max-h-[50px]">
                        {/* フィルタリングしたリンクデータを使ってリストアイテムを生成 */}
                        {linkData.map((item, index) => (
                            <li 
                                key={index}
                                className={`
                                    ${item.type === "link" ? "block" : ""}
                                `}
                            >
                                {/* リンクを表示 */}
                                <a href={item.link} className="block h-auto">
                                    <picture>
                                        {/* スクリーンサイズに応じて異なる画像を表示 */}
                                        <source
                                            srcSet={`images/${item.imageNameSp}`}
                                            media="(max-width: 780px)"
                                        />
                                        {/* デフォルトの画像を表示 */}
                                        <img
                                            src={`images/${item.imageName}`}
                                            alt={item.alt}
                                        />
                                    </picture>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            {/* 固定バナーを表示するためのコンテナ */}
            <div className="fixed bottom-0 left-0 w-full flex justify-between">
                {/* 左側の固定バナー */}
                <div className="fixed_banner01">
                    <img src="image/side01.png" alt="" />
                </div>
                {/* 右側の固定バナー */}
                <div className="fixed_banner02">
                    <img src="image/side02.png" alt="" />
                </div>
            </div>
        </header>
    );
}
