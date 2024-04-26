import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["default", "en", "pl"],

  defaultLocale: "default",
});

export const config = {
  matcher: ["/", "/(pl|en)/:path*"],
};
