export const MEDIA_BY_ID_QUERY = (id) => `
{
  media(id:"${id.toString()}") {
    id,
    owner {
      id
    },
    creator {
      id
    },
    contentURI,
    metadataURI,
    createdAtTimestamp
    currentAsk {
      currency {
        symbol
      }
      amount
    }
  }
}
`;
