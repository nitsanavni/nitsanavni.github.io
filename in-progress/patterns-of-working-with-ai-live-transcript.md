---
title: patterns of working with AI - Live Transcript
date: 2026-10-06
---

# patterns of working with AI - Live Transcript

Claude joined our mob programming session.

<!-- Claude: Back this with one real thing Claude did in the session. -->

## Abstract

Collaborate and co-create with AI by connecting agents to a real-time live transcript of a meeting and having them take actions while people discuss.
(works best for *working* meetings like mob programming session, not just *meeting* meetings)

<!-- Claude: Why do working meetings fit? A shared artifact the agent can act on? Say it in one line. -->

## You'll need

- A note taking / transcription tool that can provide *real-time transcripts* while the meeting takes place. For example, Wispr Flow NoteTaker does that.
- An AI agent that monitors this live transcript and is instructed to take action according to what is said. Claude Code has a built-in [Monitor tool](https://code.claude.com/docs/en/tools-reference#monitor-tool).
- Some basic [working agreements](/patterns-of-working-with-ai-working-agreements/) with the agents - when to respond, when not to respond, how to call attention to something, guardrails - what is in-scope vs. out-of-scope for the agent to do, etc.
- Bonus: a broadcasting service to have agents / humans follow along a meeting transcript from anywhere, not just on the same computer.

<!-- Claude: Which agreements did your mob use? How did the agent tell an instruction from brainstorming? What happened with mis-transcriptions? -->

<!-- Claude: Codex can monitor now too (codex-monitor); mention it next to Claude's Monitor? -->

## Works best with

- Mob Programming - a collaborative approach to software development where teams work together on their tasks
- [Attention File](/patterns-of-working-with-ai-attention-file/) - a different communication interface for coding agents like Claude Code, as opposed to the chat stream interface
