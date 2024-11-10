import { gql } from '@apollo/client';

export const GET_PARKING_LOTS = gql`
  query getAllParkingLots($limit: Int, $offset: Int) {
    getAllParkingLots(limit: $limit, offset: $offset) {
      id
      image
      live_date
      name
      size
      address
    }
  }
`;
