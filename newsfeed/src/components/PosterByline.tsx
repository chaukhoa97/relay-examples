import * as React from "react";
import Image from "./Image";
import Hovercard from "./Hovercard";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import PosterDetailsHovercardContents from "./PosterDetailsHovercardContents";
import type { PosterBylineFragment$key } from "./__generated__/PosterBylineFragment.graphql";

const { useRef } = React;

const PosterBylineFragment = graphql`
  fragment PosterBylineFragment on Actor {
    id
    name
    profilePicture {
      ...ImageFragment
    }
  }
`;

export default function PosterByline({
  poster,
}: {
  poster: PosterBylineFragment$key;
}) {
  const hoverRef = useRef(null);
  const data = useFragment(PosterBylineFragment, poster);

  return (
    <div className="byline" ref={hoverRef}>
      <Image
        image={data.profilePicture}
        width={60}
        height={60}
        className="byline__image"
      />
      <div className="byline__name">{data.name}</div>
      <Hovercard targetRef={hoverRef}>
        <PosterDetailsHovercardContents posterID={data.id} />
      </Hovercard>
    </div>
  );
}
