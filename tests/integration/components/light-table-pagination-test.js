import EmberObject from '@ember/object'
import { A } from '@ember/array'
import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

const titleSelector = 'h3'
const contentTableSelector = '.tse-content table'

moduleForComponent('light-table-pagination', 'Integration | Component | light table pagination', {
  integration: true,

  beforeEach () {
    this.doNothing = function () {}
    this.set('columns', A([
      EmberObject.create({
        displayName: 'Product Name',
        fieldName: 'name',
        order: 0
      }), EmberObject.create({
        displayName: 'Price',
        fieldName: 'price',
        order: 1
      })
    ]))
    this.set('items', A([
      {
        id: 1,
        name: 'Watch 1',
        price: 50
      }, {
        id: 2,
        name: 'Bike 1',
        price: 500
      }
    ]))
  }
})

test('it renders correct data', function (assert) {
  this.render(hbs`{{light-table-pagination content=items columns=columns noFiltering=true changePage=(action this.doNothing)}}`)

  assert.equal(this.$(titleSelector).text().trim(), 'title')
  assert.equal(this.$(contentTableSelector).text().trim().replace(/\s+/g, ' '), 'Watch 1 50 Bike 1 500')
})

test('it renders with custom action-cell width', function (assert) {
  this.render(hbs`{{light-table-pagination actionsCellWidth="120px" content=items columns=columns noFiltering=true changePage=(action this.doNothing)}}`)

  const $headerRow = this.$(`${contentTableSelector} tr:first`)
  assert.equal($headerRow.find('td').length, 3, 'Three cells in first row (1 for actions, next 2 for content)')
  assert.equal($headerRow.find('td:first').outerWidth(), 120, 'Action cell is 120px')
})

test('it renders without action columns', function (assert) {
  this.render(hbs`{{light-table-pagination hideActionsColumn=true content=items columns=columns noFiltering=true changePage=(action this.doNothing)}}`)

  const $headerRow = this.$(`${contentTableSelector} tr:first`)
  assert.equal($headerRow.find('td').length, 2, 'Two cells in first row (no actions)')
})

test('it renders with edit actions in all rows', function (assert) {
  this.set('editCondition', function () {
    return true
  })
  this.render(hbs`{{light-table-pagination content=items columns=columns noFiltering=true editAction=(action this.doNothing) editCondition=(action this.editCondition) changePage=(action this.doNothing)}}`)

  assert.equal(this.$(contentTableSelector).find('.fa-pencil').length, 2, 'Two edit buttons')
})

test('it renders with edit actions in first row', function (assert) {
  this.set('editCondition', function (row) {
    return row.id === 1
  })
  this.render(hbs`{{light-table-pagination content=items columns=columns noFiltering=true editAction=(action this.doNothing) editCondition=(action this.editCondition) changePage=(action this.doNothing)}}`)

  assert.equal(this.$(contentTableSelector).find('.fa-pencil').length, 1, 'Edit buttons only in first row')
})
