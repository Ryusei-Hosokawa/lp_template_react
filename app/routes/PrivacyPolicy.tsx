import React from "react";
import { useHeaderResizeEffect } from "../logics/headerResizeObserver";

export default function PrivacyPolicy() {
    // ヘッダーの高さに応じてマージンを調整するカスタムフックを使用
    useHeaderResizeEffect();
    
    return (
        <main className="page__main">
            <div className="max-w-[800px] mx-auto px-4 py-10">
                <div className="bg-[#f9f3e9] p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-8 text-center">プライバシーポリシー</h2>
                    
                    <p className="mb-6 text-sm leading-relaxed">
                        オンライン学習塾ソレアド（以下「当社」）は、以下のとおり個人情報保護方針を定め、個人情報保護の仕組み
                        を構築し、全従業員に個人情報保護の重要性の認識と取組みを徹底させることにより、個人情報の保護を推
                        進致します。
                    </p>
                    
                    <p className="mb-6 text-sm leading-relaxed">
                        個人情報の管理 当社は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛
                        失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹
                        底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。
                    </p>
                    
                    <p className="mb-6 text-sm leading-relaxed">
                        個人情報の利用目的 お客さまからお預かりした個人情報は、当社からのご連絡や業務のご案内やご質問に対
                        する回答として、電子メールや資料のご送付に利用いたします。
                    </p>
                    
                    <p className="mb-6 text-sm leading-relaxed">
                        個人情報の第三者への開示・提供の禁止 当社は、お客さまよりお預かりした個人情報を適切に管理し、次の
                        いずれかに該当する場合を除き、個人情報を第三者に開示いたしません。
                    </p>
                    
                    <p className="mb-6 text-sm leading-relaxed text-center">
                        ＜お客さまの同意がある場合＞
                    </p>
                    
                    <p className="mb-6 text-sm leading-relaxed">
                        お客さまが希望されるサービスを行なうために当社が業務を委託する業者に対して開示する場合
                    </p>
                    
                    <p className="mb-6 text-sm leading-relaxed text-center">
                        ＜法令に基づき開示することが必要である場合＞
                    </p>
                    
                    <p className="mb-6 text-sm leading-relaxed">
                        個人情報の安全対策 当社は、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じ
                        ています。
                    </p>
                    
                    <p className="mb-6 text-sm leading-relaxed">
                        ご本人の照会 お客さまがご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人である
                        ことを確認の上、対応させていただきます。
                    </p>
                </div>
            </div>
        </main>
    );
}
