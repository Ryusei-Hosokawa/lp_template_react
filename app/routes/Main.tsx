import React from "react";
import { mainData, CtaData } from "../LpData";
import { MainContents, ContactForm, CompanyInfo, MainInner, FixedCtaButton } from "../components";
import SideBanner from "../layouts/sidebanner/SideBanner";
import { useHeaderResizeEffect } from "../logics";

/**
 * メインページコンポーネント
 * ヘッダーリサイズ効果を適用し、メインコンテンツを表示
 */
export default function Main() {
    // ヘッダー高さ自動調整機能を適用
    useHeaderResizeEffect();

    return (
        <main className="block relative w-full z-[500]">
            <MainInner> {/* メインコンテンツの内側エリアを包むラッパーコンポーネント ここから */}

                <MainContents /> {/* メインコンテンツ生成部分 */}
                <ContactForm /> {/* フォーム内容 */}
                <CompanyInfo /> {/* 会社概要 */}

            </MainInner> {/* メインコンテンツの内側エリアを包むラッパーコンポーネント ここまで */}
            
            {/* 追従型CTAボタン */}
            <FixedCtaButton isFirstViewWithCta={CtaData.cta_fv.firstViewCta} />
            <SideBanner /> {/* サイドバナー要素コンポーネント */}
        </main>
    );
}