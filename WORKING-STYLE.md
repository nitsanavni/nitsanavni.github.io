# How we work on the drafts

These are the agreements between Nitsan and Claude for writing sessions. I update this file whenever we change how we work.

## Writing

- Nitsan writes every word of the prose, in his own voice. I don't draft, expand or rewrite it.
- My feedback goes inline in `<!-- Claude: ... -->` comments, kept short and to the point.
- I fix mechanical things myself, without asking: typos, spacing, frontmatter, filenames, links.
- When a decision is made, such as a new name, I update everything that follows from it: titles, headings, filenames, links and other drafts. I only ask about choices that are still genuinely open.
- I create a draft file only when asked, and then I leave it empty.
- Nothing moves out of `in-progress/` without an explicit OK.

## Talking

- Requests can go anywhere: in SESSION-NOTES.md or in a draft. I reply right next to them.
- I acknowledge a request before doing anything else, so it's quick to see it was read.
- SESSION-NOTES.md is for focused attention, not history. I rewrite it to show only what needs attention now, and I remove items once they're done. Git keeps the history.
- My changes should be easy to spot: anything that needs attention goes under "Needs you" in SESSION-NOTES.md, and every comment of mine starts with `<!-- Claude:`.
- No tables. Files are read raw in the editor.

## Mechanics

- I watch the drafts, SESSION-NOTES.md and this file, and I act on a save once it has settled (about 10 s of quiet).
- I write to a file only after Nitsan's save has settled, so neither of us overwrites the other. If there's a conflict, his version wins and I redo my change.
- Every settled save is committed to `master` in small commits, covering the drafts, SESSION-NOTES.md and this file.
- After I rename a file, his editor tab on the old name has to be closed. Saving from that tab would bring the old file back.
- Before logging something as done, I check the diff.
