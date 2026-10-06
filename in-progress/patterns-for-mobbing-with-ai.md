---
title: Patterns for Mobbing with AI
date: 2026-10-06
---

Finally mobbing with AI feels right.

## tl;dr

Two main patterns make this possible for us:
1. [Attention File](/patterns-of-working-with-ai-attention-file/) - an alternative interface to the agent chat stream
2. [Live Transcript](/patterns-of-working-with-ai-live-transcript/) - the agent monitors the conversation in real-time

Both have to do with modifying the chat-based interface of coding agents. How we provide input to the agent and how we consume output from it. Using these allows us to overcome the friction we've been experiencing with AI in our mobs.

## Mobs struggle using AI

You might already know I'm as passionate about Mob Programming as I am about using AI in software development. Both have profoundly changed the way I work. However, bringing them together has been a challenge - it didn't feel right. It seemed like our existing ways of working weren't compatible with the ever growing capabilities of AI agents. For a mob, the agents introduced new obstacles towards group flow, shared understanding, and disrupted our existing roles of Talker-Typist which sit at the core of our practice.

## There are many ways to mob

Mob Programming, aka Ensemble or Software Teaming is a real-time collaborative approach to co-creating software allowing teams to work together on a shared task. There are many ways to mob, and you can find plenty of ideas in Jay Bazuzi's [Mobbing Pattern Language](https://jay.bazuzi.com/Mobbing-Pattern-Language/) and in many more places.

One such popular mob style follows Llewellyn Falco's [strong-style pairing](https://llewellynfalco.blogspot.com/2014/06/llewellyns-strong-style-pairing.html) paradigm where one person assumes the role of the Talker, a second person is the Typist while others stay attentive, and every few minutes the roles rotate. This way every person gets to both talk, type and observe as the turns rotate. It's a great way to keep everybody involved and come closer to a state of 'one mind'.

![Mob rotation: talker, typist and next, rotating every few minutes](/images/mob-rotation.svg)


## AI adds friction

AI agents provide countless opportunities to enhance software development, but when AIs join the mob some problems arise.

- After a prompt is submitted to the agent, it will start working and it's not clear what the team should do during that time. It's easy to get lost while trying to follow along the agent's work following the stream of events. When the whole team is silent and tries to guess as to what the agent is doing, people are bored, disengaged...
Some ideas to help reduce this
  - prefer faster models (even if it might mean reduced intelligence)
  - smaller steps - more humans in the loop, less agent autonomy
  - have the agent narrate its work to make it easier to follow
  - have a person narrate the agent's progress out loud - [Narrate the agent](https://jay.bazuzi.com/Mobbing-Pattern-Language/patterns/Narrate%20the%20Agent.html)
- The balance between the talking-typing pair is disrupted - since a lot of the work is funneled through the agent interface, many times "typing" consists 



<!-- Claude: One real moment where flow broke would show "didn't feel right". -->






Those are early days of us trying out these patterns, so I'm left optimistic about more and more ways to bring our passions closer together, and keep co-creating with AI.

<!-- Claude: The empty section above is the body. Per pattern: one thing that got better, one still awkward. That backs "feels right". "Those are early days" -> "These are"? -->


Works best with
Smarter models - Claude Opus 5.5 handles it very well