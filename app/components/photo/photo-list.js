import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        imageUploaded(event, data) {
            var url = data._response.result.secure_url;
            this.sendAction('savePhoto', url);
        },
    }
});
