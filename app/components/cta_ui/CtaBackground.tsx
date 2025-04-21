import React from "react";
import { CtaData } from "../../LpData";
import { Image } from "../Image";
import type { CtaBackgroundProps } from "../../types/cta";

/**
 * CTA背景コンポーネント
 */
export default function CtaBackground({ className = "" }: CtaBackgroundProps) {
    return (
        <div className={`w-full ${className}`}>
            <Image className="w-full inline-block" src={CtaData.background.imageName} />
        </div>
    );
} 