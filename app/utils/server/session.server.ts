import { createCookieSessionStorage } from "remix";

export const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: "__path",
      secrets: ["r3m1x_s3cret"],
      sameSite: "lax",
      path: "/",
      httpOnly: true,
      secure: true,
      maxAge: 3600 * 1000,
    },
  });
