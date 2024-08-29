import { METHOD } from "@/common/api/method";
import {
  SessionCreationBody,
  SessionCreationHeaders,
  SessionVerificationBody,
  SessionVerificationHeaders,
} from "@/common/api/next-authentication-service/types.d";

export const API = {
  META: {
    description: "Authentication Service API",
    name: "api",
    path: "/api",
  },
  V1: {
    META: {
      description: "Version 1 of Authentication Service API",
      version: "1",
      name: "v1",
      path: "/api/v1",
    },
    sessions: {
      META: {
        description: "User sessions api routes",
        name: "sessions",
        path: "/api/v1/sessions",
      },
      verify: {
        META: {
          description: "User sessions verification api route",
          name: "verify",
          path: "/api/v1/sessions/verify",
        },
        REQUEST: {
          POST: {
            method: METHOD.POST,
            getUrl: (): string => `/api/v1/sessions/verify`,
            getHeaders: (headers: SessionVerificationHeaders) => ({
              "Content-Type": "application/json",
              Authorization: `Bearer ${headers.refresh_tokens}`,
              Device: headers.device_id,
            }),
            getBody: (body: SessionVerificationBody) => ({
              access_token: body.access_token,
              user_id: body.user_id,
            }),
          },
        },
        RESPONSE: {
          POST: {},
        },
      },
      create: {
        META: {
          description: "User sessions creation api route",
          name: "create",
          path: "/api/v1/sessions/create",
        },
        REQUEST: {
          POST: {
            method: METHOD.POST,
            getUrl: (): string => `/api/v1/sessions/create`,
            getHeaders: (headers: SessionCreationHeaders) => ({
              "Content-Type": "application/json",
              Authorization: `Bearer ${headers?.refresh_tokens}`,
              Device: headers?.device_id,
            }),
            getBody: (body: SessionCreationBody) => ({
              user_id: body.user_id,
            }),
          },
        },
        RESPONSE: {
          POST: {},
        },
      },
    },
  },
};
