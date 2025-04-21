import React, { memo } from "react";

type TitleProps = {
    title: string;
    titleClass: string;
};

/**
 * YouTubeセクションのタイトルを表示するコンポーネント
 */
export default memo(function Title({ title, titleClass}: TitleProps) {
    return <h2 className={`${titleClass}`}>{title}</h2>;
}); 