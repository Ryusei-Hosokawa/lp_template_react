import React from "react";
import { headerData } from "../../LpData";
import * as ReactRouter from "react-router";
const { Link } = ReactRouter;

export default function CompanyLogo() {
    return (
        <h1 className="w-[20vw] max-w-[350px]">
            {headerData
                .filter(item => item.type === "logo")
                .map((logoData, index) => (
                    <Link to="/" key={index}>
                        <img
                            src={`/images/${logoData.imageName}`}
                            alt={logoData.alt}
                            className="w-full"
                        />
                    </Link>
                ))}
        </h1>
    );
}
