export interface Product {
    id: number;
    name: string;
    price: number;
    imageURL: string;
    categoryId: number;
    desc?: string;
    about?: {
        text1?: string;
        text2?: string;
        text3?: string;
        text4?: string;
        text5?: string;
    };
    gramm?: string;
    kkal?: string;
}
