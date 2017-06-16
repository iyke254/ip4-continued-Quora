import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(questions) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestions', questions);
      }
    },
    destroyAnswer(answer) {
      this.sendAction('destroyAnswer', answer);
    }
  }
});
