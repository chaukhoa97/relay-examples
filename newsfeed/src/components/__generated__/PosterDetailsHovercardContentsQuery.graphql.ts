/**
 * @generated SignedSource<<c2a0c84b783fc42a1cadac53c2f84f18>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PosterDetailsHovercardContentsQuery$variables = {
  posterID: string;
};
export type PosterDetailsHovercardContentsQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"PosterDetailsHovercardContentsFragment">;
  } | null;
};
export type PosterDetailsHovercardContentsQuery = {
  response: PosterDetailsHovercardContentsQuery$data;
  variables: PosterDetailsHovercardContentsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "posterID"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "posterID"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PosterDetailsHovercardContentsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "PosterDetailsHovercardContentsFragment"
              }
            ],
            "type": "Actor",
            "abstractKey": "__isActor"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PosterDetailsHovercardContentsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/),
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
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "url",
                    "storageKey": null
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
                      (v2/*: any*/),
                      (v3/*: any*/)
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
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "494229068e52bf7607ca0f3b92b7a2b4",
    "id": null,
    "metadata": {},
    "name": "PosterDetailsHovercardContentsQuery",
    "operationKind": "query",
    "text": "query PosterDetailsHovercardContentsQuery(\n  $posterID: ID!\n) {\n  node(id: $posterID) {\n    __typename\n    ... on Actor {\n      __isActor: __typename\n      ...PosterDetailsHovercardContentsFragment\n    }\n    id\n  }\n}\n\nfragment ImageFragment on Image {\n  url\n}\n\nfragment PosterDetailsHovercardContentsFragment on Actor {\n  __isActor: __typename\n  name\n  joined\n  profilePicture {\n    ...ImageFragment\n  }\n  ... on Organization {\n    organizationKind\n  }\n  ... on Person {\n    location {\n      name\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "3ec1d7e21a8c11cb2cf3b24675845ed7";

export default node;
