// Copyright 2015, 2016 Ethcore (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

/**
 * @version Solidity v0.4.6
 * @from https://github.com/ethereum/dapp-bin/blob/dd5c485359074d49f571693ae064ce78970f3d6d/wallet/wallet.sol
 * @date 22-Nov-2016 @ 15h00 UTC
 */
export default '0x606060405234620000005760405162001a0b38038062001a0b833981016040528080518201919060200180519060200190919080519060200190919050505b805b83835b600060018351016001819055503373ffffffffffffffffffffffffffffffffffffffff166002600161010081101562000000570160005b5081905550600161010260003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600090505b825181101562000158578281815181101562000000579060200190602002015173ffffffffffffffffffffffffffffffffffffffff1660028260020161010081101562000000570160005b50819055508060020161010260008584815181101562000000579060200190602002015173ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b806001019050620000b4565b816000819055505b5050508061010581905550620001896200019c6401000000000262001837176401000000009004565b610107819055505b505b505050620001b1565b60006201518042811562000000570490505b90565b61184b80620001c06000396000f3606060405236156100f4576000357c010000000000000000000000000000000000000000000000000000000090048063173825d9146101615780632f54bf6e1461017e5780634123cb6b146101b157806352375093146101d45780635c52c2f5146101f7578063659010e7146102065780637065cb4814610229578063746c917114610246578063797af62714610269578063b20d30a91461029c578063b61d27f6146102b9578063b75c7dc61461030b578063ba51a6df14610328578063c2cf732614610345578063c41a360a14610381578063cbf0b0c0146103c8578063f00d4b5d146103e5578063f1736d861461040b575b346100005761015f5b600034111561015c577fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c3334604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a15b5b565b005b346100005761017c600480803590602001909190505061042e565b005b34610000576101996004808035906020019091905050610558565b60405180821515815260200191505060405180910390f35b34610000576101be610590565b6040518082815260200191505060405180910390f35b34610000576101e1610596565b6040518082815260200191505060405180910390f35b346100005761020461059d565b005b34610000576102136105d8565b6040518082815260200191505060405180910390f35b346100005761024460048080359060200190919050506105df565b005b3461000057610253610712565b6040518082815260200191505060405180910390f35b34610000576102846004808035906020019091905050610718565b60405180821515815260200191505060405180910390f35b34610000576102b76004808035906020019091905050610ac4565b005b34610000576102f160048080359060200190919080359060200190919080359060200190820180359060200191909192905050610aff565b604051808260001916815260200191505060405180910390f35b34610000576103266004808035906020019091905050610e6d565b005b34610000576103436004808035906020019091905050610f64565b005b34610000576103696004808035906020019091908035906020019091905050610fec565b60405180821515815260200191505060405180910390f35b346100005761039c600480803590602001909190505061106a565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34610000576103e3600480803590602001909190505061108a565b005b346100005761040960048080359060200190919080359060200190919050506110d5565b005b3461000057610418611259565b6040518082815260200191505060405180910390f35b600060003660405180838380828437820191505092505050604051809103902061045781611260565b156105525761010260008473ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549150600082141561049757610551565b60016001540360005411156104ab57610551565b6000600283610100811015610000570160005b5081905550600061010260008573ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506104fb611484565b61050361157f565b7f58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da83604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15b5b5b505050565b6000600061010260008473ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541190505b919050565b60015481565b6101075481565b6000366040518083838082843782019150509250505060405180910390206105c481611260565b156105d4576000610106819055505b5b5b50565b6101065481565b60003660405180838380828437820191505092505050604051809103902061060681611260565b1561070d5761061482610558565b1561061e5761070c565b610626611484565b60fa60015410151561063b5761063a61157f565b5b60fa60015410151561064c5761070c565b6001600081548092919060010191905055508173ffffffffffffffffffffffffffffffffffffffff166002600154610100811015610000570160005b508190555060015461010260008473ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c382604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15b5b5b5050565b60005481565b60008161072481611260565b15610abd57600061010860008560001916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610abb5761010860008460001916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166101086000856000191681526020019081526020016000206001015461010860008660001916815260200190815260200160002060020160405180828054600181600116156101000203166002900480156108725780601f1061084757610100808354040283529160200191610872565b820191906000526020600020905b81548152906001019060200180831161085557829003601f168201915b505091505060006040518083038185876185025a03f192505050507fe7c957c06e9a662c1a6c77366179f5b702b97651dc28eee7d5bf1dff6e40bb4a33846101086000876000191681526020019081526020016000206001015461010860008860001916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16610108600089600019168152602001908152602001600020600201604051808673ffffffffffffffffffffffffffffffffffffffff168152602001856000191681526020018481526020018373ffffffffffffffffffffffffffffffffffffffff168152602001806020018281038252838181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156109f45780601f106109c9576101008083540402835291602001916109f4565b820191906000526020600020905b8154815290600101906020018083116109d757829003601f168201915b5050965050505050505060405180910390a161010860008460001916815260200190815260200160002060006000820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182016000905560028201805460018160011615610100020316600290046000825580601f10610a785750610aaf565b601f016020900490600052602060002090810190610aae91905b80821115610aaa576000816000905550600101610a92565b5090565b5b50505060019150610abc565b5b5b5b50919050565b600036604051808383808284378201915050925050506040518091039020610aeb81611260565b15610afa5781610105819055505b5b5b5050565b6000610b0a33610558565b15610e6457610b18846116ce565b15610c01577f92ca3a80853e6663fa31fa10b99225f18d4902939b4c53a9caae9043f6efd0043385878686604051808673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1681526020018060200182810382528484828181526020019250808284378201915050965050505050505060405180910390a18473ffffffffffffffffffffffffffffffffffffffff168484846040518083838082843782019150509250505060006040518083038185876185025a03f1925050505060006001029050610e63565b60003643604051808484808284378201915050828152602001935050505060405180910390209050610c3281610718565b158015610c905750600061010860008360001916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b15610e62578461010860008360001916815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff02191690836c01000000000000000000000000908102040217905550836101086000836000191681526020019081526020016000206001018190555082826101086000846000191681526020019081526020016000206002019190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610d6b57803560ff1916838001178555610d99565b82800160010185558215610d99579182015b82811115610d98578235825591602001919060010190610d7d565b5b509050610dbe91905b80821115610dba576000816000905550600101610da2565b5090565b50507f1733cbb53659d713b79580f79f3f9ff215f78a7c7aa45890f3b89fc5cddfbf3281338688878760405180876000191681526020018673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff168152602001806020018281038252848482818152602001925080828437820191505097505050505050505060405180910390a15b5b5b5b949350505050565b60006000600061010260003373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205492506000831415610eae57610f5e565b8260020a915061010360008560001916815260200190815260200160002090506000828260010154161115610f5d5780600001600081548092919060010191905055508181600101600082825403925050819055507fc7fb647e59b18047309aa15aad418e5d7ca96d173ad704f1031a2c3d7591734b3385604051808373ffffffffffffffffffffffffffffffffffffffff168152602001826000191681526020019250505060405180910390a15b5b50505050565b600036604051808383808284378201915050925050506040518091039020610f8b81611260565b15610fe757600154821115610f9f57610fe6565b81600081905550610fae611484565b7facbdb084c721332ac59f9b8e392196c9eb0e4932862da8eb9beaf0dad4f550da826040518082815260200191505060405180910390a15b5b5b5050565b6000600060006000610103600087600019168152602001908152602001600020925061010260008673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549150600082141561104d5760009350611061565b8160020a9050600081846001015416141593505b50505092915050565b6000600260018301610100811015610000570160005b505490505b919050565b6000366040518083838082843782019150509250505060405180910390206110b181611260565b156110d0578173ffffffffffffffffffffffffffffffffffffffff16ff5b5b5b5050565b60006000366040518083838082843782019150509250505060405180910390206110fe81611260565b156112525761110c83610558565b1561111657611251565b61010260008573ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549150600082141561115157611251565b611159611484565b8273ffffffffffffffffffffffffffffffffffffffff16600283610100811015610000570160005b5081905550600061010260008673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508161010260008573ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507fb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c8484604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a15b5b5b50505050565b6101055481565b600060006000600061010260003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054925060008314156112a35761147c565b610103600086600019168152602001908152602001600020915060008260000154141561135a5760005482600001819055506000826001018190555061010480548091906001018154818355818115116113295781836000526020600020918201910161132891905b8082111561132457600081600090555060010161130c565b5090565b5b5050508260020181905550846101048360020154815481101561000057906000526020600020900160005b50819055505b8260020a9050600081836001015416141561147b577fe1c52dc63b719ade82e8bea94cc41a0d5d28e4aaf536adb5e9cccc9ff8c1aeda3386604051808373ffffffffffffffffffffffffffffffffffffffff168152602001826000191681526020019250505060405180910390a1600182600001541115156114525761010461010360008760001916815260200190815260200160002060020154815481101561000057906000526020600020900160005b5060009055610103600086600019168152602001908152602001600020600060008201600090556001820160009055600282016000905550506001935061147c5661147a565b8160000160008154809291906001900391905055508082600101600082825417925050819055505b5b5b505050919050565b60006000610104805490509150600090505b8181101561157257610108600061010483815481101561000057906000526020600020900160005b505460001916815260200190815260200160002060006000820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182016000905560028201805460018160011615610100020316600290046000825580601f1061152c5750611563565b601f01602090049060005260206000209081019061156291905b8082111561155e576000816000905550600101611546565b5090565b5b5050505b806001019050611496565b61157a611754565b5b5050565b6000600190505b6001548110156116ca575b600154811080156115b557506000600282610100811015610000570160005b505414155b156115c7578080600101915050611591565b5b60016001541180156115ee575060006002600154610100811015610000570160005b5054145b1561160b57600160008154809291906001900391905055506115c8565b60015481108015611631575060006002600154610100811015610000570160005b505414155b801561164f57506000600282610100811015610000570160005b5054145b156116c5576002600154610100811015610000570160005b5054600282610100811015610000570160005b5081905550806101026000600284610100811015610000570160005b505481526020019081526020016000208190555060006002600154610100811015610000570160005b50819055505b611586565b5b50565b60006116d933610558565b1561174e57610107546116ea611837565b111561170957600061010681905550611701611837565b610107819055505b610106548261010654011015801561172957506101055482610106540111155b156117485781610106600082825401925050819055506001905061174d565b600090505b5b5b919050565b60006000610104805490509150600090505b818110156117f857600060010261010482815481101561000057906000526020600020900160005b5054600019161415156117ec57610103600061010483815481101561000057906000526020600020900160005b5054600019168152602001908152602001600020600060008201600090556001820160009055600282016000905550505b5b806001019050611766565b6101048054600082559060005260206000209081019061183091905b8082111561182c576000816000905550600101611814565b5090565b5b505b5050565b600062015180428115610000570490505b9056';

