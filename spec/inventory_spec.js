describe("Add item after delay", function() {
    var noop = function() {};

    beforeEach(function() {
        spyOn(inventory, "addItem");

        jasmine.clock().install();
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it('should add product after delay', function() {
        inventory.addItemAfterDelay(1000, noop, item1);
        expect(inventory.addItem).not.toHaveBeenCalled();

        jasmine.clock().tick(1001);

        expect(inventory.addItem).toHaveBeenCalled();
    });
});



