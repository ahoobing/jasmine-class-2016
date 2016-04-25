spyOn(events, 'publish');
inventory.addItem(item1);
inventory.addItem(item2);
inventory.addItem(item3);

expect(events.publish.calls.first().args).toEqual(["addedItem", item1]);
expect(events.publish.calls.mostRecent().args).toEqual(["addedItem", item3]);

