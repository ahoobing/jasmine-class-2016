define(function() {
    'use strict';

    var myInventory = [];

    var inventory = {



        addItem: function(myItem) {

            myInventory.push(myItem);

            return true;

        },

        removeItem: function(myItem) {

            var i = 0;
            
            for( i = 0; i < myInventory.length; i++) {
                if( myInventory[i].upc == myItem.upc) {
                    myInventory[i].quantity -= 1;
                    return true;
                }
            }

            return false;

        },

        listItems: function() {

            return myInventory;

        },

        clearInventory: function() {
            myInventory = [];
        }

    };

    console.log('My Inventory App');

    return inventory;
})