import type { Route } from "../../+types/root";

export const fontLinks: Route.LinksFunction = () => {
    // コンポーネントがマウントされたタイミングでフォントを読み込むように対応
    if (typeof document !== 'undefined') {
        return [
            { rel: "preconnect", href: "https://fonts.googleapis.com" },
            {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
                crossOrigin: "anonymous",
            },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap",
            },
        ];
    }
    
    // SSRやプリロード時は空の配列を返す
    return [];
}; 