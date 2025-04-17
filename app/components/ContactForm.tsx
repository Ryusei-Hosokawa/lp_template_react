import React from "react";
import { formData, companyInformation } from "../LpData";
import { RequiredLabel } from "./form_ui";
import PrivacyPolicyText from "./PrivacyPolicyText";

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
                        <PrivacyPolicyText />
                    </div>
                    <div className="flex items-center mb-4">
                        <input
                            className="cursor-pointer"
                            type="checkbox"
                            name="privacy"
                            value="同意する"
                            required
                            onInvalid={(e) => e.currentTarget.setCustomValidity('この欄が未入力です')}
                            onInput={(e) => e.currentTarget.setCustomValidity('')}
                        />
                        <p className="max-[780px]:text-[14px]">
                            <span>
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
