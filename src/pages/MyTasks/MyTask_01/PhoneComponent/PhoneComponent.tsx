import { useState } from "react"
import {
  ButtonStorageValue,
  ButtonsValue,
  PhoneCall,
  PhoneCartWrapper,
} from "./styles"
import { PhoneTask } from "../types"

function PhoneComponent() {
  const [telephone, setTelephone] = useState(PhoneTask)
  const [selectedStorage, setSelectedStorage] = useState<string | null>(null)

  const handleCell = () => {
    telephone.cell()
  }

  const handleStorage = (valueS: string) => {
    setSelectedStorage(valueS)
  }

  return (
    <PhoneCartWrapper>
      <h1>
        {telephone.brand} - {telephone.model}
      </h1>
      <p>Color: {telephone.color}</p>
      <p>Year: {telephone.year}</p>
      <p>Status: {telephone.status}</p>
      <PhoneCall onClick={handleCell}>Cell</PhoneCall>
      <p>Select memmory value:</p>
      <ButtonsValue>
        {/* () => (arrow function) - Це синтаксис для створення анонімної функції (функції без імені)*/}
        {/* Чому використовуються () =>?: 
        Це потрібно для того, щоб передати функцію handleStorage як обробник події onClick. 
        Якщо б ви просто написали onClick={handleStorage(telephone.storage.small)}, 
        то функція handleStorage була б викликана відразу при рендерингу компонента, а не при натисканні кнопки. 
        Стрілкова функція дозволяє відкласти виклик до моменту натискання кнопки. */}
        <ButtonStorageValue
          onClick={() => handleStorage(telephone.storage.small)}
        >
          small
        </ButtonStorageValue>
        <ButtonStorageValue
          onClick={() => handleStorage(telephone.storage.middle)}
        >
          middle
        </ButtonStorageValue>
        <ButtonStorageValue
          onClick={() => handleStorage(telephone.storage.big)}
          
        >
          big
        </ButtonStorageValue>
      </ButtonsValue>
      {/* Це логічний оператор AND */}
      {selectedStorage && <p>Selected memory: {selectedStorage}</p>}
      {/* Він працює так, що якщо selectedStorage не є null або undefined, тоді відобразиться <p>Selected memory: 
        {selectedStorage}</p>. Якщо selectedStorage є null, то нічого не відобразиться.
        Таким чином, цей рядок коду перевіряє, чи є значення в selectedStorage, і тільки якщо воно є, відображає текст. 
        Це корисно, щоб уникнути відображення пустого елемента, коли нічого не вибрано. */}
    </PhoneCartWrapper>
  )
}

export default PhoneComponent
