import type { Config } from "@react-router/dev/config";

export default {
  // SPAモードを有効にする（サーバーサイドレンダリングを無効化）
  ssr: false,
  future: {},
  // 相対パスのサブディレクトリにデプロイする場合
  basename: "/domain/react_router_lp_test",
} satisfies Config;
