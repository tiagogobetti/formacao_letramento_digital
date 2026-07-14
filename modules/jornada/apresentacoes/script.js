/* ===================================
   LÓGICA DO MÓDULO (Google Apresentações)
=================================== */

document.addEventListener('DOMContentLoaded', () => {
    const btnConcluir = document.getElementById('btn-concluir');
    const nextSection = document.getElementById('next-module-section');
    const congratsTitle = document.getElementById('congrats-title');

    if (btnConcluir) {
        btnConcluir.addEventListener('click', () => {
            // Feedback visual utilizando a cor de sucesso (verde institucional)
            congratsTitle.innerHTML = '🎉 Parabéns! Trilha de Apresentações Concluída!';
            congratsTitle.style.color = 'var(--secondary)';
            
            // Oculta o botão concluir e exibe a próxima etapa de Classroom
            btnConcluir.style.display = 'none';
            nextSection.style.display = 'block';
            
            // Rolagem suave e confortável até o botão de avançar para a trilha final
            nextSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }
});