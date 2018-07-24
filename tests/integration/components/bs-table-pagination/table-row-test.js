import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('bs-table-pagination/table-row', 'Integration | Component | bs table pagination/table row', {
  integration: true
})

test('it renders', function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{bs-table-pagination/table-row}}`)

  assert.equal(this.$().text().trim(), '')
})
