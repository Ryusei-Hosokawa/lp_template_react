import type { Config } from "@react-router/dev/config";

export default {
  // SPAモードを有効にする（サーバーサイドレンダリングを無効化）
  ssr: false,
  future: {
    // React Router v7で利用可能な設定
    // スクロール動作はカスタム実装で制御
  },
  // 相対パスのサブディレクトリにデプロイする場合
  basename: '/react_router_lp_test/',
} satisfies Config;
