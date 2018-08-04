type song = {
  title: string,
  artist: string,
  url: string,
};

type state = {
  song,
  position: Player.secs,
};

type action =
  | SetPosition(Player.secs);

let comp = ReasonReact.reducerComponent("song");

let make = (~song: song, _children) => {
  ...comp,
  initialState: () => {song, position: 0.0},
  reducer: (SetPosition(p), state) =>
    ReasonReact.Update({...state, position: p}),
  render: self =>
    <div className="card">
      <div> (ReasonReact.string("Title: " ++ song.title)) </div>
      <div> (ReasonReact.string("Artist: " ++ song.artist)) </div>
      <div> (ReasonReact.string("URL: " ++ song.url)) </div>
      <div>
        (
          ReasonReact.string(
            "Positon: " ++ string_of_float(self.ReasonReact.state.position),
          )
        )
      </div>
      <Player
        playing=true
        progressInterval=2000
        onReady=(() => Js.log("READY"))
        onPlay=(() => Js.log("PLAY"))
        onPause=(() => Js.log("PAUSE"))
        onProgress=(
          (p: Player.secs) => {
            Js.log2("PROGRESS: ", p);
            self.send(SetPosition(p));
          }
        )
        onSeek=(t => Js.log2("SEEK: ", t)) /* onSeek not called-back */
        onDuration=(t => Js.log2("DURATION: ", t))
      />
    </div>,
};

module Demo = {
  let comp = ReasonReact.statelessComponent("demo");
  let song: song = {
    title: "Young and Beautiful Love",
    artist: "Ashley D'Souza",
    url: "abcde",
  };
  let make = _children => {
    ...comp,
    render: _self => ReasonReact.element(make(~song, [||])),
  };
};