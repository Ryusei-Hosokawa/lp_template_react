import React, { memo } from "react";
import { companyInformation } from "../../LpData";
import { getCompanyInfoValue } from "../../utils/companyUtils";

interface CopyrightProps {
    textColor?: string;
}

/**
 * フッターのコピーライト部分を表示するコンポーネント
 */
export default memo(function Copyright({ textColor }: CopyrightProps) {
    return (
        <small className={`text-[12px] font-[300] ${textColor || 'text-[#c9c9c9]'}`}>
            Copyright © {getCompanyInfoValue(companyInformation, "name")} All rights reserved.
        </small>
    );
}); 