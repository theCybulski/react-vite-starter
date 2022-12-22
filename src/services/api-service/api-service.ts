import { AxiosRequestConfig, AxiosResponse } from 'axios';
import humps from 'humps';

import { httpClient } from './http-client';
import { interpolateParams } from './utils/interpolate-params';

export interface ExtendedAxiosRequestConfig extends AxiosRequestConfig {
  pathParams?: object;
}

export const apiService = {
  request: <T = any>(
    url: string,
    config?: ExtendedAxiosRequestConfig,
  ): Promise<AxiosResponse<T>> => {
    const newConfig = { ...config };

    if (config?.pathParams && url) {
      newConfig.url = interpolateParams(url, config?.pathParams);
    }

    if (config?.params) {
      newConfig.params = humps.decamelizeKeys(config?.params);
    }

    if (config?.data) {
      newConfig.data = humps.decamelizeKeys(config?.data);
    }

    return httpClient({
      url,
      ...newConfig,
    });
  },
};
