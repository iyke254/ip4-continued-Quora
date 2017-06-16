import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(questions, params) {
      this.sendAction('update', questions, params);
    }
  }
});
