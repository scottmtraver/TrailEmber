import Ember from 'ember';

export default Ember.Component.extend({
    sortedPhotos: Ember.computed.sort('photos.@each.date', function(a, b) {
        return moment.utc(b.get('date')).diff(moment.utc(a.get('date')));
    }),
    model: {
        selectedSponsor: null,
    },
    actions: {
        imageUploaded(event, data) {
            var url = data._response.result.secure_url;
            let sponsorImageUrl = this.get('model.selectedSponsor.imageUrl');
            let sponsorCloudinaryId = null;
            if(sponsorImageUrl) {
                let chunk = sponsorImageUrl.split('/');
                sponsorCloudinaryId = chunk[chunk.length - 1].split('.')[0];
            }
            //"https://res.cloudinary.com/high-peak-solutions/image/upload/v1493778050/wrxm0l4vugkjdehahmok.png"
            this.sendAction('savePhoto', url, sponsorCloudinaryId);
        },
        fileProgress(event, data) {
            if(data.loaded == data.total) {
                this.sendAction('refreshRoute');
            }
        },
        deletePhoto(photo) {
            this.sendAction('deletePhoto', photo);
        },
    }
});
