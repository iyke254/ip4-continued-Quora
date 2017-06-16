import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('questions'),
      answers: this.store.findAll('answers');
    });
  },
  actions: {
    saveQuestions3(params) {
      var newQuestions = this.store.createRecord('questions', params);
      newQuestions.save();
      this.transitionTo('index');
    }
  }
})
