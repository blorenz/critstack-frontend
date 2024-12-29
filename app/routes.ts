import { type RouteConfig, index, route } from "@react-router/dev/routes"

export default [
	index("routes/home/_route.tsx"),
	route("/resource/locales", "routes/resource.locales.ts"),
	route("/robots.txt", "routes/robots[.]txt.ts"),
	route("/sitemap/:lang.xml", "routes/sitemap.$lang[.]xml.ts"),
	route("/sitemap-index.xml", "routes/sitemap-index[.]xml.ts"),
] satisfies RouteConfig
