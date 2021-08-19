In [what is difficulty](/posts/what-is-difficulty), I talked about how there's
three forms of difficulty:
* solving the puzzle of which button motion to press/perform next (puzzle)
* having to press physical difficult sequences/combinations/motions (dexterity)
* having to do the above things with a very small amount of time (timing)

Of these, I want to zoom in on a particular aspect of the puzzle aspect of difficulty: yomi.

Yomi is a japanese term commonly used in the fighting-game community that
roughly translates to "knowing the mind of your opponent" in context. Games
like rock-paper-scissors are *entirely* yomi. Other games, like Magic: The
Gathering or poker call it bluffing, and some games call it "reading", others
"mindgames", but the concept is always the same.

In order for yomi-based skill expression to actually be present, the game needs
to support creating situations where knowing what your opponent will do allows
you to *act in response*. In a darts competition or footrace, for example,
knowing what your opponent is attempting (to throw darts better or run faster)
*does not help at all*. This isn't present in all games, and certainly isn't
present all the time. Take, for example, a duel between low-level warriors in
world of warcraft. Does knowing that your opponent plans to do their optimal
DPS rotation until one of you dies afford you any counterplay? You know that
they're going to press mortal strike and whirlwind on cooldown. Is there
anything you can do with that information?

World of Warcraft has yomi expression especially in fights involving casters.
Any time a caster casts, they can be interrupted by an ability with a cooldown
(an interrupt). They can represent that they're casting and then *stop* casting
to bait an interrupt so that they can safely cast. If the interrupter thinks that
they'll fake their cast, they can simply not use their interrupt and wait for them
cancel it themselves and then try casting again. If the caster thinks that the
interrupter thinks that they're faking, they can just let the cast rip.

interrupt > cast > wait > fake > interrupt

This is a wonderfully simple and programatically easy way to introduce difficulty
into a game. Worse players will play further away from [game-theory
optimal](https://saylordotorg.github.io/text_introduction-to-economic-analysis/s17-03-mixed-strategies.html)
but still be effective. They get immediate feedback that other players are beating
them *because* they're tricking them. Better players learn to play closer to
game-theory optimal, but also to adapt to noobs who choose the same options (or
no options at all) with riskier, more one dimensional strategies (always throw
rock against a player who always throws scissors).

More importantly, yomi is, **at its core** *interactive*. You are no longer playing
against the game or trying to solve a static puzzle or following a pre-defined
[rotation](https://www.akhmorning.com/jobs/blm/guide/rotation/) or [action
priority
list](https://www.icy-veins.com/wow/shadow-priest-pve-dps-rotation-cooldowns-abilities).
Now, you're making your own dynamic decisions based on what you think your opponent will
do, and they're doing the same thing. Hopefully, these decisions lead into
different gamestates, different forms of difficulty, and different yomi games,
and the whole thing turns into an elegant dance rather than a contest of DPS vs eHP.
