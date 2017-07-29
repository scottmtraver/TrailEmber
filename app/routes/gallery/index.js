import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import moment from 'moment';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  notify: Ember.inject.service('notify'),
  refresh: null,
  model() {
    return Ember.RSVP.hash({
      photos: this.get('store').query('photo', { filter: { is_active: true }}),
      sponsorOptions: this.get('store').query('sponsor', { filter: { is_active: true }}),
    });
  },
  actions:{
    refreshRoute: function () {
        this.set('model.refresh', setTimeout(() => {
          window.location.reload();
        }, 1000));
    },
    savePhoto: function(url, sponsorId){
      //convert url to have branded image
      //w_80,g_south_east,x_5,y_5,l_
      //"https://res.cloudinary.com/high-peak-solutions/image/upload/v1499745023/gtu03ix9thhh6ahwqt8o.jpg"
        if(sponsorId) {
          let brand = 'w_80,g_south_east,x_5,y_5,l_' + sponsorId;
          let split = url.split('/');
          split.splice(split.length - 2, 0, brand);
          let brandedUrl = split.join('/');
          let c = this.store.createRecord('photo', { imageUrl: brandedUrl, isActive: true, date: moment(new Date()).format('YYYY-MM-DD') });
          c.save().then(() => {
            this.get('notify').success('Photo Uploaded');
          });
        } else {
          let c = this.store.createRecord('photo', { imageUrl: url, isActive: true, date: moment(new Date()).format('YYYY-MM-DD') });
          c.save().then(() => {
            this.get('notify').success('Photo Uploaded');
          });

        }
    },
    deletePhoto: function(photo){
        photo.set('isActive', false);
        photo.save().then(() => {
          this.get('notify').success('Photo Deleted');
          clearTimeout(this.get('model.refresh'));
          this.set('model.refresh', setTimeout(() => {
            window.location.reload();
          }, 3000));
        });
    },
  }
});
