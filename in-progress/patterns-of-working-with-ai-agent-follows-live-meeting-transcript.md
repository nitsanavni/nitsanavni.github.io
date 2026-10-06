---
title: patterns of working with AI - agent follows live meeting transcript
date: 2026-10-06
---

ideas for better names for this pattern?

<!-- Claude: Ideas, grouped by what the name points at.
Named after the artifact, to match "Session Notes": "Live Transcript", "Shared Transcript".
Named after the behavior: "Listening Agent", "Agent Listens In", "Overhearing Agent".
Named after the mob: "Agent in the Room", "Agent Joins the Mob".
My pick: "Live Transcript" - agree make it so, because then both pattern names refer to a file the agent and the people share. If you'd rather name the agent, "Listening Agent" is the plainest. -->

# patterns of working with AI - agent follows live meeting transcript

Claude joined our mob programming session.

<!-- Claude: Back this with one real thing Claude did in the session. -->

## Abstract

Collaborate and co-create with AI by connecting agents to a real-time live transcript of a meeting and having them take actions while people discuss.
(works best for *working* meetings like mob programming session, not just *meeting* meetings)

<!-- Claude: Why do working meetings fit? A shared artifact the agent can act on? Say it in one line. -->

## You'll need

- A note taking / transcription tool that can provide *real-time transcripts* while the meeting takes place. For example, Wispr Flow NoteTaker does that.
- An AI agent that monitors this live transcript and is instructed to take action according to what is said. Claude Code has a built-in `Monitor()` tool.
- Some basic working agreements with the agents - when to respond, when not to respond, how to call attention to something, guardrails - what is in-scope vs. out-of-scope for the agent to do, etc.
- Bonus: a broadcasting service to have agents / humans follow along a meeting transcript from anywhere, not just on the same computer.

<!-- Claude: (Moved: the old comment split this list.) Which agreements did your mob use? How did the agent tell an instruction from brainstorming? What happened with mis-transcriptions? -->

<!-- Claude: Codex can monitor now too (codex-monitor); mention it next to Claude's Monitor? -->

## Works best with

- Mob Programming - a collaborative approach to software development where teams work together on their tasks
- Session Notes - a different communication interface for coding agents like Claude Code, as opposed to the chat stream interface
