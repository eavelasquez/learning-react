const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRamdomFact = async () => {
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const { fact } = await res.json()
  return fact
}
