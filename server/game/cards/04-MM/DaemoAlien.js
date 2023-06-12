const Card = require('../../Card.js');

class DaemoAlien extends Card {
    // Fight: Look at the top 3 cards of your deck. Put 1 into your hand and 1 on the bottom of your deck.
    // Destroyed: Steal 1A.
    setupCardAbilities(ability) {
        this.fight({
            effect: 'to look at the top 3 cards of their deck',
            gameAction: ability.actions.sequential([
                ability.actions.moveCard((context) => ({
                    destination: 'hand',
                    promptWithHandlerMenu: {
                        activePromptTitle: 'Choose a card to add to hand',
                        cards: context.player.deck.slice(0, 3)
                    }
                })),
                ability.actions.moveToBottom((context) => ({
                    promptWithHandlerMenu: {
                        activePromptTitle: 'Choose a card to move to bottom of deck',
                        cards: context.player.deck.slice(0, 2),
                        message: '{0} adds a card to their hand and moves a card to bottom of deck'
                    }
                }))
            ])
        });

        this.destroyed({
            gameAction: ability.actions.steal({ amount: 1 })
        });
    }
}

DaemoAlien.id = 'dæmo-alien';

module.exports = DaemoAlien;
