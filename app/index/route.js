import Ember from 'ember';

var questions = [{
  id: 1,
  name: "Pablo Escobar",
  query: "Why Though",
  details: "I was one of the richest men in the world now am broke"
}, {
  id: 2,
  name: "Pablo Escobar",
  query: "Why Though",
  details: "I was one of the richest men in the world now am broke"
}, {
  id: 3,
  name: "Pablo Escobar",
  query: "Why Though",
  details: "I was one of the richest men in the world now am broke"
}];

export default Ember.Route.extend({
  model() {
    return questions;
  },
})
