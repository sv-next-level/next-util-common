import { METHOD } from "@/common/api/method";
import { param } from "@/common/api/next-user-service/types";

export const API = {
  meta: {
    description: "User Service API",
    name: "api",
    path: "/api",
  },
  v1: {
    meta: {
      description: "Version 1 of User Service API",
      name: "v1",
      path: "/api/v1",
    },
    user: {
      meta: {
        name: "user",
        path: "/api/v1/user",
      },
      userId: {
        meta: {
          name: ":userId",
          path: "/api/v1/user/:userId",
        },
        data: {
          method: {
            GET: METHOD.GET,
            POST: METHOD.POST,
          },
          getPath: (userId: string): string => {
            return `/api/v1/user/${userId}`;
          },
          getQuery: (para: param): param => para,
          getBody: (para: param): param => para,
          getPermission: (method: METHOD): string => {
            switch (method) {
              case METHOD.GET:
                return "unique permission id";
              case METHOD.POST:
                return "unique permission id";
              default:
                throw new Error("Invalid method");
            }
          },
        },
      },
    },
  },
};
