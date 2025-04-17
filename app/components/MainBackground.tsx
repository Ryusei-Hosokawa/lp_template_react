import React from "react";
import { backgroundData } from "../LpData";

export default function MainBackground() {
    return (
        <div className="fixed top-0 left-0 w-full h-full z-[-99]">
            {backgroundData.map((bg) => {
                const isLeft = bg.type === "left";
                return (
                    <div 
                        key={bg.type}
                        className={`
                            absolute 
                            top-0 
                            w-1/2 
                            h-full 
                            ${isLeft ? 'left-0' : 'right-0'}
                            ${isLeft ? bg.backgroundLeft : bg.backgroundRight}
                            ${isLeft ? bg.backgroundAttachmentLeft : bg.backgroundAttachmentRight}
                            ${isLeft ? bg.backgroundSizeLeft : bg.backgroundSizeRight}
                            ${isLeft ? bg.backgroundRepeatLeft : bg.backgroundRepeatRight}
                            ${isLeft ? bg.backgroundPositionLeft : bg.backgroundPositionRight}
                        `}
                    />
                );
            })}
        </div>
    );
}