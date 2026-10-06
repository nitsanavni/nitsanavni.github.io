# How we work on the drafts

These are the agreements between Nitsan and Claude for writing sessions. I update this file whenever we change how we work.

## Writing

- Nitsan writes every word of the prose, in his own voice. I don't draft, expand or rewrite it.
- My feedback goes inline in `<!-- Claude: ... -->` comments, kept short and to the point.
- I fix mechanical things myself, without asking: typos, spacing, frontmatter, filenames, links.
- When a decision is made, such as a new name, I update everything that follows from it: titles, headings, filenames, links and other drafts. I only ask about choices that are still genuinely open.
- I create a draft file only when asked, and then I leave it empty.
- Nothing moves out of `in-progress/` without an explicit OK.
- No links from public places (READMEs, other sites) to unpublished posts, since they would 404. Instead, a TODO comment in the draft adds the link once the post is published.

## Talking

- Requests can go anywhere: in ATTENTION.md or in a draft. I reply right next to them.
- I acknowledge a request before doing anything else, so it's quick to see it was read.
- Once a request is fully handled, I remove both the request and my acknowledgement. The change itself is the answer, and no markers are left behind.
- ATTENTION.md is for focused attention, not history. I rewrite it to show only what needs attention now, and I remove items once they're done. Git keeps the history.
- My changes should be easy to spot: anything that needs attention goes under "Needs you" in ATTENTION.md, and every comment of mine starts with `<!-- Claude:`.
- No tables. Files are read raw in the editor.
- File references are plain paths with no markdown link syntax. In the raw editor that's easier to read.

## Mechanics

- I watch the drafts, ATTENTION.md and this file, and I act on a save once it has settled (about 10 s of quiet).
- Each watch event already includes the diff, so I can act on a save without reading the file again.
- I write to a file only after Nitsan's save has settled, so neither of us overwrites the other. If there's a conflict, his version wins and I redo my change.
- Every settled save is committed and pushed to `master` automatically, by the watcher itself, without waiting for Claude or for a request. The same goes for every change Claude makes, in any repo we touch: it's pushed right away. Nitsan never has to ask for a push.
- After I rename a file, his editor tab on the old name has to be closed. Saving from that tab would bring the old file back.
- Before logging something as done, I check the diff.
