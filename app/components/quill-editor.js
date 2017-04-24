import Ember from 'ember';

export default Ember.Component.extend({
  quill: null,
  didInsertElement: function () {
    this.quill = new Quill($(this.element).find('.full-editor')[0], {
      modules: {
        'multi-cursor': true,
        'toolbar': {container: $(this.element).find('.full-toolbar')[0]},
        'link-tooltip': true
      },
      theme: 'snow'
    });

    var self = this;
    this.quill.on('text-change', function  (delta, source) {
      self.set('text', self.quill.getHTML());
    });
  }
});
