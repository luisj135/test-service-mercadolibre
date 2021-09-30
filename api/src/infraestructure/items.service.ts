/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';
import { ItemsServiceInterface } from './items.infrastructure.interface';
import { ItemsResponse } from '../core/utils/items.response'
import { ItemDetailResponsebyIdInterface, ItemResponseInterface } from '../core/interface/items.interface';

export class ItemsServiceServices implements ItemsServiceInterface{
  async getQuery(query: string): Promise<ItemResponseInterface> {
    const mapperService = new ItemsResponse();
    try {
      const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
      return mapperService.getMapItem(response.data);
    } catch (error) {
      return mapperService.getMapItemVoid();
    }
  }

  async getItems(id: string): Promise<ItemDetailResponsebyIdInterface> {
    const mapperService = new ItemsResponse();
    try {
      const response = await axios.get(`https://api.mercadolibre.com/items/${id}`);
      return mapperService.getMapItembyIdandDetail(response.data)
    } catch (error) {
      console.log(error);
      return mapperService.getMapItembyIdandDetailVoid();
    }
  }

  async getDescription(id:string): Promise<any> {
    const mapperService = new ItemsResponse();
    try {
      const response = await axios.get(`https://api.mercadolibre.com/items/${id}/description`);
      return mapperService.getMapItemDetail(response.data)
    } catch (error) {
      return mapperService.getMapItemDetailVoid();
    }
  }

  async getCategorybyId(idCategory: string): Promise<any> {
    const mapperService = new ItemsResponse();
    try {
      const response = await axios.get(`https://api.mercadolibre.com/categories/${idCategory}`);
      return mapperService.getMapCategorybyId(response.data)
    } catch (error) {
      return mapperService.getMapCategorybyIdVoid();
    }
  }
}
