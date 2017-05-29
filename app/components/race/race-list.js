import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
    sortedRaces: Ember.computed.sort('raceList.@each.date', function(a, b) {
        return moment.utc(b.get('date')).diff(moment.utc(a.get('date')));
    })
});
