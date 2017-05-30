import Ember from 'ember';

export default Ember.Component.extend({
    sortedCards: Ember.computed.sort('model.@each.order', function(a, b) {
        return Number(a.get('order')) < Number(b.get('order'));
    })
});
