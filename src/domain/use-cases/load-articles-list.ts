export interface LoadArticlesList {
  loadAll: () => Promise<LoadArticlesList.Model[]>;
}

export namespace LoadArticlesList {
  export type Model = {
    text: string;
  };
}
