## Preface

I've been game mastering since D&D in middle school circa the year 2000,
starting with 3.5e. Throughout my GM career, I've made *a lot* of bad
adventures, and run a lot of published modules. I think, especially when
learning a new system, that it's good to understand how the veterans of that
system use it to design adventures before going off and doing your own thing.

One of the things that kept me from trying out GURPS was the lack of lengthy
published adventures and brimming bestiaries. Paizo, for instance, routinely
publishes [adventure
paths](https://paizo.com/store/pathfinder/adventures/adventurePath/ageOfAshes)
that take players from the beginning of the game to max level, and they take
most groups over a year to get through (if they ever do). Yet, you still need
random encounters and wandering monsters and improv for when things get off the
rails, and for that you need some sort of bestiary. As far as I could tell
about GURPS, it didn't have either of those things.

Then I found saw an advert for [the nordlond
bestiary](https://www.kickstarter.com/projects/gamingballistic/nordlond-bestiary-and-enemies-book)
which, at a higher pledge level, included *a whole slew of adventures*, in the
setting. [Gaming Ballistic](https://gamingballistic.com/) was stepping up and
providing both answers to my fundamental problem. Sold.

My group picked up [DFRPG](http://www.sjgames.com/dungeonfantasy/), I tried to
absorb the rules, and then ran *I Smell a Rat*, the included dungeon as a
tutorial to the system. In the background, I began preparing *Hall of
Judgement*, which is the adventure geared toward fresh 250-point characters.

The rest of the post will detail the prep that I did, and list out pain points
I had in parsing the text. I provide this so that others can copy my work, and
potentially know that you aren't alone in your confusion.

**Note**: I think it is of the utmost importance to point out that I **highly**
respect Douglas Cole and the whole Gaming Ballistic crew. I've asked *a ton* of
questions about the adventure and the setting and the kind folks over there
have limitless patience. None of what follows is meant to be **in any way**
insulting or a complaint.

## Setting Out
The [previous post](/posts/rewriting-isfjall) dealt with fleshing out the Town
session(s) for the adventure, which also meant we needed to get a good handle
on history and plot as it pertains to the adventure itself.

This post will deal with the travel rules. We will do two main legs of
traveling - from Isfjall to Logiheimli, and from Logiheimli to the Hall of
Judgement.

The text overlays these routes on the player map:

![Paths to the Hall](/images/paths-to-hall.png)

Green is for "Lowlands", Yellow is for "Hills and Valleys", Red is for
"Frostharrow".

The text provides travel speed for each type. In "Lowlands", your speed is the
party's (including animals) slowest Move * 0.75 in mph. Half it if it's
raining. How many hours a day can they hike? Unclear. How far is it from
Isfjall to Logiheimli or Logiheimli to the Hall? Not obvious. We have curvy
arrows and the bottom right has a map legend, so we can use a hex mapping tool
like [owlbear.rodeo](https://www.owlbear.rodeo/) to measure the distance of
these curves. I uploaded the image of the paths above to owlbear, and then set
the map dimensions to 129x163 with a hex type of vertical and a grid scale of 1
mile:

![Owlbear Settings](/images/owlbear-settings.png)

You start with the dimensions that owlbear gives you, and then scale up both by
10x. Then, count the number of hexes that appear between the 0-mile mark and
10-mile mark of the legend in the bottom right. If it's 15, divide the columns
and rows by 15 and multiply by 10. Keep doing this until there's about 10 hexes
(which is 10 1-mile hexes) in the legend. Then check from 0 to 20. If there's
21 hexes there, divide both numbers by 21, multiply by 20. Repeat the process
until you're happy with your grid sizing.

Now, we can measure distance!

I count ~42 miles from Isfjall to Logiheimli. If the party is moving at Move 4
(medium encumbered ponies), then they move 3 mph. Assuming we're using the
rules from *Getting There Quickly* (DFE17) (otherwise, why did they invest
points into navigation, weather sense, and hiking in what was billed as an
outdoorsy adventure), it's easy enough to convert decreased travel time as
increased travel rate. DF16 does the same thing, basically.

Successful navigation, weather sense, and the party's worst hiking, each give
10% bonus *speed*. Reroll daily. Say they get two successes: they're moving at
3.6 mph.

If they travel for 12 hours, they can make it to Logiheimli before camping.
Weird.

DF16 gives *much* slower travel speeds: Plains (which is what this looks like)
is Move/2. That would put our base mph at 2, and our modified mph at 2.4.
They'd need to travel for 17.5 hours before arriving, which gives us two days
of wilderness encounters (or 1 day if they push hard). Much better.

But how long can they travel for? HoJ:29 has a climate table (which we'll use
to generate the weather each day, including the precipitation, which slows
travel), and that climate table includes daylight hours by month. October is
listed as having 11 daylight hours, and the internet says that in iceland the
sun rises on October 1st at ~8am and sets at ~7pm, if your players want to be
specific (mine did).

That gets us 11 daylight hours, but can the party travel at night? Why not -
they have continual light (daylight) and a few of them have so much Night
Vision that they see just as well in moonlight as they do in daylight.

So, if daylight isn't a problem (for the players themselves), how long can they
hike before they start suffering FP penalties?

DF16:23 gives guidance:

> If even one person knows Survival (for huge groups, the GM may require one in
> 10 to have it), the group needs half an hour to strike camp; three hours for
> meals and so on; half an hour to pitch camp; and eight hours for sleep. 12
> hours/day. \
> \
> If racial traits, magic, etc. mean that nobody sleeps (including any
> beasts!), there’s no camping, either; the day consists of alternating travel
> and breaks. To calculate travel time, use the same fraction of the day not
> spent in camp (8/14 or 12/15), apply it to the day’s full 24 hours, and round
> to the nearest hour. 14 hours/day without Survival, 19 hours/day with
> Survival.

Okay, so as it turns out, you can hike indefinitely at no FP penalty; what you
really need is precious sleep. We need 8 hours for sleep, and 4 hours for other
stuff (eating, unpacking, packing, fetching water, etc).

Starting to come together. This means that a reasonably organized group with
survival who is maximizing daylight to travel would:
+ Wake up 90 minutes before sunrise (at 6:30am), break down camp, and eat
  breakfast.
+ Set off at 8am
+ Have lunch sometime during daylight for 1h.
+ Stop hiking at sunset (7pm).
+ Set up camp (7:30pm). Eat food (8:30pm).
+ Go to bed at 10:30pm

This gives the party two hours of time at the end of their day for shenanigans
like casting spells, and they're free to move that buffer to the beginning of
their day (wake up at 4:30am, go to bed at 8:30pm) so their wizard has more
time to get buffs up before sunrise.

This is *GM facing*. You don't need to tell the players the clock time of when
they're getting up and going to bed. I write it in my session summaries so the
*players* have something to anchor to, but the *characters* just know they're
getting up before sunrise and going to bed after sunset, and that suits delvers
just fine.

This also allows you to *dunk* on the party wizard when they complain that they
should have more time in the morning to cast spells and rest without slowing
everyone down. Feel free to show them this work exactly. Be proud. Note: this
didn't happen to me... yet.

At any rate - 10 hours of daylight hiking, or 12 hours of total hiking if they
don't care about daylight. As someone who *previously* knew nothing about
hiking treks, if you're going to give your rates in miles/hour, you have to
also give out *hours* and *miles*, otherwise the rate is useless. It would have
been *very* nice to have guidance about how many hours the delvers can hike per
day (and a blurb about what to do if they want to hike in the dark), as well as
specific distances from Isfjall to Logiheimli to the Hall.

### Forking Paths

Speaking of which, there are *multiple* paths from Isfjall to the Hall. Why?

There's a path that goes straight from Isfjall to the hall, a path that goes
North from Logiheimli to the hall, and a path that goes west from Logiheimli to
the hall.

In the original text, players can only find out how to get to the Hall one way:
invoking the tiwstakn+map+oath ritual. The book says that "Logiheimli contains
clues as to the Hall's location". Here are those clues:

+ For each ruin, a scrap of parchment, clay or stone tablet, or an item
  that can be used as the subject of the History spell which reveal the pathway
  to the bridge across the river leading to the Lost Hall. -HoJ:33
+ A polished stone slab contains an etching of the hall itself that will give
  bonuses to Navigation and the first real image of the Lost Hall in recent
  memory. -HoJ:33

For the first, *that isn't how History works*. History's first four levels of
effect cost 3, 5, 8, and 10 FP respectively, and reveal an item's history going
back one day, one week, one month, and 1 year respectively. I might let a
Magery 5 Wizard cast History for 15 FP and learn the last 10 years of history
of an item (Talent and Effect, DFS11). The items that this passage are
referring to have been sitting dormant for 437 years. Their last year of
History would be *very boring*.

Meanwhile, getting a Navigation bonus *doesn't help*. The characters *don't
know where the Hall is*.

It feels like the intention is the following decision tree:

+ If you do the tiwstakn+map+oath ritual, you learn the Isfjall to Hall route.
+ If you decide to go to Logiheimli, you can choose to either go west (shorter
but colder), or north (longer but warmer).

Yet, it's not clear how that decision is player-facing. They'll learn the path
from the ritual, and they'll do that at Isfjall. They'll gain the knowledge of
the straight-to-the-Hall path. If they decide to go to Logiheimli *anyway*, and
then perform the ritual, they'll discover the western path.

In [mshrm's very useful
playthrough](https://mshrm.wordpress.com/2020/01/05/dungeon-fantasy-nordlond-4-distractions/)
, they tweaked the Logiheimli Temple reward. Here's the polished stone slab
from above, but in their campaign:

> Taking a closer look around the room, now that the excitement of the moment
> was over, they discovered a large map of the area etched into stone. It
> revealed a secret shortcut through the mountains into the area of the Hall of
> Judgement, bearing west from Logiheimli, rather than north, as they had
> intended. It looked like this pass would cut quite a distance off their
> journey.

mshrm's blog doesn't detail how they figured out where the hall was: though I
suspect they're playing with less detail than my group demands:

> The plan is to head north, out of town, and keep to the lowlands for as long
> as possible. There appears to be a river that they plan to follow into the
> heart of the mountains, in the area where Tyrthegn believes the Hall to be
> located. 

Geirolf telling my players "go northwest after the river ends, I think the hall
is probably somewhere in this region" would be met with much hemming and hawing
and gnashing of teeth at my table. In ~2017 or so, we once spent a few hours
figuring out *just how long* it would take them to explore a large forest to
find a hidden plague cult entrance, given that all they knew was that it was
*somewhere in the forest*. It takes *bloody forever*. Add that the Hall is also
illusioned and the area is swarming with fae? Forget about it. Not going to
fly.

So! We fixed the "Where is the Hall" problem in the first post. Geirolf knows
exactly where it is. The party knows where it is too, and they either can cast
Pathfinder or they have 4 scrolls of Pathfinder (and can buy more). All that's
left is to decide whether or not to get rid of the northern path to reduce
complexity or leave it in.

I think it's cool enough to keep, and we should steal mshrm's idea. We make the
following changes:

+ We cut the ruined tablets and whatnot; they didn't make sense anyway.
+ The stone slab shows a depiction of the tiwstakn+map ritual. Performing the
  ritual in front of it opens a *magic gate* to a subterrain cave that quickly
  exits to a secret passage to the west. This path is shorter than going north
  from Logiheimli to the Hall or going back to Isfjall and then straight to the
  Hall. Have the portal bless them with +1 Navigation (higher chance of +10%
  speed) for a week.

## Climate
HoJ:27-29 gives us higher resolution survival rules than the ones found in
DFE70. Let's math some of this out for october.

Here are the probabilities for the temperature zones for the lowlands:

| Zone               | Probability |
| ------------------ | ----------- |
| Uncomfortably Hot  | 5%          |
| Comfortable        | 69%         |
| Uncomfortably Cold | 26%         | 

It precipitates 26% of the time. When it does, the temperature zone gets one
worse. That means the effective probabilities (with the associated penalties
and failure results) are:

| Zone               | Probability | HT Penalty | Fail    |
| ------------------ | ----------- | ---------- | ------- |
| Uncomfortably Hot  | 4%          | -4         | 1d+2 FP |
| Comfortable        | 53%         | None       | None    |
| Uncomfortably Cold | 36%         | -4         | 1d+2 FP |
| Lethally Cold      | 7%          | -10        | 1d+2 FP | 

Here's how we use the chart. We roll against HT (with the above penalty) in the
following circumstances:

+ After a hike
+ After setting up camp
+ After a night's sleep

According to our travel schedule, we'll be rolling four times:

+ 6:30am when they wake up
+ 1:00pm when they stop for lunch
+ 7:00pm when they stop for the day
+ 7:30pm when they set up camp.

The HT rolls are modified by:

+ Activity: +5 for being active like hiking
+ Clothing: Unmodified for winter clothing (what qualifies winter clothing? I
  see it in DFA70 as well.). Bonuses for layers.
+ +1 for a campsite, +2 for having a tent, +2 for sharing that tent, +2 for a campfire

Okay so, Let's look at a Bog-standard 12-HT person. Assessing the modifiers for
their 4 rolls:

+ 6:30am when they wake up. +1 for a campsite (someone probably made the
  survival roll), +2 for having a tent, +2 for sharing the tent, +2 for a
  campfire. +1 for blanket. +8 total.
+ 1:00pm when they stop for lunch. +5 for hiking, +1 for blanket. +6 total.
+ 7:00pm when they stop for the day. +5 for hiking, +1 for blanket. +6 total.
+ 7:30pm when they set up camp. +8 as in the 6:30am situation.

So, they're camping HT+4 in Uncomfortably Cold weather (98% success) and HT-2
in Lethally Cold weather (50%). They're hiking at HT+1 in Uncomfortably Cold
weather (84%) and HT-5 (16%) in Lethally Cold weather.

This means that on an Uncomfortably Cold day, Bog-Standard expects to lose
`(0.02 * 5.5)*2 + (0.16 * 5.5) * 2 = 1.98` FP.

On a Lethally Cold day, Bog-Standard expects to lose `(0.5 * 5.5)*2 + (0.84 *
5.5)*2 = 14.74` FP. Ouch.

Bog-Standard probably ought to get themselves a few more layers of clothing for
those lethally cold days.

Next question: what happens if you lose FP - how do you recover it? Unclear. It
would be silly and mechanic-defeating if you just started recovering it
immediately. The simpler rules for temperature on DFE70 state:

> To recover from temperature fatigue, go someplace where no HT roll is
> required for cold or heat, as the case may be; then you’ll regain FP
> normally. Camp will do...

But here, that also makes little sense - it ends up invalidating most of our
rolls. You fail your set-up-camp roll, and then just recover the lost FP
immediately. You fail your wake-up roll, and then relight the fire and recover
before setting out. This can't happen in the DFE70 rules since as soon as you
leave the warmth, you need to reroll.

Additionally, I'm not jazzed about the weather rules only effectively mattering
on lethally cold days - the FP penalties just aren't high enough or probable to
matter on Uncomfortably Cold days. For Lethally Cold days, the PCs need the
Warmth spell (Power Investiture 1, free to maintain, +3 to HT), and a few more layers.

This happened our first few sessions before I tossed it out.

### What to do about it?
Let's revert back to the temperature rules on DFE70. They reference *Winter
Clothing*, which still isn't defined, and *Genuine Arctic Clothing*, which
isn't defined either, but otherwise the system is abstract, easy to run, and
coherent.

As it happens, I think this is an error in DFRPG. Actic Clothing and Winter
Clothing are defined on DF16:16, copied here for your convenience:

+ Arctic Clothing: Counts as Winter Clothing and gives +5 to HT rolls
  for cold in arctic climates. Also gives +1 DR vs. all
  damage, but -1 to DX if layered with armor. $240, 10lbs
+ Winter Clothing: Prevents -5 to HT rolls for cold in icy places such as
  arctic and high mountain terrain, and gives +1 DR vs. cut damage. $180, 5lbs
+ Regular Clothing: No benefits, but you still should wear them. $120, 2lbs

Everyone gets a set of Regular Clothing for free, so the idea is that player
can upgrade at chargen to winter or arctic for $60 (and 3lbs) or $120 (and
8lbs) respectively. I think SJG must have forgot that arctic/winter clothing
wasn't in DFA when they wrote DFE, since both books came after DF16.

Anyway, no harm in importing those, and it streamlines the whole thing.

The only thing we need to run the DFE70 Temperature rules is a HT penalty and
whether or not folk's clothes are wet. Let's say the penalty is -2 in Isfjall
and the Lowlands (in october), -4 in the Hills and Valleys, and -8 in the
Frostharrow. How's Bog-Standard looking now?

Lowlands:

![Bog-Standard In the Lowlands](/images/bog-standard-lowlands.png)

Hills and Valleys:

![Bog-Standard In the Hills and Valleys](/images/bog-standard-hills.png)

Frostharrow:

![Bog-Standard In the Frostharrow](/images/bog-standard-frostharrow.png)

Now this is looking interesting! It provides a nice reward for the folks
willing to pack arctic gear and prepare magic, while simultaneously giving a
bell curve of penalties out to folks when it's narratively dramatic.

If you *crave* weather variance other than precipitation, use the above
modifiers (-2 for lowlands, -4 for Hills and Valleys, -8 for Frostharrow) as
the *base* modifiers, and then add 2dF. If you're not familiar with the
notation, it's from
[FATE](https://fate-srd.com/fate-core/taking-action-dice-ladder#rolling-the-dice).
To use regular 6-siders, treat a 1 or 2 as a -1, a 3 or 4 as a 0, and a 5 or 6
as a 1. Alternatively, roll 2d3-4; it's the same distribution.

![Weather Variance](/images/weather-variance.png)

For instance, you're in the Hills and Valleys, so your base modifier is -4.
You roll 2d, and the result is (2,3) That's interpretted as (-1, 0), which sums
up to -1, which makes the total modifier -5.

To generate the graphs (and play with distributions) like above, the tool
you're looking for is [anydice](https://anydice.com/). The syntax to inspect
the FP penalty of an area is `output [lowest of 0 and x-3d6]` where `x` is the
characters HT minus the penalty. For Bog-Standard's 12 HT, and the
Hill and Valley's -4 penalty, it was `output [lowest of 0 and 8-3d6]`

## Random Wilderness Encounters
The encounter rules state: "Each day, roll on the encounters table". The
conflict columns are half as likely as the locations-and-weather columns, and
are 1/3 as likely as the animals-and-men columns.

Rules as Written, our example group with Move 4, trekking ~10 hours a day makes
it to Logiheimli in two days, so they'd get two encounters.  Our group moves at
(let's average and give them a 10% speed boost), 3.3 mph through lowlands,
1.47mph through the hills, and 0.73mph through the frostharrow. Let's simulate
out a trip log:

+ Day 1 - No Rain - Lowlands - 33 miles (12 miles left): Giant's Skull
+ Day 2 - No Rain - Lowlands - 12 miles: Wild Boar. Arrive at Logiheimli. Find
  western shortcut. Route takes 21 more miles through the lowlands, 54 miles
  through the hills, and 43 miles through the frostharrow.
+ Day 3 - No Rain - Lowlands for the first 6.36 hours (21 miles), Hills for the
  other 3.64 hours (5.35 miles, 48.65 miles left): Ruined Hut
+ Day 4 - No Rain - Hills - 14.7 miles (33.95 miles left): Solitary Trapper
+ Day 5 - Rain - Hills - 7.35 miles (26.6 miles left): Drunk Warrior
+ Day 6 - No Rain - Hills - 14.7 miles (11.9 miles left): No Campsite
+ Day 7 - No Rain - Hills for the first 8.1 hours (11.9 miles), frostharrow for
  1.9 hours (1.39 miles, 41.61 miles left): Drunk Warrior
+ Day 8 - No Rain - Frostharrow - 7.3 miles (34.31 miles left): Hot Spring
+ Day 9 - Rain - Frostharrow - 3.65 miles (30.66 miles left): No Campsite
+ Day 10 - No Rain - Frostharrow - 7.3 miles (23.36 miles left): Predator
+ Day 11 - No Rain - Frostharrow - 7.3 miles (16.06 miles left): Mylja Ormur
  (woah!)
+ Day 12 - No Rain - Frostharrow - 7.3 miles (8.76 miles left): Rockslide
+ Day 13 - No Rain - Frostharrow - 7.3 miles (1.46 miles left): No Campsite
+ Day 14 - No Rain - Frostharrow - 1.46 miles. Make it to the rope bridge!

See the same sort of pacing/cadence problem that I do? Every day has an
interesting event, never more, never less. 

If you read the first few paragraphs of [mshrm's group's journey to
Logiheimli](https://mshrm.wordpress.com/2020/01/05/dungeon-fantasy-nordlond-4-distractions/),
you may note that they immediately tossed the contept of one encounter per day.
On their first day out, mshrm gave his group a variation of the Circling Ravens
encounter, then followed that up with the Ruined Hut, then Skeletons. Stringing
these together into a sequence makes for a more compelling narrative than just
following random encounter rules, which feel flat and oddly paced.

Take a gander at the above log and compare it to mshrm's group. There's a
trivial fight against a solo wild boar on day 2 (first fight of the campaign).

Logiheimli should be exciting, then the next potential fight is Day 6 (No
Campsite) if the party presses into the Thurs. Day 9 has the same No Campsite
shindig. Day 10 has a trivial encounter in a solo mountain cat, then a very
exciting encounter with a Mylja Ormur on day 11. No Campsite again on day 13.

There are a couple of design problems here, in my opinion. The first is that
these encounters *require prep.* You're a *much* better GM than I am if you can
read an encounter like "Cursed Hall", "Faerie Lady", "Hulder", "Death Valley",
or "Drunk Warrior" and do it justice by reading it for the first time after
rolling the dice at the table. So, if you have to prep them, you're probably
making, like I just did, a pre-rolled list of what encounters the players will
run into.

If you're not going to actually rolling encounters at the table in real time,
then now you can fiddle with the list and improve the pacing. You might think
it makes more sense for the players to encounter some Skeletons before
Logiheimli. Or that after they leave, they get the Circling Ravens encounter as
a good omen for cleaning Logiheimli.

If *you're* doing this to craft a cohesive travel narrative, I argue that this
is work that folks with a much better understanding of the world can do better
than you. The author can save 1000 GMs from doing this work 1000 times by doing
it once and including it.

The second is that a lot of these encounters seemed to be designed to either
drain fatigue or cause a few points of damage. In other words, they're fights
against *Fodder* (DFE92). There's a great [Kromm
post](http://forums.sjgames.com/showpost.php?p=2167870&postcount=18) about why
healing has successive -3 penalties, relevant to game design in general.

> If the party can heal fully after every battle, with the only cost being
> downtime to recover FP afterward, they'll turtle up after each clash until
> everyone has full HP and FP. Sitting around like that is boring; not having
> to ask "How many Healing spells can we safely cast?" and "How many healing
> potions can we afford?" (they aren't cheap) eliminates important decisions;
> and never having to enter battle wounded means there's no such thing as being
> worn down (which among other things makes fodder monsters pointless, as they
> can neither drain resources nor become dangerous in their own right to a
> sufficiently tired party). In short, the penalties serve the purposes of
> drama.

But as written, we're going to fight a monster and then go to bed and recover.
1 a day max. Fodder *exists* to wear players down, to *build tension*. If that
tension is *immediately released* by healing up / recovering FP, it's pointless.

I think an encounter like "Howling Wolves" is the prime example of this.

> They will circle the campsite, occasionally drawing near, and howl and make
> noise all night. They will not attack unless attacked first, but they’re loud
> and the characters will find no rest that night.

My players just casted silence on themselves and slept in peace. Say you didn't
do that and everyone got no sleep; what's the penalty? 3 FP (DFE64). That 3 FP
penalty is *completely irrelevant* unless there's some sort of encounter the
next day where they'd *really* like to have those FP. Given that DFRPG doesn't
use Extra Effort in Combat, this is essentially a potential caster tax.

Something like "Howling Wolves" works much better in a system where you have
*multiple* encounters a day (potentially), and if they don't deal with the
wolves one night, they're back the next night for the same shenanigans. Then,
when everyone is nice and tired, there's a battle that is harder than it ought
to be. Maybe some bandits taunt them for the rings under their eyes.

### What to do about it?
There are a couple of paths here. The simplest, I think, is to hand-craft a
travel log inspired by the random encounters and then flesh out the encounters
more. Some days should have multiple things happen. Other days should pass with
a simple montage over the breathtaking scenery.

As for fleshing out the random encounters themselves, the main thing I want to
stress is to give everything a **Lair**. You want the party to run into
bandits? Cool. Where do they live? That's where they keep their loot. If the
party tracks them back to their bandit lair, they find a lot more bandits
(risk), but a lot more loot than the pocket change the bandits had on them
(reward). You want the party to run into Thurs? Again, where is the Thurs
**Lair**. That's where they'll be keeping their little Thurs horde.

The more complex is what I went with. Full deep end. I ended up converting the
whole thing to a hexcrawl, copying the rules wholesale from [Charles
Saeger](http://gurpshexytime.blogspot.com/). The main rules are found in
[urbancrawl](http://gurpshexytime.blogspot.com/2021/10/urbancrawling-in-dungeon-fantasy.html),
[hexcrawl](http://gurpshexytime.blogspot.com/2015/04/current-hex-crawl-procedures.html),
and
[dungeoncrawl](https://gurpshexytime.blogspot.com/2020/06/dungeoncrawl-procedures.html).
He also has [a central link
repository](https://gurpshexytime.blogspot.com/2014/11/central-hex-crawl-link-repository.html)
which was ridiculously valuable. At a high level, the process looked like
converting the Isfjall map to a hex map, and then filling in the hexes:

![Isfjall Hexcrawl](/images/isfjall-hex.png)

In the format suggested by [Roger Sorolla's One Page Wilderness
System](http://rolesrules.blogspot.com/2011/04/one-page-wilderness-system.html).
The system [in
action](http://rolesrules.blogspot.com/2011/04/one-page-wilderness-in-action.html).

![One Page Wilderness System](/images/one-page-wilderness.png)

Populating the hexes was a done by a combination of placing the encounters from
text in reasonable places, using appropriate creatures from the Nordlond
bestiary, and then using the "feature" generator from [Filling in the
Blanks](https://www.drivethrurpg.com/product/325708/Filling-in-the-Blanks).

I'm using 5-mile hexes, and each 25-mile hex (big hex) has 1d6 lairs and 1d6
features, randomly placed. Man-sized creatures should mostly have a range of 1.
Maybe 2 in the mountains. Big monsters get a 2. Smaller monsters get a 0 unless
they're especially mobile. Creatures like Dokkkapa (darkmantles) that don't
roam at all get a range of L.

The other major advantage here is that all of the work remains valuable *after*
they finish the quest. The next quest tells them to go some other place, and
all the Lairs and features are still there. The world has a sense of permanency.

In either case, I can't recommend the Lair concept enough. Things live places,
and that's where they keep their stuff. Players love killing things and taking
their stuff. Even better if they get to *track* where it lives after killing it
and loot it's stuff, or kill more like it. Super satisfying. Charles Saegler
has a whole [giant
document](https://gurpshexytime.blogspot.com/2019/11/happy-thanksgiving-here-is-monsters-and.html)
on the concept - that'll let you build lairs, roll for how many creatures are
roaming out of those lairs (the encounter), and roll for how much stuff is in
the lair (the loot). If you *just* want the loot charts, [here you
go](http://gurpshexytime.blogspot.com/2018/02/treasure-for-dungeon-fantasy-from-ad.html).

## Wrapping Up
"The Journey" chapter was well-structured and made a lot of sense. It gives
rules for travel, splits the journey into 3 legs (Lowlands, Hills and Valleys,
Frostharrow), and gives a speed calculation and encounter table for each leg.

I ran into trouble because I'm an inside kid that doesn't do a lot of hiking. I
would have just said "Yeah you can probably hike for 15 hours a day; you're
heroes" and been done with it. No clue. Does it take an hour to eat every meal?
No clue. What even is a ration?

That said, when the text gives you a highly specific speed (Move * 0.75 in the
Lowlands, Move/3 in the Hills/Valleys, Move/6 in the Frostharrow), in miles per
hour, that metric isn't useful without knowing the relevant *miles* and the
relevant *hours*. Sure, I can vaguely eyeball it, but then why are we being
so precise about speed? Fuzzy number times precise number equals fuzzy number.

We could have pretty easily said "It takes you 2 days to get to Logiheimli and
14 more days to get to the Frostharrow". What do we gain with the extra
resolution in speed if the miles or the hours aren't well specified? Well, now
they're well specified!

As for the encounters, I think the non-combat ones are very flavorful, and the
combat ones work well as world-building, or for if things get off-the-rails. I
think fleshing them out and connecting them to the broader world would help a
bunch. I also think there's something to be said for running *less* encounters
on the way to the Hall (more "a few days pass by without incident, then..."),
and running more well-fleshed out world-relevant encounters. Have them meet
Elunad or members of Hringur Likklaedsins, the cult we made up in [Rewriting
Isfjall](/posts/rewriting-isfjall).

At any rate, same as last time, hopefully this helps. Hopefully it helps both
GMs looking to run Hall of Judgement, as well as folks looking to write their
own modules trying to understand how it looks from the side of someone trying
to absorb your writing. One last post is planned on rewriting Logiheimli.

