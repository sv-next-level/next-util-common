import { METHOD } from "@/common/api/method";

export const API = {
  meta: {
    description: "Task Service API",
    name: "api",
    path: "/api",
  },
  v1: {
    meta: {
      description: "Version 1 of Task Service API",
      name: "v1",
      path: "/api/v1",
    },
    tasks: {
      meta: {
        description: "tasks creation and reading API",
        name: "tasks",
        path: "/api/v1/tasks",
      },
      data: {
        method: {
          GET: METHOD.GET,
          POST: METHOD.POST,
        },
        getPath: (): string => `/api/v1/tasks`,
      },
      taskId: {
        meta: {
          description: "Specific tasks updation API",
          name: ":taskId",
          path: "/api/v1/tasks/:taskId",
        },
        data: {
          method: {
            PUT: METHOD.PUT,
            PATCH: METHOD.PATCH,
          },
          getPath: (taskId: string): string => `/api/v1/tasks/${taskId}`,
        },
      },
      taskIds: {
        meta: {
          description: "Multiple tasks deletion API",
          name: ":taskIds",
          path: "/api/v1/tasks/:taskIds",
        },
        data: {
          method: {
            DELETE: METHOD.DELETE,
          },
          getPath: (taskIds: string[]): string => `/api/v1/tasks/${taskIds}`,
        },
      },
    },
  },
};
