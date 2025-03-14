import { GraphQLClient, gql } from "graphql-request";
import type { HomePageResponse, SocialNetworksResponse } from "../types/graphql";

const client = new GraphQLClient(
  `https://cloud.caisy.io/api/v3/e/${import.meta.env.CAISY_PROJECT_ID}/graphql`,
  {
    headers: {
      'x-caisy-apikey': import.meta.env.CAISY_API_KEY
    }
  }
);

const graphql = gql;

export const homePageRequest = await client.request<HomePageResponse>(graphql`
	query HomePage {
		Index {
			actionButtonLabel
			actionButtonUrl
			callToAction
			headline
			id
			tagline
			_meta {
				id
			}
			content {
				json
			}
			image {
				id
				src
				title
				height
				width
			}
		}
	}
`);

export const socialNetworksRequest = await client.request<SocialNetworksResponse>(graphql`
  query SocialNetworksResponse {
    allSocialNetworks {
      edges {
        node {
          id
          connectionUrl
          fontAwesomeIcon
          label
        }
      }
    }
  }
`);
