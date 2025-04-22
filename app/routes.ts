import { type RouteConfig, index, route, } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("about", "routes/About.tsx"),
    route("privacy_policy", "routes/PrivacyPolicy.tsx"),
] satisfies RouteConfig;