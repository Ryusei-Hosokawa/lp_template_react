import React from "react";
import { headerData } from "../../LpData";
import * as ReactRouter from "react-router";
const { Link } = ReactRouter;

export default function CompanyLogo() {
    return (
        <>
            {headerData
                .filter((item) => item.type === "logo")
                .map((logoData, index) => (
                    <h1
                        className={`
                            ${logoData.logoWidth}
                            ${logoData.logoMaxWidth}
                            ${logoData.logoWidthSp}
                        `}
                    >
                        <Link to="/" key={index}>
                            <img
                            src={`/images/${logoData.imageName}`}
                            className="w-full"
                        />
                    </Link>
                </h1>
            ))}
        </>
    );
}
