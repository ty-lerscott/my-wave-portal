(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{107:function(f,e){},115:function(f,e){},120:function(f,e,b){"use strict";b.r(e);var a=b(4),t=b.n(a),n=b(84),c=b.n(n),r=function(f){f&&f instanceof Function&&b.e(3).then(b.bind(null,140)).then((function(e){var b=e.getCLS,a=e.getFID,t=e.getFCP,n=e.getLCP,c=e.getTTFB;b(f),a(f),t(f),n(f),c(f)}))},s=b(138),i=b(9),o=b(3),d=b.n(o),u=b(57),l=b(70),p=b(132),h=b(133),m=b(134),j=b(137),g=b(139),x=b(136),v=b(85),y=b(13),O=function(){var f=window.ethereum;if(f){var e=new l.a.providers.Web3Provider(f).getSigner();return new l.a.Contract("0xA11BB5c6C8bABa0045BaF4b393d119151158AeCf",v.abi,e)}console.log("Etherium object does not exist!")},w=function(){var f=Object(u.a)(d.a.mark((function f(e,b){var a,t,n,c,r,s;return d.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,a=window,t=a.ethereum){f.next=7;break}return console.log("Make sure you have metamask!"),f.abrupt("return");case 7:console.log("We have the ethereum object",t);case 8:return f.next=10,t.request({method:"eth_accounts"});case 10:if(0===(n=f.sent).length){f.next=22;break}return c=n[0],console.log("Found an authorized account:",c),e(c),r=O(),f.next=18,r.getWaves();case 18:s=f.sent,b(s),f.next=23;break;case 22:console.log("No authorized account found");case 23:f.next=28;break;case 25:f.prev=25,f.t0=f.catch(0),console.log(f.t0);case 28:case"end":return f.stop()}}),f,null,[[0,25]])})));return function(e,b){return f.apply(this,arguments)}}(),k=function(){var f=Object(a.useState)(""),e=Object(i.a)(f,2),b=e[0],t=e[1],n=Object(a.useState)([]),c=Object(i.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)(!1),l=Object(i.a)(o,2),v=l[0],k=l[1],W=Object(a.useState)(""),T=Object(i.a)(W,2),M=T[0],C=T[1];Object(a.useEffect)((function(){w(C,s)}),[]);var S=function(){var f=Object(u.a)(d.a.mark((function f(){var e,b,a;return d.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,e=window,b=e.ethereum){f.next=5;break}return alert("Get MetaMask!"),f.abrupt("return");case 5:return f.next=7,b.request({method:"eth_requestAccounts"});case 7:a=f.sent,console.log("Connected",a[0]),C(a[0]),f.next=15;break;case 12:f.prev=12,f.t0=f.catch(0),console.log(f.t0);case 15:case"end":return f.stop()}}),f,null,[[0,12]])})));return function(){return f.apply(this,arguments)}}(),B=function(){var f=Object(u.a)(d.a.mark((function f(){var e,a,n,c;return d.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,e=window,e.ethereum&&b.length){f.next=5;break}return console.log("Etherium object does not exist!"),f.abrupt("return");case 5:return a=O(),f.next=8,a.wave(b);case 8:return n=f.sent,console.log("Mining...",n.hash),k(!0),f.next=13,n.wait();case 13:return console.log("Mined -- ".concat(n.hash)),k(!1),f.next=17,a.getWaves();case 17:c=f.sent,s(c),t(""),f.next=25;break;case 22:f.prev=22,f.t0=f.catch(0),console.error(f.t0);case 25:case"end":return f.stop()}}),f,null,[[0,22]])})));return function(){return f.apply(this,arguments)}}();return Object(y.jsxs)(p.a,{className:"App",display:"flex",maxW:"36rem",m:"1rem auto",alignItems:"center",flexDirection:"column",children:[Object(y.jsx)(h.a,{children:"Welcome,"}),Object(y.jsx)(h.a,{children:"This site is powered by React & smart contracts on the ethereum rinkeby blockchain"}),r.length?Object(y.jsxs)(m.a,{mb:"1rem",children:["Total Waves: ",r.length]}):null,M?Object(y.jsxs)(p.a,{display:"flex",gridGap:"1rem",children:[Object(y.jsx)(g.a,{placeholder:"Message...",value:b,onChange:function(f){return t(f.target.value)}}),Object(y.jsx)(j.a,{colorScheme:"green",isLoading:v,loadingText:"Mining...",onClick:B,disabled:!b.length,children:"Wave"})]}):Object(y.jsx)(j.a,{colorScheme:"purple",onClick:S,children:"Connect Wallet"}),Object(y.jsxs)(x.a,{mt:"1rem",children:[Object(y.jsx)(x.b,{children:"Past Waves"}),Object(y.jsx)(x.f,{children:Object(y.jsxs)(x.g,{children:[Object(y.jsx)(x.e,{children:"Waver"}),Object(y.jsx)(x.e,{children:"Timestamp"}),Object(y.jsx)(x.e,{children:"Message"})]})}),Object(y.jsx)(x.c,{children:r.map((function(f){return Object(y.jsxs)(x.g,{children:[Object(y.jsx)(x.d,{children:(e=f.waver,e>=42?"".concat(e.substring(0,6),"...").concat(e.substring(e.length-4)):e)}),Object(y.jsx)(x.d,{children:new Date(1e3*f.timestamp).toString()}),Object(y.jsx)(x.d,{children:f.message})]},f.waver);var e}))})]})]})};c.a.render(Object(y.jsx)(t.a.StrictMode,{children:Object(y.jsx)(s.a,{children:Object(y.jsx)(k,{})})}),document.getElementById("root")),r()},85:function(f){f.exports=JSON.parse('{"_format":"hh-sol-artifact-1","contractName":"WavePortal","sourceName":"contracts/WavePortal.sol","abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"string","name":"message","type":"string"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"NewWave","type":"event"},{"inputs":[],"name":"getTotalWaves","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getWaves","outputs":[{"components":[{"internalType":"address","name":"waver","type":"address"},{"internalType":"string","name":"message","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"internalType":"struct WavePortal.Wave[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_message","type":"string"}],"name":"wave","outputs":[],"stateMutability":"nonpayable","type":"function"}],"bytecode":"0x60806040523480156200001157600080fd5b506200004160405180606001604052806025815260200162000dc9602591396200004760201b620003b11760201c565b620001db565b620000e7816040516024016200005e919062000154565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050620000ea60201b60201c565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b6000620001208262000178565b6200012c818562000183565b93506200013e81856020860162000194565b6200014981620001ca565b840191505092915050565b6000602082019050818103600083015262000170818462000113565b905092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015620001b457808201518184015260208101905062000197565b83811115620001c4576000848401525b50505050565b6000601f19601f8301169050919050565b610bde80620001eb6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063449d46c0146100465780639a2cdc0814610062578063a9d42f7e14610080575b600080fd5b610060600480360381019061005b91906106b6565b61009e565b005b61006a610215565b6040516100779190610922565b60405180910390f35b610088610260565b604051610095919061087e565b60405180910390f35b60016000808282546100b09190610a04565b925050819055506100f66040518060400160405280601081526020017f257320776176656420617420796f752e000000000000000000000000000000008152503361044a565b600160405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190805190602001906101b59291906105ab565b506040820151816002015550503373ffffffffffffffffffffffffffffffffffffffff167f6728ef66814a55b797863bf8ffcd954b19cbca4ed4f0e6cf04c980705fd82c36824260405161020a9291906108f2565b60405180910390a250565b60006102586040518060400160405280601681526020017f5765206861766520256420746f74616c207761766573000000000000000000008152506000546104e6565b600054905090565b60606001805480602002602001604051908101604052809291908181526020016000905b828210156103a857838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461030d90610ad8565b80601f016020809104026020016040519081016040528092919081815260200182805461033990610ad8565b80156103865780601f1061035b57610100808354040283529160200191610386565b820191906000526020600020905b81548152906001019060200180831161036957829003601f168201915b5050505050815260200160028201548152505081526020019060010190610284565b50505050905090565b610447816040516024016103c591906108a0565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610582565b50565b6104e282826040516024016104609291906108c2565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610582565b5050565b61057e82826040516024016104fc9291906108f2565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610582565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b8280546105b790610ad8565b90600052602060002090601f0160209004810192826105d95760008555610620565b82601f106105f257805160ff1916838001178555610620565b82800160010185558215610620579182015b8281111561061f578251825591602001919060010190610604565b5b50905061062d9190610631565b5090565b5b8082111561064a576000816000905550600101610632565b5090565b600061066161065c8461096e565b61093d565b90508281526020810184848401111561067957600080fd5b610684848285610a96565b509392505050565b600082601f83011261069d57600080fd5b81356106ad84826020860161064e565b91505092915050565b6000602082840312156106c857600080fd5b600082013567ffffffffffffffff8111156106e257600080fd5b6106ee8482850161068c565b91505092915050565b60006107038383610810565b905092915050565b61071481610a5a565b82525050565b61072381610a5a565b82525050565b6000610734826109ae565b61073e81856109d1565b9350836020820285016107508561099e565b8060005b8581101561078c578484038952815161076d85826106f7565b9450610778836109c4565b925060208a01995050600181019050610754565b50829750879550505050505092915050565b60006107a9826109b9565b6107b381856109e2565b93506107c3818560208601610aa5565b6107cc81610b97565b840191505092915050565b60006107e2826109b9565b6107ec81856109f3565b93506107fc818560208601610aa5565b61080581610b97565b840191505092915050565b6000606083016000830151610828600086018261070b565b5060208301518482036020860152610840828261079e565b91505060408301516108556040860182610860565b508091505092915050565b61086981610a8c565b82525050565b61087881610a8c565b82525050565b600060208201905081810360008301526108988184610729565b905092915050565b600060208201905081810360008301526108ba81846107d7565b905092915050565b600060408201905081810360008301526108dc81856107d7565b90506108eb602083018461071a565b9392505050565b6000604082019050818103600083015261090c81856107d7565b905061091b602083018461086f565b9392505050565b6000602082019050610937600083018461086f565b92915050565b6000604051905081810181811067ffffffffffffffff8211171561096457610963610b68565b5b8060405250919050565b600067ffffffffffffffff82111561098957610988610b68565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610a0f82610a8c565b9150610a1a83610a8c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610a4f57610a4e610b0a565b5b828201905092915050565b6000610a6582610a6c565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610ac3578082015181840152602081019050610aa8565b83811115610ad2576000848401525b50505050565b60006002820490506001821680610af057607f821691505b60208210811415610b0457610b03610b39565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f830116905091905056fea2646970667358221220eef40f1e2df2f8ee959a8fe7ebe87ab09f2df8b1cb2c26c608374828b87cf58764736f6c634300080000335370696e6e696e672075702057617665506f7274616c20736d61727420636f6e7472616374","deployedBytecode":"0x608060405234801561001057600080fd5b50600436106100415760003560e01c8063449d46c0146100465780639a2cdc0814610062578063a9d42f7e14610080575b600080fd5b610060600480360381019061005b91906106b6565b61009e565b005b61006a610215565b6040516100779190610922565b60405180910390f35b610088610260565b604051610095919061087e565b60405180910390f35b60016000808282546100b09190610a04565b925050819055506100f66040518060400160405280601081526020017f257320776176656420617420796f752e000000000000000000000000000000008152503361044a565b600160405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190805190602001906101b59291906105ab565b506040820151816002015550503373ffffffffffffffffffffffffffffffffffffffff167f6728ef66814a55b797863bf8ffcd954b19cbca4ed4f0e6cf04c980705fd82c36824260405161020a9291906108f2565b60405180910390a250565b60006102586040518060400160405280601681526020017f5765206861766520256420746f74616c207761766573000000000000000000008152506000546104e6565b600054905090565b60606001805480602002602001604051908101604052809291908181526020016000905b828210156103a857838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461030d90610ad8565b80601f016020809104026020016040519081016040528092919081815260200182805461033990610ad8565b80156103865780601f1061035b57610100808354040283529160200191610386565b820191906000526020600020905b81548152906001019060200180831161036957829003601f168201915b5050505050815260200160028201548152505081526020019060010190610284565b50505050905090565b610447816040516024016103c591906108a0565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610582565b50565b6104e282826040516024016104609291906108c2565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610582565b5050565b61057e82826040516024016104fc9291906108f2565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610582565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b8280546105b790610ad8565b90600052602060002090601f0160209004810192826105d95760008555610620565b82601f106105f257805160ff1916838001178555610620565b82800160010185558215610620579182015b8281111561061f578251825591602001919060010190610604565b5b50905061062d9190610631565b5090565b5b8082111561064a576000816000905550600101610632565b5090565b600061066161065c8461096e565b61093d565b90508281526020810184848401111561067957600080fd5b610684848285610a96565b509392505050565b600082601f83011261069d57600080fd5b81356106ad84826020860161064e565b91505092915050565b6000602082840312156106c857600080fd5b600082013567ffffffffffffffff8111156106e257600080fd5b6106ee8482850161068c565b91505092915050565b60006107038383610810565b905092915050565b61071481610a5a565b82525050565b61072381610a5a565b82525050565b6000610734826109ae565b61073e81856109d1565b9350836020820285016107508561099e565b8060005b8581101561078c578484038952815161076d85826106f7565b9450610778836109c4565b925060208a01995050600181019050610754565b50829750879550505050505092915050565b60006107a9826109b9565b6107b381856109e2565b93506107c3818560208601610aa5565b6107cc81610b97565b840191505092915050565b60006107e2826109b9565b6107ec81856109f3565b93506107fc818560208601610aa5565b61080581610b97565b840191505092915050565b6000606083016000830151610828600086018261070b565b5060208301518482036020860152610840828261079e565b91505060408301516108556040860182610860565b508091505092915050565b61086981610a8c565b82525050565b61087881610a8c565b82525050565b600060208201905081810360008301526108988184610729565b905092915050565b600060208201905081810360008301526108ba81846107d7565b905092915050565b600060408201905081810360008301526108dc81856107d7565b90506108eb602083018461071a565b9392505050565b6000604082019050818103600083015261090c81856107d7565b905061091b602083018461086f565b9392505050565b6000602082019050610937600083018461086f565b92915050565b6000604051905081810181811067ffffffffffffffff8211171561096457610963610b68565b5b8060405250919050565b600067ffffffffffffffff82111561098957610988610b68565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610a0f82610a8c565b9150610a1a83610a8c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610a4f57610a4e610b0a565b5b828201905092915050565b6000610a6582610a6c565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610ac3578082015181840152602081019050610aa8565b83811115610ad2576000848401525b50505050565b60006002820490506001821680610af057607f821691505b60208210811415610b0457610b03610b39565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f830116905091905056fea2646970667358221220eef40f1e2df2f8ee959a8fe7ebe87ab09f2df8b1cb2c26c608374828b87cf58764736f6c63430008000033","linkReferences":{},"deployedLinkReferences":{}}')}},[[120,1,2]]]);
//# sourceMappingURL=main.0e7d2304.chunk.js.map