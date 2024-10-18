const useCalculoPrecoVenda = (custoProduto, custosFixos, custosVariaveis, margemLucro, impostos) => {
    const calcularPrecoVenda = () => {
      const custoProdutoNum = parseFloat(custoProduto);
      const custosFixosNum = parseFloat(custosFixos);
      const custosVariaveisNum = parseFloat(custosVariaveis);
      const margemLucroNum = parseFloat(margemLucro) / 100;
      const impostosNum = parseFloat(impostos) / 100;
  
      if (isNaN(custoProdutoNum) || isNaN(custosFixosNum) || isNaN(custosVariaveisNum) || isNaN(margemLucroNum) || isNaN(impostosNum)) {
        return { error: 'Por favor, insira valores válidos.' };
      }
  
      const custoTotal = custoProdutoNum + custosFixosNum + custosVariaveisNum;
      const precoVenda = custoTotal * (1 + margemLucroNum);
      const precoComImpostos = (custoTotal / (1 - impostosNum)) * (1 + margemLucroNum);
  
      return { custoTotal: custoTotal.toFixed(2), precoVenda: precoVenda.toFixed(2), precoComImpostos: precoComImpostos.toFixed(2) };
    };
  
    return { calcularPrecoVenda };
  };
  
  export default useCalculoPrecoVenda;