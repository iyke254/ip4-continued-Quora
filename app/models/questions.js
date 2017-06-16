import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  query: DS.attr(),
  details: DS.attr()
});
