import React from "react";
import type { CompanyInfoItem } from "../utils/companyUtils";

type CompanyTableProps = {
    companyData: Record<string, CompanyInfoItem>;
    titleClass?: string;
    contentClass?: string;
    className?: string;
};

/**
 * 会社情報テーブルコンポーネント
 * About.tsxとCompanyInfo.tsxで共通利用できる
 */
export default function CompanyTable({
    companyData,
    titleClass = "p-4 w-1/3 border border-gray-200 bg-gray-50",
    contentClass = "p-4 border border-gray-200",
    className = "w-full border-collapse"
}: CompanyTableProps) {
    return (
        <table className={className}>
            <tbody>
                {Object.values(companyData).map((item) => (
                    <tr key={item.key}>
                        <th className={titleClass}>
                            {item.key}
                        </th>
                        <td className={contentClass}>
                            {item.value}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
} 