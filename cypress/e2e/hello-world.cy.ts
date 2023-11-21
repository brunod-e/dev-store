describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://rocketseat.com.br")
    cy.contains("Quero assinar agora", {
      matchCase: false,
    }).click()
  })
})
