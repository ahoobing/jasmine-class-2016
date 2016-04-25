
spyOn(events, 'publish').and.throwError('MYERROR');
expect(function() {inventory.addItem(item1)}).toThrowError('MYERROR');

