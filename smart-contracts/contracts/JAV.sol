// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract JAV is ERC20 {
    constructor() ERC20("JavierCoin Token", "JAV") {
    // constructor() ERC20("Staking Token", "STKN") {
        _mint(msg.sender, 4000 * 1e18);
    }
}
