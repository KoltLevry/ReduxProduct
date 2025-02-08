<!-- <span style='color: red;'>Обробники подій</span> -->

Так, **onClick** — це обробник подій, який викликається, коли елемент (наприклад, кнопка) натискається. У React і JavaScript є багато інших обробників подій, які починаються з "on". Ось десять найвживаніших:

1. onChange
Опис: Викликається, коли значення елемента (зазвичай `<input>, <textarea>, або <select>`) змінюється.

Приклад:
```
function InputComponent() {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <input type="text" value={value} onChange={handleChange} />
    );
}
```
2. onSubmit
Опис: Викликається, коли форма відправляється.

Приклад:
```
function FormComponent() {
    const handleSubmit = (event) => {
        event.preventDefault(); // Запобігаємо перезавантаженню сторінки
        console.log('Форма відправлена');
    };

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Відправити</button>
        </form>
    );
}
```
3. onMouseEnter
Опис: Викликається, коли курсор миші входить в область елемента.

Приклад:
```
function HoverComponent() {
    const handleMouseEnter = () => {
        console.log('Курсор над елементом');
    };

    return (
        <div onMouseEnter={handleMouseEnter}>
            Наведіть курсор сюди
        </div>
    );
}
```
4. onMouseLeave
Опис: Викликається, коли курсор миші покидає область елемента.

Приклад:
```
function HoverComponent() {
    const handleMouseLeave = () => {
        console.log('Курсор покинув елемент');
    };

    return (
        <div onMouseLeave={handleMouseLeave}>
            Наведіть курсор сюди
        </div>
    );
}
```
5. onFocus
Опис: Викликається, коли елемент отримує фокус (зазвичай для `<input>`).

Приклад:
```
function FocusComponent() {
    const handleFocus = () => {
        console.log('Елемент отримав фокус');
    };

    return (
        <input onFocus={handleFocus} />
    );
}
```
6. onBlur
Опис: Викликається, коли елемент втрачає фокус.

Приклад:
```
function BlurComponent() {
    const handleBlur = () => {
        console.log('Елемент втратив фокус');
    };

    return (
        <input onBlur={handleBlur} />
    );
}
```
7. onKeyDown
Опис: Викликається, коли натискається клавіша.

Приклад:

javascript


function KeyDownComponent() {
    const handleKeyDown = (event) => {
        console.log(`Натиснута клавіша: ${event.key}`);
    };

    return (
        <input onKeyDown={handleKeyDown} />
    );
}
8. onKeyUp
Опис: Викликається, коли клавіша відпускається.

Приклад:
```
function KeyUpComponent() {
    const handleKeyUp = (event) => {
        console.log(`Відпущена клавіша: ${event.key}`);
    };

    return (
        <input onKeyUp={handleKeyUp} />
    );
}
```
9. onLoad
Опис: Викликається, коли елемент (зазвичай `<img> або <script>`) завантажується.

Приклад:
```
function ImageComponent() {
    const handleLoad = () => {
        console.log('Зображення завантажено');
    };

    return (
        <img src="image.jpg" onLoad={handleLoad} alt="example" />
    );
}
```
10. onScroll
Опис: Викликається, коли елемент прокручується.

Приклад:
```
function ScrollComponent() {
    const handleScroll = () => {
        console.log('Елемент прокручується');
    };

    return (
        <div onScroll={handleScroll} style={{ overflowY: 'scroll', height: '100px' }}>
            {/* Додайте контент для прокрутки */}
        </div>
    );
}
```
**Висновок**
Ці обробники подій дозволяють вам реагувати на різні дії користувача в інтерфейсі. Ви можете використовувати їх для створення інтерактивних компонентів у React.