import { ItemDetailResponsebyIdInterface, ItemResponseInterface } from "../core/interface/items.interface";

export interface ItemsServiceInterface {
    getQuery(query: string): Promise<ItemResponseInterface>;
    getItems(id: string): Promise<ItemDetailResponsebyIdInterface>;
    getDescription(id: string): Promise<any>;
    getCategorybyId(idCategory: string): Promise<any>;
}