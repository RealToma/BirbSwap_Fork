import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  // {
  //   pid: 0,
  //   lpSymbol: 'FAST',
  //   lpAddresses: {
  //     97: '0xfEA6218871B7851748881a4aF6bCA63Af1B769a8',
  //     56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //   },
  //   tokenSymbol: 'SYRUP',
  //   tokenAddresses: {
  //     97: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
  //     56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  {
    pid: 0,
    lpSymbol: 'FAST-BNB LP',
    lpAddresses: {
      97: '0x9FfE17C7e6D3E26C0803B8Eaf9a56E1Df37643f0',
      56: '0xA2BD048981941E80e8A5d4d2C4D2bEa3C927043B',
    },
    tokenSymbol: 'FAST',
    tokenAddresses: {
      97: '0xCBc1e489CE1EAB868f6B691C55C4b4185BA26Ad5',
      56: '0x4d338614fc25afe6edf3994f331b4bad32fb3c6a',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '0x74074369656BbD64b2Ab2308374Adc8F222c07d5',
      56: '0xA7F165eFCa638c9b28B60A97fF9834cACEED5283',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '0x1F5c554e553a516ADAd939368D9e1a6BC9392d6f',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    isCommunity: false,
  },
  // {
  //   pid: 81,
  //   lpSymbol: 'IOTX-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x36b8b28d37f93372188f2aa2507b68a5cd8b2664',
  //   },
  //   tokenSymbol: 'IOTX',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x9678e42cebeb63f23197d726b29b1cb20d0064e5',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   isCommunity: false,
  // },
  // {
  //   pid: 80,
  //   lpSymbol: 'BOR-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x86e650350c40a5178a5d014ba37fe8556232b898',
  //   },
  //   tokenSymbol: 'BOR',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x92d7756c60dcfd4c689290e8a9f4d263b3b32241',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 79,
  //   lpSymbol: 'bOPEN-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x9d8b7e4a9d53654d82f12c83448d8f92732bc761',
  //   },
  //   tokenSymbol: 'bOPEN',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xF35262a9d427F96d2437379eF090db986eaE5d42',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 78,
  //   lpSymbol: 'SUSHI-ETH LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x17580340f3daedae871a8c21d15911742ec79e0f',
  //   },
  //   tokenSymbol: 'SUSHI',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x947950bcc74888a40ffa2593c5798f11fc9124c4',
  //   },
  //   quoteTokenSymbol: QuoteToken.ETH,
  //   quoteTokenAdresses: contracts.eth,
  //   isCommunity: false,
  // },
  {
    pid: 4,
    lpSymbol: 'DODO-BNB LP',
    lpAddresses: {
      97: '0x4B84A100ECb0D5E6922f1f28d7e34552951263f3',
      56: '0x1Cb96ac29F50eb39a6E19316077Cd30198E3333A',
    },
    tokenSymbol: 'DODO',
    tokenAddresses: {
      97: '0xeBe913cFce2Ce15Fb04F21CE743b329c6Cfc1FD6',
      56: '0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    isCommunity: false,
  },
  {
    pid: 5,
    lpSymbol: 'COMP-BNB LP',
    lpAddresses: {
      97: '0x331b8227E6E7a6795E2a87e0e0843E3583a09322',
      56: '0xeB8730f15BC8d66c386701Bc3BA121CbBce37e4F',
    },
    tokenSymbol: 'COMP',
    tokenAddresses: {
      97: '0xA897c352b0bD433FC497B3E1E1FdE36429CFC13a',
      56: '0x52ce071bd9b1c4b00a0b92d298c512478cad67e8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    isCommunity: false,
  },
  // {
  //   pid: 76,
  //   lpSymbol: 'SWINGBY-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x4576C456AF93a37a096235e5d83f812AC9aeD027',
  //   },
  //   tokenSymbol: 'SWINGBY',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x71DE20e0C4616E7fcBfDD3f875d568492cBE4739',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 75,
  //   lpSymbol: 'BRY-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x5E3CD27F36932Bc0314aC4e2510585798C34a2fC',
  //   },
  //   tokenSymbol: 'BRY',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 74,
  //   lpSymbol: 'ZEE-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xb5ab3996808c7e489dcdc0f1af2ab212ae0059af',
  //   },
  //   tokenSymbol: 'ZEE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x44754455564474a89358b2c2265883df993b12f0',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 73,
  //   lpSymbol: 'SWGb-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xc1800c29cf91954357cd0bf3f0accaada3d0109c',
  //   },
  //   tokenSymbol: 'SWGb',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xe40255c5d7fa7ceec5120408c78c787cecb4cfdb',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 72,
  //   lpSymbol: 'COMP-ETH LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x0392957571f28037607c14832d16f8b653edd472',
  //   },
  //   tokenSymbol: 'COMP',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x52ce071bd9b1c4b00a0b92d298c512478cad67e8',
  //   },
  //   quoteTokenSymbol: QuoteToken.ETH,
  //   quoteTokenAdresses: contracts.eth,
  //   isCommunity: false,
  // },
  // {
  //   pid: 71,
  //   lpSymbol: 'SFP-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xcbe2cf3bd012e9c1ade2ee4d41db3dac763e78f3',
  //   },
  //   tokenSymbol: 'SFP',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 70,
  //   lpSymbol: 'BETH-ETH LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x99d865ed50d2c32c1493896810fa386c1ce81d91',
  //   },
  //   tokenSymbol: 'BETH',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x250632378e573c6be1ac2f97fcdf00515d0aa91b',
  //   },
  //   quoteTokenSymbol: QuoteToken.ETH,
  //   quoteTokenAdresses: contracts.eth,
  //   isCommunity: false,
  // },
  // {
  //   pid: 69,
  //   lpSymbol: 'LINA-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xeb325a8ea1c5abf40c7ceaf645596c1f943d0948',
  //   },
  //   tokenSymbol: 'LINA',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x762539b45a1dcce3d36d080f74d1aed37844b878',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   isCommunity: false,
  // },
  // {
  //   pid: 68,
  //   lpSymbol: 'LIT-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x60bB03D1010b99CEAdD0dd209b64bC8bd83da161',
  //   },
  //   tokenSymbol: 'LIT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xb59490ab09a0f526cc7305822ac65f2ab12f9723',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 67,
  //   lpSymbol: 'HGET-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x66b9e1eac8a81f3752f7f3a5e95de460688a17ee',
  //   },
  //   tokenSymbol: 'HGET',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xc7d8d35eba58a0935ff2d5a33df105dd9f071731',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 66,
  //   lpSymbol: 'BDO-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x74690f829fec83ea424ee1f1654041b2491a7be9',
  //   },
  //   tokenSymbol: 'BDO',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x190b589cf9fb8ddeabbfeae36a813ffb2a702454',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 65,
  //   lpSymbol: 'EGLD-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x3ef4952c7a9afbe374ea02d1bf5ed5a0015b7716',
  //   },
  //   tokenSymbol: 'EGLD',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xbF7c81FFF98BbE61B40Ed186e4AfD6DDd01337fe',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 63,
  //   lpSymbol: 'UST-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xD1F12370b2ba1C79838337648F820a87eDF5e1e6',
  //   },
  //   tokenSymbol: 'UST',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   isCommunity: false,
  // },
  // {
  //   pid: 62,
  //   lpSymbol: 'mAMZN-UST LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xc92Dc34665c8a21f98E1E38474580b61b4f3e1b9',
  //   },
  //   tokenSymbol: 'mAMZN',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x3947B992DC0147D2D89dF0392213781b04B25075',
  //   },
  //   quoteTokenSymbol: QuoteToken.UST,
  //   quoteTokenAdresses: contracts.ust,
  //   isCommunity: false,
  // },
  // {
  //   pid: 61,
  //   lpSymbol: 'mGOOGL-UST LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x852A68181f789AE6d1Da3dF101740a59A071004f',
  //   },
  //   tokenSymbol: 'mGOOGL',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x62D71B23bF15218C7d2D7E48DBbD9e9c650B173f',
  //   },
  //   quoteTokenSymbol: QuoteToken.UST,
  //   quoteTokenAdresses: contracts.ust,
  //   isCommunity: false,
  // },
  // {
  //   pid: 60,
  //   lpSymbol: 'mNFLX-UST LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xF609ade3846981825776068a8eD7746470029D1f',
  //   },
  //   tokenSymbol: 'mNFLX',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xa04F060077D90Fe2647B61e4dA4aD1F97d6649dc',
  //   },
  //   quoteTokenSymbol: QuoteToken.UST,
  //   quoteTokenAdresses: contracts.ust,
  //   isCommunity: false,
  // },
  // {
  //   pid: 59,
  //   lpSymbol: 'mTSLA-UST LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xD5664D2d15cdffD597515f1c0D945c6c1D3Bf85B',
  //   },
  //   tokenSymbol: 'mTSLA',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xF215A127A196e3988C09d052e16BcFD365Cd7AA3',
  //   },
  //   quoteTokenSymbol: QuoteToken.UST,
  //   quoteTokenAdresses: contracts.ust,
  //   isCommunity: false,
  // },
  // {
  //   pid: 58,
  //   lpSymbol: 'wSOTE-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xffb9e2d5ce4378f1a89b29bf53f80804cc078102',
  //   },
  //   tokenSymbol: 'wSOTE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x541e619858737031a1244a5d0cd47e5ef480342c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 57,
  //   lpSymbol: 'FRONT-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x36b7d2e5c7877392fb17f9219efad56f3d794700',
  //   },
  //   tokenSymbol: 'FRONT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x928e55daB735aa8260AF3cEDadA18B5f70C72f1b',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 56,
  //   lpSymbol: 'Helmet-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x6411310c07d8c48730172146fd6f31fa84034a8b',
  //   },
  //   tokenSymbol: 'Helmet',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 55,
  //   lpSymbol: 'BTCST-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x91589786D36fEe5B27A5539CfE638a5fc9834665',
  //   },
  //   tokenSymbol: 'BTCST',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x78650b139471520656b9e7aa7a5e9276814a38e9',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 54,
  //   lpSymbol: 'LTC-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xbc765fd113c5bdb2ebc25f711191b56bb8690aec',
  //   },
  //   tokenSymbol: 'LTC',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x4338665cbb7b2485a8855a139b75d5e34ab0db94',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 53,
  //   lpSymbol: 'USDC-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x680dd100e4b394bda26a59dd5c119a391e747d18',
  //   },
  //   tokenSymbol: 'USDC',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   isCommunity: false,
  // },
  // {
  //   pid: 52,
  //   lpSymbol: 'DAI-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x3aB77e40340AB084c3e23Be8e5A6f7afed9D41DC',
  //   },
  //   tokenSymbol: 'DAI',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   isCommunity: false,
  // },
  // {
  //   pid: 51,
  //   lpSymbol: 'BSCX-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x20781bc3701c5309ac75291f5d09bdc23d7b7fa8',
  //   },
  //   tokenSymbol: 'BSCX',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 50,
  //   lpSymbol: 'TEN-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x01ecc44ddd2d104f44d2aa1a2bd9dfbc91ae8275',
  //   },
  //   tokenSymbol: 'TEN',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xdff8cb622790b7f92686c722b02cab55592f152c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 49,
  //   lpSymbol: 'bALBT-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xbe14f3a89a4f7f279af9d99554cf12e8c29db921',
  //   },
  //   tokenSymbol: 'bALBT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x72faa679e1008ad8382959ff48e392042a8b06f7',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 46,
  //   lpSymbol: 'OG-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x64373608f2e93ea97ad4d8ca2cce6b2575db2f55',
  //   },
  //   tokenSymbol: 'OG',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xf05e45ad22150677a017fbd94b84fbb63dc9b44c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 47,
  //   lpSymbol: 'ASR-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xd6b900d5308356317299dafe303e661271aa12f1',
  //   },
  //   tokenSymbol: 'ASR',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x80d5f92c2c8c682070c95495313ddb680b267320',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 48,
  //   lpSymbol: 'ATM-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xd5b3ebf1a85d32c73a82b40f75e1cd929caf4029',
  //   },
  //   tokenSymbol: 'ATM',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x25e9d05365c867e59c1904e7463af9f312296f9e',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 45,
  //   lpSymbol: 'REEF-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x58B58cab6C5cF158f63A2390b817710826d116D0',
  //   },
  //   tokenSymbol: 'REEF',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 44,
  //   lpSymbol: 'Ditto-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x470bc451810b312bbb1256f96b0895d95ea659b1',
  //   },
  //   tokenSymbol: 'DITTO',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x233d91A0713155003fc4DcE0AFa871b508B3B715',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 43,
  //   lpSymbol: 'JUV-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x51a2ffa5b7de506f9a22549e48b33f6cf0d9030e',
  //   },
  //   tokenSymbol: 'JUV',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xc40c9a843e1c6d01b7578284a9028854f6683b1b',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 42,
  //   lpSymbol: 'PSG-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x9c4f6a5050cf863e67a402e8b377973b4e3372c1',
  //   },
  //   tokenSymbol: 'PSG',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xbc5609612b7c44bef426de600b5fd1379db2ecf1',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 39,
  //   lpSymbol: 'UNFI-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xbEA35584b9a88107102ABEf0BDeE2c4FaE5D8c31',
  //   },
  //   tokenSymbol: 'UNFI',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x728C5baC3C3e370E372Fc4671f9ef6916b814d8B',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '1X',
  //   isCommunity: false,
  // },
  // {
  //   pid: 41,
  //   lpSymbol: 'VAI-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xff17ff314925dff772b71abdff2782bc913b3575',
  //   },
  //   tokenSymbol: 'VAI',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x4bd17003473389a42daf6a0a729f6fdb328bbbd7',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   isCommunity: false,
  // },
  // {
  //   pid: 40,
  //   lpSymbol: 'BLK-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xC743Dc05F03D25E1aF8eC5F8228f4BD25513c8d0',
  //   },
  //   tokenSymbol: 'BLK',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x63870A18B6e42b01Ef1Ad8A2302ef50B7132054F',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 37,
  //   lpSymbol: 'HARD-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x9f40e8a2fcaa267a0c374b6c661e0b372264cc3d',
  //   },
  //   tokenSymbol: 'HARD',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xf79037f6f6be66832de4e7516be52826bc3cbcc4',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 2,
  //   lpSymbol: 'BUSD-BNB LP',
  //   lpAddresses: {
  //     97: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
  //     56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
  //   },
  //   tokenSymbol: 'BUSD',
  //   tokenAddresses: {
  //     97: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
  //     56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 3,
  //   lpSymbol: 'ADA-BNB LP',
  //   lpAddresses: {
  //     97: '0xcbe3282a562e23b8c61ed04bb72ffdbb9233b1ce',
  //     56: '0xba51d1ab95756ca4eab8737ecd450cd8f05384cf',
  //   },
  //   tokenSymbol: 'ADA',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  {
    pid: 7,
    lpSymbol: 'BAND-BNB LP',
    lpAddresses: {
      97: '0xEE368346062aCc73fEcF117C469A3e6FA6a74347',
      56: '0x68BEc2b01b25e19638a7a7a391126867eD8DbcEC',
    },
    tokenSymbol: 'BAND',
    tokenAddresses: {
      97: '0xD5Deaf2908Ca8b6BC9E50B043e9444915Be49b2d',
      56: '0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 24,
    lpSymbol: 'DOT-BNB LP',
    lpAddresses: {
      97: '0x01368C8E053d95C9210195AD5e0683ddF461871c',
      56: '0x75a6ad70b18B429Aba94623786a9883613D15a1d',
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      97: '0x31900C1Cd7aEaaCC790F37A25c711AEcC4781365',
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  // {
  //   pid: 6,
  //   lpSymbol: 'EOS-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x981d2ba1b298888408d342c39c2ab92e8991691e',
  //   },
  //   tokenSymbol: 'EOS',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x56b6fb708fc5732dec1afc8d8556423a2edccbd6',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  {
    pid: 9,
    lpSymbol: 'LINK-BNB LP',
    lpAddresses: {
      97: '0x371341499b8D6524b057A8b4D800F0d4289197fe',
      56: '0xD41ed091a7E003e06c9028685Eb058e74c787E4C',
    },
    tokenSymbol: 'LINK',
    tokenAddresses: {
      97: '0x1DD7217A091E25f7F3bd082f49a548D27f5766aA',
      56: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  // {
  //   pid: 10,
  //   lpSymbol: 'USDT-BUSD LP',
  //   lpAddresses: {
  //     97: '0x896831a5a3925D6AB3e8ADEc64a6B6Fc4bf2f8Dd',
  //     56: '0xc15fa3E22c912A276550F3E5FE3b0Deb87B55aCd',
  //   },
  //   tokenSymbol: 'USDT',
  //   tokenAddresses: {
  //     97: '0x6Be91c416796e0AB31d104eed15Bf7F07a3225Ec',
  //     56: '0x55d398326f99059ff775485246999027b3197955',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 12,
  //   lpSymbol: 'TWT-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x610e7a287c27dfFcaC0F0a94f547Cc1B770cF483',
  //   },
  //   tokenSymbol: 'TWT',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x4b0f1812e5df2a09796481ff14017e6005508003',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 13,
  //   lpSymbol: 'XVS-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x41182c32F854dd97bA0e0B1816022e0aCB2fc0bb',
  //   },
  //   tokenSymbol: 'XVS',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  {
    pid: 3,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '0x08698066bA5B9f0899AD50379b13e73A18c46f6F',
      56: '0xBF70f468BAf4939BE50B7Cc5288a290f4E91C610',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '0xFB67854958d44D4BA86Ae3f28e7673b0e87BA80e',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'SUSHI-BNB LP',
    lpAddresses: {
      97: '0x580600Ac4051892092C4105592A6B27BDEE99580',
      56: '0x8739aBD4BAbF7e25F0Dd1F4bE34548a331bDB15A',
    },
    tokenSymbol: 'SUSHI',
    tokenAddresses: {
      97: '0x5f2dfcFac1a7465991717C0C7685e6BAf2e4B7f4',
      56: '0x947950bcc74888a40ffa2593c5798f11fc9124c4',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  // {
  //   pid: 15,
  //   lpSymbol: 'BTCB-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x7561EEe90e24F3b348E1087A005F78B4c8453524',
  //   },
  //   tokenSymbol: 'BTC',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 16,
  //   lpSymbol: 'ALPHA-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x4e0f3385d932F7179DeE045369286FFa6B03d887',
  //   },
  //   tokenSymbol: 'ALPHA',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xa1faa113cbe53436df28ff0aee54275c13b40975',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  {
    pid: 10,
    lpSymbol: 'USDT-BNB LP',
    lpAddresses: {
      97: '0xC3eb85Bfb68596F58b396685caE7DF11D516bAF9',
      56: '0x6C35bD4487e41501F6689C0D2A294517aAa5E9e9',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '0xe2462F7165F52F79264Dc17ea93b0a97E9Ed12b0',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  // {
  //   pid: 18,
  //   lpSymbol: 'XRP-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0xc7b4b32a3be2cb6572a1c9959401f832ce47a6d2',
  //   },
  //   tokenSymbol: 'XRP',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 19,
  //   lpSymbol: 'ATOM-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x2333c77fc0b2875c11409cdcd3c75d42d402e834',
  //   },
  //   tokenSymbol: 'ATOM',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x0eb3a705fc54725037cc9e008bdede697f62f335',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  {
    pid: 15,
    lpSymbol: 'YFII-BNB LP',
    lpAddresses: {
      97: '0xc5A921dF99A673CdBD63C86dc4c829B133C2AC38',
      56: '0xF8F7E1965b788c35494222F9620bB7eaf1268dB7',
    },
    tokenSymbol: 'YFII',
    tokenAddresses: {
      97: '0xaD0c9e456c667D5fDc9E31c8fD020802F448be43',
      56: '0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 16,
    lpSymbol: 'AAVE-BNB LP',
    lpAddresses: {
      97: '0xE350F79Bc3439049E79978B3ee3C59a2A735002A',
      56: '0x67fC37aA40d9aCc501F78068dCA96e9bdE25A5A3',
    },
    tokenSymbol: 'AAVE',
    tokenAddresses: {
      97: '0xfefBC5983bcc6404f4aF248bD6B2b331324A40e7',
      56: '0xfb6115445bff7b52feb98650c87f44907e58f802',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 17,
    lpSymbol: 'SNX-BNB LP',
    lpAddresses: {
      97: '0xD4d904dFDF2BB2D873a566ff9595937210a7C71d',
      56: '0x703a91067a54E9bd7d85807C2bac7EF3eb8475c8',
    },
    tokenSymbol: 'SNX',
    tokenAddresses: {
      97: '0x833D3a417C5674C65a7Cd080823D495867a59b58',
      56: '0x9ac983826058b8a9c7aa1c9171441191232e8404',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 18,
    lpSymbol: 'SafeMoon-BNB LP',
    lpAddresses: {
      97: '0xDF15146e9Fc2Da06c669E4e32e80E890f82aC35B',
      56: '0x9EeA4daDee11D4f2c7b84a81DacB5cF9fEdA4c37',
    },
    tokenSymbol: 'SNX',
    tokenAddresses: {
      97: '0x46E3E6eF935D02966A6b34C57c8F3ae3109142aD',
      56: '0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 19,
    lpSymbol: 'BSCPAD-BNB LP',
    lpAddresses: {
      97: '0x55E1eC7609d51E1cC8a258aE7fA4997A3F18b61c',
      56: '0xC1B285e6640D1b707db10a4bA061b87B73545F3f',
    },
    tokenSymbol: 'BSCPAD',
    tokenAddresses: {
      97: '0x8Dc2381F6a7b3F5ed0507F5B1F8eD35abB923FB5',
      56: '0x5a3010d4d8d3b5fb49f8b6e57fb9e48063f16700',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 20,
    lpSymbol: 'VENUS-BNB LP',
    lpAddresses: {
      97: '0xcef790bCC21D621112921f44CcF7482423AFdd04',
      56: '0xcC96fa590A7B1eb8AaB27208BdB84B03Ab3e0232',
    },
    tokenSymbol: 'VENUS',
    tokenAddresses: {
      97: '0x10D3e3F6eb3487892777857668CeC5924Fa17F26',
      56: '0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 6,
    lpSymbol: 'DAI-BNB LP',
    lpAddresses: {
      97: '0x9AC311e090775A3D77A55f8C336996dF54F012f6',
      56: '0x335292aFE00e3013D9FeA34912d1752Aed9FDc64',
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '0x89A9D1EDF95B4f05E6baa27ea39D718Bd9dEBD40',
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  // {
  //   pid: 22,
  //   lpSymbol: 'XTZ-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x5acac332f0f49c8badc7afd0134ad19d3db972e6',
  //   },
  //   tokenSymbol: 'XTZ',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x16939ef78684453bfdfb47825f8a5f714f12623a',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 23,
  //   lpSymbol: 'BCH-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x54edd846db17f43b6e43296134ecd96284671e81',
  //   },
  //   tokenSymbol: 'BCH',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x8ff795a6f4d97e7887c79bea79aba5cc76444adf',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 24,
  //   lpSymbol: 'YFI-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x68Ff2ca47D27db5Ac0b5c46587645835dD51D3C1',
  //   },
  //   tokenSymbol: 'YFI',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  {
    pid: 11,
    lpSymbol: 'UNI-BNB LP',
    lpAddresses: {
      97: '0x8cC02Dd1c80D6ce2f973929696b1728b6dD5d442',
      56: '0x6cd528AD5554960f5B1A928a6c85F8e1F5602C1C',
    },
    tokenSymbol: 'UNI',
    tokenAddresses: {
      97: '0x3FcB56DA84dF4BD3fE59ecbb40D436E30E7763D4',
      56: '0xbf5140a22578168fd562dccf235e5d43a02ce9b1',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  // {
  //   pid: 26,
  //   lpSymbol: 'FIL-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x35fe9787f0ebf2a200bac413d3030cf62d312774',
  //   },
  //   tokenSymbol: 'FIL',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 27,
  //   lpSymbol: 'INJ-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x7a34bd64d18e44CfdE3ef4B81b87BAf3EB3315B6',
  //   },
  //   tokenSymbol: 'INJ',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xa2b726b1145a4773f68593cf171187d8ebe4d495',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  {
    pid: 13,
    lpSymbol: 'USDC-BNB LP',
    lpAddresses: {
      97: '0x97Cda99c51a1e865F5Bf6E360871572cAc596479',
      56: '0xfCa38948C9EDF8702aD90E20B462E938815DA6c5',
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '0xB1B97f76b4626bcC1754d588763666EBE5095545',
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 14,
    lpSymbol: '1INCH-BNB LP',
    lpAddresses: {
      97: '0xB62BF35D64D4023Ea067e9a15c37e27179EC899F',
      56: '0xc422A3291BF212cA03Ae034238590a9c2178Ed40',
    },
    tokenSymbol: '1INCH',
    tokenAddresses: {
      97: '0xC6530040D1d4B0821A7fd326A5B8e9FD486c5637',
      56: '0x111111111117dC0aa78b770fA6A738034120C302',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 12,
    lpSymbol: 'SXP-BNB LP',
    lpAddresses: {
      97: '0x68a344ef33dF52aA2394043F52004bE183f8aD52',
      56: '0xb72747B819411CC7D192aEf6CD682Ea71bF88c03',
    },
    tokenSymbol: 'SXP',
    tokenAddresses: {
      97: '0x3a9a8c8Ca43a514d29f15D9C7C9740C079845e0D',
      56: '0x47bead2563dcbf3bf2c9407fea4dc236faba485a',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  // {
  //   pid: 32,
  //   lpSymbol: 'CTK-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x7793870484647a7278907498ec504879d6971EAb',
  //   },
  //   tokenSymbol: 'CTK',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 34,
  //   lpSymbol: 'STAX-CAKE LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x7cd05f8b960ba071fdf69c750c0e5a57c8366500',
  //   },
  //   tokenSymbol: 'STAX',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x0Da6Ed8B13214Ff28e9Ca979Dd37439e8a88F6c4',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  //   isCommunity: true,
  // },
  // {
  //   pid: 35,
  //   lpSymbol: 'NAR-CAKE LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x745c4fd226e169d6da959283275a8e0ecdd7f312',
  //   },
  //   tokenSymbol: 'NAR',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xa1303e6199b319a891b79685f0537d289af1fc83',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  //   isCommunity: true,
  // },
  // {
  //   pid: 36,
  //   lpSymbol: 'NYA-CAKE LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x2730bf486d658838464a4ef077880998d944252d',
  //   },
  //   tokenSymbol: 'NYA',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xbfa0841f7a90c4ce6643f651756ee340991f99d5',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  //   isCommunity: true,
  // },
  // {
  //   pid: 38,
  //   lpSymbol: 'bROOBEE-CAKE LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x970858016C963b780E06f7DCfdEf8e809919BcE8',
  //   },
  //   tokenSymbol: 'bROOBEE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xe64f5cb844946c1f102bd25bbd87a5ab4ae89fbe',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  //   isCommunity: true,
  // },
  // {
  //   pid: 8,
  //   lpSymbol: 'BAKE-BNB Bakery LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0xc2eed0f5a0dc28cfa895084bc0a9b8b8279ae492',
  //   },
  //   tokenSymbol: 'BAKE',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 9,
  //   lpSymbol: 'BURGER-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0xd937FB9E6e47F3805981453BFB277a49FFfE04D7',
  //   },
  //   tokenSymbol: 'BURGER',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xae9269f27437f0fcbc232d39ec814844a51d6b8f',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  {
    pid: 21,
    lpSymbol: 'BAKE-BNB LP',
    lpAddresses: {
      97: '0xBBc7C4356b6b06B3F824957F0644B8D6B27F6536',
      56: '0x18B9Bc31BAd50f3D3FaC483e587f477CA9307dca',
    },
    tokenSymbol: 'BAKE',
    tokenAddresses: {
      97: '0xe603af837C54396E4ba921f97F6A5469DD0E1766',
      56: '0xe02df9e3e622debdd69fb838bb799e3f168902c5',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 22,
    lpSymbol: 'Spartan-BNB LP',
    lpAddresses: {
      97: '0x7a75Fa14BcA646f7196E87Dc2D6C3ff07E8c76c7',
      56: '0xCd26E909524e1CbA0aedFa5b305E1042322a6bF3',
    },
    tokenSymbol: 'Spartan',
    tokenAddresses: {
      97: '0x2dBf5780d185c5545A815F33f83E89FdD9703899',
      56: '0xe4ae305ebe1abe663f261bc00534067c80ad677c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 23,
    lpSymbol: 'Waultswap-BNB LP',
    lpAddresses: {
      97: '0x56D5ceBA57Ec007c559B94fee3384d244105Edd2',
      56: '0x6bf7E3052907a4eafF18a44504D80c31589217E7',
    },
    tokenSymbol: 'Spartan',
    tokenAddresses: {
      97: '0x99Ce2953d368DcB83DDb1957caFC94F5bC72aE0c',
      56: '0xa9c41a46a6b3531d28d5c32f6633dd2ff05dfb90',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
]

export default farms