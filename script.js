// Aguarda o carregamento completo do documento HTML antes de executar o script
document.addEventListener('DOMContentLoaded', function() {

    // =======================================================
    // 1. CONFIGURAÇÕES DE CONTATO - MUDAR AQUI! 🚨🚨🚨
    // =======================================================
    // Seu e-mail para receber as solicitações (será usado no link mailto, por isso está no JS)
    const YOUR_CONTACT_EMAIL = 'atendimento@documentosinfronteras.com.br'; 
    // Seu número WhatsApp (com código do país '55' e DDD, sem símbolos)
    const YOUR_WHATSAPP_NUMBER = '5549991888063'; 


    // =======================================================
    // 2. Seleção de Elementos Principais (Cache de DOM)
    // =======================================================
    const cards = document.querySelectorAll('.service-card'); 
    const modal = document.getElementById('service-modal'); 
    const modalServiceName = document.getElementById('modal-service-name'); 
    // Seleciona o botão de fechar, que agora tem a classe 'close-button'
    const closeButton = document.querySelector('.close-button'); 
    const stepConfirmation = document.getElementById('step-confirmation'); 
    const stepForm = document.getElementById('step-form'); 
    const btnYes = document.getElementById('btn-yes'); 
    const btnNo = document.getElementById('btn-no'); 
    const form = document.getElementById('contact-form'); 
    const btnSendEmail = document.getElementById('btn-send-email'); 
    const btnSendWhatsapp = document.getElementById('btn-send-whatsapp'); 

    // Variável para armazenar o nome do serviço clicado
    let selectedServiceName = ''; 
    

    // =======================================================
    // 3. Lógica de Abertura do Modal (para cada card)
    // =======================================================
    // Explicação: Adiciona um 'ouvinte de evento' de clique a cada card de serviço.
    cards.forEach(card => {
        card.addEventListener('click', function() {
            // Pega o nome do serviço do atributo 'data-service-name'
            selectedServiceName = this.getAttribute('data-service-name'); 
            
            // Exibe o nome do serviço no modal
            modalServiceName.textContent = selectedServiceName; 
            
            // RESETA o modal para a primeira etapa antes de exibir
            // Garante que a etapa de confirmação esteja visível e o formulário invisível
            stepConfirmation.style.display = 'block'; 
            stepForm.style.display = 'none'; 
            form.reset(); // Limpa o formulário, caso tenha sido preenchido antes
            
            // Exibe o modal
            modal.style.display = 'block'; 
        });
    });

    // =======================================================
    // 4. Eventos de Fechamento do Modal
    // =======================================================

    // O botão 'X' (CORRIGIDO com a classe close-button no HTML)
    closeButton.addEventListener('click', () => {
        // Explicação: Esconde o elemento.
        modal.style.display = 'none';
    });

    // Clicar fora do modal (fecha o modal)
    window.addEventListener('click', (event) => {
        // Explicação: Se o elemento clicado for o próprio container do modal...
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Botão "Não, Obrigado"
    btnNo.addEventListener('click', () => {
        modal.style.display = 'none'; // Fecha o modal
    });


    // =======================================================
    // 5. Transição: Confirmação -> Formulário
    // =======================================================

    // Botão "Sim, Solicitar"
    btnYes.addEventListener('click', () => {
        // Explicação: Esconde a 1ª etapa (confirmação) e mostra a 2ª etapa (formulário).
        stepConfirmation.style.display = 'none';
        stepForm.style.display = 'block';
    });

    // =======================================================
    // 6. Lógica de Envio dos Dados (Funções Auxiliares)
    // =======================================================

    // Função auxiliar para pegar os dados do formulário
    function getFormData() {
        // Explicação: Coleta os valores atuais dos campos.
        return {
            service: selectedServiceName,
            nome: document.getElementById('nome').value,
            dataNasc: document.getElementById('data-nasc').value,
            telefone: document.getElementById('telefone').value,
            email: document.getElementById('email').value
        };
    }
    
    // Função auxiliar para formatar a mensagem
    function formatMessage(data) {
        // Explicação: Cria o texto padronizado que será enviado por E-mail ou WhatsApp.
        return `
Olá,
Gostaria de solicitar o serviço de *${data.service}*.

Dados do Solicitante:
- Nome Completo: ${data.nome}
- Data de Nascimento: ${data.dataNasc}
- Telefone (c/ WhatsApp): ${data.telefone}
- E-mail para Contato: ${data.email}

*Solicitação via Site.*
`.trim();
    }


    // =======================================================
    // 7. Envio por E-mail (mail-to)
    // =======================================================
    btnSendEmail.addEventListener('click', () => {
        // Explicação: Checa se os campos 'required' do formulário estão preenchidos.
        if (!form.reportValidity()) {
            return; // Pára a execução se o formulário não for válido
        }

        const data = getFormData();
        
        // Monta o link 'mailto'
        const subject = `Solicitação de Serviço: ${data.service}`;
        const body = formatMessage(data);

        // Cria o link para abrir o cliente de e-mail do usuário
        // OBS: Substitua 'YOUR_CONTACT_EMAIL' pelo e-mail real da sua empresa.
        const mailtoLink = `mailto:${YOUR_CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Redireciona para o link mailto
        window.location.href = mailtoLink;
        
        alert('Seu cliente de e-mail será aberto. Por favor, envie a mensagem pré-preenchida. Obrigado!');
        modal.style.display = 'none'; // Fecha o modal após a ação
    });


    // =======================================================
    // 8. Envio por WhatsApp (wa.me)
    // =======================================================
    btnSendWhatsapp.addEventListener('click', () => {
        // Explicação: Checa se os campos 'required' estão preenchidos.
        if (!form.reportValidity()) {
            return; 
        }
        
        const data = getFormData();
        
        // Monta a mensagem
        const message = formatMessage(data);

        // Cria o link para o WhatsApp
        const whatsappLink = `https://wa.me/${YOUR_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

        // Abre o link do WhatsApp em uma nova aba
        window.open(whatsappLink, '_blank'); 
        
        alert('Você será redirecionado para o WhatsApp. Por favor, envie a mensagem pré-preenchida. Obrigado!');
        modal.style.display = 'none'; // Fecha o modal após a ação
    });

}); // Fim do DOMContentLoaded