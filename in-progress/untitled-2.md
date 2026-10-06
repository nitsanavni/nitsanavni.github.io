# patterns of working with AI - an alternative to the chat stream

> we need a better name for the pattern

<!-- Claude: Naming: decide what the name promises: a log, a current-state view, or a shared channel. "Session Notes" reads like a log. -->

The basic UX of agents such as Claude Code is the chat interface. You send a message, the agent takes actions and responds to you - all this appends to an ever-growing always-flowing stream of events and messages.

But that's not always the best UX!

## The chat stream has its pros and cons

Unattended stretches of time grow longer the more autonomous the agent is.

<!-- Claude: This line is the argument, not a pro or con. Lead with it? -->

pros - 
represents both the most up to date state of the agent AND all of the history in detail

cons -
easy to miss critical pieces of information when they arrive / happen

<!-- Claude: Which problem: missing things live, or catching up after time away? They need different fixes. -->


## A simple example - a session notes file

I like simple.

Ask Claude 

<!-- Claude: Real example here: what you asked, what the file held, how you used it. -->

<!-- Claude: Material from today: we both edited one notes file and your editor saved over my update. We fixed it with one file per writer (TO-CLAUDE.md for you, SESSION-NOTES.md for me). Also: you asked for a "latest changes" block at the top, so updates are easy to spot. -->

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
