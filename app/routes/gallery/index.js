import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import moment from 'moment';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  notify: Ember.inject.service('notify'),
  model() {
    return this.get('store').query('photo', { filter: { is_active: true }});
  },
  actions:{
    savePhoto: function(url){
        let c = this.store.createRecord('photo', { imageUrl: url, isActive: true, date: moment(new Date()).format('YYYY-MM-DD') });
        c.save().then(() => {
          this.get('notify').success('Photo Uploaded');
        });
    },
    deletePhoto: function(photo){
        photo.set('isActive', false);
        photo.save().then(() => {
          this.get('notify').success('Photo Deleted');
        });
    },
  }
});
