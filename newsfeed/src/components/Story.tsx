import * as React from "react";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import Card from "./Card";
import Heading from "./Heading";
import Image from "./Image";
import PosterByline from "./PosterByline";
import StoryCommentsSection from "./StoryCommentsSection";
import StorySummary from "./StorySummary";
import StoryLikeButton from "./StoryLikeButton";
import type { StoryFragment$key } from "./__generated__/StoryFragment.graphql";

// 1.6. Basic Flow: We specify the data requirements of a component via `fragment`
// Relay only allows components to access data they specifically ask for in GraphQL fragments, and nothing more.
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
    ...StoryLikeButtonFragment
    ...StoryCommentsSectionFragment
  }
`;

// 1.5. Basic Flow: We can declare the type of that `story` as the generated `StoryFragment$key`
export default function Story({ story }: { story: StoryFragment$key }) {
  // 1.4. Basic Flow: ...to extract the data with `usefragment`
  const data = useFragment(StoryFragment, story);

  return (
    <Card>
      {/* 1.3b. Basic Flow: As we declared `StoryLikeButtonFragment` in `StoryFragment`, we know that what contains `StoryLikeButtonFragment` - `data` has all the information (NOT DATA) we need... */}
      <StoryLikeButton story={data} />
      <StoryCommentsSection story={data} />
      <PosterByline poster={data.poster} />
      <Heading>{data.title}</Heading>
      <Image image={data.thumbnail} width={400} height={400} />
      <StorySummary summary={data.summary} />
    </Card>
  );
}
