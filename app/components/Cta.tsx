import React from "react";
import { CtaBackground, CtaButton } from "./cta_ui";

/**
 * CTA（コールトゥアクション）コンポーネント
 * 背景とボタンを組み合わせて表示
 */
export default function Cta({ show }: { show: boolean }) {
    return (
        <div className={`relative ${show ? 'block' : 'hidden'}`}>
            <CtaBackground />
            <CtaButton />
        </div>
    );
}