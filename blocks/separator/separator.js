/**
 * Carica e decora il blocco separator
 * @param {Element} block L’elemento del blocco separator
 */
export default function decorate(block) {
  // Recupera le opzioni dal dataset (opzionale, se vuoi usare proprietà custom tipo thickness/stile)
  const thickness = block.dataset.thickness || '1px';
  const style = block.dataset.style || 'solid';
  const color = block.dataset.color || '#e0e0e0';

  // Pulisci il contenuto e inserisci un elemento hr
  block.innerHTML = '';
  const hr = document.createElement('hr');
  hr.className = 'separator-rule';
  hr.style.border = 'none';
  hr.style.borderTop = `${thickness} ${style} ${color}`;
  block.appendChild(hr);
}