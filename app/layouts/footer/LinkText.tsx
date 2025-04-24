import React, { memo } from "react";
import { Link } from "react-router";
import { resetScrollPosition } from "../../logics/scrollLogics";

type LinkItem = {
    path: string;
    label: string;
}
type LinkTextProps = {
    links: LinkItem[];
    textColor?: string;
}

/**
 * スクロール位置をリセットするカスタムLinkコンポーネント
 */
const ScrollResetLink = ({ to, className, children }: { to: string; className?: string; children: React.ReactNode }) => {
    const handleClick = () => {
        // リンククリック時にスクロール位置をリセット
        resetScrollPosition();
    };

    return (
        <Link to={to} className={className} onClick={handleClick}>
            {children}
        </Link>
    );
};

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
                        <ScrollResetLink to={item.path} className="transition-colors">{item.label}</ScrollResetLink>
                    </li>
                </React.Fragment>
            ))}
        </ul>
    );
});
