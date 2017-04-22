import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return Ember.RSVP.hash({
      card: this.store.find('card', params.card_id)
    });
  },
  actions:{
    save: function(card){
      card.save().then(() => {
        this.transitionTo('cards');
      });
    },
    cancel: function(){
      this.transitionTo('cards');
    },
    willTransition() {
      this.controller.get('model.card').rollbackAttributes();
    }
  }
});

