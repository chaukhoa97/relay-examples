import * as React from "react";
import { useFragment, useMutation } from "react-relay";
import { graphql } from "relay-runtime";
import Card from "./Card";
import Heading from "./Heading";
import Image from "./Image";
import PosterByline from "./PosterByline";
import StoryCommentsSection from "./StoryCommentsSection";
import StorySummary from "./StorySummary";
import StoryLikeButton from "./StoryLikeButton";
import type { StoryFragment$key } from "./__generated__/StoryFragment.graphql";

const StoryFragment = graphql`
  fragment StoryFragment on Story {
    title
    summary
    poster {
      ...PosterBylineFragment
    }
    thumbnail {
      ...ImageFragment
    }
    ...StoryCommentsSectionFragment
    ...StoryLikeButtonFragment
  }
`;

export default function Story({ story }: { story: StoryFragment$key }) {
  // Because `StoryFragment` based on `Story` type, we'll pass the `story` prop to `useFragment` hook
  const data = useFragment(StoryFragment, story);

  return (
    <Card>
      <PosterByline poster={data.poster} />
      <Heading>{data.title}</Heading>
      <Image image={data.thumbnail} width={400} height={400} />
      <StorySummary summary={data.summary} />
      <StoryLikeButton story={data} />
      <StoryCommentsSection story={data} />
    </Card>
  );
}
