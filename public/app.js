(() => {
  const root = document.documentElement;

  document.querySelector('.theme-toggle')?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
  });

  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      const answer = document.getElementById(button.getAttribute('aria-controls'));
      button.setAttribute('aria-expanded', String(!expanded));
      answer.hidden = expanded;
    });
  });

  document.querySelectorAll('textarea[maxlength]').forEach(area => {
    const counter = area.closest('.field').querySelector('.char-count');
    area.addEventListener('input', () => counter.textContent = area.value.length);
  });

  document.querySelectorAll('.lead-form').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      let valid = true;
      form.querySelectorAll('.field').forEach(field => {
        const input = field.querySelector('input, select, textarea');
        const failed = !input.value.trim();
        field.classList.toggle('invalid', failed);
        if (failed) valid = false;
      });
      const consent = form.querySelector('[name="consentimento"]');
      if (!consent.checked) valid = false;
      form.classList.toggle('invalid', !valid);
      if (!valid) {
        form.querySelector('.invalid input, .invalid select, .invalid textarea')?.focus();
        return;
      }
      const data = new FormData(form);
      const topic = document.body.dataset.topic;
      const message = [
        `Olá, gostaria de solicitar informações sobre ${topic}.`,
        `Nome: ${data.get('nome')}`,
        `Cidade: ${data.get('cidade')}`,
        `Situação do contrato: ${data.get('vinculo')}`,
        `Resumo: ${data.get('relato')}`
      ].join('\n');
      window.open(`https://wa.me/555192505593?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    });
  });
})();
