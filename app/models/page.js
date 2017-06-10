import DS from 'ember-data';

import attr from 'ember-data/attr';

export default DS.Model.extend({
  title: attr('string'),
  content: attr('string'),
  imageUrl: attr('string'),
  videoUrl: attr('string'),
  resultsUrl: attr('string', { defaultValue: '' }),

  uploadResults(params) {
    const adapter = this.store.adapterFor(this.constructor.modelName);
    return adapter.uploadResults(this, params);
  }
});