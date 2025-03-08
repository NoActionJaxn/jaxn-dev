export interface HomePageRequest {
  Index: {
    actionButtonLabel: string;
    actionButtonUrl: string;
    callToAction: string;
    headline: string;
    id: string;
    tagline: string;
    _meta: {
      id: string;
      createdAt?: string;
      updatedAt?: string;
      typeName?: string;
    };
    content: {
      json: JSON;
    };
    image: {
      id: string;
      src: string;
      title: string;
      height: number;
      width: number;
    };
  }
};