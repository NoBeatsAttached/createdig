// =====================================================================
//  ASSEMBLY LINE — SETTINGS + STAGES
//  This is the only file you need to touch to change the game.
//  Edit it on github.com (pencil icon), commit, wait ~1 min, refresh OBS.
// =====================================================================

window.ASSEMBLY = {

  channel: "grexbeatz",
  admins: ["nobeatsattached"],

  slotsPerStage: 7,      // slots on the board each stage (pulled at random if a stage has more)
  openSeconds: 30,       // entry window per stage before it drops on its own
  minMarbles: 3,         // HOUSE ball bearings fill in below this
  maxMarbles: 80,
  resultSeconds: 9,      // how long the big label stays up after each stage
  sound: true,
  digPoints: 1,          // every worker, every stage
  pickPoints: 10,        // the foreman who called the stage

  // ------------------------------------------------------------------
  //  THE STAGES — run top to bottom, one drop each.
  //  {COUNTRY} and {SHOW} get swapped for a random pick from the lists below.
  // ------------------------------------------------------------------
  stages: [
    { name: "TEMPO", slots: [
      "70 BPM", "85 BPM", "90 BPM", "95 BPM", "128 BPM", "140 BPM", "150 BPM", "160 BPM", "174 BPM", "CHAT PICKS THE BPM"
    ]},
    { name: "STYLE", slots: [
      "BOOM BAP", "DRILL", "JERSEY CLUB", "DETROIT HOUSE", "GHETTOTECH", "TRAP", "DUBSTEP",
      "UK GARAGE", "DRUM & BASS", "LO-FI", "PHONK", "R&B", "FOOTWORK"
    ]},
    { name: "SAMPLE", slots: [
      "TODAY'S #1 HIT", "#1 IN {COUNTRY}", "#1 TRENDING ON YOUTUBE", "TOP TIKTOK SOUND",
      "#1 THE DAY THE FOREMAN WAS BORN", "THE LAST SONG THE FOREMAN PLAYED", "{SHOW} THEME SONG", "PRODUCER'S CHOICE"
    ]},
    { name: "DRUMS", slots: [
      "DRUMS FROM THE SAMPLE", "ONLY ONE HAT", "NO SNARE", "TRIPLET HATS", "HALF-TIME DRUMS",
      "FINGER-DRUM IT", "NO CLAPS", "SWING IT HARD", "NO 808"
    ]},
    { name: "TWIST", slots: [
      "BEAT SWITCH", "REVERSE THE INTRO", "ADD A COWBELL", "KEY CHANGE", "DELETE A TRACK",
      "TAPE STOP OUTRO", "ADD A SIREN", "SAFE"
    ]}
  ],

  rolls: {
    COUNTRY: ["JAPAN", "BRAZIL", "NIGERIA", "SOUTH KOREA", "FRANCE", "MEXICO", "INDIA", "TURKEY",
              "COLOMBIA", "SOUTH AFRICA", "GERMANY", "PHILIPPINES", "EGYPT", "JAMAICA", "UK"],
    SHOW:    ["SPONGEBOB", "SEINFELD", "THE SIMPSONS", "FRESH PRINCE", "POKEMON", "SUPER MARIO",
              "ZELDA", "SONIC", "DRAGON BALL Z", "SCOOBY-DOO", "LOONEY TUNES", "FAMILY GUY", "TETRIS"]
  }
};
