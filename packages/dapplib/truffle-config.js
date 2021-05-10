require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install infant fox turn fan return pizza snake hope armed equal genre'; 
let testAccounts = [
"0xd1a3281f5da1ff03bc5f6de38de87b84f951a5c99ed7a13e50a6096eb5784428",
"0xf667c9d77cba13c2d85f630f5bc50955f5442607bcd0fd542dc5d7fcd4ff5e3a",
"0xa9f65da0f15e635e707cafa8a2d0111f27e788dc8553c1d6c8cc51d716424550",
"0x49ad8b2705f29cd8f598deaf53c62a4cd31749ec090b556fb03347945095f53a",
"0x531f6585c7fae68e4c531ac409edaf8992a4ec3a69a4f673f305dffd092519d0",
"0x814e02f767e17ef4febff7a1abece7d38115e911bab6fc61f9720411b5c6fd49",
"0x98ee359e101c569c9837038c5ce251e006dbc6dcdd2f2920ce0440379dd67e58",
"0x120349a7fd0400b4cef2c775340546de5e24da99447c64b7ef72daa6a5067a44",
"0xdefe27c1c2fbe24cf1c43b177d72c54d46ce93b38ba72a86738ff368232a86d2",
"0xf749c0208d2a1d9ab4c0b1aee54089855f03abf8a9bb9c8c18ac2aa4a45aa0b7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
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
