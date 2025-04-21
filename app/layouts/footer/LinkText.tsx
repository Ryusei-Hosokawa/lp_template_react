import React, { memo } from "react";
import { Link } from "react-router";

type LinkItem = {
    path: string;
    label: string;
}
type LinkTextProps = {
    links: LinkItem[];
    textColor?: string;
}
/**
 * フッターのリンクテキスト部分を表示するコンポーネント
 */
export default memo(function LinkText({ links, textColor }: LinkTextProps) {
    return (
        <ul className={`flex justify-center items-center mb-[20px] ${textColor || ''}`}>
            {links.map((item, index) => (
                <React.Fragment key={item.path}>
                    {index > 0 && <span className="mx-[10px]">|</span>}
                    <li className="hoverAction">
                        <Link to={item.path} className="transition-colors">{item.label}</Link>
                    </li>
                </React.Fragment>
            ))}
        </ul>
    );
});
