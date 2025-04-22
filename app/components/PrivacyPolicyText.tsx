import React from "react";
import { companyInformation } from "../LpData";
import { getCompanyInfoValue } from '../utils/companyUtils';

export default function PrivacyPolicyText() {
    return (
        <p className="text-[14px] text-center">
            <span className="block mb-[1em]">
                <span className="block mb-[0.5em]">
                    <span className="font-bold">
                        {getCompanyInfoValue(companyInformation, "name")}
                    </span>
                    (以下「当社」)は、以下のとおり個人情報保護方針を定め、
                    個人情報保護の仕組みを構築し、全従業員に個人情報保護の重要性の認識と取組みを
                    徹底させることにより、個人情報の保護を推進致します。
                </span>
                <span className="block font-[700]">個人情報の管理</span>
                <span className="block mb-[0.5em]">
                    当社は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。
                </span>
                <span className="block font-[700]">個人情報の利用目的</span>
                <span className="block mb-[0.5em]">
                    お客さまからお預かりした個人情報は、当社からのご連絡や業務のご案内やご質問に対する回答として、電子メールや資料のご送付に利用いたします。
                </span>
                <span className="block font-[700]">
                    個人情報の第三者への開示・提供の禁止
                </span>
                <span className="block mb-[0.5em]">
                    当社は、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。
                </span>
            </span>
            <span className="block mb-[1em]">
                <span className="block font-[700]">
                    ＜お客さまの同意がある場合＞
                </span>
                お客さまが希望されるサービスを行なうために当社が業務を委託する業者に対して開示する場合
            </span>
            <span className="block">
                <span className="block font-[700]">
                    ＜法令に基づき開示することが必要である場合＞
                </span>
                <span className="block text-[600]">個人情報の安全対策</span>
                当社は、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。
                <br />
                <span className="block">ご本人の照会</span>
                お客さまがご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、対応させていただきます。
            </span>
        </p>
    );
}
