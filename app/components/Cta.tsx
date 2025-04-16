import React from "react";
import { CtaData } from "../LpData";
import { scrollToForm } from "../logics/scrollLogics";

const ctaBg = CtaData.filter((cta) => cta.type === "bg");
const ctaButton = CtaData.filter((cta) => cta.type === "button");

export default function Cta() {
    return (
        <div className="relative">
            {ctaBg.map((cta) => {
                return (
                    <img
                        key={cta.imageName}
                        src={`/images/${cta.imageName}`}
                        className="inline-block"
                    />
                );
            })}
            {ctaButton.map((cta) => {
                return (
                    <button
                        className={`
                            block
                            absolute
                            w-[80%]
                            h-auto
                            z-100
                            top-[50%]
                            left-[50%]
                            bg-cover
                            bg-center
                            bg-no-repeat
                            cursor-pointer
                            buttonAnimation
                            transition-all
                            duration-300
                            ease-in-out
                            hover:opacity-80
                            ${cta.position}
                        `}
                        onClick={scrollToForm}
                    >
                        <img src={`/images/${cta.imageName}`} />
                    </button>
                );
            })}
        </div>
    );
}
