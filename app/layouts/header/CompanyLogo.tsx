import React from "react";
import * as ReactRouter from "react-router";
import { headerData } from "../../LpData";
import { Image } from "../../components";
import { findItemByType } from "../../logics";
const { Link } = ReactRouter;

export default function CompanyLogo() {
    // headerData.itemsから特定のタイプのアイテムを取得
    const logoItem = findItemByType(headerData.items, "logo");

    // ロゴアイテムが見つからない場合は何も表示しない
    if (!logoItem) return null;

    return (
        <h1 className={`
            hoverAction
            ${logoItem.logoWidth}
            ${logoItem.logoMaxWidth}
            ${logoItem.logoWidthSp}
        `}>
            <Link to={`${logoItem.link}`}>
                <Image src={`${logoItem.imageName}`} />
            </Link>
        </h1>
    );
}