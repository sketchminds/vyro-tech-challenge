import { gql } from '@apollo/client';

export const mockedVehicles = gql`
  query GetStockedVehicle {
		stocked_vehicles(where: { is_listed: { _eq: true } }, limit: 6) {
    name
    condition
    media
    is_sold
  }
}
`;