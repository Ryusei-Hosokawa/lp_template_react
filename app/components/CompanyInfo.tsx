import React from "react";
import { CompanyTable, CompanyMap } from "./";
import { companyInformation, companyMap } from "../LpData";


/**
 * 会社情報コンポーネント
 * LP内で表示する会社情報テーブル
 */
export default function CompanyInfo() {
    return (
        <div className="bg-[#fff] px-[4.5%] pt-[40px] pb-[70px]">
            <div className="px-[5%] py-[40px] rounded-[10px] bg-[#fff] shadow-[0_0_10px_0_rgba(0,0,0,0.2)]">
                <CompanyTable 
                    companyData={companyInformation}
                    titleClass="w-1/3 py-4 px-6 font-normal text-center border-r border-gray-200 bg-gray-50"
                    contentClass="py-4 px-6 text-left"
                    className="w-full text-left mb-[20px] bg-[#fff]"
                />
                <CompanyMap 
                    iFrame={companyMap.map} 
                    height={companyMap.height}
                    width={companyMap.width}
                />
            </div>
        </div>
    );
}
