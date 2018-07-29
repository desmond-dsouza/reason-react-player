// Generated by BUCKLESCRIPT VERSION 4.0.2, PLEASE EDIT WITH CARE
'use strict';

var ReasonReact = require("reason-react/src/ReasonReact.js");
var ReactPlayer = require("react-player");

function make($staropt$star, $staropt$star$1, $staropt$star$2, $staropt$star$3, $staropt$star$4, $staropt$star$5, $staropt$star$6, $staropt$star$7, $staropt$star$8, _) {
  var url = $staropt$star !== undefined ? $staropt$star : "https://soundcloud.com/miami-nights-1984/accelerated";
  var playing = $staropt$star$1 !== undefined ? $staropt$star$1 : false;
  var progressInterval = $staropt$star$2 !== undefined ? $staropt$star$2 : 500;
  var onReady = $staropt$star$3 !== undefined ? $staropt$star$3 : (function () {
        return /* () */0;
      });
  var onPlay = $staropt$star$4 !== undefined ? $staropt$star$4 : (function () {
        return /* () */0;
      });
  var onPause = $staropt$star$5 !== undefined ? $staropt$star$5 : (function () {
        return /* () */0;
      });
  var onProgress = $staropt$star$6 !== undefined ? $staropt$star$6 : (function () {
        return /* () */0;
      });
  var onSeek = $staropt$star$7 !== undefined ? $staropt$star$7 : (function () {
        return /* () */0;
      });
  var onDuration = $staropt$star$8 !== undefined ? $staropt$star$8 : (function () {
        return /* () */0;
      });
  return ReasonReact.wrapJsForReason(ReactPlayer.default, {
              url: url,
              playing: playing,
              progressInterval: progressInterval,
              onReady: onReady,
              onPlay: onPlay,
              onPause: onPause,
              onProgress: onProgress,
              onSeek: onSeek,
              onDuration: onDuration
            }, /* () */0);
}

exports.make = make;
/* ReasonReact Not a pure module */