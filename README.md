# Enrico Rotter — Landing Pages

Site estático das Landing Pages de advocacia trabalhista do Dr. Enrico Rotter.

## Estrutura

- `public/` — Diretório de publicação (Base Directory do Coolify). Contém as 6 LPs, `styles.css`, `app.js` e `assets/`.
- `build.js` — Script que gera os HTMLs das LPs.
- `WORDPRESS-INTEGRATION.md` — Guia de integração (caso seja migrado para WordPress).

## URLs das LPs

- `/` — Advocacia trabalhista em Porto Alegre
- `/rescisao-trabalhista.html`
- `/horas-extras.html`
- `/acidente-doenca-ocupacional.html`
- `/direitos-trabalhistas.html`
- `/consulta-trabalhista.html`

## Publicação

Deploy via Coolify com Build Pack `Static`, Base Directory `/public`, FQDN `https://advogado-trabalhista.marketeria.cloud`.

## Comportamentos

- `app.js`: FAQ accordion, alternância de tema, contador de caracteres do formulário e envio para WhatsApp.
- `styles.css`: tokens, tipografia, espaçamento e responsividade.

## Conformidade

Conteúdo revisado para evitar promessa de resultado, gratuidade como isca e chamadas agressivas à contratação. Revisão jurídica do escritório antes da publicação.
