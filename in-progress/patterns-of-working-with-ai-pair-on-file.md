---
title: patterns of working with AI - Pair on File
date: 2026-10-06
---

# patterns of working with AI - Pair on File


## minddump - inbox

- basic concept - the agent monitors changes to a file, the file serves a dual purpose of being a co-created artifact on its own and also becomes the means of communicating between me and the agent
- two way communication - agent monitors the file , sees every change, and also can edit the file
- agent edits can serve 1. replies / threads with the user 2. changes to the document in progress
- monitor event carry the diff and surrounding context - avoid many re-reads

@claude please fetch the skill from askeffi/test-mvp repo called pair on file , it alreadys has some related learnings

<!-- Claude: Things we ran into today, for this list:
- Both of us writing the same file: your unsaved editor buffer overwrote my change. The fix was that I write only after your save settles.
- Renaming a file left your editor tab on the old name, and saving from it would bring the old file back.
- Every save is auto-committed, so git keeps the history and the file itself can stay focused.
- Acknowledge first, then work: you need to see the agent picked up the change.
- Keep comments local, next to the text they discuss, rather than in a separate file. -->
