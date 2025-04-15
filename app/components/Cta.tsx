import React from "react";
import { CtaData } from "../LpData";

export default function Cta() {
    return (
        <>
            {CtaData.map((cta) => (
                <a
                    className={`
                    ${cta.item ? `block ${cta.position}` : "none"}
            `}
                    href="#from"
                >
                    <img
                        src={`/images/${cta.imageName}`}
                        alt={cta.alt}
                        className="w-full"
                    />
                </a>
            ))}
        </>
    );
}
