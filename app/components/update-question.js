import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionsForm() {
      this.set('updateQuestionsForm', true);
    },
    update(questions) {
      var params = {
        name: this.get('name'),
        query: this.get('query'),
        details: this.get('details'),
      };
      this.set('updateQuestionsForm', false);
      this.sendAction('update', questions, params);
    }
  }
});
