document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();


    const salario = parseFloat(document.getElementById('salario').value);
    const emprestimo = parseFloat(document.getElementById('emprestimo').value);
    const parcelas = parseInt(document.getElementById('parcelas').value, 10);
    const servico = document.getElementById('servico').value;



    
    let porcentual_Juros = 1.8 / 100;
    let porcentual_Salario = salario * 0.3




    let valor_Parcelas = (emprestimo / parcelas) * (1 + porcentual_Juros);
valor_Parcelas = parseFloat(valor_Parcelas.toFixed(2));
 




    let mensagem = '';


if(servico === 'emprestimo'){

 if(parcelas > 36){
  mensagem = `<p>Emprestimo negado</p>
            <p>Não é permitido mais que 36 parcelas para empréstimo</p>`;
            
 }else if(valor_Parcelas > porcentual_Salario){
  mensagem = `<p>Empréstimo negado</p>
            <p>O valor das parcelas não pode ser maior que 30% do salário</p>`;
 } else{
  mensagem = `<p>Empréstimo autorizado</p>
            <p>O valor das parcelas será de R$ ${valor_Parcelas}</p>`;
 }

}


if(servico === 'carro'){

  if(parcelas > 48){
   mensagem = `<p>Emprestimo negado</p>
             <p>Não é permitido mais que 48 parcelas para empréstimo</p>`;
             
  }else if(valor_Parcelas > porcentual_Salario){
   mensagem = `<p>Empréstimo negado</p>
             <p>O valor das parcelas não pode ser maior que 30% do salário</p>`;
  } else{
   mensagem = `<p>Seu financimanento para seu veículo foi autorizado. Parabéns</p>
             <p>O valor das parcelas será de R$ ${valor_Parcelas}</p>`;
  }
 
 
 
 }


 if(servico === 'casa'){

  if(parcelas > 360){
   mensagem =  `<p>Emprestimo negado</p>
             <p>Não é permitido mais que 360 parcelas para empréstimo</p>`;
             
  }else if(valor_Parcelas > porcentual_Salario){
   mensagem = `<p>Empréstimo negado</p>
             <p>O valor das parcelas não pode ser maior que 30% do salário</p>`;
  } else{
   mensagem =  `<p>Seu financimanento para seu imóvel foi autorizado. Parabéns</p>
             <p>O valor das parcelas será de R$ ${valor_Parcelas}</p>`;
  }
 
 
 
 }
    
 
  
 document.getElementById('valor_Parcelas').innerHTML = mensagem;







})

