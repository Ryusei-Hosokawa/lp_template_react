import React from "react";

export default function ContactForm() {
    return (
        <div id="from" className="bg-white p-4">
            <div  className="text-center mb-4">
                <h2>
                    <img src="image/formlogo.png" alt="" className="mx-auto" />
                </h2>
            </div>
            <form
                method="post"
                action="./confirm.php"
                name="form"
                id="contactForm"
                className="space-y-4"
            >
                <div className="grid grid-cols-1 gap-4">
                    {[
                        {
                            id: "name",
                            label: "お名前",
                            type: "text",
                            required: true
                        },
                        {
                            id: "email",
                            label: "メールアドレス",
                            type: "email",
                            required: true
                        },
                        {
                            id: "tel",
                            label: "電話番号",
                            type: "tel",
                            required: true
                        }
                    ].map((field) => (
                        <div className="flex flex-col" key={field.id}>
                            <label htmlFor={field.id} className="font-bold">
                                {field.label}{field.required && <span className="text-red-500">必須</span>}
                            </label>
                            <input
                                type={field.type}
                                id={field.id}
                                name={field.id}
                                className="border border-gray-300 p-2"
                                placeholder=""
                                required={field.required}
                            />
                        </div>
                    ))}
                    <div className="flex flex-col">
                        <label htmlFor="comment" className="font-bold">
                            備考
                        </label>
                        <textarea
                            id="comment"
                            name="comment"
                            className="border border-gray-300 p-2"
                            placeholder=""
                        ></textarea>
                    </div>
                </div>
                <input
                    type="text"
                    name="honeypot"
                    style={{ display: "none" }}
                />
                <p className="font-bold">
                    個人情報の取り扱いについて
                    <span className="text-red-500">必須</span>
                </p>
                <div className="border p-4 mb-4">
                    <p className="text-sm">
                        Answer Smile株式会社
                        (以下「当社」)は、以下のとおり個人情報保護方針を定め、
                        個人情報保護の仕組みを構築し、全従業員に個人情報保護の重要性の認識と取組みを
                        徹底させることにより、個人情報の保護を推進致します。
                        個人情報の管理
                        当社は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。
                        <br />
                        個人情報の利用目的
                        お客さまからお預かりした個人情報は、当社からのご連絡や業務のご案内やご質問に対する回答として、電子メールや資料のご送付に利用いたします。
                        <br />
                        個人情報の第三者への開示・提供の禁止
                        当社は、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。
                    </p>
                    <p className="text-sm">
                        ＜お客さまの同意がある場合＞ <br />
                        お客さまが希望されるサービスを行なうために当社が業務を委託する業者に対して開示する場合
                    </p>
                    <p className="text-sm">
                        ＜法令に基づき開示することが必要である場合＞ <br />
                        個人情報の安全対策
                        当社は、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。{" "}
                        <br />
                        ご本人の照会
                        お客さまがご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、対応させていただきます。
                    </p>
                </div>
                <div className="flex items-center mb-4">
                    <input
                        className="mr-2"
                        type="checkbox"
                        name="privacy"
                        value="同意する"
                        required
                    />
                    <p>「 個人情報の取り扱いについて 」に同意する</p>
                </div>
                <div className="flex justify-center">
                    <input
                        type="submit"
                        name="submit"
                        value="確認"
                        className="bg-blue-500 text-white py-2 px-4 rounded"
                    />
                    <input type="hidden" name="action" value="confirm" />
                </div>
            </form>
        </div>
    );
} 