import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.store.createRecord('sponsor');
  },
  actions:{
    save: function(newSponsor){
      newSponsor.save().then(() => {
        this.transitionTo('sponsors');
      });
    },
    cancel: function(){
      this.transitionTo('sponsors');
    },
    willTransition() {
      this.controller.get('model').rollbackAttributes();
    }
  }
});
