export const gaEvent = (name: string, params: Record<string, any> = {}) => {
  if (typeof window === 'undefined') {
    console.error('Ошибка отправки event GA - сервер');
    return;
  }

  if (!window.gtag) {
    console.error('Ошибка отправки event GA - нет window.gtag');
    return;
  }

  window.gtag('event', name, params);
};
