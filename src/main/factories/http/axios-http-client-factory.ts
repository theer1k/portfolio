import { AxiosClient } from '@/infra/http';

export const makeAxiosClient = (): AxiosClient => new AxiosClient();
