// Aguarda o carregamento completo do documento HTML
document.addEventListener('DOMContentLoaded', function() {

    // 1. Seleção de Elementos Principais
    const cards = document.querySelectorAll('.service-card'); 
    const modal = document.getElementById('service-modal'); 
    const modalServiceName = document.getElementById('modal-service-name'); 
    const closeButton = document.querySelector('.close-button'); 
    const stepConfirmation = document.getElementById('step-confirmation'); 
    const stepForm = document.getElementById('step-form'); 
    const btnYes = document.getElementById('btn-yes'); 
    const btnNo = document.getElementById('btn-no'); 
    const form = document.getElementById('contact-form'); 
    const btnSendEmail = document.getElementById('btn-send-email'); 
    const btnSendWhatsapp = document.getElementById('btn-send-whatsapp'); 

    let selectedServiceName = ''; 
    
    // 🚨🚨🚨 CONFIGURAÇÕES DE CONTATO - MUDAR AQUI! 🚨🚨🚨
    // Seu e-mail para receber as solicitações
    const YOUR_COMPANY_EMAIL = 'seu.email.de.contato@empresa.com.br'; 
    // Seu número WhatsApp (com código do país '55' e DDD, sem símbolos)
    const YOUR_WHATSAPP_NUMBER = '5511999999999'; 


    // 2. Lógica de Abertura do Modal (para cada card)
    // Explicação: Adiciona um 'ouvinte de evento' de clique a cada card de serviço.
    cards.forEach(card => {
        card.addEventListener('click', function() {
            // Pega o nome do serviço do atributo 'data-service-name'
            selectedServiceName = this.getAttribute('data-service-name'); 
            
            // Exibe o nome do serviço no modal
            modalServiceName.textContent = selectedServiceName; 
            
            // RESETA o modal para a primeira etapa antes de exibir
            stepConfirmation.style.display = 'block'; 
            stepForm.style.display = 'none'; 
            form.reset(); // Limpa o formulário
            
            // Exibe o modal
            modal.style.display = 'block'; 
        });
    });

    // 3. Eventos de Fechamento do Modal

    // O botão 'X'
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


    // 4. Transição: Confirmação -> Formulário

    // Botão "Sim, Solicitar"
    btnYes.addEventListener('click', () => {
        // Explicação: Esconde a 1ª etapa e mostra a 2ª etapa (formulário).
        stepConfirmation.style.display = 'none';
        stepForm.style.display = 'block';
    });

    // 5. Lógica de Envio dos Dados

    // Função auxiliar para pegar os dados do formulário
    // Explicação: Coleta os valores atuais dos campos.
    function getFormData() {
        return {
            service: selectedServiceName,
            nome: document.getElementById('nome').value,
            dataNasc: document.getElementById('data-nasc').value,
            telefone: document.getElementById('telefone').value,
            email: document.getElementById('email').value
        };
    }
    
    // Função auxiliar para formatar a mensagem
    // Explicação: Cria o texto que será enviado.
    function formatMessage(data) {
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


    // Envio por E-mail (mail-to)
    btnSendEmail.addEventListener('click', () => {
        // Explicação: Checa se os campos 'required' estão preenchidos.
        if (!form.reportValidity()) {
            return; // Pára a execução se o formulário não for válido
        }

        const data = getFormData();
        
        // Monta o link 'mailto'
        const subject = `Solicitação de Serviço: ${data.service}`;
        const body = formatMessage(data);

        // Cria o link para abrir o cliente de e-mail do usuário
        const mailtoLink = `mailto:${"contato83204660+3fxhlxobt4roi9zi3wi5@app.trello.com"}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
        
        alert('Seu cliente de e-mail será aberto. Por favor, envie a mensagem pré-preenchida. Obrigado!');
        modal.style.display = 'none'; 
    });


    // Envio por WhatsApp (wa.me)
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

        window.open(whatsappLink, '_blank'); 
        
        alert('Você será redirecionado para o WhatsApp. Por favor, envie a mensagem pré-preenchida. Obrigado!');
        modal.style.display = 'none'; 
    });

}); // Fim do DOMContentLoaded