// メタ情報の型定義
export type BaseMetaInfo = {
    title: string;
    description: string;
    keywords: string;
};

export type OgpInfo = {
    ogpTitle?: string; // オプショナル
    ogpDescription?: string; // オプショナル
    ogpImage: string;
    ogpUrl: string;
};

export type MetaInformation = BaseMetaInfo & OgpInfo;

// 継承を処理するヘルパー関数
export const mergeMetaInfo = (base: BaseMetaInfo, ogp: OgpInfo): MetaInformation => {
    return {
        ...base,
        ...ogp,
        // undefinedの場合はbaseの値を使用
        ogpTitle: ogp.ogpTitle || base.title,
        ogpDescription: ogp.ogpDescription || base.description
    };
}; 