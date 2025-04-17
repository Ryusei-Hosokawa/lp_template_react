import React from "react";
import { CtaData } from "../LpData";
import { scrollToForm } from "../logics/scrollLogics";
import { Image } from "./Image";

const ctaBg = CtaData.filter((cta) => cta.type === "bg");
const ctaButton = CtaData.filter((cta) => cta.type === "button");

export default function Cta() {
    return (
        <div className="relative">
            {ctaBg.map((cta) => {
                return (
                    <div key={cta.imageName} className="w-full">
                        <Image 
                            className="
                                w-full
                                inline-block
                            " 
                            src={`${cta.imageName}`} 
                        />
                    </div>
                );
            })}
            {ctaButton.map((cta) => {
                return (
                    <button
                        key={cta.imageName}
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
                        <img src={`images/${cta.imageName}`} alt="CTAボタン" className="w-full" />
                    </button>
                );
            })}
        </div>
    );
}
