This post should serve as a sort of myth-dispeller about action combat (BDO,
New World, TERA) vs tab combat (World of Warcraft, FFXIV) in MMOs.

The short of it is that in action combat, hit validation is performed by
comparing the area-of-effect of an ability to the position of relevant
opponents. In tab-target combat, hit validation is performed by comparing the
area-of-effect of an ability to the position of *your target*. **That's it**.

There's **a lot** of historical baggage associated with these two validation
schemes, but at the end, this is all there is. Say, for example, you have an
ability like [frost nova](https://youtu.be/9c8f5Rn_wXo?t=147) in World of
Warcraft (a tab target game). When you press frost nova, the game knows the
radius of frost nova (10 yards), and then freezes everything within 10 yards of
the mage. That's an "action" ability.

Similarly, in world of warcraft when a mage presses [fire
blast](https://youtu.be/9c8f5Rn_wXo?t=101), it checks to see if the target is
in range (40 yards), and then if it is, then they get fire blasted. That's a
"tab target" ability.

Different tab target games handle their hit resolution differently. Some games
may want you to also be facing your target. Some require that you have
line-of-sight and introduce objects that block line of sight. Some have facing
requirements (rogues can only backstab if they are facing their target, their
target is within range, and their target is not facing them). Some have cast
times, where you need to be within range and within line of sight at the
beginning of the cast time *and* the end of the cast time. Some only require
the beginning, some only require the end.

Likewise, action combat games *also* handle their hit resolution differently.
Some games like Dark Souls create moving hitcubes and compare those to
hurtcubes like how combat works in a 2d fighter, but in 3d. Other games use
simpler distance measuring (like if all of your skills were frost nova).

Separate from these ideas, for historical or traditional reasons, these games
also tend to emphasize different skills. I wrote a pretty long writeup about
what [difficulty actually
is](/posts/what-is-difficulty),
but the TLDR is that when we interact with our mouse and keyboard difficulty
only comes in three forms: figuring out the right button/mouse motion to press,
pressing complex sequences correctly, and pressing those buttons/sequences with
varying degrees of timing leniency.

Tab Target games tend to focus almost entirely on the "which button is the
right button" part. The game tends to give you a bunch of information (buffs,
cooldowns, debuffs, etc) and a bunch of different (say, 30+) abilities you
*could* press, and make you puzzle out which one is the most important to press
*right now*. Then, once you've chosen, you can't press another button for ~1.5+
seconds. They soften timing requirements by making it so that if you press a
button early, it "buffers" the press and so that you can just spam the button
you want to do next and not have to worry about timing it.

Action Combat games tend to have less buttons to worry about, and also make the
puzzle about *which* button is the right button less difficult. They tend to
have less buffs, cooldowns, debuffs, etc to keep track of. In exchange, they
make you perform more sequences and make you care more about timing. For
example, maybe if you're *barely* out of range, your attack will miss in an
action combat game, whereas in a tab target game you just wouldn't be allowed
to press the button yet. An action combat game might make it so that if two
people attack each other at the same time, whichever one's attack comes out
first interrupts the other (like a 2d fighting game). They might give players
ways to *avoid* each other's attacks via some sort of dodge roll (like dark
souls).

-----

**Important to keep in mind** is that none of these traditions *need to be
carried on*. Whether or not you have a target doesn't preclude dodge rolling or
hit stun. Tab target games don't [need to have an auto
attack](https://www.reddit.com/r/newworldgame/comments/p2c353/after_nw_i_believe_all_future_mmos_must_have/h8kh48t/),
even though many do.
