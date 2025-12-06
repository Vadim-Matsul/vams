export const sendYMEvent = (YM_ID: string, eventName: string, params: Record<string, any> = {}) => {
  if (typeof window === 'undefined') {
    console.error('Ошибка отправки event YA - сервер');
    return;
  }
  if (!window.ym) {
    console.error('Ошибка отправки event YA - нет window.ym');
    return;
  }

  try {
    window.ym(Number(YM_ID), 'reachGoal', eventName, params);
  } catch (e) {
    const message = e instanceof Error ? e.message : 'неизвестная ошибка';
    console.error(`Ошибка отправки event YA - ${message}`);
  }
};
