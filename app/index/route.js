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
    update(questions, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key] !== undefined) {
          questions.set(key, params[key]);
        }
      });
      questions.save();
      this.transitionTo('index');
    },
    destroyQuestions(questions) {
      questions.destroyRecord();
      this.transitionTo('index');
    }
  }
})
