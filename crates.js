// =====================================================================
//  CRATE DIG — SETTINGS + CRATE POOL
//  This is the only file you need to touch to change the game.
//  Edit it right on github.com (pencil icon), commit, wait ~1 min,
//  then refresh the OBS browser source.
// =====================================================================

window.CRATE_DIG = {

  // Twitch channel whose chat the game listens to
  channel: "grexbeatz",

  // Extra people (besides the broadcaster and mods) allowed to run !crate commands
  admins: ["nobeatsattached"],

  // How many crates sit on the board each round (5–9 looks best)
  cratesPerRound: 7,

  // Seconds entries stay open after "!crate open" (override: "!crate open 60")
  openSeconds: 45,

  // If fewer than this many chatters join, HOUSE marbles fill the gap
  // so the dig still happens with a quiet chat
  minMarbles: 3,

  // Hard cap on marbles per round
  maxMarbles: 80,

  // Seconds the big result card stays up before shrinking to the corner badge
  resultSeconds: 12,

  // Peg hits play notes (minor pentatonic). Set false to mute the board.
  sound: true,

  // Points: every marble that drops gets digPoints, the marble that picks the crate gets pickPoints
  digPoints: 1,
  pickPoints: 10,

  // ------------------------------------------------------------------
  //  THE CRATE POOL
  //  Each round pulls `cratesPerRound` random crates from this list.
  //  Keep them era-accurate. Add, delete, or rewrite freely.
  //  name = big label, era = small label under it
  // ------------------------------------------------------------------
  pool: [
    { name: "SOUL",            era: "70s" },
    { name: "MOTOWN",          era: "60s" },
    { name: "FUNK",            era: "70s" },
    { name: "DISCO",           era: "70s" },
    { name: "BOSSA NOVA",      era: "60s" },
    { name: "CITY POP",        era: "80s" },
    { name: "ITALO DISCO",     era: "80s" },
    { name: "QUIET STORM",     era: "80s" },
    { name: "R&B",             era: "90s" },
    { name: "PSYCH ROCK",      era: "70s" },
    { name: "TURKISH PSYCH",   era: "70s" },
    { name: "AFROBEAT",        era: "70s" },
    { name: "ETHIO-JAZZ",      era: "70s" },
    { name: "BOLLYWOOD",       era: "70s" },
    { name: "LIBRARY MUSIC",   era: "70s" },
    { name: "SPAGHETTI WESTERN", era: "60s" },
    { name: "SPIRITUAL JAZZ",  era: "70s" },
    { name: "HARD BOP",        era: "50s" },
    { name: "DOO-WOP",         era: "50s" },
    { name: "GOSPEL",          era: "60s" },
    { name: "ROOTS REGGAE",    era: "70s" },
    { name: "DUB",             era: "70s" },
    { name: "CUMBIA",          era: "70s" },
    { name: "KRAUTROCK",       era: "70s" },
    { name: "NEW WAVE",        era: "80s" },
    { name: "SYNTH FUNK",      era: "80s" },
    { name: "DETROIT TECHNO",  era: "80s" },
    { name: "JUNGLE",          era: "90s" },
    { name: "TRIP-HOP",        era: "90s" },
    { name: "SURF ROCK",       era: "60s" },
    { name: "YACHT ROCK",      era: "70s" },
    { name: "BLAXPLOITATION",  era: "70s" },
    { name: "MPB",             era: "70s" },
    { name: "SAMBA",           era: "60s" },
    { name: "HIGHLIFE",        era: "70s" },
    { name: "VAPORWAVE",       era: "10s" }
  ]
};
