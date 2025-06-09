export interface Product {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    onBuy: () => void;
}

export const products: Product[] = [
    {
        id: 1,
        title: "Смарт-часы",
        description: "Умные часы с мониторингом здоровья и уведомлениями.",
        imageUrl: "https://example.com/smartwatch.jpg",
        onBuy: () => alert("Смарт-часы добавлены в корзину"),
    },
    {
        id: 2,
        title: "Беспроводные наушники",
        description: "Наушники с шумоподавлением и отличным качеством звука.",
        imageUrl: "https://example.com/headphones.jpg",
        onBuy: () => alert("Наушники добавлены в корзину"),
    },
    {
        id: 3,
        title: "Фитнес-браслет",
        description: "Легкий браслет для отслеживания активности и сна.",
        imageUrl: "https://example.com/fitnessband.jpg",
        onBuy: () => alert("Фитнес-браслет добавлен в корзину"),
    },
];
