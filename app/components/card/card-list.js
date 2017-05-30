import Ember from 'ember';

export default Ember.Component.extend({
    sortedCards: Ember.computed.sort('model.@each.order', function(a, b) {
        return Number(a.get('order')) > Number(b.get('order'));
    }),
    actions: {
        moveToTop(card) {
            if(card.get('order') === 1) {
                return;
            }
            this.get('model').filterBy('isActive', true).sortBy('order').forEach((c) => {
                c.set('order', c.get('order') + 1);
            });
            card.set('order', 1);
            this.get('model').save();
        }
    }
});
