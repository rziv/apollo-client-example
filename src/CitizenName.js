import { Query } from "react-apollo";
import gql from "graphql-tag";
import React from "react";

const CitizenName = () => (
  <Query
    query={gql`
      {
        citizen(id: 1) {
          firstName
          lastName
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      const { firstName, lastName } = data.citizen;

      return (
        <div>
          <span className="title">שם המבקש</span>
          <div>
            <span>שם פרטי:</span>
            <span>{firstName}</span>
          </div>
          <div>
            <span>שם משפחה:</span>
            <span>{lastName}</span>
          </div>
        </div>
      );
    }}
  </Query>
);
export default CitizenName;
