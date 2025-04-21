import React, { memo } from "react";
import { Links } from "react-router";
import Meta from "./Meta";

// メモ化されたヘッドコンポーネント
export default memo(function Head() {
    return (
        <head>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <Meta />
            <Links />
        </head>
    );
});  