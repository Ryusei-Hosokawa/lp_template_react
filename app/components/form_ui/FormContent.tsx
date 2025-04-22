import React, { memo } from "react";
import type { ReactNode } from "react";

type FormContentProps = {
    children: ReactNode;
    background?: string;
    padding?: string;
    shadow?: string;
    rounded?: string;
};

/**
 * フォームの内容部分を表示するコンポーネント
 */
export default memo(function FormContent({ children, background, padding, shadow, rounded }: FormContentProps) {
    return (
        <article className={`
                ${background}
                ${padding}
                ${shadow}
                ${rounded}
        `}>
            {children}
        </article>
    );
}); 