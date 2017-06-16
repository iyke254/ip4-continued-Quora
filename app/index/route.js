import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('questions');
  },
  actions: {
    saveQuestions3(params) {
      var newQuestions = this.store.createRecord('questions', params);
      newQuestions.save();
      this.transitionTo('index');
    },
    destroyQuestions(questions) {
      questions.destroyRecord();
      this.transitionTo('index');
    }
  }
})
