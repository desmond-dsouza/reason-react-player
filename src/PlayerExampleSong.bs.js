// Generated by BUCKLESCRIPT VERSION 4.0.2, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Player$ReReactPlayer = require("./Player.bs.js");

var comp = ReasonReact.reducerComponent("song");

function make(song, _) {
  return /* record */[
          /* debugName */comp[/* debugName */0],
          /* reactClassInternal */comp[/* reactClassInternal */1],
          /* handedOffState */comp[/* handedOffState */2],
          /* willReceiveProps */comp[/* willReceiveProps */3],
          /* didMount */comp[/* didMount */4],
          /* didUpdate */comp[/* didUpdate */5],
          /* willUnmount */comp[/* willUnmount */6],
          /* willUpdate */comp[/* willUpdate */7],
          /* shouldUpdate */comp[/* shouldUpdate */8],
          /* render */(function (self) {
              return React.createElement("div", {
                          className: "card"
                        }, React.createElement("div", undefined, "Title: " + song[/* title */0]), React.createElement("div", undefined, "Artist: " + song[/* artist */1]), React.createElement("div", undefined, "URL: " + song[/* url */2]), React.createElement("div", undefined, "Positon: " + Pervasives.string_of_float(self[/* state */1][/* position */1])), ReasonReact.element(undefined, undefined, Player$ReReactPlayer.make(undefined, true, 2000, (function () {
                                    console.log("READY");
                                    return /* () */0;
                                  }), (function () {
                                    console.log("PLAY");
                                    return /* () */0;
                                  }), (function () {
                                    console.log("PAUSE");
                                    return /* () */0;
                                  }), (function (p) {
                                    console.log("PROGRESS: ", p);
                                    return Curry._1(self[/* send */3], /* SetPosition */[p]);
                                  }), (function (t) {
                                    console.log("SEEK: ", t);
                                    return /* () */0;
                                  }), (function (t) {
                                    console.log("DURATION: ", t);
                                    return /* () */0;
                                  }), /* array */[])));
            }),
          /* initialState */(function () {
              return /* record */[
                      /* song */song,
                      /* position */0.0
                    ];
            }),
          /* retainedProps */comp[/* retainedProps */11],
          /* reducer */(function (param, state) {
              return /* Update */Block.__(0, [/* record */[
                          /* song */state[/* song */0],
                          /* position */param[0]
                        ]]);
            }),
          /* subscriptions */comp[/* subscriptions */13],
          /* jsElementWrapped */comp[/* jsElementWrapped */14]
        ];
}

var comp$1 = ReasonReact.statelessComponent("demo");

var song = /* record */[
  /* title */"Young and Beautiful Love",
  /* artist */"Ashley D'Souza",
  /* url */"abcde"
];

function make$1() {
  return /* record */[
          /* debugName */comp$1[/* debugName */0],
          /* reactClassInternal */comp$1[/* reactClassInternal */1],
          /* handedOffState */comp$1[/* handedOffState */2],
          /* willReceiveProps */comp$1[/* willReceiveProps */3],
          /* didMount */comp$1[/* didMount */4],
          /* didUpdate */comp$1[/* didUpdate */5],
          /* willUnmount */comp$1[/* willUnmount */6],
          /* willUpdate */comp$1[/* willUpdate */7],
          /* shouldUpdate */comp$1[/* shouldUpdate */8],
          /* render */(function () {
              return ReasonReact.element(undefined, undefined, make(song, /* array */[]));
            }),
          /* initialState */comp$1[/* initialState */10],
          /* retainedProps */comp$1[/* retainedProps */11],
          /* reducer */comp$1[/* reducer */12],
          /* subscriptions */comp$1[/* subscriptions */13],
          /* jsElementWrapped */comp$1[/* jsElementWrapped */14]
        ];
}

var Demo = /* module */[
  /* comp */comp$1,
  /* song */song,
  /* make */make$1
];

exports.comp = comp;
exports.make = make;
exports.Demo = Demo;
/* comp Not a pure module */
