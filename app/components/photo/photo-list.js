import Ember from 'ember';

export default Ember.Component.extend({
    sortedPhotos: Ember.computed.sort('model.@each.date', function(a, b) {
        return moment.utc(b.get('date')).diff(moment.utc(a.get('date')));
    }),
    actions: {
        imageUploaded(event, data) {
            var url = data._response.result.secure_url;
            this.sendAction('savePhoto', url);
        },
        deletePhoto(photo) {
            this.sendAction('deletePhoto', photo);
        },
    }
});
