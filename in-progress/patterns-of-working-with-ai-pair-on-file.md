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
- even for just fixing spelling or grammar mistake while you type

<!-- Claude: Learnings from the pair-on-file skill. I've paraphrased them and left out the internal tooling, since that repo is private and this one is public.
- Watch the directory, not the file. Editors that save atomically (write a temp file, then rename it) break a watch on the file itself.
- Keep a snapshot of the last version you saw and diff each save against it. The event then carries the change, so the agent doesn't re-read the file. Cap the diff size; for a big rewrite, read the whole file.
- Skip saves that change nothing (only the timestamp moves).
- The loop works best with an editor that saves only when you press save. Then every save means "react now". With autosave, the agent reacts to half-written sentences unless it waits for a few quiet seconds (we wait 10 s).
- Reply mostly by editing the file. If the edit fully answers a comment, remove the comment too; don't leave acknowledgement markers lying around. Use an inline note only for partial answers, open questions or trade-offs. Keep the chat to one line.
- Coach variant: you write, the agent never touches your text and only reacts. That's close to how we work: comments only, no prose.
- The same loop works on any file used for back-and-forth, such as a ticket description pulled to disk, a spec or a plan. -->

<!-- Claude: Things we ran into today, for this list:
- Both of us writing the same file: your unsaved editor buffer overwrote my change. The fix was that I write only after your save settles.
- Renaming a file left your editor tab on the old name, and saving from it would bring the old file back.
- Every save is auto-committed, so git keeps the history and the file itself can stay focused.
- Acknowledge first, then work: you need to see the agent picked up the change.
- Keep comments local, next to the text they discuss, rather than in a separate file. -->
