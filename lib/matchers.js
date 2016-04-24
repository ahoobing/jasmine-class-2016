define(function() {

    var custMacher = {

        toHaveProduct: function() {

            return {
                compare: function compare(actual) {
                    var result = {};

                    result.pass = false;

                    if(actual.quantity > 0) {
                        result.pass = true;
                    }

                    return result;
                }
            }
        }
    };

    return custMacher;
})