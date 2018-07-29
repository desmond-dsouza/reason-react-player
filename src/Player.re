[@bs.module "react-player"] [@bs.val]
external playerCls : ReasonReact.reactClass = "default";

/* Js.log(playerCls); shows { [Function: ReactPlayer] + many fields } */

[@bs.abstract]
type progress = {
  played: float,
  playedSeconds: float,
  loaded: float,
  loadedSeconds: float,
};

type milliSecs = int;
type secs = int;

let make =
    (
      ~url: string="https://soundcloud.com/miami-nights-1984/accelerated",
      ~playing: bool=false,
      ~progressInterval: milliSecs=500,
      ~onReady: unit => unit=ignore,
      ~onPlay: unit => unit=ignore,
      ~onPause: unit => unit=ignore,
      ~onProgress: progress => unit=ignore,
      ~onSeek: secs => unit=ignore,
      ~onDuration: secs => unit=ignore,
      _children,
    ) =>
  ReasonReact.wrapJsForReason(
    ~reactClass=playerCls,
    ~props={
      "url": url,
      "playing": playing,
      "progressInterval": progressInterval,
      "onReady": onReady,
      "onPlay": onPlay,
      "onPause": onPause,
      "onProgress": onProgress,
      "onSeek": onSeek,
      "onDuration": onDuration,
    },
    (),
  );