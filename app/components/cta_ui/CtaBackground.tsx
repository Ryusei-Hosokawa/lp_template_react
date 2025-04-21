import React from "react";
import { CtaData } from "../../LpData";
import { Image } from "../Image";

/**
 * CTA背景コンポーネント
 */
export default function CtaBackground() {
    return (
        <div className="w-full">
            <Image className="w-full inline-block" src={CtaData.background.imageName} />
        </div>
    );
} 