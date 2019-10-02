// DO NOT EDIT THIS FILE
// View main.js for instructions. 

OrderRepository.prototype.getOrderItemData = function getOrderItemData() {
    var orderItemData = [
        {
            item: 'shoes',
            internalid: 12,
            line: 1,
            quantity: "5",
            preferredbin: 'BIN_A_101'
        },
        {
            item: 'shirts',
            internalid: 5,
            line: 2,
            quantity: "7",
            preferredbin: 'BIN_A_102'
        },
        {
            item: 'pants',
            internalid: 6,
            line: 3,
            quantity: "3",
            preferredbin: 'BIN_A_101'
        },
        {
            item: 'socks',
            internalid: 8,
            line: 4,
            quantity: "20",
            preferredbin: 'BIN_B_201'
        },
        {
            item: 'belts',
            internalid: 10,
            line: 5,
            quantity: "10",
            preferredbin: 'BIN_B_203'
        },
        {
            item: 'shirts',
            internalid: 5,
            line: 6,
            quantity: "7",
            preferredbin: 'BIN_B_202'
        },
    ]
    
    return orderItemData;
};