
import { createEthereumProvider } from '@dcl/sdk/ethereum-provider'
import { getPlayerAddress } from '../shared/utils'


// TODO: remove example data and use data in function params
// OLD SDK6 CODE
// const convertedMessage = await eth.convertMessageToObject(messageToSign)
// const { message, signature } = await eth.signMessage(convertedMessage)
// return { message, signature }

/**
 * Sign an object with your address using EIP 712
 * 
 * @param messageToSign String to sign
 * @returns Initial message and its signature
 */
export async function signMessageAdvanced(messageToSign: Object, messageName: string, messageType: Object, domainData: Object) {

	let eip712TypedData = {
		types: {
			EIP712Domain: domain,
			[messageName]: messageType
		},
		domain: domainData,
		primaryType: messageName,
		message: messageToSign
	}

	let playerAddress = await getPlayerAddress()

	if (playerAddress) {

		let provider = createEthereumProvider()
		provider.sendAsync({
			method: 'eth_signTypedData_v4', params: [playerAddress, JSON.stringify(eip712TypedData)],
			jsonrpc: '2.0',
			id: 999999999
		}, async (err, res) => {
			console.log(res)
		})
	}
}

// simple string sign
// export async function signMessage(messageToSign: Object, messageName: string,) {

// 	let messageType: any[] = []

// 	Object.keys(messageToSign).forEach((key: string) => {
// 		try {
// 			let obj: Object = messageToSign[key]
// 			let msgObj: any = { name: obj }

// 			if (typeof obj === 'string') {
// 				msgObj.type = "string"
// 			} else if (typeof obj === 'number') {
// 				msgObj.type = "uint256"
// 			}

// 			//need to also check if string is an address 0x00

// 			messageType.push(msgObj)
// 		}
// 		catch (e) {
// 			console.log('error with adding byte', e)
// 		}
// 	})

// 	let eip712TypedData = {
// 		types: {
// 			EIP712Domain: domain,
// 			[messageName]: messageType
// 		},
// 		domain: domainData,
// 		primaryType: messageName,
// 		message: messageToSign
// 	}

// 	// NEW
// 	let playerAddress = await getPlayerAddress()

// 	if (playerAddress) {

// 		let provider = createEthereumProvider()
// 		provider.sendAsync({
// 			method: 'eth_sign', params: [playerAddress, JSON.stringify(eip712TypedData)],
// 			jsonrpc: '2.0',
// 			id: 999999999
// 		}, async (err, res) => {
// 			console.log(res)
// 		})
// 	}
// }



// type definitions
let domain = [
	{ name: "name", type: "string" },
	{ name: "version", type: "string" },
	{ name: "chainId", type: "uint256" }
]

let itemDefinition = [
	{ "name": 'CollectionAddress', "type": 'address' },
	{ "name": 'TokenId', "type": 'uint256' },
	{ "name": 'Price', "type": 'uint256' },
	{ "name": 'ExpiresAt', "type": 'uint256' },
]

// test data
let domainData = {
	name: "My Dapp",
	version: "1",
	chainId: 1
}

let item = {
	CollectionAddress: '0x5e217c15cbd45bf09fb6fbf6c31d6b3495433ec9',
	TokenId: "7",
	Price: 500,
	ExpiresAt: Math.round(Date.now() / 1000) + 600
}

let eip712TypedData = {
	types: {
		EIP712Domain: domain,
		['Sell Item']: itemDefinition
	},
	domain: domainData,
	primaryType: "Sell Item",
	message: item
}