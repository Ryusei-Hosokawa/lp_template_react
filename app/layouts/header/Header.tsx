import React, { memo, useMemo } from "react";
import { ModernHeader, StandardHeader } from "./index";
import { headerData } from "../../LpData";
import { useLocation } from "react-router-dom";

/**
 * ヘッダーコンポーネント
 * ページに応じて適切なヘッダーコンポーネントをレンダリングする
 */
export default memo(function Header() {
    // 現在のパス（URL）を取得
    const location = useLocation();
    const currentPath = location.pathname;
    
    // トップページかどうか判定
    const isTopPage = currentPath === "/";
    
    // レイアウトタイプがモダンかどうかを判定
    const isModernLayout = useMemo(() => {
        return headerData.layoutType === "modern";
    }, []);

    return (
        <>
            {/* トップページの場合のみModernHeaderを表示 */}
            {isTopPage && (
                <ModernHeader isModernLayout={isModernLayout} isTopPage={isTopPage} />
            )}
            <StandardHeader isModernLayout={isModernLayout} isTopPage={isTopPage} /> {/* StandardHeaderは常に表示、トップページかどうかをpropsで伝える */}
        </>
    );
});