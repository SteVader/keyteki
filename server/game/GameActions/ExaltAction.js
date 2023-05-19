const AddTokenAction = require('./AddTokenAction');

class ExaltAction extends AddTokenAction {
    setDefaultProperties() {
        this.amount = 1;
    }

    setup() {
        this.targetType = ['creature'];
        this.name = 'exalt';
        this.effectMsg = 'exalt {0}';
    }

    canAffect(card, context) {
        return this.amount > 0 && card.location === 'play area' && super.canAffect(card, context);
    }

    getEvent(card, context) {
        let player = this.player || context.player.opponent;
        return super.createEvent(
            'onExalt',
            { card: card, context: context, amount: this.amount },
            () => {
                let extra = 0;
                if (this.amount > 0 && player.anyEffect('exaltOneMoreFromPool')) {
                    extra = 1;
                }

                card.addToken('amber', this.amount + extra);
            }
        );
    }
}

module.exports = ExaltAction;
