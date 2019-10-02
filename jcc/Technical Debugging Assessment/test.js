var orderItemData = [
  {
    item: 'shoes',
    internalid: 12,
    line: 1,
    quantity: '5',
    preferredbin: 'BIN_A_101'
  },
  {
    item: 'shirts',
    internalid: 5,
    line: 2,
    quantity: '7',
    preferredbin: 'BIN_A_102'
  },
  {
    item: 'pants',
    internalid: 6,
    line: 3,
    quantity: '3',
    preferredbin: 'BIN_A_101'
  },
  {
    item: 'socks',
    internalid: 8,
    line: 4,
    quantity: '20',
    preferredbin: 'BIN_B_201'
  },
  {
    item: 'belts',
    internalid: 10,
    line: 5,
    quantity: '10',
    preferredbin: 'BIN_B_203'
  },
  {
    item: 'shirts',
    internalid: 5,
    line: 6,
    quantity: '7',
    preferredbin: 'BIN_B_202'
  }
];
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
];

//for each bin quantty != orderItemData ---> difference
