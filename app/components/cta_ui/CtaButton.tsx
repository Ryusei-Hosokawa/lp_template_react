import React from "react";
import { CtaData } from "../../LpData";
import { scrollToForm } from "../../logics/scrollLogics";
import { Image } from "../Image";
import type { CtaButtonProps } from "../../types/cta";

/**
 * CTAボタンコンポーネント
 */
export default function CtaButton({ isFirstView = false, isFirstViewWithCta = false }: CtaButtonProps) {
    // ファーストビューか通常ボタンかで表示を切り替え
    const buttonData = isFirstView ? CtaData.cta_fv : CtaData.button;
        
    return (
        <button 
            className={`
                block absolute h-auto z-100 bg-cover bg-center bg-no-repeat 
                cursor-pointer buttonAnimation transition-all duration-300 ease-in-out hover:opacity-80
                ${CtaData.button.imageSize}
                ${buttonData.position}
            `}
            onClick={scrollToForm}
        >
            <Image 
                src={isFirstViewWithCta ? CtaData.cta_fv.imageName : buttonData.imageName}
                className={isFirstView ? 'drop-shadow-lg' : ''}
            />
        </button>
    );
} 