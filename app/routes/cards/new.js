import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.createRecord('race');
    },
    actions: {
        save: function (newCard) {
            newCard.save().then(() => {
                this.transitionTo('cards');
            });
        },
        cancel: function () {
            this.transitionTo('cards');
        },
        willTransition() {
            this.controller.get('model').rollbackAttributes();
        }
    }
});
