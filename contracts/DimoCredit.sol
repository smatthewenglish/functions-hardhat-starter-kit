// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

/**
 */
contract DimoCredit is ERC20, FunctionsConsumer {
  IDimo private _dimo;
  IRateOracle private _oracle;

  /**
   * $DIMO
   * - Polygon: 0xE261D618a959aFfFd53168Cd07D12E37B26761db
   * - Decimals: 18
   */
  constructor(address dimo_, address oracle_) ERC20("Dimo Credit", "DC", 18) {
    _dimo = IDimo(dimo_);
    _oracle = IRateOracle(oracle_);
  }
}
