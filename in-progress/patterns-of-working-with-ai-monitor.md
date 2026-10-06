---
title: patterns of working with AI - Monitor
date: 2026-10-06
---

# patterns of working with AI - Monitor

I find Claude Code's [Monitor tool](https://code.claude.com/docs/en/tools-reference#monitor-tool) so useful for changing the vanilla way of interfacing with it.
Yes, Claude can monitor the obvious stuff like test runners, CI jobs

<!-- Claude: More of the obvious: dev server and build/watch-mode errors, app logs filtered for ERROR, deploy status, PR review comments, long jobs (migrations, data backfills), container health.
Less obvious, and what this series is really about: a live meeting transcript, the attention file, a file you're pairing on, another agent's session log, a chat channel, teammates' pushes. -->

## codex can monitor too

The Codex CLI has its own way to accomplish the same thing. [codex-monitor](https://github.com/nitsanavni/codex-monitor) 

<!-- Claude: TODO on publish: add a link back to this post from the codex-monitor README. -->
