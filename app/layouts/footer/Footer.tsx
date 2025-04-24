import React, { memo } from "react";
import { footerData, mainData } from "../../LpData";
import { useLocation } from "react-router";
import Copyright from "./Copyright";
import LinkText from "./LinkText";
import { resetScrollPosition } from "../../logics/scrollLogics";

export default memo(function Footer() {
    const location = useLocation();
    const isMainPage = location.pathname === "/" || location.pathname === "/home";
    
    // フッター内でのクリックイベントを監視し、スクロール位置をリセットする
    const handleFooterClick = () => {
        // 少し遅延させてスクロールリセットを実行（クリックイベント処理後に実行）
        setTimeout(() => {
            resetScrollPosition();
        }, 0);
    };
    
    return (
        <footer 
            className={`
                py-[100px] z-[500]
                ${footerData.background}
                ${isMainPage ? `${mainData.mainWidth} mx-auto` : 'w-screen-xl'}
            `}
            onClick={handleFooterClick}
            data-scroll-reset="true"
            style={{ position: 'relative', top: 'auto' }} // stickyやfixedの代わりにrelativeを使用
        >
            <div className={`mx-auto px-4`}>
                <div className="flex flex-col items-center">
                    <LinkText links={footerData.linkText.link} textColor={footerData.linkText.color} />
                    <Copyright textColor={footerData.copyrightText} />
                </div>
            </div>
        </footer>
    );
});
