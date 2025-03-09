function calcular() {
    const homens = parseInt(document.getElementById('homens').value) || 0;
    const mulheres = parseInt(document.getElementById('mulheres').value) || 0;
    const criancas = parseInt(document.getElementById('criancas').value) || 0;

    const carne = homens * 500 + mulheres * 300 + criancas * 200;
    const frango = homens * 200 + mulheres * 200 + criancas * 100;
    const linguica = (homens + mulheres + criancas) * 200;
    const refrigerante = homens * 300 + mulheres * 400 + criancas * 200;
    const cerveja = homens * 800 + mulheres * 500;

    const formatarKg = num => (num / 1000).toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
    const formatarL = num => (num / 1000).toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });

    const resultado = `
        <h2>Quantidade Necessária:</h2>
        <p>Carne bovina: ${formatarKg(carne)} kg</p>
        <p>Frango: ${formatarKg(frango)} kg</p>
        <p>Linguiça: ${formatarKg(linguica)} kg</p>
        <p>Refrigerante: ${formatarL(refrigerante)} L</p>
        <p>Cerveja: ${formatarL(cerveja)} L</p>
    `;

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = resultado;
    resultadoDiv.style.display = 'block';
}
