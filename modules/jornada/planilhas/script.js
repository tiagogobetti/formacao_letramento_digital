document.addEventListener('DOMContentLoaded', () => {
    const btnConcluir = document.getElementById('btn-concluir');
    const nextSection = document.getElementById('next-module-section');
    const congratsTitle = document.getElementById('congrats-title');

    if(btnConcluir) {
        btnConcluir.addEventListener('click', () => {
            // Feedback visual utilizando a cor verde institucional
            congratsTitle.innerHTML = '🎉 Parabéns! Trilha de Planilhas Concluída!';
            congratsTitle.style.color = 'var(--secondary)';
            
            // Oculta o botão concluir e exibe as diretrizes para ir ao Formulários
            btnConcluir.style.display = 'none';
            nextSection.style.display = 'block';
            
            // Rola suavemente até o container do próximo módulo
            nextSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }
});