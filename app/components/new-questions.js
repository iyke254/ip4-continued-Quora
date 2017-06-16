import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestions: false,
  actions: {
    questionsFormShow() {
      this.set('addNewQuestions', true);
    },
    saveQuestions1() {
      var params = {
        name: this.get('name'),
        query: this.get('query'),
        details: this.get('details'),
      };
      this.set('addNewQuestions', false);
      this.sendAction('saveQuestions2', params);
    }
  }
});
