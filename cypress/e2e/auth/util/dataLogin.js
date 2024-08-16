export const fields = [
  { field: 'input-text-login', value: Cypress.env('CY_USER') },
  { field: 'input-text-password', value: Cypress.env('CY_PASSWORD') },
  { field: 'input-checkbox-remember', value: '', checkbox: true }
]
