# patterns of working with AI - agent follows live meeting transcript

Claude joined our mob programming session.

## Abstract

Collaborate and co-create with AI by connecting agents to a real-time live transcript of a meeting and having them take actions while people discuss.
(works best for *working* meetings like mob programming session, not just *meeting* meetings)

## Context

## You'll need

- A note taking / transcription tool that can provide real-time transcripts while the meetings takes place. For example, WisprFlow NoteTaker does that.
- An agent that monitors this live transcript and instructed to take action according to what is said. Claude Code has a built-in `Monitor()` tool.
- Some basic working agreements with the agents - when to respond, when not to respond, how to call attention to something, guardrails - what is in-scope vs. out-of-scope for the agent to do, etc.
- Bonus: a broadcasting service to have agents / humans follow along a meeting transcript from anywhere, not just on the same computer.

## Works best with

- Mob Programming - a collaborative approach to software development where teams work together on their tasks
- Session Notes - a different communication interface for coding agents like Claude Code, as opposed to the chat stream interface
