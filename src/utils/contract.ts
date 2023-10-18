import { RequestManager, ContractFactory } from "eth-connect"
import { createEthereumProvider } from '@dcl/sdk/ethereum-provider'

export const mainnet = {
	MANAToken: '0x0f5d2fb29fb7d3cfee444a200298f468908cc942',
	LANDRegistry: '0xa57e126b341b18c262ad25b86bb4f65b5e2ade45',
	LANDProxy: '0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d',
	TerraformReserve: '0xcca95e580bbbd04851ebfb85f77fd46c9b91f11c',
	ReturnVesting: '0x79c1fdaba012b9a094c495a86ce5c6199cf86368',
	LegacyMarketplace: '0xb3bca6f5052c7e24726b44da7403b56a8a1b98f8',
	Marketplace: '0x19a8ed4860007a66805782ed7e0bed4e44fc6717',
	MarketplaceProxy: '0x8e5660b4ab70168b5a6feea0e0315cb49c8cd539',
	ServiceLocator: '0x151b11892dd6ab1f91055dcd01d23d03a2c47570',
	MortgageHelper: '0x90263ea5c57dc6603ca7202920735a6e31235bb9',
	MortgageManager: '0x9abf1295086afa0e49c60e95c437aa400c5333b8',
	RCNEngine: '0xba5a17f8ad40dc2c955d95c0547f3e6318bd72e7',
	RCNToken: '0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6',
	KyberOracle: '0x2aaf69a2df2828b55fa4a5e30ee8c3c7cd9e5d5b',
	DecentralandInvite: '0xf886313f213c198458eba7ae9329525e64eb763a',
	EstateRegistry: '0x1784ef41af86e97f8d28afe95b573a24aeda966e',
	EstateProxy: '0x959e104e1a4db6317fa58f8295f586e1a978c297',
	LANDAuction: '0x54b7a124b44054da3692dbc56b116a35c6a3e561',
	MANABurner: '0xadfeb1de7876fcabeaf87df5a6c566b70f970018',
	MultiSigWallet: '0x4eac6325e1dbf1ac90434d39766e164dca71139e',
	Nobody: '0xDf861993Edbe95BAFbfA7760838f8ebbd5Afda9F',
	ERC721Bid: '0xe479dfd9664c693b2e2992300930b00bfde08233',
	BidMANABurner: '0x0fcf114c63a5387878e0da051c81cb6febd93b6c',
	MultisigContractOwner: '0xefc549434a03756f6e37a43757a2927605d8839b',
	AvatarNameRegistry: '0x894b883905bfEe2CC448880F1b59f4A762E67566',
	AvatarNameRegistryProxy: '0xcd816354450015A5644857FEd507afEeaE7263af',
	ExclusiveMasksCollection: '0xc04528c14c8ffd84c7c1fb6719b4a89853035cdd',
	Halloween2019Collection: '0xc1f4b0eea2bd6690930e6c66efd3e197d620b9c2',
	Halloween2019CollectionFactory: '0x07ccfd0fbada4ac3c22ecd38037ca5e5c0ad8cfa',
	Xmas2019Collection: '0xc3af02c0fd486c8e9da5788b915d6fff3f049866',
	DCLRegistrar: '0x2a187453064356c898cae034eaed119e1663acb8',
	DCLController: '0x6843291bd86857d97f0d269e698939fb10d60772',
	Catalyst: '0xcc054fab08127c19f621ab83ade5962cd10584ec',
	CatalystProxy: '0x4a2f10076101650f40342885b99b6b101d83c486',
	MCHCollection: '0xf64dc33a192e056bb5f0e5049356a0498b502d50',
	CommunityContestCollection: '0x32b7495895264ac9d0b12d32afd435453458b1c6',
	DCLLaunchCollection: '0xd35147be6401dcb20811f2104c33de8e97ed6818',
	DCGCollection: '0x3163d2cfee3183f9874e2869942cc62649eeb004',
	StaySafeCollection: '0x201c3af8c471e5842428b74d1e7c0249adda2a92',
	StaySafeDonation: '0x56505a0313ba2b4bc0be23dbb7eb71b7885fca9e',
	ClaimWearableForFree: '0x8dd61d1a67bce13a87e20a76c6f164c388a726d6',
	Moonshot2020Collection: '0x6a99abebb48819d2abe92c5e4dc4f48dc09a3ee8',
	DAOAgent: '0x9A6ebE7E2a7722F8200d0ffB63a1F6406A0d7dce',
	LANDMiniMeToken: '0x20dfe381ca71ade2582094cf569a8cb020af5ab1',
	EstateMiniMeToken: '0x8568f23f343694650370fe5e254b55bfb704a6c7',
	BuyAdapter: '0xf4fbd84193f9aaf9779dedbb415a806933eb1c95',
	AdapterFeeCollector: '0x0d58aaae9f0c4d020486f534363f3fca7a6aecb6',
	AdapterConverter: '0x2859581da59bd4e16a866dd06b461b76d8e489a4',
	DappcraftMoonminerCollection: '0x1e1d4e6262787c8a8783a37fee698bd42aa42bec',
	DGSummer2020Collection: '0xbf53c33235cbfc22cef5a61a83484b86342679c5',
	PMOuttathisworldCollection: '0x75a3752579dc2d63ca229eebbe3537fbabf85a12',
	DgtbleHeadspaceCollection: '0x574f64ac2e7215cba9752b85fc73030f35166bc0',
	WonderzoneMeteorchaserCollection: '0x34ed0aa248f60f54dd32fbc9883d6137a491f4f3',
	BurningStore: '0x0822d44c2e2f96d4cccad80610134861802b2cca',
	BaseList: '0x21b6EFf834d7cc8c12A5Ec924939aa521F0FE83F',
	POIAllowListProxy: '0x0ef15a1c7a49429a36cb46d4da8c53119242b54e',
	NameDenyListProxy: '0x0c4c90a4f29872a2e9ef4c4be3d419792bca9a36',
}

export const ropsten = {
	PrivateNodeWallet: '0x62ba62ff92917edf8ac0386fa10e3b27950bce8d',
	MANAToken: '0x2a8fd99c19271f4f04b1b7b9c4f7cf264b626edb',
	LANDRegistry: '0x255baf4096cb1723c00c4b4390a4b3028ecaa8ba',
	LANDProxy: '0x7a73483784ab79257bb11b96fd62a2c3ae4fb75b',
	TerraformReserve: '0x4bc79175f1f6fded07f04aa1b4b0465ecff6f1b3',
	ReturnVesting: '0x58c7e6e382c1c19c132b0361c12cbc33e2b13076',
	LegacyMarketplace: '0x80faa2b517b84a5aec1078d3600eab4c0b3aff56',
	Marketplace: '0x3d2f10c76b115db93a418ed286ca0c5abfdbf5d0',
	MarketplaceProxy: '0x5424912699dabaa5f2998750c1c66e73d67ad219',
	ServiceLocator: '0xb240b30c12d2a9ea6ba3abbf663d9ae265fbebeb',
	MortgageHelper: '0x0e4c24f71c8679b8af8e5a22aac3816e2b23f1cc',
	MortgageManager: '0x31ebb4ffd5e34acfc87ea21a0c56157188f3f0e1',
	RCNEngine: '0xbeE217bfe06C6FAaa2d5f2e06eBB84C5fb70d9bF',
	RCNToken: '0x2f45b6fb2f28a73f110400386da31044b2e953d4',
	KyberOracle: '0x4931d0621360187199de494a1469165079b31bfc',
	DecentralandInvite: '0x7557dfa02f3bd7d274851e3f627de2ed2ff390e8',
	EstateRegistry: '0x60e315992d5e62457215dd1e6a49d1ceb7983dfc',
	EstateProxy: '0x124bf28a423b2ca80b3846c3aa0eb944fe7ebb95',
	ERC721Bid: '0x250fa138c0a994799c7a49df3097dc71e37b3d6f',
	BidMANABurner: '0x01f43c3133b83086d4776027fbd152fa8a685fb4',
	AvatarNameRegistry: '0xd127F8d9C736d91Acdee34645e0b4C9db7178160',
	AvatarNameRegistryProxy: '0x2d794a7c956624fb93Eb3ff6E48D5b5d6dBA127b',
	ExclusiveMasksCollection: '0x30ae57840b0e9b8ea55334083d53d80b2cfe80e0',
	DCLRegistrar: '0xeb6f5d94d79f0750781cc962908b161b95192f53',
	DCLController: '0xd4e92f6ea18412dbae8b2d2b69e498a2d1064fa2',
	Catalyst: '0xadd085f2318e9678bbb18b3e0711328f902b374b',
	BuyAdapter: '0xd1e4e2880ff56cd0d5c68da9bed58bfbf0150948',
	AdapterFeeCollector: '0x5DC888024cB599CfDdb9E6483ED6bAe1fA9e9D18',
	AdapterConverter: '0x2782eb28Dcb1eF4E7632273cd4e347e130Ce4646',
	POIAllowlist: '0x5DC4a5C214f2161F0D5595a6dDd9352409aE3Ab4',
	NAMEDenylist: '0x20c6f1e86eba703a14414a0cbc1b55c89dba7a0f',
}
export const kovan = {
	MANAToken: '0x230fc362413d9e862326c2c7084610a5a2fdf78a',
	LANDRegistry: '0x2059291430b9aa2F79547f657816eFb816b36614',
	LANDProxy: '0x537263c440943f6a6808bCb8CcB3fe03EE838aD1',
	Marketplace: '0x6f44f195999f06aeb5872db96cdc517f1e839f13',
}
export const rinkeby = {
	MANAToken: '0x28bce5263f5d7f4eb7e8c6d5d78275ca455bac63',
	LANDProxy: '0x28bef22df3e2040a4be64a9ca0e8b5ae2b91462d',
	LANDRegistry: '0xaf29226656fade9c97f51741e40f60c5bd67ee31',
	Multisig: '0x0de35b8b47b129877e0efca24e294b61d7e7eee3',
}

export async function getContract(contractAddress: string, abi: any) {
	// create an instance of the web3 provider to interface with Metamask
	const provider = createEthereumProvider()
	// Create the object that will handle the sending and receiving of RPC messages
	const requestManager = new RequestManager(provider)
	// Create a factory object based on the abi
	const factory = new ContractFactory(requestManager, abi)
	// Use the factory object to instance a `contract` object, referencing a specific contract
	const contract = (await factory.at(
		contractAddress
	)) as any
	return { contract, provider, requestManager }
}
