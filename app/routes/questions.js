import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('questions', params.questions_id);
  },
  actions: {
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
});
