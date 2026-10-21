// =====================================================================
//  CRATE DIG — SETTINGS + MOVE LIST
//  This is the only file you need to touch to change the game.
//  Edit it right on github.com (pencil icon), commit, wait ~1 min,
//  then refresh the OBS browser source.
// =====================================================================

window.CRATE_DIG = {

  // Twitch channel whose chat the game listens to
  channel: "grexbeatz",

  // Extra people (besides the broadcaster and mods) allowed to run !crate commands
  admins: ["nobeatsattached"],

  // How many slots sit on the board each round (5–9 looks best)
  cratesPerRound: 7,

  // Seconds entries stay open after "!crate open" (override: "!crate open 60")
  openSeconds: 45,

  // If fewer than this many chatters join, HOUSE ball bearings fill the gap
  // so the drop still happens with a quiet chat
  minMarbles: 3,

  // Hard cap on marbles per round
  maxMarbles: 80,

  // Seconds the big result tape stays up before shrinking to the corner
  resultSeconds: 10,

  // Peg hits play notes (minor pentatonic). Set false to mute the board.
  sound: true,

  // Points: every marble that drops gets digPoints, the marble that calls the move gets pickPoints
  digPoints: 1,
  pickPoints: 10,

  // One SAFE slot is always on the board (random spot). Delete this line to turn it off.
  safe: { name: "SAFE", tag: "NO CHANGE" },

  // ------------------------------------------------------------------
  //  THE MOVE LIST
  //  Each round pulls random moves from this list onto the board.
  //  name = what goes on the tape (keep it short)
  //  tag  = small label above the tape
  //  Add, delete, or rewrite freely.
  // ------------------------------------------------------------------
  pool: [
    // drums
    { name: "HALF-TIME IT",        tag: "DRUMS" },
    { name: "DOUBLE-TIME HATS",    tag: "DRUMS" },
    { name: "MUTE DRUMS 8 BARS",   tag: "DRUMS" },
    { name: "SWAP THE SNARE",      tag: "DRUMS" },
    { name: "ADD A SNARE ROLL",    tag: "DRUMS" },
    { name: "NO KICK 4 BARS",      tag: "DRUMS" },
    { name: "SWAP THE KICK",       tag: "DRUMS" },

    // sample
    { name: "PITCH IT DOWN 3",     tag: "SAMPLE" },
    { name: "PITCH IT UP 5",       tag: "SAMPLE" },
    { name: "REVERSE A CHOP",      tag: "SAMPLE" },
    { name: "ADD A VOCAL CHOP",    tag: "SAMPLE" },
    { name: "TAPE STOP IT",        tag: "SAMPLE" },
    { name: "CHOP IT AGAIN",       tag: "SAMPLE" },
    { name: "FILTER IT DOWN",      tag: "SAMPLE" },

    // 808 / bass
    { name: "808 SLIDE",           tag: "808" },
    { name: "808 UP AN OCTAVE",    tag: "808" },
    { name: "DISTORT THE 808",     tag: "808" },
    { name: "NEW BASSLINE",        tag: "808" },

    // fx
    { name: "THROW A DELAY",       tag: "FX" },
    { name: "REVERB WASH",         tag: "FX" },
    { name: "SIDECHAIN IT",        tag: "FX" },
    { name: "BITCRUSH IT",         tag: "FX" },

    // wild
    { name: "BEAT SWITCH",         tag: "WILD" },
    { name: "CHAT PICKS THE BPM",  tag: "WILD" },
    { name: "ADD A COWBELL",       tag: "WILD" },
    { name: "ADD A SIREN",         tag: "WILD" },
    { name: "DELETE A TRACK",      tag: "WILD" }
  ]
};
