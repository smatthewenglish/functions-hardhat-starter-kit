// This example shows how to calculate a continuously compounding interested rate.
// This calculation would require significant on-chain gas, but is easy for a decentralized oracle network.

const config = {
  url: `https://api.coingecko.com/api/v3/simple/price?ids=dimo&vs_currencies=usd`,
  method: "GET",
}

const response = await Functions.makeHttpRequest(config)
const dimoPrice = response.data.dimo.usd * 10 ** 18

// The source code MUST return a Buffer or the request will return an error message
// Use one of the following functions to convert to a Buffer representing the response bytes that are returned to the client smart contract:
// - Functions.encodeUint256
// - Functions.encodeInt256
// - Functions.encodeString
// Or return a custom Buffer for a custom byte encoding
return Functions.encodeUint256(dimoPrice)
