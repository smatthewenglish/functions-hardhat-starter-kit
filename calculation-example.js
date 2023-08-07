const mockZillowConfig = {
  url: `https://gist.githubusercontent.com/smatthewenglish/19dea24c4530022093b36abe88e01d57/raw/${args[0]}`,
  method: "GET",
}

const mockZillowResponse = await Functions.makeHttpRequest(mockZillowConfig)

const currentValueUsd = mockZillowResponse.data.current_value

const currentValueUsdNormalizedInWei = currentValueUsd * 10 ** 18

return Functions.encodeUint256(currentValueUsdNormalizedInWei)
