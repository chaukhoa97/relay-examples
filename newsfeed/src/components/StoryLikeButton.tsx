import * as React from "react";
import { graphql } from "relay-runtime";
import { useFragment, useMutation } from "react-relay";
import type { StoryLikeButtonFragment$key } from "./__generated__/StoryLikeButtonFragment.graphql";

const StoryLikeButtonFragment = graphql`
  fragment StoryLikeButtonFragment on Story {
    id
    likeCount
    doesViewerLike
  }
`;

const LikeButtonMutation = graphql`
  mutation StoryLikeButtonLikeMutation($id: ID!, $doesLike: Boolean!) {
    likeStory(id: $id, doesLike: $doesLike) {
      story {
        ...StoryLikeButtonFragment
      }
    }
  }
`;

export default function StoryLikeButton({
  story,
}: {
  story: StoryLikeButtonFragment$key;
}) {
  // 1.4b. Basic Flow: ...to extract the data again with `usefragment`
  const data = useFragment(StoryLikeButtonFragment, story);

  const [commit, isFlight] = useMutation(LikeButtonMutation);
  function handleLikeButton() {
    commit({
      variables: {
        id: data.id,
        doesLike: !data.doesViewerLike,
      },
    });
  }

  return (
    <div className="likeButton">
      <div className="likeButton__count">{data.likeCount} likes</div>;
      <LikeButton
        doesViewerLike={data.doesViewerLike}
        onClick={handleLikeButton}
        disabled={isFlight}
      />
    </div>
  );
}

function LikeButton({
  doesViewerLike,
  onClick,
  disabled,
}: {
  doesViewerLike: boolean;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      className="likeButton__button"
      onClick={onClick}
      disabled={disabled}
    >
      <span
        className={
          doesViewerLike
            ? "likeButton__thumb__viewerLikes"
            : "likeButton__thumb__viewerDoesNotLike"
        }
      >
        👍
      </span>{" "}
      <span
        className={
          doesViewerLike
            ? "likeButton__label__viewerLikes"
            : "likeButton__label__viewerDoesNotLike"
        }
      >
        Like
      </span>
    </button>
  );
}
