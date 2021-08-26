First, a brief history of RPGs and how they used randomness. MMORPGs draw heavy
inspiration from modern [Dungeons &
Dragons](https://en.wikipedia.org/wiki/Dungeons_%26_Dragons), which in turn
draws heavy inspiration from classic wargaming, specifically the game
[Chainmail](https://en.wikipedia.org/wiki/Chainmail_(game)), as both were
originally created by Gary Gygax.

Randomness in those sorts of games serves two main uses: ease of abstraction and
arbitration, and drama. For abstraction and arbitration, consider the
following. Rather than try to simulate the physics of exactly how strong
someone would be based on their genetics, upbringing, and training, instead they
recognize that the *results* of all of that tend to fall on a normal curve and
can map that to the result of adding up 3 6-sided dice. Rather than try to
figure out the physics of how exactly someone swinging an ax at someone else
resolves, they instead abstract that into a random chance to hit, and random
damage if it hits.

For the drama side, leaving the fate of the characters or direction up to the
dice creates palpable moments of tension for the players. If the heroes are
hanging on by a thread and they've got one last-ditch effort to win the day,
everyone is on the edge of their seat as the dice are falling. The randomness
also builds in novelty of situation to the game, as situations are unlikely
to be the same, even when you start from the same position. Players
attempting to optimize now have to reason about probability as they think through
their options and lines.

### Removing The Need For Random Arbitration

When table-top RPGs became computerized, they often ported these systems over
[directly](https://en.wikipedia.org/wiki/Baldur%27s_Gate). These made for *great*
games. Eventually, the genre moved to the more modern approaches seen in Everquest
and World of Warcraft. During the transition, *a lot* of the original decision
decisions stayed. D&D had armor class and saving throws, and so attacks and
abilities in MMOs had chances to miss. D&D was turned-based, and so MMO combat
was built as if both people were taking turns but at the same time.

At the same time as MMOs were being developed, other genres with different
models for combat were also advancing. Adventure games like [LoZ: A Link To The
Past](https://en.wikipedia.org/wiki/The_Legend_of_Zelda:_A_Link_to_the_Past) included
a concept called hit-stop: if you hit an enemy, it would interrupt it from
attacking you. If it hit you, it would interrupt you from attacking it. This
lead to gameplay where you had to carefully time your attacks and choose the
proper distance/spacing to attack from. Action games like [Devil May
Cry](https://en.wikipedia.org/wiki/Devil_May_Cry_(video_game)) took this further, allowing
a high degree of character freedom and made enemies react differently to
different attacks that Dante performed. Check out [this
video](https://www.youtube.com/watch?v=8X4fx-YncqA) for a comprehensive visual explainer
on these concepts.

As the physics and combat in games became more and more sophisticated, we had
to rely less and less on attempting to mathematically model *outcomes*, like we
did in tabletops. We don't have to say "a skilled fighter attacks another
skilled fighter, there's a 60% chance they'll draw blood" when one player can
*pilot* the skilled fighter and choose the angle and speed of their thrust and
the other player can pilot the defender and attempt to parry. As the games
become more and more sophisticated, we no longer need to use randomness for
ease of abstraction and arbitration.

### Preserving The Underdog Factor

Different competitive games favor the "better player" in different amounts,
both by their competitive ruleset and game design. A best-of-7 will favor the
better player more than a best-of-3 (and if this isn't obvious, feel free to
email me). Some games, like Super Smash Bros. Melee, and real-life tennis are
super harsh to the underdog, and the better player wins almost all the time.

Armada, a melee player, is [famous for not
losing](https://www.ssbwiki.com/Smasher:Armada) to a player outside of the
top-6 in the world for *8 straight years*.

On the other end of the spectrum, you have games like early hearthstone where
[arcane missiles](https://hearthstone.fandom.com/wiki/Arcane_Missiles) would
sometimes do exactly what you needed for it to do, and you'd go on to win a
game, or it wouldn't and you might lose. A better player can play around arcane
missiles better than a worse player. They understand the probabilities better,
and can calculate the lines more accurately.

When an underdog is in a losing position in Hearthstone against a better
player, sometimes they can
[topdeck](https://hearthstone.fandom.com/wiki/Top_deck#:~:text=Top%20deck%20is%20a%20card,the%20top%20of%20the%20deck.&text=Top%2Ddecking%20is%20one%20of,top%2Ddeck%20can%20lose%20it.)
the exact card they needed, and then that
card randomly works in exactly the way they needed for it to work. When a worse
player is in a worse position in melee, they probably just get wrecked.

Historically, games like melee only appeal to competitive purists and have a
tough time growing. I, personally, love them, but that isn't enough! To appeal
to a broader audience, developers want the underdog to have a fighting chance
so that when folks try the game out, they don't just lose all of the time until
they're better than the players they're beating. Randomness is the *laziest*
way to accomplish this.

* Fortnite (in early seasons) gave some players pistols and other players rocket
  launchers off-spawn.
* Poker always gives you the chance that you lucked into having the best hand
  at the table.
* Card games (Magic: The Gathering, Android: Netrunner, Hearthstone, etc) bake in variance
  at a low level via shuffling cards. Hearthstone takes it further by making the
  cards themselves have random effects.

Better is to build in underdog-detection into your game and grant the underdog
some sort of special option. Here are some examples:

* In Street Fighter 4, losing your life fills up an "ultra meter". When you're
  mostly dead, you can use your "ultra move", which can often beat an opponent
  from 40% health if it lands. They tend to have a lot of start up and play a
  lengthy telegraph animation, so unless your opponent committed to a move they
  will win on the spot if you miss. High risk and high reward.
* In League of Legends, going on a kill streak increases your "bounty". If
  someone manages to kill you, they get a huge gold payout that can turn the
  game around.
* In Super Smash Bros. Ultimate, the closer to death you are, the more
  knockback your moves do.

The common design point to hit here is that you can still give the underdog a
fighting chance via anti-snowball mechanics and granting them special
high-risk, high-reward options without leaning on randomness to make winning or
losing feel like a lottery. Playing around these systems adds *depth*!


### We Still Want Random Drama (Sometimes)

That leaves drama. We still want our AI encounters to have random elements,
otherwise, they'll feel scripted and predictable. It's exciting to see big
critical damage and engaging to heal a tank after they get crit by a dragon.
Sometimes, Onyxia
[randomly](https://www.reddit.com/r/classicwow/comments/9fb2bo/john_staats_ama_author_of_the_world_of_warcraft/e5ylio0/)
takes a deep breath. We just want to make sure that for PvP purposes, whenever
something can be impacted by variance that there are enough trials that the
[central limit theorem](https://en.wikipedia.org/wiki/Central_limit_theorem)
can do its job. In practice, this means we want to limit the scope of
randomness to things that happen 20+ times during an encounter (attacks and
heals, for instance).

For everything else, like the chance to resist stuns, or the chance to resist
dispelling polymorph, the variance is too high and too impactful. Instead,
re-tool those mechanics to either be player-controlled via some sort of
[reaction](/posts/what-is-difficulty) or [yomi](/posts/games-need-yomi) test,
or make them %reductions to duration instead of %chance to resist.

### Post Script: Random Loot Is Dirty

I don't think the original RPG developers *intentionally* built an [operant
conditioning
chamber](https://en.wikipedia.org/wiki/Operant_conditioning_chamber) when they
made the first random loot systems. I don't *want* to believe that. But that's
what *happened* nonetheless. From Skinner's [research](https://en.wikipedia.org/wiki/Operant_conditioning), we know the following:

- If a mouse is fed every time it pushes a lever, it will only push the lever when it is hungry.
- If a mouse is *randomly* fed every time it pushes a level, it will spend all
  day constantly pushing the level, regardless of how hungry it is.

I speak a little bit about this in [intrinsic
fun](http://beaushinkle.xyz/posts/intrinsic-fun), but rather than make your
player labor through stuff they don't actually want to do (kill the boss for
the 50th time, push the lever again), because they've been conditioned by a
variable reward, instead flip the script. If you want loot to represent player
skill, then make the boss difficult, give the players an achiement for
defeating it, make the boss drop [materials](/posts/healthy-mmo-economy), and
make it so that any gear crafted from those materials requires the achievement
to equip.

If you want your loot to represent invested time, then either reward players
with a token that represents that boss kill, and they can exchange `x` tokens
for the materials to craft the loot. In neither case do you need to lean on
variable-reward based operant conditioning to create artificial dependence.

If this creates a concern that now players won't care to play your game or do
your content, then **make your game better**. Make the content good enough that
players want to do it for the joy of playing. Add in-game leaderboards for
speed-running (like mists-of-pandaria era challenge modes). Add in-game
leaderboards for scalable difficulty like mythic+. Make the non-variable reward
valuable *and scarce* so that players will fight over it. Make the reward
*ephemeral* so that players will always need to get it.
