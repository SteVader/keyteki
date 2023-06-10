const Card = require('../../Card.js');

class MegaGroke extends Card {
    // Fight: Your opponent loses 1A.
    setupCardAbilities(ability) {
        this.fight({
            gameAction: ability.actions.loseAmber()
        });
    }
}

MegaGroke.id = 'mega-groke';

module.exports = MegaGroke;
