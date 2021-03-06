function updateCart(cart) {

    var count = cart.items.length;
    $('#cart-button').text(count);
}

function removeFromCart(restaurantId, itemId, rowNumber) {

    var data = {
        "restaurantId": restaurantId,
        "itemId": itemId
    };

    $.ajax({
        type: "DELETE",
        url: 'cart',
        data: data,
        success: function (cart) {

            updateCart(cart);
            $('#row-' + rowNumber).remove();
            $('#total-price').text('Total Price $ ' + cart.total.toFixed(2));
        }
    });

}

function addToCart(restaurantId, itemId) {

    var data = {
        "restaurantId": restaurantId,
        "itemId": itemId
    };

    $.ajax({
        type: "POST",
        url: 'cart',
        data: data,
        success: function (cart) {
            updateCart(cart);
        }
    });
}