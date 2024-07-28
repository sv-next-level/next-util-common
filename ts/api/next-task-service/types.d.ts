import { METHOD } from "@/common/api/method";

export type para = {
  para: string;
};

export type param = {
  [METHOD.GET]?: {
    page: string;
  };
  [METHOD.POST]?: para;
};
