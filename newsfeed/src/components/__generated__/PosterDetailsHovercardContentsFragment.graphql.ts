/**
 * @generated SignedSource<<98f74b4eb8c39378567b8796317afc09>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type OrganizationKind = "COMMERCIAL" | "GOVERNMENT" | "JOURNALISTIC" | "NONPROFIT" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type PosterDetailsHovercardContentsFragment$data = {
  readonly joined: string | null;
  readonly location?: {
    readonly name: string;
  } | null;
  readonly name: string | null;
  readonly organizationKind?: OrganizationKind | null;
  readonly profilePicture: {
    readonly " $fragmentSpreads": FragmentRefs<"ImageFragment">;
  } | null;
  readonly " $fragmentType": "PosterDetailsHovercardContentsFragment";
};
export type PosterDetailsHovercardContentsFragment$key = {
  readonly " $data"?: PosterDetailsHovercardContentsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PosterDetailsHovercardContentsFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PosterDetailsHovercardContentsFragment",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "joined",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "profilePicture",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ImageFragment"
        }
      ],
      "storageKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "organizationKind",
          "storageKey": null
        }
      ],
      "type": "Organization",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Location",
          "kind": "LinkedField",
          "name": "location",
          "plural": false,
          "selections": [
            (v0/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "type": "Person",
      "abstractKey": null
    }
  ],
  "type": "Actor",
  "abstractKey": "__isActor"
};
})();

(node as any).hash = "3931670086f3d7172015a2128fc2cb29";

export default node;
