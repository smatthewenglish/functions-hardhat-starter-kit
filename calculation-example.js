const config = {
  url: `https://api.coingecko.com/api/v3/simple/price?ids=dimo&vs_currencies=usd`,
  method: "GET",
}

const response = await Functions.makeHttpRequest(config)
const dimoPrice = response.data.dimo.usd * 10 ** 18

return Functions.encodeUint256(dimoPrice)
