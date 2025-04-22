import React, { memo } from "react";
import { Image } from "../Image";

type FormTitleProps = {
    titleImageName?: string;
    titleImageWidth?: string;
    titleMargin?: string;
};
/**
 * フォームタイトルを表示するコンポーネント
 */
export default memo(function FormTitle({ titleImageName, titleImageWidth, titleMargin }: FormTitleProps) {
    return (
        <h2 className={`mx-auto ${titleMargin} ${titleImageWidth}`}>
            <Image src={`${titleImageName}`} />
        </h2>
    );
}); 