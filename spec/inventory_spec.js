inventory.addItem(item1, function(data) {
    console.log('data = ', data);
    expect(data).toBeTruthy();
    done();
});



