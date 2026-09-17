const fs = require('fs');
const path = require('path');

const pages = [
  {
    file: 'index.html',
    slug: 'advogado-trabalhista-porto-alegre',
    eyebrow: 'Direito do trabalho • Porto Alegre',
    title: 'Advocacia trabalhista do lado de quem trabalha.',
    intro: 'Atendimento exclusivo a trabalhadores em Porto Alegre e Região Metropolitana, presencial ou online, com orientação clara desde o primeiro contato.',
    topic: 'atendimento trabalhista em Porto Alegre',
    prompt: 'Conte brevemente o que aconteceu no trabalho',
    facts: ['Atuação exclusiva para trabalhadores', 'Atendimento presencial e online', 'OAB/RS 97.520'],
    situationsTitle: 'Em qual situação você se encontra?',
    situations: [
      ['Demissão e rescisão', 'Verbas não pagas, FGTS, justa causa ou dúvidas sobre o acerto.'],
      ['Horas extras', 'Jornada, intervalos, banco de horas ou adicional noturno.'],
      ['Acidente ou doença', 'Situações relacionadas às condições e ao ambiente de trabalho.'],
      ['Direitos no emprego', 'Registro, salário, assédio, função e adicionais.']
    ],
    insight: 'Você não precisa chegar sabendo o nome jurídico do problema.',
    insightText: 'O primeiro passo é organizar os fatos, documentos e datas. A partir disso, o escritório esclarece as alternativas aplicáveis ao seu caso, sem prometer resultados.',
    faqs: [
      ['O escritório atende empresas?', 'Não. A atuação trabalhista é exclusiva para trabalhadores.'],
      ['O atendimento pode ser online?', 'Sim. O primeiro contato e a análise inicial podem ocorrer online. Atendimento presencial também está disponível em Porto Alegre.'],
      ['O que devo separar antes de conversar?', 'Se tiver, reúna carteira de trabalho, contracheques, documentos da rescisão, extrato do FGTS, registros de jornada e mensagens relacionadas ao caso.'],
      ['Falar com o escritório significa entrar com processo?', 'Não. O contato serve para entender os fatos e os possíveis caminhos. Qualquer medida depende de análise individual e decisão do trabalhador.']
    ]
  },
  {
    file: 'rescisao-trabalhista.html',
    slug: 'rescisao-trabalhista',
    eyebrow: 'Demissão • Verbas rescisórias',
    title: 'Sua rescisão deixou dúvidas ou valores em aberto?',
    intro: 'Uma análise individual pode esclarecer verbas rescisórias, FGTS, justa causa e situações em que permanecer no emprego se tornou inviável.',
    topic: 'rescisão trabalhista',
    prompt: 'Como terminou, ou está terminando, o vínculo de trabalho?',
    facts: ['Atendimento exclusivo a trabalhadores', 'Análise de documentos da rescisão', 'Presencial em Porto Alegre ou online'],
    situationsTitle: 'Situações que merecem atenção',
    situations: [
      ['Verbas não pagas', 'Saldo de salário, férias, 13º, aviso ou outros itens do acerto.'],
      ['Justa causa', 'Dúvidas sobre o motivo, a proporcionalidade ou as provas da dispensa.'],
      ['Rescisão indireta', 'Faltas graves do empregador que tornam a relação insustentável.'],
      ['FGTS e documentos', 'Depósitos ausentes, guias, baixa na carteira ou TRCT.']
    ],
    insight: 'Antes de assinar ou tomar uma decisão, organize os documentos.',
    insightText: 'Cada modalidade de desligamento produz efeitos diferentes. A análise depende da forma da dispensa, das datas, das provas disponíveis e do histórico do contrato.',
    faqs: [
      ['Assinei a rescisão. Ainda posso tirar dúvidas?', 'Sim. A assinatura não impede, por si só, a análise dos fatos e dos valores. O efeito jurídico depende do documento e do caso concreto.'],
      ['Posso parar de trabalhar para pedir rescisão indireta?', 'Não tome essa decisão sem orientação individual. A estratégia e os riscos dependem das provas e da situação do contrato.'],
      ['Quais documentos ajudam?', 'TRCT, carteira de trabalho, contracheques, extrato do FGTS, aviso de dispensa, conversas e comprovantes de pagamento.'],
      ['Existe garantia de receber algum valor?', 'Não. Nenhum resultado pode ser garantido antes da análise do caso e das provas.']
    ]
  },
  {
    file: 'horas-extras.html',
    slug: 'horas-extras',
    eyebrow: 'Jornada • Horas extras',
    title: 'Trabalhou além do horário ou sem o intervalo correto?',
    intro: 'Escalas, registros de ponto, mensagens e a rotina real de trabalho ajudam a avaliar horas extras, intervalos, banco de horas e adicional noturno.',
    topic: 'horas extras e jornada',
    prompt: 'Descreva sua jornada real e como ela era registrada',
    facts: ['Atendimento exclusivo a trabalhadores', 'Análise da jornada real e dos registros', 'Presencial em Porto Alegre ou online'],
    situationsTitle: 'O que pode fazer parte da análise',
    situations: [
      ['Ponto diferente da realidade', 'Horários registrados que não refletem entrada, saída ou pausas.'],
      ['Intervalo reduzido', 'Pausa para refeição ou descanso menor do que a praticada no contrato.'],
      ['Banco de horas', 'Compensações pouco claras, saldo incorreto ou horas não compensadas.'],
      ['Trabalho noturno', 'Jornada à noite, prorrogação e diferenças de adicional.']
    ],
    insight: 'A rotina real importa tanto quanto o papel.',
    insightText: 'Registros de ponto são relevantes, mas mensagens, escalas, acessos a sistemas, testemunhas e outros elementos também podem ajudar a reconstruir a jornada.',
    faqs: [
      ['Sem cartão-ponto, ainda é possível analisar?', 'Sim. A ausência do documento não encerra a análise. Outros registros e a dinâmica de trabalho podem ser relevantes.'],
      ['Mensagens fora do horário ajudam?', 'Podem ajudar a demonstrar a rotina, mas o valor de cada prova depende do contexto e do conjunto de informações.'],
      ['Quem trabalha externamente tem direito?', 'Depende de como a atividade e o controle de jornada funcionavam na prática. É necessário analisar o caso.'],
      ['O escritório atende reclamações de empresas?', 'Não. O atendimento é exclusivo para trabalhadores.']
    ]
  },
  {
    file: 'acidente-doenca-ocupacional.html',
    slug: 'acidente-doenca-ocupacional',
    eyebrow: 'Saúde • Ambiente de trabalho',
    title: 'O trabalho causou ou agravou um acidente ou problema de saúde?',
    intro: 'Documentos médicos, comunicações à empresa e informações sobre o ambiente ajudam a compreender os possíveis efeitos trabalhistas do caso.',
    topic: 'acidente ou doença relacionada ao trabalho',
    prompt: 'Conte o que ocorreu e qual foi a relação com o trabalho',
    facts: ['Atendimento exclusivo a trabalhadores', 'Análise trabalhista individual', 'Presencial em Porto Alegre ou online'],
    situationsTitle: 'Informações importantes para a análise',
    situations: [
      ['Acidente durante o trabalho', 'Ocorrência no local, em atividade externa ou em circunstâncias ligadas ao serviço.'],
      ['Doença relacionada à atividade', 'Sintomas causados ou agravados pelas condições de trabalho.'],
      ['Afastamento e retorno', 'Mudanças de função, restrições, tratamento ou dificuldades após o retorno.'],
      ['Ambiente e prevenção', 'Equipamentos, treinamentos, riscos, cobranças e comunicações internas.']
    ],
    insight: 'Preserve documentos médicos e registros do ocorrido.',
    insightText: 'Atestados, laudos, exames, CAT, mensagens, fotos e comunicações com a empresa podem ser relevantes. Não altere tratamentos ou condutas médicas com base apenas em conteúdo online.',
    faqs: [
      ['Preciso ter uma CAT?', 'A CAT é um documento relevante, mas sua ausência não impede automaticamente a análise. Outros elementos podem demonstrar o ocorrido.'],
      ['Doença emocional pode ter relação com o trabalho?', 'Pode haver relação em determinadas situações, mas isso exige análise médica e jurídica individual.'],
      ['Fui dispensado após o afastamento. O que faço?', 'Reúna os documentos do afastamento e da dispensa e busque orientação quanto antes para avaliar prazos e alternativas.'],
      ['O escritório cuida da defesa da empresa?', 'Não. A atuação é exclusiva para trabalhadores.']
    ]
  },
  {
    file: 'direitos-trabalhistas.html',
    slug: 'direitos-trabalhistas',
    eyebrow: 'Contrato • Condições de trabalho',
    title: 'Algo no seu trabalho parece errado, mas você não sabe por onde começar?',
    intro: 'Registro, salário, função, ambiente e tratamento no trabalho podem envolver direitos diferentes. O escritório ajuda a organizar os fatos e entender os próximos passos.',
    topic: 'direitos trabalhistas',
    prompt: 'Qual situação no trabalho está causando dúvida ou preocupação?',
    facts: ['Atendimento exclusivo a trabalhadores', 'Orientação clara e sem juridiquês', 'Presencial em Porto Alegre ou online'],
    situationsTitle: 'Temas atendidos pelo escritório',
    situations: [
      ['Trabalho sem registro', 'Vínculo, carteira de trabalho e diferenças decorrentes do período trabalhado.'],
      ['Assédio no trabalho', 'Humilhações, cobranças abusivas, discriminação ou condutas reiteradas.'],
      ['Função e salário', 'Acúmulo, desvio, equiparação, comissões ou salário atrasado.'],
      ['Condições de risco', 'Insalubridade, periculosidade e ausência de proteção adequada.']
    ],
    insight: 'Comece pelos fatos: o que aconteceu, quando e quem presenciou.',
    insightText: 'Você não precisa definir sozinho qual é a tese jurídica. Uma boa análise começa com a cronologia, os documentos e a rotina de trabalho.',
    faqs: [
      ['Estou empregado. Posso buscar orientação?', 'Sim. É possível esclarecer dúvidas enquanto o contrato está ativo. Evite tomar decisões importantes sem compreender os efeitos.'],
      ['Não tenho documentos. Vale conversar?', 'Sim. O escritório pode indicar quais informações e registros podem ser úteis para uma análise mais completa.'],
      ['Como registrar situações de assédio?', 'Preserve mensagens, e-mails e documentos lícitos, anote datas e pessoas presentes. A forma adequada de prova depende do contexto.'],
      ['Vocês fazem consultoria para o empregador?', 'Não. O atendimento é exclusivo para trabalhadores.']
    ]
  },
  {
    file: 'consulta-trabalhista.html',
    slug: 'consulta-trabalhista',
    eyebrow: 'Primeiro contato • Orientação',
    title: 'Entenda os próximos passos do seu caso trabalhista.',
    intro: 'Conte o que aconteceu, reúna os documentos disponíveis e receba orientação inicial sobre as alternativas que podem ser avaliadas.',
    topic: 'orientação trabalhista',
    prompt: 'Resuma sua situação e diga se o contrato ainda está ativo',
    facts: ['Atendimento exclusivo a trabalhadores', 'Conversa confidencial com o escritório', 'Presencial em Porto Alegre ou online'],
    situationsTitle: 'Como funciona o primeiro contato',
    situations: [
      ['Conte a situação', 'Explique em poucas linhas o que ocorreu e se ainda está trabalhando.'],
      ['Separe os documentos', 'Carteira, contracheques, rescisão, ponto, mensagens ou laudos, se houver.'],
      ['Receba orientação', 'O escritório esclarece quais informações faltam e quais caminhos podem ser avaliados.'],
      ['Decida com informação', 'Nenhuma medida é tomada sem análise individual e sua concordância.']
    ],
    insight: 'Um contato objetivo torna a orientação mais útil.',
    insightText: 'Inclua datas aproximadas, função, tempo de empresa, como o contrato terminou e qual é sua principal dúvida. Não envie dados sensíveis desnecessários no primeiro contato.',
    faqs: [
      ['O contato é confidencial?', 'O escritório trata as informações recebidas com dever de sigilo profissional, observadas as regras aplicáveis.'],
      ['Preciso enviar todos os documentos de imediato?', 'Não. Comece com um resumo. O escritório indicará quais documentos são relevantes para aprofundar a análise.'],
      ['O atendimento pode ser por WhatsApp?', 'Sim. O WhatsApp pode ser usado para o primeiro contato e organização do atendimento.'],
      ['A orientação garante o resultado do caso?', 'Não. A advocacia é atividade de meio, e qualquer avaliação depende dos fatos, provas e decisões aplicáveis ao caso.']
    ]
  }
];

const related = [
  ['advogado-trabalhista-porto-alegre', 'Porto Alegre', 'Atendimento trabalhista local'],
  ['rescisao-trabalhista', 'Rescisão', 'Demissão, verbas e justa causa'],
  ['horas-extras', 'Horas extras', 'Jornada, pausas e banco de horas'],
  ['acidente-doenca-ocupacional', 'Saúde no trabalho', 'Acidente e doença ocupacional'],
  ['direitos-trabalhistas', 'Direitos trabalhistas', 'Registro, assédio e adicionais'],
  ['consulta-trabalhista', 'Primeiro contato', 'Organize seu caso']
];

const icon = (n) => {
  const icons = [
    '<path d="M6 3h12v18H6z"/><path d="M9 8h6M9 12h6M9 16h4"/>',
    '<path d="M4 19h16M7 16V8m5 8V5m5 11v-5"/>',
    '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    '<path d="M12 21s7-4 7-10V5l-7-2-7 2v6c0 6 7 10 7 10z"/>'
  ];
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[n % icons.length]}</svg>`;
};

function logo() {
  return `<a class="brand" href="index.html" aria-label="Enrico Rotter, página inicial">
    <svg class="brand-mark" viewBox="0 0 48 48" role="img" aria-label="Monograma ER">
      <rect x="2" y="2" width="44" height="44" rx="22"/>
      <path d="M15 14h17M15 24h13M15 34h17M15 14v20M31 14c5 0 7 3 7 6s-2 6-7 6h-3l10 8"/>
    </svg>
    <span><strong>Enrico Rotter</strong><small>Advocacia Trabalhista</small></span>
  </a>`;
}

function render(page) {
  const pageLinks = related.filter(x => x[0] !== page.slug).map(([slug, name, desc]) =>
    `<a class="related-card" href="${slug === 'advogado-trabalhista-porto-alegre' ? 'index.html' : slug + '.html'}"><small>Explorar</small><strong>${name}</strong><span>${desc}</span><b aria-hidden="true">↗</b></a>`
  ).join('');
  const situations = page.situations.map((s, i) =>
    `<article class="situation-card">${icon(i)}<div><h3>${s[0]}</h3><p>${s[1]}</p></div></article>`
  ).join('');
  const faqs = page.faqs.map((f, i) =>
    `<div class="faq-item"><button class="faq-question" aria-expanded="false" aria-controls="faq-${page.slug}-${i}"><span>${f[0]}</span><i aria-hidden="true"></i></button><div class="faq-answer" id="faq-${page.slug}-${i}" hidden><p>${f[1]}</p></div></div>`
  ).join('');
  const facts = page.facts.map(x => `<li><span aria-hidden="true">✓</span>${x}</li>`).join('');
  const canonical = `https://enricorotter.com.br/${page.slug}/`;
  return `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${page.title} | Enrico Rotter</title>
  <meta name="description" content="${page.intro}">
  <link rel="canonical" href="${canonical}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Source+Sans+3:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
</head>
<body data-topic="${page.topic}">
  <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
  <header class="site-header">
    <div class="shell header-inner">
      ${logo()}
      <div class="header-actions">
        <span class="worker-only">Exclusivo para trabalhadores</span>
        <button class="theme-toggle" type="button" aria-label="Alternar tema"><span aria-hidden="true">◐</span></button>
        <a class="button button-small" href="#contato">Solicitar informações</a>
      </div>
    </div>
  </header>

  <main id="conteudo">
    <section class="hero">
      <div class="hero-grid shell">
        <div class="hero-copy">
          <p class="eyebrow">${page.eyebrow}</p>
          <h1>${page.title}</h1>
          <p class="lede">${page.intro}</p>
          <div class="hero-actions">
            <a class="button" href="#contato">Entender os próximos passos</a>
            <a class="text-link" href="tel:+555192505593">Ligar: (51) 9250-5593</a>
          </div>
          <ul class="trust-list">${facts}</ul>
        </div>
        <div class="portrait-wrap">
          <div class="portrait-frame">
            <img src="assets/enrico-rotter.webp" alt="Dr. Enrico Rotter, advogado trabalhista" width="600" height="900">
          </div>
          <div class="portrait-caption">
            <span>Dr. Enrico Rotter</span>
            <small>OAB/RS 97.520</small>
          </div>
        </div>
      </div>
      <div class="hero-word" aria-hidden="true">TRABALHO</div>
    </section>

    <section class="statement">
      <div class="shell statement-grid">
        <p>Clareza antes de qualquer decisão.</p>
        <p>O escritório atua somente na defesa e orientação de trabalhadores. Não presta consultoria a empresas ou empregadores.</p>
      </div>
    </section>

    <section class="section shell">
      <div class="section-heading">
        <p class="eyebrow">Ponto de partida</p>
        <h2>${page.situationsTitle}</h2>
      </div>
      <div class="situation-grid">${situations}</div>
    </section>

    <section class="section evidence-section">
      <div class="shell split">
        <div class="quote-block">
          <span class="quote-mark">“</span>
          <h2>${page.insight}</h2>
        </div>
        <div class="prose-block">
          <p>${page.insightText}</p>
          <ol class="process">
            <li><b>01</b><span><strong>Relate os fatos</strong><small>Comece pela cronologia e pela sua principal dúvida.</small></span></li>
            <li><b>02</b><span><strong>Organize as provas</strong><small>Separe apenas os documentos que você já possui.</small></span></li>
            <li><b>03</b><span><strong>Avalie os caminhos</strong><small>Receba orientação individual antes de decidir.</small></span></li>
          </ol>
        </div>
      </div>
    </section>

    <section class="section about shell">
      <div class="about-card">
        <p class="eyebrow">Atuação responsável</p>
        <h2>Informação clara, estratégia individual e atenção às provas.</h2>
        <p>O Dr. Enrico Rotter atende trabalhadores de Porto Alegre e Região Metropolitana de forma presencial e online. Cada situação é analisada individualmente, considerando documentos, prazos e circunstâncias do contrato.</p>
        <div class="credential-row">
          <span><small>Inscrição profissional</small><strong>OAB/RS 97.520</strong></span>
          <span><small>Endereço</small><strong>Centro Histórico, Porto Alegre</strong></span>
        </div>
      </div>
    </section>

    <section class="section shell faq-section">
      <div class="section-heading narrow">
        <p class="eyebrow">Dúvidas frequentes</p>
        <h2>Informações para você decidir com mais clareza.</h2>
      </div>
      <div class="faq-list">${faqs}</div>
    </section>

    <section class="section contact-section" id="contato">
      <div class="shell contact-grid">
        <div>
          <p class="eyebrow light">Primeiro contato</p>
          <h2>Conte o essencial. O escritório orienta o próximo passo.</h2>
          <p>Use o formulário para preparar uma mensagem no WhatsApp. Não envie senhas, documentos de identidade completos ou dados bancários neste primeiro contato.</p>
          <div class="office-details">
            <p><span>Telefone</span><a href="tel:+555192505593">(51) 9250-5593</a></p>
            <p><span>Endereço</span>Rua General Andrade Neves, 100, sala 802<br>Centro Histórico, Porto Alegre</p>
            <p><span>Horário</span>Segunda a sexta, das 9h às 18h</p>
          </div>
        </div>
        <form class="lead-form" novalidate>
          <div class="field">
            <label for="nome-${page.slug}">Seu nome</label>
            <input id="nome-${page.slug}" name="nome" autocomplete="name" required>
            <small class="field-error">Informe seu nome.</small>
          </div>
          <div class="field">
            <label for="cidade-${page.slug}">Sua cidade</label>
            <input id="cidade-${page.slug}" name="cidade" autocomplete="address-level2" required>
            <small class="field-error">Informe sua cidade.</small>
          </div>
          <div class="field">
            <label for="vinculo-${page.slug}">Seu contrato está ativo?</label>
            <select id="vinculo-${page.slug}" name="vinculo" required>
              <option value="">Selecione</option>
              <option>Sim, ainda estou trabalhando</option>
              <option>Não, o contrato terminou</option>
              <option>Não tenho certeza</option>
            </select>
            <small class="field-error">Selecione uma opção.</small>
          </div>
          <div class="field">
            <label for="relato-${page.slug}">${page.prompt}</label>
            <textarea id="relato-${page.slug}" name="relato" rows="5" maxlength="800" required></textarea>
            <div class="field-meta"><small class="field-error">Escreva um breve resumo.</small><small><span class="char-count">0</span>/800</small></div>
          </div>
          <label class="consent"><input type="checkbox" name="consentimento" required><span>Concordo em enviar estas informações ao escritório pelo WhatsApp.</span></label>
          <small class="form-error">Revise os campos indicados e o consentimento.</small>
          <button class="button button-light" type="submit">Continuar no WhatsApp <span aria-hidden="true">↗</span></button>
          <p class="form-note">O envio não constitui contratação e não implica promessa de resultado.</p>
        </form>
      </div>
    </section>

    <section class="section shell related">
      <div class="section-heading inline">
        <div><p class="eyebrow">Outros temas</p><h2>Encontre a página mais próxima da sua dúvida.</h2></div>
      </div>
      <div class="related-grid">${pageLinks}</div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="shell footer-grid">
      ${logo()}
      <p>Atendimento exclusivo a trabalhadores.<br>Conteúdo informativo; cada caso exige análise individual.</p>
      <div><a href="mailto:advogado@enricorotter.com.br">advogado@enricorotter.com.br</a><br><span>© ${new Date().getFullYear()} Enrico Rotter</span></div>
    </div>
  </footer>
  <a class="mobile-cta" href="#contato">Solicitar informações</a>
  <script src="app.js"></script>
</body>
</html>`;
}

for (const page of pages) fs.writeFileSync(path.join(__dirname, page.file), render(page));
console.log(`Generated ${pages.length} landing pages.`);
