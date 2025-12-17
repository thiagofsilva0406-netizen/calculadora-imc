function meuEscopo () {
  const form = document.querySelector('.form');  
  const resultado = document.querySelector('.resultado');

  function getResultado(imc) {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc < 25) return 'Peso normal';
    if (imc < 30) return 'Sobrepeso';
    if (imc < 35) return 'Obesidade grau 1';
    if (imc < 40) return 'Obesidade grau 2';
    return 'Obesidade grau 3';
  }

  function calcularImc(evento) {
    evento.preventDefault();

    const peso = Number(form.querySelector('#input-peso').value);   
    const altura = Number(form.querySelector('#input-altura').value);

    if (!peso || !altura) {
      resultado.innerHTML = '<p>Preencha os campos corretamente.</p>';
      return;
    }

    const imc = peso / (altura * altura);

    resultado.innerHTML = `
      <p>
        IMC: <strong>${imc.toFixed(2)}</strong><br>
        ${getResultado(imc)}
      </p>
    `;
  }

  form.addEventListener('submit', calcularImc);
}

meuEscopo();
