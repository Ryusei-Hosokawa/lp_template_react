import React, { memo } from "react";
import type { ReactNode } from "react";

type FormContainerProps = {
    children: ReactNode;
    padding?: string;
    topSpace?: string;
    background?: string;
};

/**
 * フォームのコンテナコンポーネント
 */
export default memo(function FormContainer({ 
    children, 
    padding, 
    topSpace,
    background 
}: FormContainerProps) {
    return (
        <div id="from" className={`
            ${padding || ""}
            ${topSpace || ""}
            ${background || ""}
        `}>
            {children}
        </div>
    );
}); 