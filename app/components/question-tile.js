import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(questions, params) {
      this.sendAction('update', questions, params);
    },
    delete(questions) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestions', questions);
      }
    }
  }
});
