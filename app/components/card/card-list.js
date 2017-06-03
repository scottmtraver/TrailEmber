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
            //this is aweful
            this.get('model').filterBy('isActive', true).sortBy('order').forEach((c, i) => {
                c.set('order', i + 2);
            });
            card.set('order', 0);
            this.get('model').filterBy('isActive', true).sortBy('order').forEach((c, i) => {
                c.set('order', i + 1);
            });
            this.get('model').save();
        }
    }
});
