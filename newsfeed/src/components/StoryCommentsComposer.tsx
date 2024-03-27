import * as React from "react";
import { graphql } from "relay-runtime";
import { useFragment, useMutation, ConnectionHandler } from "react-relay";
import type { StoryCommentsComposerFragment$key } from "./__generated__/StoryCommentsComposerFragment.graphql";

const { useState } = React;

export type Props = {
  story: StoryCommentsComposerFragment$key;
};

const StoryCommentsComposerFragment = graphql`
  fragment StoryCommentsComposerFragment on Story {
    id
  }
`;

const StoryCommentsComposerPostMutation = graphql`
  mutation StoryCommentsComposerPostMutation(
    $id: ID!
    $text: String!
    $connections: [ID!]!
  ) {
    postStoryComment(id: $id, text: $text) {
      commentEdge @appendEdge(connections: $connections) {
        node {
          id
          text
        }
      }
    }
  }
`;

export default function StoryCommentsComposer({
  story,
}: {
  story: StoryCommentsComposerFragment$key;
}) {
  const data = useFragment(StoryCommentsComposerFragment, story);
  const [commit] = useMutation(StoryCommentsComposerPostMutation);
  const [text, setText] = useState("");

  function onPost() {
    setText(""); // Reset the UI

    const connectionID = ConnectionHandler.getConnectionID(
      data.id,
      "StoryCommentsSectionFragment_comments"
    );

    commit({
      variables: {
        id: data.id,
        text,
        connections: [connectionID],
      },
    });
  }
  return (
    <div className="commentsComposer">
      <TextComposer text={text} onChange={setText} onReturn={onPost} />
      <PostButton onClick={onPost} />
    </div>
  );
}

function TextComposer({
  text,
  onChange,
  onReturn,
}: {
  text: string;
  onChange: (newValue: string) => void;
  onReturn: () => void;
}) {
  return (
    <input
      value={text}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          onReturn();
        }
      }}
    />
  );
}

function PostButton({ onClick }: { onClick: () => void }) {
  return <button onClick={onClick}>Post</button>;
}
