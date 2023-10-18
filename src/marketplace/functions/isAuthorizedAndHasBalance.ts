import { allowance } from '../../currency/index'
import { mainnet as Addresses } from '../../utils/contract'
import { toWei } from 'eth-connect'
import { myBalance } from '../../mana/index'
import { getPlayerAddress } from '../../shared/utils'

export async function isAuthorizedAndHasBalance(price: string, userAddress?: string) {
	const authorized = await allowance(
		Addresses.MANAToken,
		userAddress ? userAddress : await getPlayerAddress(),
		Addresses.MarketplaceProxy
	)
	if (+authorized < +toWei(price, 'ether').toString()) return false

	const balance = await myBalance()
	if (+balance >= +toWei(price, 'ether').toString()) return true
	else return false
}
