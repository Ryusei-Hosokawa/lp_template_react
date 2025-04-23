import React, { memo, useMemo } from "react";
import { ModernHeader, StandardHeader } from "./index";
import { headerData } from "../../LpData";

/**
 * ヘッダーコンポーネント
 * レイアウトタイプに応じて適切なヘッダーコンポーネントをレンダリングする
 */
export default memo(function Header() {
    // レイアウトタイプがモダンかどうかを判定
    const isModernLayout = useMemo(() => {
        return headerData.layoutType === "modern";
    }, []);

    return (
        <>
            <ModernHeader isModernLayout={isModernLayout} />
            <StandardHeader isModernLayout={isModernLayout} />
        </>
    );
});