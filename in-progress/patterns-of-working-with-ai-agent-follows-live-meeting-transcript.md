# patterns of working with AI - agent follows live meeting transcript

Claude joined our mob programming session.

<!-- Codex review: What did Claude do in a specific moment that made it feel like it had joined the mob? An actual exchange or action from your session would give this opening a concrete basis. -->

## Abstract

Collaborate and co-create with AI by connecting agents to a real-time live transcript of a meeting and having them take actions while people discuss.
(works best for *working* meetings like mob programming session, not just *meeting* meetings)

<!-- Codex review: What makes a working meeting a better fit: a shared artifact to act on, permission to take actions, or something else you observed? This distinction seems central to when readers should try the pattern. -->

## You'll need

- A note taking / transcription tool that can provide *real-time transcripts* while the meetings takes place. For example, WisprFlow NoteTaker does that.
- An AI agent that monitors this live transcript and is instructed to take action according to what is said. Claude Code has a built-in `Monitor()` tool.
- Some basic working agreements with the agents - when to respond, when not to respond, how to call attention to something, guardrails - what is in-scope vs. out-of-scope for the agent to do, etc.

<!-- Codex review: Which working agreements did your mob actually use? In particular, how did the agent distinguish an instruction from people exploring an idea, and what happened when transcription was incomplete or wrong? A concrete example would help readers understand how you kept the people in control. -->
- Bonus: a broadcasting service to have agents / humans follow along a meeting transcript from anywhere, not just on the same computer.

## Works best with

- Mob Programming - a collaborative approach to software development where teams work together on their tasks
- Session Notes - a different communication interface for coding agents like Claude Code, as opposed to the chat stream interface
