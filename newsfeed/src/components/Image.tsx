import * as React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "react-relay";
import type { ImageFragment$key } from "./__generated__/ImageFragment.graphql";

const ImageFragment = graphql`
  fragment ImageFragment on Image {
    url
  }
`;

type Props = {
  image: ImageFragment$key;
  width?: number;
  height?: number;
  className?: string;
};

export default function Image({
  image,
  width,
  height,
  className,
}: Props): React.ReactElement {
  if (image == null) {
    return null;
  }

  const data = useFragment(ImageFragment, image);

  return (
    <img
      key={data.url}
      src={data.url}
      width={width}
      height={height}
      className={className}
    />
  );
}
