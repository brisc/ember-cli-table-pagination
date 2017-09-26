import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('table-pagination', 'Integration | Component | table pagination', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{table-pagination}}`);

  assert.equal(this.$().text().trim().replace(/\s+/g, ' '), 'Pager --> You are on the page # of pages Change page: <Toolbar>');
});
