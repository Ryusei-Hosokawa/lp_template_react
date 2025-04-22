import type { CompanyInfoItem } from "./utils/companyUtils"; // 会社情報の型定義 ※触らない
import { getCompanyInfoValue } from "./utils/companyUtils"; // 会社情報を検索するためのユーティリティ関数 ※触らない
import { mergeMetaInfo } from "./types/meta"; // メタ情報をマージするための関数 ※触らない
import type { BaseMetaInfo, OgpInfo } from "./types/meta"; // メタ情報の型定義 ※触らない
import type { HeaderItem, LayoutSettings, HeaderData } from "./types/header"; // ヘッダー関連の型定義

// 会社情報 ここから ====================================================================== //
export const companyInformation = {
    // 会社名 ここから //
    name: {
        key: "会社名", // タイトル
        value: "Answer Smile 株式会社", // タイトルに対応する情報
    }, 
    // 会社名 ここまで //
    // 住所 ここから //
    address: {
        key: "住所", // タイトル
        value: "〒000-0000 東京都千代田区千代田1-1-1", // タイトルに対応する情報
    }, 
    // 住所 ここまで //
    // 電話番号 ここから //
    tel: {
        key: "電話番号", // タイトル
        value: "000-0000-0001", // タイトルに対応する情報
    }, 
    // 電話番号 ここまで //
    // メールアドレス ここから //
    mail: {
        key: "メールアドレス", // タイトル
        value: "info@example.com", // タイトルに対応する情報
    }, 
    // メールアドレス ここまで //
    // 営業時間 ここから //
    businessHours: {
        key: "営業時間", // タイトル
        value: "9:00 - 18:00", // タイトルに対応する情報
    }, 
    // 営業時間 ここまで //
};

export const companyMap = {
    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6481.57879728222!2d139.7490498!3d35.682187299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c74444f031b%3A0x6661f396d1d56740!2z44CSMTAwLTAwMDEg5p2x5Lqs6YO95Y2D5Luj55Sw5Yy65Y2D5Luj55Sw77yR4oiS77yRIOeUn-eJqeWtpueglOeptuaJgA!5e0!3m2!1sja!2sjp!4v1745215877093!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    width: "100%",
    height: "150px",
}
// 会社情報 ここまで ====================================================================== //

// meta情報 ここから ====================================================================== //
const baseMetaInfo: BaseMetaInfo = {
    title: getCompanyInfoValue(companyInformation, "name"), // metaデータで設定するタイトル
    description: "Answer Smile 株式会社のホームページです。", // metaデータで設定するディスクリプション
    keywords: "Answer Smile, 株式会社, ホームページ", // metaデータで設定するキーワード
};
const ogpInfo: OgpInfo = {
    ogpTitle: undefined, // OGPのタイトル ※未指定の場合は<title>の内容が適応されます
    ogpDescription: undefined, // OGPのディスクリプション ※未指定の場合は<meta name="description">の内容が適応されます
    ogpImage: "image/top.jpg", // OGPのサムネイル画像
    ogpUrl: "", // OGPのURL
};
// meta情報 ここまで ======================================================================= //

// ヘッダー画像系の情報 ここから ============================================================= //
export const headerData: HeaderData = {
    // レイアウトタイプの選択 ここから //
    layoutType: "standard", // "standard" または "modern"を指定
    // レスポンスの画面幅指定 ここから //
    responseWidth: 1200, // レスポンスの画面幅
    // レスポンスの画面幅指定 ここまで //
    // 標準レイアウト用の設定 ここから //
    standardLayout: {
        logoWidth: "max-w-[200px]", // ロゴの幅
        maxWidth: "max-w-[1500px]", // コンテンツの最大幅
        padding: "px-[5%] py-[0.5%]", // 内部の余白
        paddingSp: "max-[780px]:px-[3%] max-[780px]:py-[1%]", // スマホ用の余白
        navWidth: "w-[60%]", // ナビゲーションの幅
        navMaxWidth: "max-w-[500px]", // ナビゲーションの最大幅
        navWidthSp: "max-[780px]:w-[40%]", // スマホ用ナビゲーション幅
        itemWidth: "w-[32%]", // 各アイテムの幅
        itemWidthSp: "max-[780px]:w-[30%]", // スマホ用アイテム幅
        shadow: "shadow-md", // 影の設定
        zIndex: "z-[999]", // 重なり順
        background: "bg-[#fff]", // 背景色もしくは背景画像（tailwind.cssの形式で記載）
    },
    // 標準レイアウト用の設定 ここまで //
    // モダンレイアウト用の追加設定 ここから //
    modernLayout: {
        logoPosition: "top-[15%] right-[20%]", // ロゴの左からの位置
        logoWidth: "w-[20vw]", // ロゴの幅
        buttonPosition: "bottom-[10%] right-[30%]", // 追従ボタンの位置
        buttonWidth: "w-[42%]", // 追従ボタンの幅
        buttonSpacing: "space-y-[5px]", // CTAボタン間の間隔
        background: "bg-[transparent]", // 背景
        shadow: "", // 影の設定
        width: "max-w-[30vw]", // ヘッダーの幅
        height: "h-[100vh]", // ヘッダーの高さ
        zIndex: "z-[500]", // 重なり順
    },
    // モダンレイアウト用の追加設定 ここまで //
    // ヘッダーのアイテム ここから //
    items: {
        // 会社ロゴ ここから //
        logo: {
            link: "#", // リンク先
            imageName: "logo.png", // 画像名
            logoMaxWidth: "max-w-[400px]", // ロゴの最大幅
            logoWidthSp: "max-[780px]:w-[50%]", // スマホのロゴの幅
        },
        // 会社ロゴ ここまで //
        // LINEの画像 ここから //
        line: {
            link: "https://www.line.me/ja/", // リンク先
            imageName: "line_pc.png", // 画像名
            imageNameSide: "side_line.png", // 画像名
            imageNameSp: "line_sp.svg", // スマホの画像名
        },
        // LINEの画像 ここまで //
        // メールの画像 ここから //
        mail: {
            imageName: "mail_pc.png", // 画像名
            imageNameSide: "side_mail.png", // 画像名
            imageNameSp: "mail_sp.svg", // スマホの画像名
        },
        // メールの画像 ここまで //
        // 電話の画像 ここから //
        tel: {
            link: getCompanyInfoValue(companyInformation, "tel"), // 電話番号
            imageName: "tel_pc.svg", // 画像名
            imageNameSide: "side_tel.png", // 画像名
            imageNameSp: "tel_sp.svg", // スマホの画像名
            imageUse: false, // 画像を使用したいときのみ「true」
        },
        // 電話の画像 ここまで //
    },
    // ヘッダーのアイテム ここまで //
};
// ヘッダー画像系の情報 ここまで ============================================================= //

// メインページの情報 ここから ================================================================= //
export const mainData = {
    mainWidth: "max-w-[660px]",
    imageItem: 8, // メインコンテンツ内に並べる画像の数
    youtubeData: {
        title: "動画で見る", // セクションのタイトルテキスト
        titleClass: "block text-[35px] text-[#fff] font-[700] mb-[15px] text-center bg-[#222] px-[20px] pt-[5px] pb-[6px] rounded-full", // YouTubeのセクションタイトルのスタイル
        enabled: [] as number[], // この番号のメインコンテンツ画像の下にYouTubeを表示します
        videoUrl: "https://www.youtube.com/watch?v=qiyTDxBjmIw&list=RDqiyTDxBjmIw&start_radio=1", // YouTubeの動画URL
        containerClass: "grid place-items-center py-[20px] bg-[#FDF4ED]",
        wrapperClass: "w-[90%] rounded-[5px] shadow-[0_0_10px_0_rgba(0,0,0,0.3)]", // YouTubeのセクションのスタイル（動画の背景に当たる部分）
    },
};
// メインページの情報 ここまで ================================================================= //

// CTAボタン系の情報 ここから ================================================================ //
export const CtaData = {
    ctaButton: [1, 7, 8], // これらの番号の画像の下にはCTAボタンを表示しない
    button: { // CTAボタンの画像 ここから //
        imageName: "CTA.png", // ボタンの画像名
        imageSize: "w-[80%]", // ボタンの画像の幅
        position: "top-[60%] left-[50%]", // 背景の配置
    }, // CTAボタンの画像 ここまで //
    background: { // CTA背景の画像もしくはcssの色 ここから //
        imageName: "CTA_bg.jpg", // 背景の画像名
    }, // CTA背景の画像もしくはcssの色 ここまで //
    item: { // CTAの装飾の要素 ここから //
        imageName: "CTA_item.svg", // 装飾の画像名
        item: false, // 装飾の表示有無 →「false」は装飾を表示しない「true」は表示する
        position: "top-[50%] left-[3%]", // 装飾の配置
    }, // CTAの装飾の要素 ここまで //
    cta_fv: { // ファーストビュー内に専用のCTAボタンを表示するかどうか ここから //
        firstViewCta: true, // ファーストビュー内に専用のCTAボタンを表示するかどうか
        imageName: "CTA_fv.png", // 画像の画像名
        position: "bottom-[-2%] left-[50%]", // 画像の配置
    }, // ファーストビュー内に専用のCTAボタンを表示するかどうか ここまで //
    cta_type: { // CTAボタンのタイプ設定 ここから //
        type: "normal", // "normal"（通常表示）または"fixed"（追従表示）
        fixedPosition: "bottom-[20px] right-[20px]", // 追従表示時の位置
        fixedSize: "w-[120px]", // 追従表示時のサイズ
        fixedZIndex: "z-[1000]", // 追従表示時の重なり順
        scrollThreshold: 300, // 表示を開始するスクロール位置（px）
    } // CTAボタンのタイプ設定 ここまで //
};
// CTAボタン系の情報 ここまで ================================================================ //

// フォームの情報 ここから =================================================================== //
export const formData = [
    // フォームコンテンツ ここから //
    {
        type: "formBg", // ※基本触らない
        formPadding: "pt-[20px] px-[4.5%] pb-[30px]", // フォームコンテンツのパディング
        background: "bg-[#fff]", // フォームコンテンツ内の背景
        formTopSpace: "pt-[130px] mt-[-70px]", // フォームにジャンプした際の停止位置の調整
        formShadow: "shadow-[0_0_10px_0_rgba(0,0,0,0.2)]", // フォームコンテンツのドロップシャドウ（数値変更時スペースがあると機能しなくなってしまいます）
    },
    // フォームコンテンツ ここまで //
    // フォームタイトル ここから //
    {
        type: "formTitle", // ※基本触らない
        position: "out", // フォームのタイトルの配置("in"もしくは"out"を指定)
        titleImageName: "form_title.svg", // フォームのタイトルの画像名
        titleImageWidth: "w-[60%]", // フォームのタイトルの画像の幅
        titleMargin: "mb-[20px]", // フォームのタイトルの画像の高さ
    },
    // フォームタイトル ここまで //
    // フォーム要素 ここから //
    {
        type: "formObject", // ※基本触らない
        background: "bg-[#fff]", // フォーム要素背景
        padding: "px-[5%] py-[40px]", // フォーム要素のパディング
        shadow: "shadow-[0_0_10px_0_rgba(0,0,0,0.2)]", // フォーム要素のドロップシャドウ
        rounded: "rounded-[10px]", // フォーム要素の角の丸み
    },
    // フォーム要素 ここまで //
];
// フォームの情報 ここまで =================================================================== //

// フッター ここから =================================================================== //
export const footerData = {
    linkText: {
        color: "text-[#fff]", // リンクテキストの色
        link: [
            {
                label: "会社概要", // リンクテキストの表示 ※基本触らない
                path: "/about", // リンク先 ※基本触らない
            },
            {
                label: "プライバシーポリシー", // リンクテキストの表示 ※基本触らない
                path: "/privacy_policy", // リンク先 ※基本触らない
            },
        ],
    },
    copyrightText: "text-[#c9c9c9]", // コピーライトテキストの色
    background: "bg-[#1f222c]", // フッターの背景色
};
// フッター ここまで =================================================================== //

// 背景設定の情報 ここから =================================================================== //
export const backgroundData = [
    { // 左側背景 ここから //
        type: "left", // ※基本触らない
        backgroundLeft: "bg-[#EC509A]", // 背景画像を使用する場合
        backgroundAttachmentLeft: "bg-fixed", // 背景固定
        backgroundSizeLeft: "bg-[auto_100%]", // 左側背景サイズ
        backgroundRepeatLeft: "bg-no-repeat", // 左側背景繰り返し
        backgroundPositionLeft: "bg-left", // 左側背景位置
    }, // 左側背景 ここまで //
    { // 右側背景 ここから //
        type: "right", // ※基本触らない
        backgroundRight: "bg-[#00A0D9]", // 背景画像を使用する場合
        backgroundAttachmentRight: "bg-fixed", // 背景固定
        backgroundSizeRight: "bg-[100%]", // 右側背景サイズ
        backgroundRepeatRight: "bg-no-repeat", // 右側背景繰り返し
        backgroundPositionRight: "bg-right", // 右側背景位置
    }, // 右側背景 ここまで //
];
// 背景設定の情報 ここまで =================================================================== //

// サイド固定バナーの情報 ここから ============================================================ //
export const sideData = {
    left1_: { // 左上側の画像 ここから //
        imageName: "side_left_1.png", // 画像名
        size: "w-[20%]", // 画像の幅
        position: "top-[10%] left-[5%]", // 画像の位置
    }, // 左上側の画像 ここまで //
    left2_: { // 左下側の画像 ここから //
        imageName: "side_left_2.png", // 画像名
        size: "w-[30%]", // 画像の幅
        position: "bottom-[0%] left-[1%]", // 画像の位置
    }, // 左下側の画像 ここまで //
    right: { // 右下側の画像 ここから //
        imageName: "side_right.png", // 画像名
        size: "w-[33vw]", // 画像の幅
        position: "bottom-[0%] right-[0%]", // 画像の位置
    }, // 右下側の画像 ここまで //
};
// サイド固定バナーの情報 ここまで ============================================================ //

// 会社概要ページの情報 ここから ============================================================ //
export const aboutPageData = {
    tableTitleClass: "bg-[#00A0D9] text-white p-4 w-1/3 border border-white text-center", // テーブルのタイトルの背景色
    tableContentClass: "bg-white p-4 border border-gray-200", // テーブルの内容の背景色
};
// 会社概要ページの情報 ここまで ============================================================ //

// サイドバナーの配置
// 追従ボタン

// メタ情報をエクスポート
export const metaInformation = mergeMetaInfo(baseMetaInfo, ogpInfo); // ※触らない