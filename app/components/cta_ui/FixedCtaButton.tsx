import React, { useEffect, useState } from "react";
import { CtaData } from "../../LpData";
import { scrollToForm } from "../../logics/scrollLogics";
import { Image } from "../Image";
import type { FixedCtaButtonProps } from "../../types/cta";

/**
 * 画面に追従するCTAボタンコンポーネント
 * スクロール位置に応じて表示/非表示を切り替え可能
 */
export default function FixedCtaButton({ isFirstViewWithCta = false }: FixedCtaButtonProps) {
    const settings = CtaData.cta_type;
    const [isVisible, setIsVisible] = useState(true);

    // スクロールイベントを監視し、表示/非表示を制御
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsVisible(scrollY > settings.scrollThreshold);
        };

        // 初期状態を設定
        handleScroll();

        // スクロールイベントリスナーを登録
        window.addEventListener("scroll", handleScroll);

        // クリーンアップ関数
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [settings.scrollThreshold]);

    // typeがfixed以外、または表示条件を満たさない場合は非表示
    if (settings.type !== "fixed" || !isVisible) {
        return null;
    }

    return (
        <button
            className={`
                fixed ${settings.fixedPosition} ${settings.fixedSize} ${settings.fixedZIndex}
                bg-cover bg-center bg-no-repeat cursor-pointer 
                buttonAnimation transition-all duration-300 ease-in-out hover:opacity-80
            `}
            onClick={scrollToForm}
        >
            <Image 
                src={isFirstViewWithCta ? CtaData.cta_fv.imageName : CtaData.button.imageName} 
                className={isFirstViewWithCta ? 'drop-shadow-lg' : ''}
            />
        </button>
    );
} 