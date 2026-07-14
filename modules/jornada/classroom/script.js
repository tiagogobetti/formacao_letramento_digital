/* ===================================
   LÓGICA DO MÓDULO FINAL (Google Classroom)
=================================== */

document.addEventListener('DOMContentLoaded', () => {
    const btnConcluir = document.getElementById('btn-concluir');
    const congratsTitle = document.getElementById('congrats-title');
    const completionText = document.getElementById('completion-text');

    let clickStep = 1;

    if (btnConcluir) {
        btnConcluir.addEventListener('click', () => {
            if (clickStep === 1) {
                // Etapa 1: Apresentar feedback de encerramento da jornada assíncrona
                congratsTitle.innerHTML = '🎉 Parabéns! Etapa Assíncrona Concluída!';
                congratsTitle.style.color = 'var(--secondary)';
                
                // Texto pedagógico detalhado lembrando do envio da atividade final
                completionText.innerHTML = `
                    Você completou com sucesso todas as 6 trilhas de estudos autônomos da nossa formação! 
                    Sua jornada de letramento digital avançou significativamente.<br><br>
                    <strong style="color: var(--danger); display: block; font-size: 20px; margin-top: 10px;">
                        ⚠️ ATENÇÃO AO PRAZO DA ATIVIDADE PRÁTICA:
                    </strong>
                    Não se esqueça de realizar o envio da sua atividade final na plataforma até a data de <strong>17/08</strong>.<br>
                    A entrega desta atividade é indispensável para a validação da sua carga horária e emissão do certificado.
                `;

                // Transiciona o botão para a ação de retorno ao início
                btnConcluir.innerHTML = 'Voltar para a Página Inicial';
                btnConcluir.style.backgroundColor = 'var(--secondary)';
                
                // Avança o estado de cliques
                clickStep = 2;
                
                // Rolagem confortável para manter o botão centralizado na tela
                btnConcluir.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
            } else if (clickStep === 2) {
                // Etapa 2: Redireciona o professor de volta para o menu principal de trilhas/página inicial do portal
                window.location.href = '../../../index.html';
            }
        });
    }
});