import Ember from 'ember';

export default Ember.Component.extend({
    sortedRaces: Ember.computed('model', function() {
        return this.get('model').sort(function (a, b) {
            return moment.utc(b.get('date')).diff(moment.utc(a.get('date')))
        })
    })
});
