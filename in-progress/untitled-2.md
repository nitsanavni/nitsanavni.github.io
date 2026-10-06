# patterns of working with AI - an alternative to the chat stream

> we need a better name for the pattern

<!-- Codex review: For naming, what is the essential feature: a persistent artifact, a curated view of current state, or a shared place for humans and agents to communicate? "Session Notes" is approachable, but may suggest a chronological record. Decide which expectation you want the name to create. -->

The basic UX of agents such as Claude Code is the chat interface. You send a message, the agent takes actions and responds to you - all this appends to an ever-growing always-flowing stream of events and messages.

But that's not always the best UX!

## The chat stream has its pros and cons

Unattended stretches of time grow longer the more autonomous the agent is.

pros - 
represents both the most up to date state of the agent AND all of the history in detail

cons -
easy to miss critical pieces of information when they arrive / happen

<!-- Codex review: Does the problem come from missing messages as they arrive, catching up after an unattended stretch, or both? Those imply different requirements for the alternative. Also, how will the agent keep the notes current without losing decisions that still matter? -->


## A simple example - a session notes file

I like simple.

Ask Claude 

<!-- Codex review: This seems like the place for an example from your own session: what you asked, what the file contained, and how you used it. Who updates it, when, and how do unresolved questions get your attention? Those details would make the pattern reproducible. -->

## It could take any shape



## Claude Code and Codex have limited versions of this already

Examples include features like:
- recap (both)
- open questions (Codex)
- you should know (Claude)

# Uses

- Monitor

# Works well with 

- live transcripts - the rapid flow of messages makes it even harder to follow Claude's chat stream
- html - expressive
- pair on artifact
