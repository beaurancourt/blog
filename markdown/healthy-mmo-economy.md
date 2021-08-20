I'll start with a physical metaphor: a kitchen sink. A kitchen sink has three
parts: a faucet, a basin, and a drain.  The faucet pours water in the basin
where it can pool up. The drain removes water from the basin. If the faucet is
outpacing the drain, the basin will overflow. If the drain outpaces the faucet,
then the only water available is the stuff coming out of the faucet *right now*.

In an MMO, the *world* is the faucet, the auction house is the basin, the
activities are the drain. Take, for example, games with potion-type
consumables. Players gather herbs and oils (or whatever else) by gathering them
from the world. Then, they craft these herbs into potions and place those on
the market. Other players purchase those potions for in-game benefit (maybe
they're raiders), and *consume* them, essentially draining the system of those
materials and potions.

If the rate of supply of potions is roughly equal to the rate of demand of
potions, then the market availability of potions will remain constant. We call
the amount of outstanding availability of potions (or any asset) at any one
point in time `liquidity`, in finance. The more liquidity a market has
(analogous to the steady-state amount of water in the basin), the more stable
the price is. The more stable the price is, the easier it is for average players
to accurately estimate the value of goods, participate in the market, and avoid
scams.

MMO faucets and sinks can also be self-adjusting. If there's a bunch of demand
for potions, then the price will go up. As the price goes up, players will
switch to gathering the associated materials and increase supply until
stability is reached.

For reasons *unfathomable* to me, huge MMOs *do not* design their markets and
crafting systems around these basic concepts.

Instead, they might

* create assets that have exceedingly high variance, leading to extremely low
  liquidity like [edgemaster's
  handguards](https://classic.wowhead.com/item=14551/edgemasters-handguards)
* create markets with a finite sink, like crafted equipment in World of Warcraft
* create markets where players create/supply items to chase character power
  (crafting for the sake of leveling a profession) rather than to profit from
  market demand
* create inflationary currency systems where the amount of currency minted by
  the game (dropped by monsters, rewarded by quests) outpaces the amount of
  currency burned by the game (auction fees, repair costs).

Here's how we fix these, in order:

> create assets that have exceedingly high variance, leading to extremely low
  liquidity like [edgemaster's
  handguards](https://classic.wowhead.com/item=14551/edgemasters-handguards)

This one is the easiest: just don't include extremely-rare, extremely powerful
items that randomly drop from ordinary mobs.

> create markets with a finite sink, like crafted equipment in World of Warcraft

This one is a little harder, and needs to be attacked from a couple of angles.
The first is that demand for crafted items dries up as soon as players can get
*better* items from other sources. Demand *also* dries up as soon as the
players already have these items since they are *last forever*. To fix this,
first make it so that Quests and NPCs never award completed items, and instead
reward either rare or *unique* components and patterns used to *craft*
completed items. Something like the [onyxia scale
cloak](https://classic.wowhead.com/item=15138/onyxia-scale-cloak), which requires
a Scale of Onyxia, dropped by the dragon Onyxia. If you want to make sure that
players are unable to equip the best gear without defeating the hardest
content, then only let them *wear* that gear if they've defeated all of the
content that drops all of the materials (or lock access to gear behind
achivements for defeating content).

Second, make that gear *eventually* break through use, and require more of the
same sort of gear to repair it. In order to repair your onlyxia scale cloak, you need to dismantle
another onyxia scale cloak to patch it up.  This creates a gear-sink that
scales with player activity.

> create inflationary currency systems where the amount of currency
minted by the game (dropped by monsters, rewarded by quests) outpaces the
amount of currency burned by the game (auction fees, repair costs)

This one can be solved via dynamically adjusted fee rates, similar to how the fed
controls inflation by adjusting the interest rates of bank-to-bank loans.
Measure the amount of currency changing hands per day per player. If that
number is too high, increase the auction house fee. If that number is too low,
increase the fee. This can be done algorithmically using whatever peroidicity
you prefer!

Boom, now you have functional markets, stable liquidity, and meaningful crafting.

After that, supply your players with the tools they need to have proper price
discovery. Either implement a full order book (buys, sells, buy orders, sell
orders), Or, even simpler, have liquidity pools like
[uniswap](https://info.uniswap.org/#/pools).

Modern wow only has half of the order book - they lack buy orders. Sellers have
to do price discovery by listing items for random prices to see if people will buy
it or not. Much better is if buyers can directly list which prices they're willing
to pay (buy orders).
