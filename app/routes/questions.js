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
      var answer_deletions = questions.get('answers').map(function(answer) {
        return answer.destroyRecord();
      });
      Ember.RSVP.all(answer_deletions).then(function() {
        return questions.destroyRecord();
      });
      this.transitionTo('index');
    },
    destroyAnswer(answer) {
      answer.destroyRecord();
      this.transitionTo('index');
    },
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var questions = params.questions;
      questions.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return questions.save();
      });
      this.transitionTo('questions', questions);
  }
}
});
