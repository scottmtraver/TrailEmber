import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return Ember.RSVP.hash({
      race: this.store.createRecord('race'),
      venueOptions: this.store.findAll('venue'),
      sponsorOptions: this.store.findAll('sponsor')
    });
  },
  actions:{
    save: function(newRace){
      newRace.save().then(() => {
        this.transitionTo('races');
      });
    },
    cancel: function(){
      this.transitionTo('races');
    },
    willTransition() {
      this.controller.get('model.race').rollbackAttributes();
    }
  }
});

