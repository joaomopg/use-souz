import {
  useMemo,
  type MouseEvent
} from "react";

import type {
  ProdutoVariacao
} from "../../types/Produto";

import {
  Container,
  Group,
  GroupLabel,
  Options,
  OptionButton,
  SingleOption
} from "./VariationSelectorStyles";

interface VariationSelectorProps {
  variacoes: ProdutoVariacao[];

  variacaoSelecionadaId:
    number | null;

  onSelect:
    (variacaoId: number) => void;
}

const nomesAtributos:
Record<string, string> = {
  tamanho: "Tamanho",
  comprimento: "Comprimento",
  espessura: "Espessura",
  cor: "Cor"
};

const ordemAtributos = [
  "tamanho",
  "comprimento",
  "espessura",
  "cor"
];

function formatarNomeAtributo(
  atributo: string
): string {
  return (
    nomesAtributos[atributo] ??
    atributo
      .replace(/_/g, " ")
      .replace(
        /^./,
        (letra) =>
          letra.toUpperCase()
      )
  );
}

function extrairNumero(
  valor: string
): number | null {
  const correspondencia =
    valor
      .replace(",", ".")
      .match(
        /\d+(?:\.\d+)?/
      );

  if (!correspondencia) {
    return null;
  }

  const numero =
    Number(correspondencia[0]);

  return Number.isFinite(numero)
    ? numero
    : null;
}

function ordenarValores(
  valores: string[]
): string[] {
  return [...valores].sort(
    (valorA, valorB) => {
      const numeroA =
        extrairNumero(valorA);

      const numeroB =
        extrairNumero(valorB);

      if (
        numeroA !== null &&
        numeroB !== null &&
        numeroA !== numeroB
      ) {
        return numeroA - numeroB;
      }

      return valorA.localeCompare(
        valorB,
        "pt-BR"
      );
    }
  );
}

export default function VariationSelector({
  variacoes,
  variacaoSelecionadaId,
  onSelect
}: VariationSelectorProps) {
  const variacaoSelecionada =
    useMemo(
      () =>
        variacoes.find(
          (variacao) =>
            variacao.id ===
            variacaoSelecionadaId
        ) ??
        variacoes[0] ??
        null,
      [
        variacoes,
        variacaoSelecionadaId
      ]
    );

  const atributosQueVariam =
    useMemo(() => {
      const chaves =
        new Set<string>();

      for (const variacao of variacoes) {
        for (
          const chave
          of Object.keys(
            variacao.atributos
          )
        ) {
          chaves.add(chave);
        }
      }

      return [...chaves]
        .filter((chave) => {
          const valores =
            new Set(
              variacoes
                .map(
                  (variacao) =>
                    variacao
                      .atributos[chave]
                )
                .filter(
                  (
                    valor
                  ): valor is string =>
                    Boolean(valor)
                )
            );

          return valores.size > 1;
        })
        .sort(
          (chaveA, chaveB) => {
            const indiceA =
              ordemAtributos.indexOf(
                chaveA
              );

            const indiceB =
              ordemAtributos.indexOf(
                chaveB
              );

            const ordemA =
              indiceA === -1
                ? 999
                : indiceA;

            const ordemB =
              indiceB === -1
                ? 999
                : indiceB;

            return ordemA - ordemB;
          }
        );
    }, [variacoes]);

  function selecionarValor(
    event:
      MouseEvent<HTMLButtonElement>,

    atributo: string,
    valor: string
  ) {
    event.stopPropagation();

    /*
     * Primeiro tenta preservar as outras
     * escolhas já feitas pelo usuário.
     */
    const variacaoCompativel =
      variacoes.find(
        (variacao) => {
          if (
            variacao
              .atributos[atributo] !==
            valor
          ) {
            return false;
          }

          return atributosQueVariam
            .filter(
              (chave) =>
                chave !== atributo
            )
            .every((chave) => {
              const valorAtual =
                variacaoSelecionada
                  ?.atributos[chave];

              if (!valorAtual) {
                return true;
              }

              return (
                variacao
                  .atributos[chave] ===
                valorAtual
              );
            });
        }
      );

    /*
     * Caso a combinação atual não exista,
     * escolhe a primeira variação que tenha
     * o novo valor.
     */
    const variacaoAlternativa =
      variacoes.find(
        (variacao) =>
          variacao
            .atributos[atributo] ===
          valor
      );

    const novaVariacao =
      variacaoCompativel ??
      variacaoAlternativa;

    if (novaVariacao) {
      onSelect(
        novaVariacao.id
      );
    }
  }

  if (variacoes.length === 0) {
    return (
      <SingleOption>
        Produto sem variações disponíveis
      </SingleOption>
    );
  }

  /*
   * Nenhum atributo muda entre as variações.
   */
  if (
    atributosQueVariam.length === 0
  ) {
    return (
      <SingleOption>
        Opção única
      </SingleOption>
    );
  }

  return (
    <Container
      onClick={(event) =>
        event.stopPropagation()
      }
    >
      {atributosQueVariam.map(
        (atributo) => {
          const valores =
            ordenarValores(
              [
                ...new Set(
                  variacoes
                    .map(
                      (variacao) =>
                        variacao
                          .atributos[
                            atributo
                          ]
                    )
                    .filter(
                      (
                        valor
                      ): valor is string =>
                        Boolean(valor)
                    )
                )
              ]
            );

          const valorSelecionado =
            variacaoSelecionada
              ?.atributos[
                atributo
              ];

          return (
            <Group key={atributo}>
              <GroupLabel>
                {formatarNomeAtributo(
                  atributo
                )}
              </GroupLabel>

              <Options>
                {valores.map(
                  (valor) => (
                    <OptionButton
                      key={valor}
                      type="button"

                      $selected={
                        valorSelecionado ===
                        valor
                      }

                      onClick={(
                        event
                      ) =>
                        selecionarValor(
                          event,
                          atributo,
                          valor
                        )
                      }
                    >
                      {valor}
                    </OptionButton>
                  )
                )}
              </Options>
            </Group>
          );
        }
      )}
    </Container>
  );
}