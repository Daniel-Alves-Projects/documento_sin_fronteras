<?php 
// Inclui o cabeçalho e as configurações
include('includes/header.php');
include('includes/config.php'); 
?>

<main>
    <div id="meuCarrossel" class="carousel slide" data-bs-ride="carousel">

        <div class="carousel-indicators">
            <button type="button" data-bs-target="#meuCarrossel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Diapositiva 1"></button>
            <button type="button" data-bs-target="#meuCarrossel" data-bs-slide-to="1" aria-label="Diapositiva 2"></button>
            <button type="button" data-bs-target="#meuCarrossel" data-bs-slide-to="2" aria-label="Diapositiva 3"></button>
        </div>

        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="elements/banner01.png" class="d-block w-100" alt="Banner de Promoción">
            </div>

            <div class="carousel-item">
                <img src="elements/banner02.png" class="d-block w-100" alt="Nuevo Producto">
            </div>

            <div class="carousel-item">
                <img src="elements/banner03.png" class="d-block w-100" alt="Novedades de la Tienda">
            </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#meuCarrossel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Anterior</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#meuCarrossel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Próximo</span>
        </button>
    </div>

    <section class="services-section" id="services">
        <h1 class="section-title">Nuestros Servicios</h1>
        <div class="services-content">
            <div class="services-cards service-card refugio" data-service-name="Desarchivamiento del proceso de refugio">
                <div class="cards-info">
                    <h1>Desarchivamiento del proceso de refugio</h1>
                    <p>"Si tu proceso de refugio ha sido archivado, nosotros nos encargamos de su reactivación total. Gestionamos el complejo Pedido de Desarchivamiento a través de la plataforma SEI, garantizando que tu expediente se reabra sin complicaciones. De esta manera, podrás volver a renovar tu documentación migratoria y asegurar la continuidad de tu estatus en Brasil."</p>
                </div>
            </div>

            <div class="services-cards service-card gestao" data-service-name="Gestión completa de la Solicitud de Refugio">
                <div class="cards-info">
                    <h1>Gestión completa de la Solicitud de Refugio</h1>
                    <p>"Aceleramos tu proceso de refugio en Brasil. Nuestro equipo asegura la carga exitosa de tu información en el Sisconare y gestiona la programación de tu cita en la Policía Federal, garantizándote la pronta emisión de tu Protocolo de Solicitud."</p>
                </div>
            </div>
            
            <div class="services-cards service-card protocolo" data-service-name="Renovar Protocolo de Refugio">
                <div class="cards-info">
                    <h1>Renovar Protocolo de Refugio</h1>
                    <p>"Te brindamos tranquilidad legal en Brasil. Nos encargamos proactivamente de la renovación anual de tu Protocolo de Refugio y tu RNM, eliminando el riesgo de caer en la irregularidad y asegurando la continuidad de todos tus derechos en el país."</p>
                </div>
            </div>
            
            <div class="services-cards service-card policia-federal" data-service-name="Agendamiento para la Policía Federal">
                <div class="cards-info">
                    <h1>Agendamiento para la Policía Federal</h1>
                    <p>"Garantizamos tu lugar en la agenda de la Policía Federal. Nos ocupamos de programar tus citas estratégicamente para que no pierdas turnos ni disponibilidad, lo que resulta fundamental para evitar demoras en la obtención de tus documentos."</p>
                </div>
            </div>
            
            <div class="services-cards service-card direccion" data-service-name="Cambio de Endereço(Dirección)">
                <div class="cards-info">
                    <h1>Cambio de Endereço(Dirección)</h1>
                    <p>"Evita problemas de entrega. Realizamos la actualización obligatoria de tu domicilio en los registros del SISMIGRA, evitando que tu RNM plástico se envíe a una dirección incorrecta y garantizando que esté disponible para ser recogido en la Policía Federal más cercana a ti."</p>
                </div>
            </div>
            
            <div class="services-cards service-card sisconare" data-service-name="Respuesta en el Sisconare(Diligencia)">
                <div class="cards-info">
                    <h1>Respuesta en el Sisconare(Diligencia)</h1>
                    <p>"Cumplimos a tiempo con los requerimientos del CONARE. Nos encargamos de formalizar y subir tu respuesta en el Sisconare antes de la fecha límite. Esta gestión precisa es vital para mantener tu proceso activo y evitar el archivamiento por incumplimento."</p>
                </div>
            </div>
            
            <div class="services-cards service-card traduccion" data-service-name="Traducción Juramentada">
                <div class="cards-info">
                    <h1>Traducción Juramentada</h1>
                    <p>"Validez Legal Garantizada para tus Documentos. Nos encargamos de que tus documentos del país de origen sean plenamente válidos en Brasil. Nuestro equipo coordina la traducción juramentada exclusivamente con tradutores públicos acreditados, incluyendo la autenticação de la firma en cartório, lo que assegura su aceptación en cualquier institución oficial o privada."</p>
                </div>
            </div>
            
            <div class="services-cards service-card curriculum" data-service-name="Currículum Profesional: La llave a tu próximo empleo">
                <div class="cards-info">
                    <h1>Currículum Profesional: La llave a tu próximo empleo</h1>
                    <p>"Optimización de Currículum para el Trabajo Brasileño. Diseñamos tu currículum profesional en portugués, adaptándolo completamente a las normas, formatos y expectativas del entorno laboral de Brasil. Esto incrementa significativamente tus oportunidades de ser seleccionado para entrevistas y conseguir un empleo de calidad."</p>
                </div>
            </div>
            
            <div class="services-cards service-card cadastro-sei" data-service-name="Registro en el SEI">
                <div class="cards-info">
                    <h1>Registro en el SEI</h1>
                    <p>El Sistema Electrónico de Información (SEI) es una herramienta de gestión de documentos y procesos electrónicos utilizada por diversos órganos y entidades del sector público de Brasil (federal, estatal y municipal).</p>
                </div>
            </div>
            
            <div class="services-cards service-card cpf" data-service-name="Solicitud de CPF">
                <div class="cards-info">
                    <h1>Solicitud de CPF</h1>
                    <p>"Tramitación Rápida del CPF ante la Receita Federal. Gestionamos todos los requerimentos relacionados con tu Cadastro de Pessoa Física: solicitud, actualización de información y emisión de una nueva tarjeta. Obtén o regulariza este documento clave para poder realizar cualquier operación legal en Brasil."</p>
                </div>
            </div>
            
            <div class="services-cards service-card visa-familiar" data-service-name="Visa para reunión familiar">
                <div class="cards-info">
                    <h1>Visa para reunión familiar</h1>
                    <p>“Tu vida en Brasil empieza hoy. Olvídate de la burocracia. Garantizamos tu Residencia Permanente o Visa Familiar, ya sea por matrimonio, vínculo con tu hijo brasileño o reunión familiar. Nosotros nos encargamos de cada paso.”</p>
                </div>
            </div>
        </div>
    </section>

    <div id="service-modal" class="modal">
        <div class="modal-content">
            <span class="close-button">&times;</span>

            <h2>Solicitar Servicio: <span id="modal-service-name"></span></h2>
            
            <div id="step-confirmation">
                <p>¿Te gustaría solicitar este servicio?</p>
                <button id="btn-yes">Sí, Solicitar</button>
                <button id="btn-no">No, Gracias</button>
            </div>
            
            <div id="step-form" style="display:none;">
                <h3>Por favor, complete sus datos de contacto:</h3>
                <form id="contact-form">
                    <label for="nome">Nombre Completo:</label>
                    <input type="text" id="nome" required><br>
                    
                    <label for="data-nasc">Fecha de Nacimiento:</label>
                    <input type="date" id="data-nasc" required><br>
                    
                    <label for="telefone">Teléfono (c/ WhatsApp):</label>
                    <input type="tel" id="telefone" required><br>
                    
                    <label for="email">Correo Electrónico para Contacto:</label>
                    <input type="email" id="email" required><br><br>
                    
                    <button type="button" id="btn-send-email">Solicitar por Correo</button>
                    <button type="button" id="btn-send-whatsapp">Solicitar por WhatsApp</button>
                </form>
                <p class="nota">Los datos serán enviados directamente a nuestro contacto.</p>
            </div>
        </div>
    </div>

    <section id="sobre" class="about-section">
        <h1 class="section-title">Sobre Nosotros</h1>
        <div class="about-content">
            <p>Nuestra Misión: Derribar las Barreras Documentales
            En Documentos Sin Fronteras, nacimos de una simple pero poderosa convicción: que la burocracia nunca debe ser el límite para las aspiraciones de una persona. Entendemos que navegar el laberinto de visas, pasaportes, legalizaciones y trámites migratorios puede ser confuso, estresante y, a menudo, paralizante.
            Nuestra misión es clara: ser tu guía experta y confiable en este viaje. Nos dedicamos a simplificar lo complejo, proporcionando información precisa, actualizada y fácilmente accesible para que puedas obtener tus documentos, revalidar tu identidad y avanzar hacia tu próximo objetivo, sin importar dónde te encuentres.
            Somos más que una página web; somos tu aliado en el proceso.</p>
        </div>
    </section>
    
    <section id="contato" class="contact-section">
        <h1 class="section-title">Contacto</h1>
        <address class="contact-text">
            <p>Correo Electrónico: <a href="mailto:atendimento@documentosinfronteras.com.br">atendimento@documentosinfronteras.com.br</a></p>
            
            <p>Teléfono/Whatsapp: <a href="https://wa.me/5549999999999">(49) 9 9999-9999</a></p>
        </address>
    </section>
    
    <section id="blog" class="blog-section">
        <h1 class="section-title">Nuestro Blog</h1>
        <p>Pronto, ¡contenido exclusivo!</p>
    </section>

</main>

<?php include('includes/footer.php')?>