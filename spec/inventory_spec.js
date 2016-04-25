spyOn(events, 'publish');
inventory.addItem(item1);
expect(events.publish.calls.any()).toBe(true);

