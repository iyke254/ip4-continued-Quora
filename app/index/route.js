import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('questions');
  },
  actions: {
    destroyQuestions(questions) {
      questions.DestroyQuestions();
      this.transitionTo('index');
    }
  }
})
