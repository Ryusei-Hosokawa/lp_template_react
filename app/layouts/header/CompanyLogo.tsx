import React from "react";
import * as ReactRouter from "react-router";
import { headerData } from "../../LpData";
import { Image } from "../../components";
import { handleLogoClick } from "../../logics";
const { useLocation, useNavigate } = ReactRouter;

/**
 * ヘッダーに表示する会社ロゴコンポーネント
 */
export default function CompanyLogo({ isModernLayout }: { isModernLayout: boolean }) {
    // headerData.itemsから特定のタイプのアイテムを取得
    // 適切な型を指定して型安全性を確保
    const logoItem = headerData.items.logo;
    const location = useLocation();
    const navigate = useNavigate();

    const isModern = isModernLayout;

    // ロゴアイテムが見つからない場合は何も表示しない
    if (!logoItem) return null;

    return (
        <>
            {/* スタイルをより具体的に適用し、セレクタ優先度を高める */}
            {isModern ? 
                <style>{`
                    @media (min-width: ${headerData.responseWidth + 1}px) {
                        h1.logo {
                            position: absolute !important;
                            width: ${headerData.modernLayout.logoWidthPc} !important;
                            ${headerData.modernLayout.logoPosition.split(' ').join(' !important; ')} !important;
                        }
                    }
                    @media (max-width: ${headerData.responseWidth}px) {
                        h1.logo {
                            max-width: ${headerData.standardLayout.logoWidth} !important;
                            width: ${headerData.standardLayout.logoWidth} !important;
                        }
                    }
                `}</style> :
                <style>{`
                    h1.logo {
                        max-width: ${headerData.standardLayout.logoWidth} !important;
                        width: ${headerData.standardLayout.logoWidth} !important;
                    }
                `}</style>
            }
            <h1 
                className={`logo hoverAction 
                    ${isModern ? headerData.modernLayout.logoPosition : ''}
                    `}
            >
                <button className="w-full border-0 p-0 bg-transparent cursor-pointer"
                    onClick={() => handleLogoClick(location.pathname, navigate)}
                >
                    <Image src={`${logoItem.imageName}`} />
                </button>
            </h1>
        </>
    );
}