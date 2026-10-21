# PR0CESS_LIVE // CRATE DIG

A chat-played marble game for G-REX's stream. Chat types `!dig` to load a marble into the hopper. When the gate opens, the marbles fall through the peg board into the channel slots, and the first marble to land picks a move G-REX has to make to the beat he's cooking, right now (HALF-TIME IT, 808 SLIDE, ADD A COWBELL...). There's one SAFE slot every round.

**Live:** https://nobeatsattached.github.io/createdig/

## Add it to OBS

1. Sources → **+** → **Browser**
2. URL: `https://nobeatsattached.github.io/createdig/`
3. Width **1920**, Height **1080**
4. Tick **Control audio via OBS** so the peg notes and the slap come through the mixer.
5. Untick **Shutdown source when not visible**. It stores the leaderboard, so leave it running.

The page reads chat anonymously. There's no login, token, or bot account.

## Commands

Viewers:
- `!dig`: load a marble (one per person per round)

Mods, the broadcaster, and anyone in `admins` in `crates.js`:

| Command | What it does |
|---|---|
| `!crate open` | New round with fresh moves. Entries open for 45s, then it drops automatically |
| `!crate open 90` | Same, with a custom timer |
| `!crate go` | Drop now, skipping the timer |
| `!crate shuffle` | Re-roll the moves on the board |
| `!crate board` | Show the all-time CRATE LEADERBOARD for 12s |
| `!crate badge` | Bring the ACTIVE MOVE tape back |
| `!crate clear` | Remove the tape, card, and leaderboard |
| `!crate reset` | Back to idle |
| `!crate hide` / `!crate show` | Fade the whole overlay out/in |
| `!crate test 10` | Add 10 fake marbles, for testing |
| `!crate wipe confirm` | Erase the leaderboard |

If chat is dead, HOUSE ball bearings fill in, so a round always works, even with nobody typing.

## Scoring

Every marble that drops gets **+1**. The marble that calls the move gets **+10**. The leaderboard lives inside the OBS browser source on G-REX's machine.

## Changing the moves

Edit `crates.js` on GitHub (pencil icon) → commit → wait about a minute → right-click the source in OBS → **Refresh**. Each round puts SAFE plus random moves from `pool` on the board.

## Testing in a normal browser

Open `https://nobeatsattached.github.io/createdig/?demo=1`, click the page once, then use these keys: **O** open · **T** +5 fake chatters · **G** drop · **S** shuffle · **L** leaderboard · **R** reset · **H** hide.

URL options: `?channel=someone` reads a different chat · `?sound=0` mutes · `?crates=5` sets the slot count.
