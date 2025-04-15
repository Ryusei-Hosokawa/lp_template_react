// 会社情報
export const companyInformation = [
    { 
        type: "company",
        name: "株式会社和田板金工業",                    // 会社名
        address: "〒000-0000 東京都千代田区千代田1-1-1", // 郵便番号と住所
        tel: "000-0000-0000",                          // 電話番号
        mail: "info@example.com",                      // メールアドレス
        businessHours: "9:00 - 18:00",                 // 営業時間
    }
]
// ヘッダー画像系の情報
export const headerData = [
    { // 会社ロゴ ここから
        type: "logo",
        link: "/",
        imageName: "logo.png",
        alt: "会社ロゴ",
    },// 会社ロゴ ここまで
    { // LINEの画像 ここから
        type: "link",
        link: "https://lin.ee/ag7rVqh",
        imageName: "line_pc.png",
        imageNameSp: "line_sp.svg",
        alt: "LINE",
    },// LINEの画像 ここまで
    { // メールの画像 ここから
        type: "link",
        link: "#from",
        imageName: "mail_pc.png",
        imageNameSp: "mail_sp.svg",
        alt: "メール",
    },// メールの画像 ここまで
    { // 電話の画像 ここから
        type: "link",
        link: "tel:000-0000-0000",
        imageName: "tel_pc.svg",
        imageNameSp: "tel_sp.svg",
        alt: "電話番号 000-0000-0000",
    },// 電話の画像 ここまで
    { // ヘッダーバックグラウンド ここから
        type: "header",
        background: "bg-[#fff]",
    },// ヘッダーバックグラウンド ここまで
]

// メイン画像の情報
export const imageData = {
    imageItem: 10,      // メインコンテンツ内に並べる画像の数
    ctaButton: [9, 10], // これらの番号の画像の下にはCTAボタンを表示しない
    extension: "jpg",   // 拡張子の種類
};

// CTAボタン系の情報
export const CtaData = [
    { // CTAボタンの画像
        type: "button",
        imageName: "CTA.svg",               // ボタンの画像名
        position: "top-[50%] left-[50%]",   // 背景の配置
    },
    { // CTA背景の画像もしくはcssの色
        type: "bg",
        imageName: "CTA_bg.jpg",            // 背景の画像名
    },
    { // CTAの装飾の要素
        type: "item",
        imageName: "CTA_item.svg",          // 装飾の画像名
        item: false,                        // 装飾の表示有無 → 「false」は装飾を表示しない「true」は表示する
        position: "top-[50%] left-[3%]",    // 装飾の配置
    },
]

// 背景設定の情報
export const backgroundData = {
    type: "background",
    backgroundColor: "bg-[#fff]",                   // Tailwindの背景色クラス
    backgroundImage: "bg-[url('/images/bg.jpg')]",  // 背景画像を使用する場合
    backgroundAttachment: "bg-fixed",               // 背景固定
    backgroundSize: "bg-[50%_auto]",                // 背景サイズ
    backgroundRepeat: "bg-repeat",                  // 背景繰り返し
    backgroundPosition: "bg-center",                // 背景位置
}