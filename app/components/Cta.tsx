import React from "react";
import { CtaBackground, CtaButton } from "./cta_ui";
import type { CtaProps } from "../types/cta";

/**
 * CTA（コールトゥアクション）コンポーネント
 * 背景とボタンを組み合わせて表示
 */
export default function Cta({ show }: CtaProps) {
    return (
        <div className={`relative ${show ? 'block' : 'hidden'}`}>
            <CtaBackground />
            <CtaButton />
        </div>
    );
}