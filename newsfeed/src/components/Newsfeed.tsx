import * as React from "react";
import Story from "./Story";
import { graphql } from "relay-runtime";
import type { NewsfeedQuery as NewsfeedQueryType } from "./__generated__/NewsfeedQuery.graphql";
import { useLazyLoadQuery } from "react-relay";

// 1.1. Basic Flow: Declare the query, we can also reuse Fragment in queries
const NewsfeedQuery = graphql`
  query NewsfeedQuery {
    topStories {
      id
      ...StoryFragment
    }
  }
`;

export default function Newsfeed() {
  // 1.2. Basic Flow: Query the data with `useLazyLoadQuery`
  const data = useLazyLoadQuery<NewsfeedQueryType>(NewsfeedQuery, {});

  // 1.3. Basic Flow: As we declared `StoryFragment` in the query, we know that what contains `StoryFragment` - `data.topStories` has all the information (NOT DATA) we need...
  return data.topStories.map((story) => <Story key={story.id} story={story} />);
}
