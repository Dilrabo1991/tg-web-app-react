const tg = window.Telegram.WebApp;
export function useTelegram() {
  const tg = window.Telegram.WebApp;
  const onClose = () => {
    tg.close();
  };

  const onToggleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  };
  return {
    tg,
    onClose,
    user: tg.initDataUnsafe?.user,
    onToggleButton,
    queryId: tg.initDataUnsafe?.query_id,
  };
}
