import * as React from "react";
import { useLazyLoadQuery, useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import Image from "./Image";
import Timestamp from "./Timestamp";
import OrganizationKind from "./OrganizationKind";
import type { PosterDetailsHovercardContentsQuery as QueryType } from "./__generated__/PosterDetailsHovercardContentsQuery.graphql";
import type { PosterDetailsHovercardContentsFragment$key } from "./__generated__/PosterDetailsHovercardContentsFragment.graphql";

const PosterDetailsHovercardContentsFragment = graphql`
  fragment PosterDetailsHovercardContentsFragment on Actor {
    name
    joined
    profilePicture {
      ...ImageFragment
    }
    ... on Organization {
      organizationKind
    }
    ... on Person {
      location {
        name
      }
    }
  }
`;

export const PosterDetailsHovercardContentsQuery = graphql`
  query PosterDetailsHovercardContentsQuery($posterID: ID!) {
    node(id: $posterID) {
      ... on Actor {
        ...PosterDetailsHovercardContentsFragment
      }
    }
  }
`;

export default function PosterDetailsHovercardContents({
  posterID,
}: {
  posterID: string;
}) {
  // Although all of the data initially shown on a screen should be combined into one query, user interactions needing further information can be handled with secondary queries.
  const { node } = useLazyLoadQuery<QueryType>(
    PosterDetailsHovercardContentsQuery,
    { posterID }
  );

  const data = useFragment<PosterDetailsHovercardContentsFragment$key>(
    PosterDetailsHovercardContentsFragment,
    node
  );

  return (
    <div className="posterHovercard">
      <Image
        image={data.profilePicture}
        width={128}
        height={128}
        className="posterHovercard__image"
      />
      <div className="posterHovercard__name">{data.name}</div>
      <ul className="posterHovercard__details">
        <li>
          Joined <Timestamp time={data.joined} />
        </li>
        {data.location != null && <li>{data.location.name}</li>}
        {data.organizationKind != null && (
          <li>
            <OrganizationKind kind={data.organizationKind} />
          </li>
        )}
      </ul>
      <div className="posterHovercard__buttons">
        <button>Friend</button>
        <button>Message</button>
      </div>
    </div>
  );
}
