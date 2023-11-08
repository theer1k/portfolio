import { RemoteLoadArticlesList } from '@/data/use-cases';
import type { LoadArticlesList } from '@/domain/use-cases';

import { makeApiUrl, makeAxiosClient } from '../http';

export const makeRemoteLoadArticlesList = (): LoadArticlesList =>
  new RemoteLoadArticlesList(makeApiUrl('/articles'), makeAxiosClient());
