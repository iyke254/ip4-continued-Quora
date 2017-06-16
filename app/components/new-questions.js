import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestions: false,
  actions: {
    questionsFormShow() {
      this.set('addNewQuestions', true);
    }
  }
});
