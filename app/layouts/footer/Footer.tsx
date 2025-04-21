import React, { memo } from "react";
import { footerData, mainData } from "../../LpData";
import { useLocation } from "react-router";
import Copyright from "./Copyright";
import LinkText from "./LinkText";

export default memo(function Footer() {
    const location = useLocation();
    const isMainPage = location.pathname === "/" || location.pathname === "/home";
    
    return (
        <footer className={`
            sticky top-full py-[100px] z-[500]
            ${footerData.background}
            ${isMainPage ? `${mainData.mainWidth} mx-auto` : 'w-screen-xl'}
        `}>
            <div className={`mx-auto px-4`}>
                <div className="flex flex-col items-center">
                    <LinkText links={footerData.linkText.link} textColor={footerData.linkText.color} />
                    <Copyright textColor={footerData.copyrightText} />
                </div>
            </div>
        </footer>
    );
});
