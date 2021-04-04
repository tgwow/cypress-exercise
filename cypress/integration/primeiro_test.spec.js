describe('Calculadora de imposto', () => {
    it('deve limpar os campos', () => {
        cy.visit('https://andreendo.github.io/sample-ui-compras/index-2.html');
        cy.get('[name=nome]').type('John');
        cy.get('[name=idade]').type('20');
        cy.get('[name=sexo]').select('M');
        cy.get('[name=salario]').type('2000');
        cy.get(`[value='Limpar campos']`).click();

        cy.get('[name=nome]').should('have.text', '');
        cy.get('[name=idade]').should('have.text', '');
        cy.get('[name=sexo]').should('have.value', '-');
        cy.get('[name=salario]').should('have.text', '');
    });

    it('deve calcular o imposto devido', () => {
        // preencha todos os campos
		    cy.visit('https://andreendo.github.io/sample-ui-compras/index-2.html');
		    cy.get('[name=nome]').type('John');
		    cy.get('[name=idade]').type('20');
		    cy.get('[name=sexo]').select('M');
		    cy.get('[name=salario]').type('2000');

        // clique no botao calcular
		    cy.get(`[value='Calcular']`).click();


	    // verifique (usando .should) a saída retornada com o calculo do imposto devido
	    cy.get('#divNome').should('have.text', 'Nome: John');
	    cy.get('#divIdade').should('have.text', 'Idade: 20');
	    cy.get('#divSexo').should('have.text', 'Sexo: M');
	    cy.get('#divValorImposto').should('have.text', 'Valor a pagar de imposto: 300');
    });
});
