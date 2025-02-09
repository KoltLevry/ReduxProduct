У React, "props" (скорочення від "properties") — це об'єкт, який передає дані з одного компонента в інший. Вони дозволяють компонентам бути динамічними і гнучкими, оскільки ви можете передавати різні дані та функції в них.

В TypeScript ви можете визначити типи props, що робить ваш код більш безпечним і зрозумілим. Ось приклад, як це можна зробити:

`AI - copilot ? - VS`

1. **Визначення типу props:**

```typescript
interface MyComponentProps {
  title: string;
  count: number;
  onClick: () => void;
}
```

2. **Використання типу props в компоненті:**
```typescript
const MyComponent: React.FC<MyComponentProps> = ({ title, count, onClick }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>Count: {count}</p>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
```

3. **Використання компонента з передачею props:**
```typescript
import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './MyComponent';

const App: React.FC = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <MyComponent title="Hello, World!" count={42} onClick={handleClick} />
  );
};

`AI - Bito`

Приклад 1: Простий компонент з props
```
interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <h1>Привіт, {name}!</h1>;
};

// Використання
<Greeting name="Олександр" />;
```

Приклад 4: Компонент з необов'язковими props


tsx
import React from 'react';

interface CardProps {
  title: string;
  description?: string; // Необов'язковий prop
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
};

// Використання
<Card title="Заголовок картки" />;
<Card title="Інша картка" description="Це опис." />;
Приклад 5: Компонент з масивом props


tsx
import React from 'react';

interface Item {
  id: number;
  name: string;
}

interface ItemListProps {
  items: Item[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

// Використання
const items = [
  { id: 1, name: 'Перше' },
  { id: 2, name: 'Друге' },
];

<ItemList items={items} />;
Завдання на повторення
Створіть компонент Profile, який приймає два props: username (типу string) та age (типу number). Компонент має відображати текст у форматі: "Користувач: [username], Вік: [age]". Спробуйте також зробити age необов'язковим. 

Після цього надайте приклад використання вашого компонента.

Що стосується пропсів і динамічних даних
Пропси в React дійсно використовуються для отримання динамічних даних, наприклад, з API. Це дозволяє компонентам відображати дані, які можуть змінюватися в залежності від зовнішніх факторів, таких як відповіді від сервера.

Ось три приклади використання API з React:

Приклад 1: Використання JSONPlaceholder API
JSONPlaceholder — це фейковий REST API, який можна використовувати для тестування.



tsx
import React, { useEffect, useState } from 'react';

interface Post {
  id: number;
  title: string;
}

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Пости</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
Приклад 2: Використання OpenWeatherMap API
Цей API дозволяє отримувати дані про погоду.



tsx
import React, { useEffect, useState } from 'react';

interface Weather {
  main: {
    temp: number;
  };
  name: string;
}

const WeatherComponent: React.FC = () => {
  const [weather, setWeather] = useState<Weather | null>(null);

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=YOUR_API_KEY&units=metric')
      .then((response) => response.json())
      .then((data) => setWeather(data));
  }, []);

  return (
    <div>
      <h1>Погода</h1>
      {weather ? (
        <p>Температура в {weather.name}: {weather.main.temp}°C</p>
      ) : (
        <p>Завантаження...</p>
      )}
    </div>
  );
};

export default WeatherComponent;
Приклад 3: Використання Rick and Morty API
Цей API надає інформацію про персонажів з популярного мультсеріалу.



tsx
import React, { useEffect, useState } from 'react';

interface Character {
  id: number;
  name: string;
  image: string;
}

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div>
      <h1>Персонажі Ріка і Морті</h1>
      <ul>
        {characters.map(character => (
          <li key={character.id}>
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Characters;
Завдання на повторення
Створіть компонент UserList, який буде отримувати дані про користувачів з API Random User Generator і відображати їх у вигляді списку. Кожен користувач повинен містити ім'я, прізвище та аватар. 

Спробуйте реалізувати це завдання, використовуючи useEffect для отримання даних і useState для зберігання користувачів.