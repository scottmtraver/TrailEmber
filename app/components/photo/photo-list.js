import Ember from 'ember';

const PHOTO_INCRAMENT = 15;

export default Ember.Component.extend({
    sortedPhotos: Ember.computed.sort('photos.@each.date', function(a, b) {
        return moment.utc(b.get('date')).diff(moment.utc(a.get('date')));
    }),
    topPhotos: Ember.computed('model.showing', function() {
        let array = this.get('sortedPhotos').slice(0, this.get('model.showing'));
        return array;
    }),
    model: {
        selectedSponsor: null,
        showing: 2
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
        showMorePhotos() {
            this.set('model.showing', this.get('model.showing') + PHOTO_INCRAMENT);
        },
    }
});
