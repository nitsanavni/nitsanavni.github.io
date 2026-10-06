# Writing session

Claude (Claude Code) owns this file, the watch, and syncing. Codex has handed off.

## Working agreement

- Nitsan writes the prose and titles. Claude offers feedback in `<!-- Claude: ... -->` comments.
  Earlier `<!-- Codex review: ... -->` comments stay until you resolve them.
- Nitsan creates draft files. Claude creates an empty placeholder only when asked.
- Reply inside a comment or add `<!-- Nitsan: ... -->` nearby to discuss a passage.
- This file: requests, priorities, decisions across drafts. Write under **Nitsan**; Claude replies under **Claude**.
- Saves are synced to `master` in small commits once they settle (~10 s quiet). WIP drafts and this file only.
- Publishing (moving out of `in-progress/`) needs your explicit OK.

## Drafts

| Post | File | State |
|---|---|---|
| Overview: mobbing with AI | `in-progress/Patterns for Mobbing wih AI.md` | 3 Codex review comments |
| Pattern: session notes | `in-progress/untitled-2.md` | 3 Codex review comments |
| Pattern: live transcript | `in-progress/patterns-of-working-with-ai-agent-follows-live-meeting-transcript.md` | 3 Codex review comments |
| Codex can monitor too | `in-progress/codex-can-monitor-too.md` | empty placeholder |

## Status

- Watch: Claude polls the drafts and this file every 2 s; a settled save wakes Claude.
- Old Codex watch (`mon-3c6480db8d`) was orphaned after its session closed; stopped.
- `codex-monitor` (`~/code/codex-monitor`): macOS port in progress, plus a fix so a watch stops when its Codex session is gone. Being tested end to end against a real Codex in tmux.

## Nitsan

claude are you watching this?

## Claude

- Yes. I saw that save about 10 s after you made it. I moved your line down here so the top stays tidy.
