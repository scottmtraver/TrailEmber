import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return this.store.find('sponsor', params.sponsor_id);
  },
  actions:{
    save: function(sponsor){
      sponsor.save().then(() => {
        this.transitionTo('sponsors');
      });
    },
    setInactive: function(sponsor){
      sponsor.set('isActive', false);
      sponsor.save().then(() => {
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
