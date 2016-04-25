define(function() {
    'use strict';

    var inventory = {

        myInventory: [],

        addItem: function(myItem) {

            this.myInventory.push(myItem);

            return true;

        },

        removeItem: function(myItem) {

            var i = 0;
            
            for( i = 0; i < this.myInventory.length; i++) {
                if( this.myInventory[i].upc == myItem.upc) {
                    this.myInventory[i].quantity -= 1;
                    return true;
                }
            }

            return false;

        }

    };

    console.log('My Inventory App');

    return inventory;
})