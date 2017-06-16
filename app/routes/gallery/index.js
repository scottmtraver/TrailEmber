import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.get('store').findAll('photo');
  },
  actions:{
    savePhoto: function(url){
        let c = this.store.createRecord('photo', { imageUrl: url, isActive: true });
        c.save();
    },
  }
});
