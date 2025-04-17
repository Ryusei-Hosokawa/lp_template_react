import React from "react";

export type ImageProps = {
    src: string; /* 画像のパス */
    className?: string; /* 追加のクラス */
    key?: string; // 画像のキー
}

export const Image: React.FC<ImageProps> = ({
    src,
    className = "w-full",
}) => {
    const imagePath = `images/${src}`;
    return <img src={imagePath} className={className} />;
};
export default Image;