import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["default", "en", "pl"],

  defaultLocale: "default",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(pl|en)/:path*"],
};
