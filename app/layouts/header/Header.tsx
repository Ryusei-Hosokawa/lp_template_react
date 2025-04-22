import React, { memo } from "react";
import { ModernHeader, StandardHeader } from "./index";

/**
 * レイアウトタイプに応じて適切なヘッダーコンポーネントをレンダリングする
 */
export default memo(function Header() {
    // レイアウトタイプに応じたヘッダーコンポーネントをレンダリング
    return (
        <>
            <ModernHeader />
            <StandardHeader />
        </>
    );
});