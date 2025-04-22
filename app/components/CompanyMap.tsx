import React from "react";
import { extractMapSrcFromIframe } from "../logics";

type CompanyMapProps = {
    iFrame: string;
    width?: string;
    height?: string;
    className?: string;
};
 /* 会社の所在地を表示するGoogleマップコンポーネント
 * iFrameまたはsrcを受け取って適切に表示
 */
export default function CompanyMap({
    iFrame,
    width,
    height,
    className = "border border-[#bcbcbb] rounded-[10px] overflow-hidden"
}: CompanyMapProps) {
    // 抽出したsrcを取得
    const extractedSrc = extractMapSrcFromIframe(iFrame);
    
    // srcが取得できない場合はエラーメッセージを表示
    if (!extractedSrc) {
        return <div className={className}>地図URLが見つかりません</div>;
    }
    
    return (
        <div className={className}>
            <iframe
                src={extractedSrc}
                width={width}
                height={height}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="会社所在地マップ"
                style={{border: 0}}
                allowFullScreen
            ></iframe>
        </div>
    );
} 