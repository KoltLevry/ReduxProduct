🚀 Просунуті можливості CSS, які мало хто використовує, але вони круті!
CSS постійно розвивається, і багато цікавих фішок залишаються поза увагою навіть досвідчених розробників. Давай розглянемо деякі круті функції та нововведення!

🎯 1. Функція clamp() (Гнучкі розміри)
Ми вже її згадували, але варто наголосити, що вона дозволяє задати адаптивні розміри без медіа-запитів.

📌 Приклад:
h1 {
    font-size: clamp(16px, 2vw, 40px); /* Від 16px до 40px, залежно від ширини екрана */
}
🔹 clamp(мінімальне, бажане, максимальне).
🔹 Заміняє медіа-запити для розмірів шрифтів, padding, margin тощо.

🌀 2. min() і max() (Гнучкі обмеження)
Дозволяють порівнювати значення та обирати найменше (min()) або найбільше (max()).

📌 Приклад:
.container {
    width: min(90vw, 1200px); /* Не більше 1200px, але адаптивно */
    height: max(50vh, 300px); /* Мінімальна висота 300px, але може збільшуватись */
}
🔹 Використовується для адаптивного дизайну без медіа-запитів.

🎭 3. aspect-ratio (Пропорції без JS!)
Раніше для збереження пропорцій блоків потрібно було використовувати padding-top або JavaScript.
Тепер є aspect-ratio!

📌 Приклад:
.video {
    aspect-ratio: 16 / 9; /* Співвідношення ширини до висоти */
    width: 100%;
}
🔹 Немає потреби у додаткових padding-хакових рішеннях!

🌈 4. :has() — справжній CSS-матчинг (Якщо є всередині, то….)
Це революційна псевдоклас-функція! Тепер CSS може перевіряти наявність дочірнього елемента та стилізувати батьківський!

📌 Приклад:
.card:has(img) {
    border: 2px solid blue; /* Якщо у .card є <img>, змінюємо стиль */
}
🔹 Можна стилізувати елементи, залежно від їхнього вмісту!
🔹 Мінус: Поки що підтримується не у всіх браузерах.

💥 5. CSS @property — змінні, які можуть анімуватись!
Звичайні CSS-змінні (--color, --size) не можна анімувати. Але з @property можна!

📌 Приклад:
@property --rotate {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
}

.animated-box {
    --rotate: 0deg;
    animation: spin 5s infinite linear;
}

@keyframes spin {
    to {
        --rotate: 360deg;
    }
}

.animated-box {
    transform: rotate(var(--rotate));
}
🔹 Це дозволяє робити анімацію власних CSS-змінних!

🎨 6. conic-gradient() — Радіальні градієнти!
Раніше був linear-gradient(), але тепер можна створювати кольорові кругові ефекти без SVG.

📌 Приклад:
.pie-chart {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: conic-gradient(red 30%, yellow 30% 60%, green 60%);
}
🔹 Використовується для кругових діаграм, прогрес-барів, стилізації кнопок.

🏆 7. scroll-snap-type (Зручний скролінг!)
Це CSS-альтернатива каруселі без JavaScript. Дозволяє створювати чіткі зупинки при скролінгу.

📌 Приклад:
.slider {
    display: flex;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
}

.slide {
    scroll-snap-align: start;
}
🔹 Тепер елементи зупиняються точно на своїх позиціях, як у каруселях!

📸 8. backdrop-filter (Стеклянний ефект)
Раніше для blur-фону потрібно було гратись із position: absolute, а тепер є backdrop-filter!

📌 Приклад:
.glass {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    padding: 20px;
    border-radius: 10px;
}
🔹 Використовується для скляних ефектів, як у macOS або Windows 11.

💡 9. container queries (Адаптація не до екрана, а до контейнера!)
Раніше медіа-запити (@media) орієнтувалися тільки на ширину вікна, але тепер можна адаптувати залежно від розміру батьківського контейнера!

📌 Приклад:
@container (min-width: 500px) {
    .card {
        flex-direction: row;
    }
}
🔹 Тепер адаптивність залежить від контейнера, а не всього екрану!

🔮 10. motion-reduce (Дружній UX для людей з проблемами зору)
Деякі користувачі вимикають анімації через чутливість до руху.

📌 Приклад:
@media (prefers-reduced-motion: reduce) {
    * {
        animation: none !important;
    }
}
🔹 Якщо у користувача ввімкнено "зменшення руху", CSS автоматично вимикає анімації.

🎬 Висновок
✅ clamp(), min(), max() — для адаптивних розмірів без @media.
✅ aspect-ratio — утримує правильні пропорції без JS.
✅ :has() — змінює батьківський стиль на основі вмісту!
✅ @property — дозволяє анімувати змінні.
✅ conic-gradient() — створює градієнти для кругових діаграм.
✅ scroll-snap-type — зручний скролінг без JS.
✅ backdrop-filter — додає стильний скляний ефект.
✅ container queries — адаптивність залежно від контейнера, а не екрана!
✅ motion-reduce — дружній UX для людей з чутливістю до руху.

Ці фішки можуть суттєво покращити твої навички CSS! 🚀 Яку з них спробуєш першою? 😃 