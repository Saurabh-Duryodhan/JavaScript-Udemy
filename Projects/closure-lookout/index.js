// Default parameters

function Fun(orderId = Math.random(), orderItems = 0, orderDetails = "NA", cardNumber = "********1234"){
    const orderPrice=200*orderItems;
    const orderNumber = Math.floor(Math.pow(orderDetails.length, 2), Math.random());
    const num = cardNumber.toString().slice(-4)
    console.log(cardNumber.length)
    const maskedNum = num.padStart(16, "*")
    return {
        orderId,
        orderItems,
        orderDetails,
        orderPrice,
        orderNumber,
        paymentCard: maskedNum,
    }
}
console.log(Fun(undefined,undefined,"Order credit card", 62300368619 ))