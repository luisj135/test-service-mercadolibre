/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ItemApiResponseInterface,
  ItemResponseInterface,
  ItemResponsebyIdInterface,
  DetailApiResponseInterface,
  ItemResponsebyIdWithDetailInterface,
  ItemApiResponseDataInterface,
  ItemDetailResponsebyIdInterface,
  CategoryApiResponseInterface,
  ObjectCategoryReturn,
} from '../interface/items.interface'

export class ItemsResponse {

  getMapItem(items: ItemApiResponseInterface): ItemResponseInterface{
    const limitItems = items.results.slice(-4);
    const itemsFilter:any = limitItems.map((item)=>{
      return {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: item.price,
          decimals: Math.floor(item.price),
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        state: item.address.state_name
      }
    })

    const categoryFilter = items.available_filters.filter((item)=>{
      return item.id === 'category';
    });
    const categoryinArray: any = categoryFilter[0].values.map((item) => {
      return item.name;
    });
    const categoryIObject:any = categoryFilter[0].values.sort((c, d) => {
      return d.results - c.results;
    }).shift();
    const dataResponse: ItemResponseInterface = {
      author: {
        name: 'Luis Jhohan',
        lastname: 'Venegas Tobar'
      },
      categories: categoryinArray,
      items: itemsFilter,
      category_id: categoryIObject.id,
    }
    return dataResponse;
  }

  getMapItembyId(items: ItemApiResponseInterface): ItemResponsebyIdInterface {
    let limitItems = items.results;
    console.log(items);
    console.log(limitItems);
    if (items.results.length > 1) {
      limitItems = items.results.slice(-4);
    }
    const itemsFilter = limitItems.map((item) => {
      return {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: item.price,
          decimals: Math.floor(item.price),
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        category_id: item.category_id,
        state: item.address.state_name,
        sold_quantity: item.sold_quantity,
      }
    })

    const dataResponse: ItemResponsebyIdInterface = {
      author: {
        name: 'Luis Jhohan',
        lastname: 'Venegas Tobar'
      },
      items: itemsFilter,
    }
    return dataResponse;
  }

  getMapItemVoid(): ItemResponseInterface {
    const dataResponse: ItemResponseInterface = {
      author: {
        name: '',
        lastname: ''
      },
      categories: [],
      items: [{
        id: 's',
        title: '',
        price: {
          currency: '',
          amount: 0,
          decimals: 0
        },
        picture: '',
        condition: '',
        free_shipping: false,
        state: '',
      }],
      category_id: 0,
    }
    return dataResponse;
  }

  getMapItembyIdandDetail(item: ItemApiResponseDataInterface): ItemDetailResponsebyIdInterface {
    const itemsFilter = {
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.price,
        decimals: Math.floor(item.price),
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      category_id: item.category_id,
      state: item.seller_address.state.name,
      sold_quantity: item.sold_quantity
    }

    const dataResponse: ItemDetailResponsebyIdInterface = {
      author: {
        name: 'Luis Jhohan',
        lastname: 'Venegas Tobar'
      },
      item: itemsFilter,
    }
    return dataResponse;
  }

  getMapItembyIdandDetailVoid(): ItemDetailResponsebyIdInterface {
    const dataResponse = {
      author: {
        name: '',
        lastname: ''
      },
      item: {
        id: 's',
        title: '',
        price: {
          currency: '',
          amount: 0,
          decimals: 0
        },
        picture: '',
        condition: '',
        free_shipping: false,
        category_id: '',
        state: '',
        sold_quantity: 0
      }
    }
    return dataResponse;
  }

  getMapItemDetail(itemDescription: DetailApiResponseInterface):string {
    return itemDescription.plain_text;
  }

  getMapItemDetailVoid(): string {
    return '';
  }

  getMapCategorybyId(itemCategory: CategoryApiResponseInterface): ObjectCategoryReturn  {
    return {
      id: itemCategory.id,
      name: itemCategory.id,
      path_from_root: itemCategory.path_from_root
    }
  }

  getMapCategorybyIdVoid(): ObjectCategoryReturn {
    return {
      id: '',
      name: '',
      path_from_root: []
    }
  }
}