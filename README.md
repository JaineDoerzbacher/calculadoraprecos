# Calculadora de Preço de Venda

## Descrição
A **Calculadora de Preço de Venda** é um aplicativo que ajuda os usuários a calcular o preço de venda de seus produtos com base em custos totais, margem de lucro e impostos. O aplicativo guia o usuário por uma série de telas onde ele pode inserir os valores necessários, e no final, o preço de venda sugerido é calculado e exibido.

## Funcionalidades
- **Boas-vindas**: Tela inicial com uma breve introdução e um botão para começar o processo de cálculo.
- **Entenda os Custos**: Tela com dicas sobre como preencher os valores corretamente.
- **Custo Total**: Tela onde o usuário insere o custo total do produto.
- **Margem de Lucro**: Tela onde o usuário insere a margem de lucro desejada.
- **Impostos e Encargos**: Tela onde o usuário insere os impostos e encargos aplicáveis.
- **Resultado Final**: Tela que exibe o preço de venda final calculado com base nos valores inseridos.
- **Sobre o App**: Tela com informações sobre o aplicativo.

## Tecnologias Utilizadas
- **React Native**: Framework para desenvolvimento de aplicativos móveis.
- **React Navigation**: Biblioteca para navegação entre telas.
- **Hooks**: Utilizados para gerenciar o estado e calcular o preço de venda.

## Estrutura do Projeto
```bash
.
├── /assets
│   └── logo.png
├── /components
│   ├── BoasVindas.js
│   ├── EntendaCustos.js
│   ├── CustoTotal.js
│   ├── MargemLucro.js
│   ├── ImpostosEncargos.js
│   ├── ResultadoFinal.js
│   └── Sobre.js
├── /hooks
│   └── useCalculoPrecoVenda.js
├── App.js
└── README.md
