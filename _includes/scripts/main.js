import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/brands';
import '../styles/main.scss';

import isMobile from './utils/browseragent';

document.addEventListener('DOMContentLoaded', () => {
  const selectedId = isMobile() ? 'switch-mobile' : 'switch-desktop';
  document.querySelectorAll('#quick-start-switch .switch-input').forEach((el) => {
    el.checked = (el.id == selectedId);
  });
});
