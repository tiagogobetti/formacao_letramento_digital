document.addEventListener('DOMContentLoaded', () => {
    const btnConcluir = document.getElementById('btn-concluir');
    const nextSection = document.getElementById('next-module-section');
    const congratsTitle = document.getElementById('congrats-title');

    if(btnConcluir) {
        btnConcluir.addEventListener('click', () => {
            // Feedback visual utilizando a cor de sucesso (verde)
            congratsTitle.innerHTML = '🎉 Parabéns! Trilha do Google Drive Concluída!';
            congratsTitle.style.color = 'var(--secondary)';
            
            // Esconde o botão atual de conclusão e revela a próxima etapa
            btnConcluir.style.display = 'none';
            nextSection.style.display = 'block';
            
            // Rola suavemente até o botão de avançar trilha
            nextSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }
});