let comp = ReasonReact.statelessComponent("song");

type song = {
  title: string,
  artist: string,
  url: string,
};

let make = (~song: song, _children) => {
  ...comp,
  render: _self =>
    <div className="card">
      <div> (ReasonReact.string("Title: " ++ song.title)) </div>
      <div> (ReasonReact.string("Artist: " ++ song.artist)) </div>
      <div> (ReasonReact.string("URL: " ++ song.url)) </div>
      <Player
        playing=true
        progressInterval=2000
        onReady=(() => Js.log("READY"))
        onPlay=(() => Js.log("PLAY"))
        onPause=(() => Js.log("PAUSE"))
        onProgress=(p => Js.log2("PROGRESS: ", p))
        onSeek=(t => Js.log2("SEEK: ", t)) /* onSeek not called-back */
        onDuration=(t => Js.log2("DURATION: ", t))
      />
    </div>,
};

module Demo = {
  let comp = ReasonReact.statelessComponent("demo");
  let song = {
    title: "Young and Beautiful Love",
    artist: "Ashley D'Souza",
    url: "abcde",
  };
  let make = _children => {
    ...comp,
    render: _self => ReasonReact.element(make(~song, [||])),
  };
};