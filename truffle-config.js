require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena forward turtle crazy razor oven concert grace neck flower general'; 
let testAccounts = [
"0xfe0c53fd9594cdf866ec9fff5a5bbdb5ea0c8aa52b8eaebb2f45426761058f91",
"0x6b8d83a4afdb3c9db80bc38fe419a08443fc0eada220d7817a124f88add64b5a",
"0x05252853afde13fdf3efdc938481e15b631c3d00dac67c320ebffbdf1488415b",
"0x37bf1f70f51aea58a352cec33140fa563fbb636d006c3dd2c4fa214ff4fb67ec",
"0xc57887b42a7e2b6696b1feece5921a0e8b2cb7a366ec6202867162f531faf57c",
"0x6cd0dcc5f71456c6b5e43b23935ce7044fcbf88312b938b0957b46ca6b1916ba",
"0x3f43ef5d65e89738e1009e2a0ee9dcea89de3e907b26a5b6a3636262cc252869",
"0xa80fb8ea59abd4ba53f8e7cc626324beb463014bd3d4a8a2385c358985420539",
"0x5eaee61e4db084ea93569136eb0091d34b1c64364be3864c0d4eb550b301351f",
"0xf15ef2d16ce23b900760b870299c6df27a6dcaeb9e2e89c39596ec72a0bbf35b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
