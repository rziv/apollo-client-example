import { Query } from "react-apollo";
import gql from "graphql-tag";
import React from "react";

const Address = () => (
  <Query
    query={gql`
      {
        citizen(id: 1) {
          address {
            city
            street
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      const { address } = data.citizen;

      return (
        <div>
          <br />
          <span className="title">כתובת</span>
          <div>
            <span>{address.city}</span>
            <span>, רחוב {address.street}</span>
          </div>
        </div>
      );
    }}
  </Query>
);
export default Address;
