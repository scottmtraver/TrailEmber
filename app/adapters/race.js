import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  uploadResults(model, params) {
    const url = this.buildURL('results');
    return this.ajax(url, 'POST', { data: params.file });
  }
});
