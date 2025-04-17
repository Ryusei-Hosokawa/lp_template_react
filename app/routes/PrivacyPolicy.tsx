import React from "react";
import PrivacyPolicyText from "../components/PrivacyPolicyText";
import { useHeaderResizeEffect } from "../logics/headerResizeObserver";

export default function PrivacyPolicy() {
    // ヘッダー高さ自動調整機能を適用
    useHeaderResizeEffect();

    return (
        <main className="w-full max-w-[900px] mx-auto px-4">
            <div className="pt-[50px]">
                <article
                    className="
                        w-full
                        mb-[50px]
                        px-[20px]
                        py-[30px]
                        bg-[#FDF4ED]
                        rounded-lg
                        shadow-md"
                >
                    <h2 className="text-2xl font-bold mb-8 text-center">
                        プライバシーポリシー
                    </h2>

                    <PrivacyPolicyText />
                </article>
            </div>
        </main>
    );
}
