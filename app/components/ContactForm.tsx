import React from "react";
import { formData, companyInformation } from "../LpData";
import { RequiredLabel } from "./form_ui";

export default function ContactForm() {
    // formDataから各タイプのデータを取得
    const formBgData = formData.find((item) => item.type === "formBg");
    const formTitleData = formData.find((item) => item.type === "formTitle");
    const formObjectData = formData.find((item) => item.type === "formObject");

    return (
        <div
            id="from"
            className={`
                ${formBgData?.formPadding || ""}
                ${formBgData?.formTopSpace || ""}
                ${formBgData?.background || ""}
            `}
        >
            <article
                className={`
                px-[5%]
                py-[40px]
                rounded-[10px]
                shadow-[0_0_10px_0_rgba(0,0,0,0.2)]
                ${formObjectData?.background || ""}
            `}
            >
                <h2
                    className={`
                    mx-auto
                    mb-[20px]
                    ${formTitleData?.titleImageWidth || ""}
                `}
                >
                    <img
                        src={`images/${formTitleData?.titleImageName || ""}`}
                        className="mx-auto"
                    />
                </h2>
                <form
                    method="post"
                    action="./confirm.php"
                    name="form"
                    id="contactForm"
                    className="space-y-4"
                >
                    <div
                        className="
                        grid
                        grid-cols-1
                        gap-4
                    "
                    >
                        {[
                            {
                                id: "name",
                                label: "お名前",
                                type: "text",
                                required: true,
                            },
                            {
                                id: "email",
                                label: "メールアドレス",
                                type: "email",
                                required: true,
                            },
                            {
                                id: "tel",
                                label: "電話番号",
                                type: "tel",
                                required: true,
                            },
                        ].map((field) => (
                            <div className="flex flex-col" key={field.id}>
                                <label
                                    htmlFor={field.id}
                                    className="font-[700] text-[16px] mb-[8px]"
                                >
                                    {field.label}
                                    {field.required && (
                                        <RequiredLabel />
                                    )}
                                </label>
                                <input
                                    type={field.type}
                                    id={field.id}
                                    name={field.id}
                                    className="border border-gray-300 p-2 rounded-[8px]"
                                    placeholder=""
                                    required={field.required}
                                    onInvalid={(e) => e.currentTarget.setCustomValidity('この欄が未入力です')}
                                    onInput={(e) => e.currentTarget.setCustomValidity('')}
                                />
                            </div>
                        ))}
                        <div className="flex flex-col">
                            <label
                                htmlFor="comment"
                                className="font-[700] text-[16px] mb-[8px]"
                            >
                                備考
                            </label>
                            <textarea
                                id="comment"
                                name="comment"
                                className="
                                    border
                                    border-gray-300
                                    p-2
                                    rounded-[8px]
                                    min-h-[80px]
                                    max-h-[300px]"
                            ></textarea>
                        </div>
                    </div>
                    <input
                        type="text"
                        name="honeypot"
                        style={{ display: "none" }}
                    />
                    <p className="font-[700] text-[16px] mb-[8px]">
                        個人情報の取り扱いについて
                        <RequiredLabel />
                    </p>
                    <div
                        className="
                            p-4
                            mb-[5px]
                            rounded-[8px]
                            border
                            border-gray-300
                            h-[200px]
                            overflow-y-auto
                        "
                    >
                        <p className="text-[14px] text-center">
                            <span className="block mb-[1em]">
                                <span className="font-bold">
                                    {companyInformation.name}
                                </span>
                                (以下「当社」)は、以下のとおり個人情報保護方針を定め、
                                個人情報保護の仕組みを構築し、全従業員に個人情報保護の重要性の認識と取組みを
                                徹底させることにより、個人情報の保護を推進致します。
                                個人情報の管理
                                当社は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。
                                <br />
                                <span className="text-[600]">個人情報の利用目的</span>
                                お客さまからお預かりした個人情報は、当社からのご連絡や業務のご案内やご質問に対する回答として、電子メールや資料のご送付に利用いたします。
                                <br />
                                <span className="text-[600]">個人情報の第三者への開示・提供の禁止</span>
                                当社は、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。
                            </span>
                            <span className="block mb-[1em]">
                                <span className="block font-bold">
                                    ＜お客さまの同意がある場合＞
                                </span>
                                お客さまが希望されるサービスを行なうために当社が業務を委託する業者に対して開示する場合
                            </span>
                            <span className="block">
                                <span className="block font-bold">
                                    ＜法令に基づき開示することが必要である場合＞
                                </span>
                                <span className="block text-[600]">個人情報の安全対策</span>
                                当社は、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。
                                <br />
                                <span className="block">ご本人の照会</span>
                                お客さまがご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、対応させていただきます。
                            </span>
                        </p>
                    </div>
                    <div className="flex items-center mb-4">
                        <input
                            className="cursor-pointer mr-[-3px]"
                            type="checkbox"
                            name="privacy"
                            value="同意する"
                            required
                            onInvalid={(e) => e.currentTarget.setCustomValidity('この欄が未入力です')}
                            onInput={(e) => e.currentTarget.setCustomValidity('')}
                        />
                        <p className="max-[780px]:text-[14px]">
                            <span className="mr-[-5px]">
                                「 個人情報の取り扱いについて 」
                            </span>
                            に同意する
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <input
                            className="
                                bg-[#5e9efe]
                                text-white
                                text-center
                                min-w-[150px]
                                py-2
                                px-[20px]
                                rounded-full
                                hover:bg-[#1683ff]
                                transition-colors
                                duration-300
                                cursor-pointer
                            "
                            type="submit"
                            name="submit"
                            value="確認"
                        />
                        <input type="hidden" name="action" value="confirm" />
                    </div>
                </form>
            </article>
        </div>
    );
}
