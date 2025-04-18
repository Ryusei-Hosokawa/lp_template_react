import React from "react";
import { RequiredLabel } from "./form_ui";

export default function CompanyInfo() {
    const companyData = [
        { label: "会社名", content: "Answer Smile 株式会社" },
        {
            label: "応募資格",
            content: (
                <>
                    年齢・学歴：不問
                    <br />
                    <span className="text-[#222]">必須 : </span>運転免許・初任者研修修了者（旧ヘルパー2級）以上
                </>
            ),
        },
        {
            label: "勤務地",
            content: (
                <>
                    〒277-0845
                    <br />
                    千葉県柏市豊四季台1-1-47
                </>
            ),
        },
        { label: "連絡先", content: "【TEL】070-2174-8041" },
    ];

    return (
        <div className=" bg-[#FDF4ED] px-[4.5%] pt-[40px] pb-[70px]">
            <div className=" px-[5%] py-[40px] rounded-[10px] bg-[#fff] shadow-[0_0_10px_0_rgba(0,0,0,0.2)]">
                <table className=" w-full text-left mb-[20px] bg-[#fff]">
                    <tbody
                        className="
                            block
                            border-b
                            border 
                            border-gray-300
                            rounded-[8px]
                            overflow-hidden
                        "
                    >
                        {companyData.map((item, index) => (
                            <tr
                                key={index}
                                className="border-b border-gray-200 last:border-b-0"
                            >
                                <th className="w-1/3 py-4 px-6 font-normal text-center border-r border-gray-200 bg-gray-50">
                                    {item.label}
                                </th>
                                <td className="py-4 px-6 text-left">
                                    {item.content}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div
                    className="
                    border border-[#bcbcbb]
                    rounded-[10px]
                    overflow-hidden
                "
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2915.114855317175!2d141.37834907614572!3d43.06005187113655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b29629ede6b3d%3A0x2ff0071a4db091a9!2z44CSMDAzLTA4MDgg5YyX5rW36YGT5pyt5bmM5biC55m955-z5Yy66I-K5rC077yY5p2h77yS5LiB55uu77yV4oiS77yS77yV!5e0!3m2!1sja!2sjp!4v1739779633886!5m2!1sja!2sjp"
                        width="100%"
                        height="150"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
