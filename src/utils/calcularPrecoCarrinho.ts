interface FaixaPreco {
  quantidade: number;
  precoTotal: number;
}

export function calcularPrecoCarrinho(
  precos: FaixaPreco[],
  quantidade: number
): number {
  if (
    quantidade <= 0 ||
    precos.length === 0
  ) {
    return 0;
  }

  const precoExato =
    precos.find(
      (preco) =>
        preco.quantidade ===
        quantidade
    );

  if (precoExato) {
    return precoExato.precoTotal;
  }

  const faixasOrdenadas =
    [...precos].sort(
      (a, b) =>
        b.quantidade -
        a.quantidade
    );

  const maiorFaixa =
    faixasOrdenadas[0];

  if (!maiorFaixa) {
    return 0;
  }

  const precoUnitario =
    maiorFaixa.precoTotal /
    maiorFaixa.quantidade;

  return (
    precoUnitario *
    quantidade
  );
}