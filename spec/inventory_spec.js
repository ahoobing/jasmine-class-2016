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
    
    describe("Inventory", function() {
        describe("Initialize inventory", function() {

            it('should clear out the inventory when clearInventory is called', function() {
                inventory.clearInventory();
                expect(inventory.myInventory.length).toEqual(0);
            });

            it('should define myInventory', function() {
                expect(inventory.myInventory).toBeDefined();
            });
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

        });
    })
});