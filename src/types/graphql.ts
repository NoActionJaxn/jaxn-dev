export interface HomePageResponse {
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

interface SocialNetworkNode {
  id: string;
  connectionUrl: string;
  fontAwesomeIcon: string;
  label: string;
}

export interface SocialNetworksResponse {
  allSocialNetworks: {
    edges: {
      node: SocialNetworkNode;
    }[];
  };
}