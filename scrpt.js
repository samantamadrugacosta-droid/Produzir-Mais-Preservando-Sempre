document.getElementById('seed-form').addEventListener('submit', function(e) {
    // Evita o recarregamento padrão da página ao enviar o formulário
    e.preventDefault();

    // Captura dos valores inseridos pelo usuário
    const area = parseFloat(document.getElementById('area').value);
    const plantasMetroDesejadas = parseFloat(document.getElementById('density').value);
    const espacamento = parseFloat(document.getElementById('spacing').value);
    const germinacao = parseFloat(document.getElementById('germination').value) / 100;

    // Lógica do Cálculo Agronômico Sustentável
    
    // 1. Ajustar sementes por metro linear com base na taxa de germinação/pureza do lote
    // Ex: Se quero 12 plantas e a germinação é 90%, preciso colocar mais sementes para compensar as que não nascem.
    const sementesMetroAjustado = Math.ceil(plantasMetroDesejadas / germinacao);

    // 2. Calcular quantos metros lineares de sulco existem em 1 Hectare (10.000 m²) com o espaçamento definido
    const metrosLinearesPorHectare = 10000 / espacamento;

    // 3. Calcular total de sementes necessárias por Hectare
    const sementesPorHectare = Math.round(metrosLinearesPorHectare * sementesMetroAjustado);

    // 4. Calcular o total para a área total informada pelo produtor
    const totalSementesArea = Math.round(sementesPorHectare * area);

    // Exibir os resultados na tela manipulando o DOM
    document.getElementById('res-sem-metro').innerText = `${sementesMetroAjustado} sementes`;
    document.getElementById('res-sem-ha').innerText = sementesPorHectare.toLocaleString('pt-BR');
    document.getElementById('res-total').innerText = `${totalSementesArea.toLocaleString('pt-BR')} sementes`;

    // Remove a classe 'hidden' para fazer o bloco de resultado aparecer de forma elegante
    const resultBox = document.getElementById('result-box');
    resultBox.classList.remove('hidden');
    
    // Rola suavemente a tela até o resultado gerado
    resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});