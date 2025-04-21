import React from "react";
import { headerData } from "../../LpData";
import * as ReactRouter from "react-router";
import { Image } from "../../components";
const { Link } = ReactRouter;

export default function CompanyLogo() {
    const logoData = headerData.logo;
    
    return (
        <h1
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
    );
}
