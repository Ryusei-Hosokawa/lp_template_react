// 会社情報 ここから //
export const companyInformation = {
        name: "Answer Smile 株式会社", // 会社名
        address: "〒000-0000 東京都千代田区千代田1-1-1", // 郵便番号と住所
        tel: "000-0000-0000", // 電話番号
        mail: "info@example.com", // メールアドレス
        businessHours: "9:00 - 18:00", // 営業時間
    };
// 会社情報 ここまで //

// ヘッダー画像系の情報 ここから //
export const headerData = [
    // 会社ロゴ ここから //
    {
        type: "logo", // ※基本触らない
        link: "/", // リンク先
        imageName: "logo.png", // 画像名
        logoWidth: "w-[20vw]",
        logoMaxWidth: "max-w-[200px]",
        logoWidthSp: "max-[780px]:w-[50%]",
    },
    // 会社ロゴ ここまで //
    // LINEの画像 ここから //
    {
        type: "line", // ※基本触らない
        link: "https://lin.ee/ag7rh", // リンク先
        imageName: "line_pc.png", // 画像名
        imageNameSp: "line_sp.svg", // スマホの画像名
    },
    // LINEの画像 ここまで //
    // メールの画像 ここから //
    {
        type: "mail", // ※基本触らない
        link: "#form", // リンク先
        imageName: "mail_pc.png", // 画像名
        imageNameSp: "mail_sp.svg", // スマホの画像名
    },
    // メールの画像 ここまで //
    // 電話の画像 ここから //
    {
        type: "tel", // ※基本触らない
        link: `${companyInformation.tel}`, // リンク先 もし会社概要の番号問違う場合はここを変更
        imageName: "tel_pc.svg", // 画像名
        imageNameSp: "tel_sp.svg", // スマホの画像名
        imageUse: false, // 画像を使用したいときのみ「true」
    },
    // 電話の画像 ここまで //
    // ヘッダーバックグラウンド ここから //
    {
        type: "header", // ※基本触らない
        background: "bg-[#fff]", // 背景色もしくは背景画像（tailwind.cssの形式で記載）
    },
    // ヘッダーバックグラウンド ここまで //
];
// ヘッダー画像系の情報 ここまで //

// メイン画像の情報 ここから //
export const imageData = {
    mainWidth: "max-w-[470px]",
    imageItem: 10, // メインコンテンツ内に並べる画像の数
    ctaButton: [9, 10], // これらの番号の画像の下にはCTAボタンを表示しない
    extension: "jpg", // 拡張子の種類
};
// メイン画像の情報 ここまで //

// CTAボタン系の情報 ここから //
export const CtaData = [
    // CTAボタンの画像 ここから //
    {
        type: "button", // ※基本触らない
        imageName: "CTA.svg", // ボタンの画像名
        position: "top-[50%] left-[50%]", // 背景の配置
    },
    // CTAボタンの画像 ここまで //
    // CTA背景の画像もしくはcssの色 ここから //
    {
        type: "bg", // ※基本触らない
        imageName: "CTA_bg.jpg", // 背景の画像名
    },
    // CTA背景の画像もしくはcssの色 ここまで //
    // CTAの装飾の要素 ここから //
    {
        type: "item", // ※基本触らない
        imageName: "CTA_item.svg", // 装飾の画像名
        item: false, // 装飾の表示有無 → 「false」は装飾を表示しない「true」は表示する
        position: "top-[50%] left-[3%]", // 装飾の配置
    },
    // CTAの装飾の要素 ここまで //
];
// CTAボタン系の情報 ここまで //

// フォームの情報 ここから //
export const formData = [
    // フォームコンテンツ ここから //
    {
        type: "formBg", // ※基本触らない
        formPadding: "pt-[20px] px-[4.5%] pb-[30px]", // フォームコンテンツのパディング
        background: "bg-[#FDF4ED]", // フォームコンテンツ内の背景
        formTopSpace: "pt-[130px] mt-[-70px]", // フォームにジャンプした際の停止位置の調整
    },
    // フォームコンテンツ ここまで //
    // フォームタイトル ここから //
    {
        type: "formTitle", // ※基本触らない
        titleImageName: "form_title.svg", // フォームのタイトルの画像名
        titleImageWidth: "w-[60%]", // フォームのタイトルの画像の幅
    },
    // フォームタイトル ここまで //
    // フォーム要素 ここから //
    {
        type: "formObject", // ※基本触らない
        background: "bg-[#fff]", // フォーム要素背景
        form: "pt-[130px] mt-[-70px]", // フォームにジャンプした際の停止位置の調整
    },
    // フォーム要素 ここまで //
]
// フォームの情報 ここまで //

// 背景設定の情報 ここから //
export const backgroundData = {
    type: "background", // ※基本触らない
    backgroundColor: "bg-[#fff]", // 背景色
    backgroundImage: "bg-[url('/images/bg.jpg')]", // 背景画像を使用する場合
    backgroundAttachment: "bg-fixed", // 背景固定
    backgroundSize: "bg-[50%_auto]", // 背景サイズ
    backgroundRepeat: "bg-repeat", // 背景繰り返し
    backgroundPosition: "bg-center", // 背景位置
};
// 背景設定の情報 ここまで //

// サイド固定バナーの情報 ここから //
export const sideData = [
    {
        type: "left",
        imageName: "side_left.png",
        size: "w-[15%]",
        position: "bottom-[2%] left-[5%]",
    },
    {
        type: "right",
        imageName: "side_right.png",
        size: "w-[10%]",
        position: "bottom-[-0.5%] right-[5%]",
    },
];
// サイド固定バナーの情報 ここまで //

// シャドウ変更
// フォームロゴの要素内外配置
// 背景2枚