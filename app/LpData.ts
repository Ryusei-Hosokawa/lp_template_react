// 会社情報
export const companyInformation = [
    { 
        type: "company",
        name: "株式会社和田板金工業", // 会社名
        address: "〒000-0000 東京都千代田区千代田1-1-1", // 郵便番号と住所
        tel: "000-0000-0000", // 電話番号
        mail: "info@example.com", // メールアドレス
        businessHours: "9:00 - 18:00", // 営業時間
    }
]
// ヘッダー画像系の情報
export const headerData = [
    { // 会社ロゴ
        type: "logo",
        link: "/",
        imageName: "company",
        imageExtension: "png",
        alt: "会社ロゴ",
    },
    { // LINEの画像
        type: "link",
        link: "https://lin.ee/ag7rVqh",
        imageName: "line",
        imageExtension: "png",
        imageNameSp: "line_sp",
        imageExtensionSp: "svg",
        alt: "LINE",
    },
    { // メールの画像
        type: "link",
        link: "index.html#from",
        imageName: "mail",
        imageExtension: "png",
        imageNameSp: "mail_sp",
        imageExtensionSp: "svg",
        alt: "メール",
    },
    { // 電話の画像
        type: "link",
        link: "tel:000-0000-0000",
        imageName: "tel",
        imageExtension: "svg",
        imageNameSp: "tel_sp",
        imageExtensionSp: "svg",
        alt: "電話番号000-0000-0000",
    },
    { // ヘッダーバックグラウンド
        type: "header",
        backgroundColor: "bg-[#fff]",
        height: "70px",
    },
]

// 画像系の情報
export const imageData = {
    imageItem: 10, // メインコンテンツ内に並べる画像の数
    extension: "jpg",
    ctaButton: [9, 10], // これらの番号の画像の下にはCTAボタンを表示しない
};

// CTAボタン系の情報
export const CtaData = [
    { // CTAボタンの画像
        imageName: "CTA.png",
        alt: "CTAボタン",
    },
    { // CTA背景の画像もしくはcssの色
        imageName: "CTA_bg.jpg",
        alt: "CTA背景",
    },
    { // CTAアイテムの画像と配置
        imageName: "CTA_item.svg",
        alt: "CTAアイテム",
        item: false,
        position: "top- right-",
    },
]

// 背景設定の情報
export const backgroundData = {
    type: "background",
    backgroundColor: "bg-[#fff]", // Tailwindの背景色クラス
    backgroundImage: "bg-[url('/images/bg.jpg')]", // 背景画像を使用する場合
    backgroundAttachment: "bg-fixed", // 背景固定
    backgroundSize: "bg-[50%_auto]", // 背景サイズ
    backgroundRepeat: "bg-repeat", // 背景繰り返し
    backgroundPosition: "bg-center", // 背景位置
}