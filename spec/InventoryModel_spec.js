define(['InventoryModel', 'backbone'], function(InventoryModel, backbone) {
    'use strict';



    describe("InventoryModel Test", function() {

        beforeEach(function() {
            this.myModel = new InventoryModel();
        });

        it('should have the correct default values', function() {
            expect(this.myModel.defaults.inventory).toBeDefined();
        });

        it('should have a method called addItem', function() {
            expect(this.myModel.addItem).toBeDefined();
        });

        it('should have a method called removeItem', function() {
            expect(this.myModel.removeItem).toBeDefined();
        });

        it('should call model.set when adding an item', function() {
            spyOn(backbone.Model.prototype, "set");
            this.myModel.addItem("foo");
            expect(backbone.Model.prototype.set).toHaveBeenCalledWith("inventory", "foo");

        });

        it('should call model.set with empty string when the item is removed', function() {
            spyOn(backbone.Model.prototype, "set");
            this.myModel.addItem("foo");
            this.myModel.removeItem();
            expect(backbone.Model.prototype.set).toHaveBeenCalledWith("inventory", "");

        })

    });

});