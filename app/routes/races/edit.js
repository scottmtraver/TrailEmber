import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return Ember.RSVP.hash({
      race: this.store.find('race', params.race_id),
      venueOptions: this.store.findAll('venue'),
      sponsorOptions: this.get('store').query('sponsor', { filter: { is_active: true }})
    });
  },
  actions:{
    save: function(race){
      race.save().then(() => {
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

