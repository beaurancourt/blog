I wanted to take some time today to discuss something that I view as a core
point of contention of game design: how we want the combat system to work.

Specifically, I see lots of folks in the sub advocating action combat and
reference games like dark souls directly.

Some background: I've played a huge amount of competitive wow arena, quake 3
arena, quake live, team fortress 2, fortnite creative wagers, counter strike:
source, street fighter 4, rocket league, and most of all, super smash bros
melee. In the games with ELO systems, I tend to be top 0.1%, and I travelled
around and consistently placed in the money in street fighter 4 and smash. I
prefer games with little RNG, prefer solo-play, and generally dislike anything
bigger than 3v3.

As you become more and more invested in these sorts of games, you gain a
greater and greater understanding of what's actually going on at a competitive
level, and how important [space and movement
are](https://youtu.be/Lr797uB41WU?t=45).

What does this have to do ith Action Combat, Netcode, and Latency?

Precise spacing and positional play is *extremely* difficult whenever there's
latency involved. Your client has two not-great options:

a) display everyone's position using old information

b) perpetually predict everyone's future position and adjust when those
predictions are wrong

The first option means that if two players both have 50ms ping, each player is
always seeing everyone else 100ms behind where they actually are. If someone
runs forward, stops, and casts a 100ms spell animation, then that spell has
*already happened* on their client by the time you see it even begin. This
leads to the phantom model of netcode which is how [dark souls resolves pvp
combat](https://youtu.be/XiFzQLUA1oA): 

The second option means that you perpetually clip the beginnings of animations
and rubber band their movement to put them where they actually are. For
example, if someone goes from a dead stop to moving, you'll see them lurch
forward/teleport to put them at where they would be 100ms *from now* in order
to give your client their predicted position. This is how games with rollback
netcode (like rocket league) work, and there's a ton of tricks to help make the
transitions less jarring (like making sure movement has acceleration to buy the
server time to make accurate predictions).

In either case, where does this leave the player that is trying to iframe dodge
through a sword slice, or sidestep a skillshot?

That sword slice happened 100ms ago, and the player swinging the sword is
actually attacking where you *were* 100ms ago. An attack that looks like it
should absolutely whiff on your screen will hit the past-you on their screen,
causing their client to send the damage info the server, which sends it to you.
Timing a dodge now becomes *extremely* difficult, because you *don't actually
know* when the sword's hitbox becomes active. If the sword swing becomes active
700ms after the animation begins, and you each have 50ms ping, then it actually
becomes active 600ms after *you* see it. But, if you're playing against someone
with 100ms ping, then it's 550ms. If you both have 0ms, it's back to 700.

You *can* adjust if you're playing against a single person, but trying to keep
straight all of the different delay timings when there's 20 fighters running
around throwing out animations is borderline impossible.

Once dodging / spacing is unreliable, you're just sort of floundering and
spamming wide-sweeping attacks and long-invuln iframe dodges, which removes all
of the crispness / fluidity that we love about single-player action combat
games in the first place.

-----

The solution to this is, unfortunately, to just design with this concession in
mind. Precise spacing with latency is going to suck, so don't build a game that
relies on it. Instead, build for something that masks the latency (like tab
targetting). Build the game *around* tab targetting concepts - short damage
reduction windows on cooldowns, short burst damage windows on cooldowns,
baiting enemies into poorly trading offensive for defensives. Add
tab-targetting skill-based mechanics, like skill sequences that force players
to have a high APM while moving. Add the ability to create/remove line of sight
and create/close range gaps. Tax player's tab-targetting abilities with buttons
that drop targeting, or create dummy targets (like illusions or totems). Add
layers of bluffing/counter bluffing with reflection type abilities. Add
reaction-based abilities like interrupts, and reward players for faking and
landing those interrupts.

Basically, do everything you can to make your combat deep and interesting
*without* making it rely on spacing when you *know* you have to support
unfavorable network conditions!w
