var numeroFuncionario = prompt('Informe o nome do Colaborador');  

var salarioBruto = prompt('Informe o salario do Colaborador');

var descontoVt = salarioBruto * 0.06;

var descontoInss = salarioBruto * 0.08; 

var salarioLiquido = salarioBruto - descontoInss - descontoVt; 
     document.write (`O salario bruto do colaborador ${numeroFuncionario} é de R$ ${salarioBruto}`);
    document.write('<br>');
       
       document.write (`O desconto do vale transporte é de R$ ${descontoVt}`);
       document.write('<br>');

      document.write (`O desconto do INSS é de R$ ${descontoInss}`);
      document.write('<br>');

     document.write(`O salario liquido do Colaborador ${numeroFuncionario} é de R$ ${salarioLiquido} `);
     document.write('<br>');
