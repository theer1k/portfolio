import type { AxiosInstance, AxiosResponse } from 'axios';
import axios from 'axios';

import type {
  HttpClient,
  HttpRequest,
  HttpResponse,
} from '@/data/protocols/http';

export class AxiosClient implements HttpClient {
  axiosStaticInstance!: AxiosInstance;

  constructor() {
    this.axiosStaticInstance = axios.create({
      baseURL: ``,
    });
  }

  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;
    try {
      axiosResponse = await this.axiosStaticInstance.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers,
      });
    } catch (error: any) {
      axiosResponse = error.response;
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  }
}
