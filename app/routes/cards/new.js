import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    model() {
        return Ember.RSVP.hash({
            card: this.store.createRecord('card')
        });
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
            this.controller.get('model.card').rollbackAttributes();
        }
    }
});