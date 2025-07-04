// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract MFToken is ERC20Permit {
    constructor() ERC20("MFToken", "MF") ERC20Permit("MFToken") {
        _mint(msg.sender, 1_000_000 * 10 ** decimals());
    }
}
