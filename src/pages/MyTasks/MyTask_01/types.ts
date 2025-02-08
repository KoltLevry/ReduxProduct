interface Phone {
    brand: string;
    model: string;
    color: string;
    year:  number;
    storage: StorageOptions;
    carrier: string;
    status: string;
    notes: string;
    cell: () => void; // Метод, який не приймає аргументів і нічого не повертає
}

interface StorageOptions {
    small: string;
    middle: string;
    big: string;
}

export const PhoneTask: Phone = {
    brand: "Apple",
    model: "iPhone 13",
    color: "Midnight, Blue, Light",
    year: 2021,
    storage: {
        small: "128GB",
        middle: "256GB",
        big: '1TB',
    },
    carrier: "AT&T",
    status: "In Progress",
    notes: "Customer wants to upgrade to the latest iOS version and has requested a new case.",
    cell: function() {
        console.log(`${this.brand} ${this.model} is ringing`);
    } 

}

// Інтерфейс: Ми створили інтерфейс Phone, щоб визначити структуру об'єкта.
// Стан: Ми використовуємо useState для зберігання даних про телефон.
// Метод: Метод cell викликається при натисканні кнопки, що імітує дзвінок.
