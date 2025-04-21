import React from "react";
import { useHeaderResizeEffect } from "../logics/headerResizeObserver";
import { companyInformation, aboutPageData, companyMap } from "../LpData";
import { CompanyTable, CompanyMap } from "../components";

export default function About() {
    // ヘッダー高さ自動調整機能を適用
    useHeaderResizeEffect();
    return (
        <main className="w-full max-w-[900px] mx-auto px-4">
            <div className="pt-[50px]">
                <article className="w-full mb-[50px] p-[20px] bg-[#fff] rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold text-center mb-8">
                        会社概要
                    </h1>
                    <CompanyTable 
                        companyData={companyInformation} 
                        titleClass={aboutPageData.tableTitleClass}
                        contentClass={aboutPageData.tableContentClass}
                    />
                </article>
            </div>
        </main>
    );
}
