define(['inventory', 'events', 'lib/matchers'], function(inventory, events, matchers) {
    'use strict';

    var item1 = {
        name: 'Storm Trooper Helmet',
        price: 1000.00,
        quantity: 421,
        upc: 'TK-421'

        };

    var item2 = {
        name: 'Han Solo Vest',
        price: 500.00,
        quantity: 12,
        upc: 'FALCON'
    };

    var item3 = {
        name: 'Boba Fet Mask',
        price: 250.00,
        quantity: 24,
        upc: 'CARBONITE'
    };
    
    describe("Inventory", function() {

        beforeEach(function () {

            jasmine.addMatchers(matchers);
            inventory.clearInventory();
        });
        describe("Add to Inventory", function () {

            it('should return true when item is added to inventory successfully', function (done) {

                inventory.addItem(item1, function(data) {
                    console.log('data = ', data);
                    expect(data).toBeTruthy();
                    done();
                    });
                });




            });

        });


});