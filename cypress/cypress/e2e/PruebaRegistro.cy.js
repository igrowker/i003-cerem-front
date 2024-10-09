describe('Prueba de registro', () => {
    it('Completa el formulario de registro y hace clic en Registrarse', () => {
      // Visita la página de registro
      cy.visit('/registrate'); // Cambia esto a la ruta correcta
  
      // Completa el campo de nombre
      cy.get('input[name="name"]').type('Juan Pérez'); // Cambia esto por el nombre deseado
  
      // Completa el campo de correo electrónico
      cy.get('input[name="email"]').type('juan.perez@example.com'); // Cambia esto por el correo deseado
  
      // Completa el campo de contraseña
      cy.get('input[name="password"]').type('contraseñaSegura123'); // Cambia esto por la contraseña deseada
  
      // Completa el campo de confirmar contraseña
      cy.get('input[name="confirmPassword"]').type('contraseñaSegura123'); // Cambia esto por la contraseña deseada
  
      // Hace clic en el botón de Registrarse
      cy.get('button[type="submit"]').click();
  
      // Verifica que la URL cambie a la página que esperas después del registro
      cy.url().should('include', '/ruta_despues_del_registro'); // Cambia esto por la ruta a la que esperas ser redirigido
    });
  });
  