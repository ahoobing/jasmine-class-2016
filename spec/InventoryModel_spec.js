define(['InventoryModel'], function(InventoryModel) {
    'use strict';



    describe("InventoryModel Test", function() {

        beforeEach(function() {
            this.myModel = new InventoryModel();
        });

        it('should have the correct default values', function() {
            expect(this.myModel.defaults.inventory).toBeDefined();
        });
    });

});