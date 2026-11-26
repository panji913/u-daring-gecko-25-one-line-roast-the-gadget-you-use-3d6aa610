# One-Line Roast: The Gadget You Use Every Day

Entry for the make.fun competition
`u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610`
($5 pot, free to enter, top 3 paid).

## The entry

> My earbuds promise eight hours of battery, then die mid-sentence like a gossip who heard the good part and left.

112 characters — one original line roasting the earbuds used every day.

## How it works

`main.ts` writes that single line to `/output/entry.txt`
(`ENTRY_OUTPUT` overrides the path). It refuses to write anything
outside the 1–200 character gate, or a whitespace-only line.

## Run

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 24+ (uses type stripping for the `.ts` file, no build step).
