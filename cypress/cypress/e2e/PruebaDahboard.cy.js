describe('Prueba del Dashboard', () => {
    before(() => {
      // Antes de todas las pruebas, visita la página de inicio de sesión y realiza el login si es necesario
      cy.visit('/iniciar-sesion'); // Cambia esto a la ruta correcta
      cy.get('input[name="email"]').type('tu_correo@example.com'); // Cambia por el correo
      cy.get('input[name="password"]').type('tu_contraseña'); // Cambia por la contraseña
      cy.get('button[type="submit"]').click(); // Inicia sesión
      cy.url().should('include', '/dashboard'); // Verifica que se redirige al dashboard
    });
  
    it('Prueba el componente de campañas', () => {
      // Visita la página de campañas
      cy.visit('/campanas'); // Cambia esto a la ruta correcta
  
      // Redactar Correo
      cy.get('input[id="email-subject"]').type('Asunto de Prueba'); // Cambia por el asunto deseado
      cy.get('textarea[id="email-content"]').type('Contenido del correo de prueba.'); // Cambia por el contenido deseado
      cy.contains('Asistencia de IA').click(); // Clic en el botón para asistencia de IA
  
      // Generar Ideas de Campaña
      cy.get('input[id="campaign-type"]').type('Lanzamiento de Producto'); // Cambia por el tipo de campaña
      cy.contains('Generar Ideas').click(); // Clic en el botón para generar ideas
      cy.get('textarea[id="campaign-ideas"]').should('not.be.empty'); // Verifica que las ideas generadas no estén vacías
  
      // Respuestas Automáticas
      cy.get('textarea[id="customer-query"]').type('Consulta de prueba del cliente.'); // Cambia por la consulta deseada
      cy.contains('Generar Respuesta').click(); // Clic en el botón para generar respuesta
      cy.get('textarea[id="ai-response"]').should('not.be.empty'); // Verifica que la respuesta generada no esté vacía
  
      // Chatbot IA
      cy.get('input[placeholder="Escribe tu mensaje aquí..."]').type('Hola, necesito ayuda con mi campaña.'); // Mensaje de prueba
      cy.contains('Enviar mensaje').click(); // Clic en el botón para enviar el mensaje
      cy.get('.h-[400px]').should('contain', 'Entiendo que quieres ayuda'); // Verifica que la respuesta esté en el chat
    });
  
    it('Verifica navegación en el Dashboard', () => {
      // Regresa al Dashboard
      cy.visit('/dashboard'); // Cambia esto si es necesario
  
      // Navegar a diferentes secciones del Dashboard
      cy.visit('/calendarios'); // Cambia esto por la ruta esperada
      cy.url().should('include', '/calendarios'); // Verifica que se redirige a calendarios
  
      cy.visit('/estadisticas'); // Cambia esto si es necesario
      cy.url().should('include', '/estadisticas'); // Verifica que se redirige a estadísticas
  
      cy.visit('/tareas'); // Cambia esto si es necesario
      cy.url().should('include', '/tareas'); // Verifica que se redirige a tareas
      
      cy.visit('/clientes'); // Cambia esto si es necesario
      cy.url().should('include', '/clientes'); // Verifica que se redirige a clientes
    });
  });
  