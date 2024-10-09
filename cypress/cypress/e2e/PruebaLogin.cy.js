describe('Prueba de inicio de sesión', () => {
  it('Completa el formulario y hace clic en Iniciar sesión', () => {
    // Visita la página de inicio de sesión
    cy.visit('/iniciar-sesion'); // Cambia esto a la ruta correcta

    // Completa el campo de correo electrónico
    cy.get('input[name="email"]').type('angel.salazar@gmail.com'); // Cambia esto por el correo deseado

    // Completa el campo de contraseña
    cy.get('input[name="password"]').type('123456789'); // Cambia esto por la contraseña deseada

    // Hace clic en el botón de Iniciar sesión
    cy.get('button[type="submit"]').click();

    // Verifica que la URL cambie a la página que esperas después de iniciar sesión
    cy.url().should('include', '/dashboard'); // Cambia esto por la ruta a la que esperas ser redirigido
  });
});
