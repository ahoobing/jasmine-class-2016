define(['inventory'], function(inventory) {
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

        beforeEach(function() {

            inventory.clearInventory();
        });
        describe("Add to Inventory", function() {

            it('should return true when item is added to inventory successfully', function() {

                expect(inventory.addItem(item1)).toBe(true);
            });

        });

        describe("Remove from Inventory", function() {

            it('should return true when item is removed from the inventory successfully', function(){

                inventory.addItem(item1);
                expect(inventory.removeItem(item1)).toBe(true);
            });

            it('should decrement the quantity number when an item is removed successfully', function() {
                inventory.addItem(item1);
                inventory.removeItem(item2);

                expect(inventory.getQuantity('TK-421')).toEqual(420);
            })

        describe("Initialize", function() {

            it('should initialize the inventory with no products', function() {

                expect(inventory.listItems().length).toBe(0);
            });
        });

        describe("Retrieval", function() {
            it('should get all of the products when user requests them', function() {
                var itemList = [item1, item2];
                inventory.addItem(item1);
                inventory.addItem(item2);

                itemList.forEach(function(item){
                    expect(inventory.listItems()).toContain(item);
                });
            });
        });

        });
    });
});