/* ===================================
   LÓGICA DO MÓDULO (Google Formulários)
=================================== */

document.addEventListener('DOMContentLoaded', () => {
    const btnConcluir = document.getElementById('btn-concluir');
    const nextSection = document.getElementById('next-module-section');
    const congratsTitle = document.getElementById('congrats-title');

    if (btnConcluir) {
        btnConcluir.addEventListener('click', () => {
            // Feedback visual utilizando a cor de sucesso (verde institucional)
            congratsTitle.innerHTML = '🎉 Parabéns! Trilha de Formulários Concluída!';
            congratsTitle.style.color = 'var(--secondary)';
            
            // Oculta o botão concluir e exibe a próxima etapa de Apresentações
            btnConcluir.style.display = 'none';
            nextSection.style.display = 'block';
            
            // Rolagem fluida e confortável para o utilizador até o botão de avançar
            nextSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }
});