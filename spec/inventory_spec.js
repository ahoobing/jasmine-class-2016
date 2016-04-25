spyOn(events, 'publish');
inventory.addItem(item1);
expect(events.publish).toHaveBeenCalledWith(jasmine.any(String), jasmine.any(Object));


