import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import moment from 'moment';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.get('store').findAll('photo');
  },
  actions:{
    savePhoto: function(url){
        let c = this.store.createRecord('photo', { imageUrl: url, isActive: true, date: moment(new Date()).format('YYYY-MM-DD') });
        c.save();
    },
  }
});
