// 会社情報の型定義
export type CompanyInfoItem = {
    key: string;
    value: string;
};
// 会社情報オブジェクトの型定義
export type CompanyInformation = {
    [key: string]: CompanyInfoItem;
};

// 会社情報を検索するためのユーティリティ関数
export const getCompanyInfoValue = (companyData: CompanyInformation, type: keyof CompanyInformation): string => {
    const item = companyData[type];
    return item ? item.value : '';
};

// 会社情報のキーを取得するユーティリティ関数
export const getCompanyInfoKey = (companyData: CompanyInformation, type: keyof CompanyInformation): string => {
    const item = companyData[type];
    return item ? item.key : '';
};
