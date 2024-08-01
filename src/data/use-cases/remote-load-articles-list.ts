import { HttpStatusCode } from 'axios';

import { UnexpectedError } from '@/domain/errors';
import type { LoadArticlesList } from '@/domain/use-cases';

import type { RemoteArticleModel } from '../models';
import type { HttpClient } from '../protocols/http';

export class RemoteLoadArticlesList implements LoadArticlesList {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadArticlesList.Model[]>,
  ) {}

  async loadAll(): Promise<LoadArticlesList.Model[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
    });

    const remoteArticles = httpResponse.body ?? [];

    switch (httpResponse.statusCode) {
      case HttpStatusCode.Ok:
        return remoteArticles;
      case HttpStatusCode.NoContent:
        return [];
      default:
        throw new UnexpectedError();
    }
  }
}

export namespace RemoteLoadArticlesList {
  export type Model = RemoteArticleModel;
}
