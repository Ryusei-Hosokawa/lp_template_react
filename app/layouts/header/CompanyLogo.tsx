import React from "react";
import * as ReactRouter from "react-router";
import { headerData } from "../../LpData";
import { Image } from "../../components";
import { findItemByType } from "../../logics";
const { Link } = ReactRouter;

export default function CompanyLogo() {
    return (
        <>
            {headerData
                .filter((item) => item.type === "logo")
                .map((logoData, index) => (
                    <h1
                        key={index}
                        className={`
                            hoverAction
                            ${logoData.logoWidth}
                            ${logoData.logoMaxWidth}
                            ${logoData.logoWidthSp}
                        `}
                    >
                        <Link to={`${logoData.link}`}>
                            <Image src={`${logoData.imageName}`} />
                        </Link>
                    </h1>
                ))}
        </>
    );
}