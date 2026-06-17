// script.js — интерактив: смена аватара и "онлайн" счётчик

document.addEventListener('DOMContentLoaded', function() {

  // 1. Смена аватара
  const avatarDisplay = document.getElementById('avatarDisplay');
  const avatarButtons = document.querySelectorAll('[data-avatar]');

  avatarButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      const emoji = this.dataset.avatar;
      if (emoji) {
        avatarDisplay.textContent = emoji;
        // визуальный фидбек
        avatarDisplay.style.transform = 'scale(1.3)';
        setTimeout(() => avatarDisplay.style.transform = 'scale(1)', 150);
      }
    });
  });

  // 2. Счётчик игроков — обновление с рандомным числом
  const playerCountEl = document.getElementById('playerCount');
  const updateBtn = document.getElementById('updateCounter');

  function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function generateRandomCount() {
    // от 800 тыс до 2.5 млн
    const base = 800000 + Math.floor(Math.random() * 1700000);
    return base;
  }

  function updatePlayerCount() {
    const newCount = generateRandomCount();
    playerCountEl.textContent = formatNumber(newCount);
    // анимация "загрузка"
    playerCountEl.style.color = '#f5e97b';
    playerCountEl.style.textShadow = '0 0 40px #f5e97b, 0 0 80px #b8a13b';
    setTimeout(() => {
      playerCountEl.style.color = '#dee47b';
      playerCountEl.style.textShadow = '0 0 30px #b8a13b';
    }, 400);
  }

  updateBtn.addEventListener('click', updatePlayerCount);

  // при загрузке тоже обновим, чтобы не было скучно
  // но оставим начальное значение, как в HTML, потом можно обновить
  // сделаем "первое обновление" через 1.2 секунды
  setTimeout(() => {
    updatePlayerCount();
  }, 1200);

  // дополнительный эффект: клик по аватару меняет на случайный
  avatarDisplay.addEventListener('click', function() {
    const emojis = ['🧑‍🚀', '🤖', '👾', '🧙', '🦸', '🧛', '🦄'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    this.textContent = randomEmoji;
    this.style.transform = 'scale(1.4)';
    setTimeout(() => this.style.transform = 'scale(1)', 200);
  });

});
