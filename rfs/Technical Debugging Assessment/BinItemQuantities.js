// DO NOT EDIT THIS FILE
// View main.js for instructions. 

OrderRepository.prototype.getBinItemQuantities = function getBinItemQuantities() {
    var BinItemQuantities = [
        {
            bin: 'BIN_A_101',
            shoes: 4,
            shirts: 1,
            pants: 2,
            socks: 1,
            belts: 1
        },
        {
            bin: 'BIN_A_102',
            shoes: 20,
            shirts: 1,
            pants: 5,
            socks: 1,
            belts: 3
        },
        {
            bin: 'BIN_B_201',
            shoes: 20,
            shirts: 1,
            pants: 5,
            socks: 1,
            belts: 2
        },
        {
            bin: 'BIN_B_202',
            shoes: 20,
            shirts: 7,
            pants: 5,
            socks: 1,
            belts: 2
        }
    ]
    
    return BinItemQuantities;
};

