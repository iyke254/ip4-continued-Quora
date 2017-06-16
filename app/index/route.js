import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('questions'),
      answers: this.store.findAll('answer')
    });
  },
  actions: {
    saveQuestions3(params) {
      var newQuestions = this.store.createRecord('questions', params);
      newQuestions.save();
      this.transitionTo('index');
    },
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      newAnswer.save();
      this.transitionTo('index');
    }
  }
})
