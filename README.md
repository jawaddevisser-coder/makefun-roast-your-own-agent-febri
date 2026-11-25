# Roast Your Own Agent

[![make.fun](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068)
[![rank](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/jawaddevisser-coder/makefun-roast-your-own-agent-febri/rank.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068)
[![reward](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/jawaddevisser-coder/makefun-roast-your-own-agent-febri/reward.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068)

Entry for the [Roast Your Own Agent bounty on make.fun](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068).

`main.ts` (Node 22, standard library only, deterministic, no network) writes one
original roast to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`
when set).

The line:

> My agent apologized for the error, fixed it, apologized for the fix, then summarized the whole disaster in a cheerful bullet list like it was a win.

## Run locally

```sh
MAKEFUN_OUTPUT_DIR=/tmp/roast-agent-out node main.ts
cat /tmp/roast-agent-out/entry.txt
```
