
define(['events'], function(events) {
    'use strict';

    var myInventory = [];

    var inventory = {


        addItem: function(myItem) {

            myInventory.push(myItem);
            events.publish('addedItem', myItem);

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
        },

        getQuantity: function(upc) {
            var i = 0;
            for( i = 0; i < myInventory.length; i++) {
                if (myInventory[i].upc === upc) {
                    return myInventory[i].quantity;
                }
            }
        }


    };

    console.log('My Inventory App');

    return inventory;
})