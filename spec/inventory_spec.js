define(['inventory', 'events', 'lib/matchers'], function(inventory, events, matchers) {
    'use strict';

    expect(inventory.addItem(item1)).toBe(true);
    expect(inventory.getItem('TK-421')).toHaveProduct();



   