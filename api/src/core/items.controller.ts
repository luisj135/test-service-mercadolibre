/* eslint-disable @typescript-eslint/no-explicit-any */
import { ItemsServiceServices } from '../infraestructure/items.service'
import {
  ItemsControllerInterface,
  ItemsGetServiceInterface,
  elementpathRoot,
  ItemResponseToExternalInterface,
  ItemDetailResponsebyIdToExternalInterface,
} from './interface/items.interface'

export default class ItemsController implements ItemsControllerInterface{

  constructor(
      private service = ItemsServiceServices
  ){}

  async getQuery(search: string): Promise<ItemResponseToExternalInterface> {
    const serviceCall = new this.service();
    const dataReturn = await serviceCall.getQuery(search);
    const idCategory = dataReturn.category_id;
    const getpathCategory = await serviceCall.getCategorybyId(idCategory);
    const arrayPathCategory = getpathCategory.path_from_root.map((itemPath: elementpathRoot) => {
      return itemPath.name
    })
    delete dataReturn.category_id;
    const dataReturnExternal:any = dataReturn;
    dataReturnExternal.categoryPath = arrayPathCategory;
    return dataReturnExternal;
  }

  async getItems(id: string): Promise<ItemDetailResponsebyIdToExternalInterface> {
    const serviceCall = new this.service();
    const dataReturn = await this.promiseGetsItems(serviceCall, id);
    const detailReturn = await this.promiseGetDescription(serviceCall, id);
    const returnData = await Promise.all([dataReturn, detailReturn]).then(values => {
      const responseData: any = values[0];
      const responseDetail = values[1];
      responseData.item.description = responseDetail;
      return responseData;
    });
    const idCategory = returnData.item.category_id;
    const getpathCategory =  await serviceCall.getCategorybyId(idCategory);
    const arrayPathCategory = getpathCategory.path_from_root.map((itemPath: elementpathRoot)=>{
      return itemPath.name
    })
    delete returnData.item.category_id;
    returnData.categoryPath = arrayPathCategory;
    return returnData;
  }

  private promiseGetsItems(serviceCall: ItemsGetServiceInterface, id:string) {
    return new Promise((resolve, reject) => {
      try {
        const dataReturn = serviceCall.getItems(id);
        resolve(dataReturn);
      } catch(e){
        reject(e);
      }
    });
  }

  private promiseGetDescription(serviceCall: ItemsGetServiceInterface, id: string) {
    return new Promise((resolve, reject) => {
      try {
        const dataReturn = serviceCall.getDescription(id);
        resolve(dataReturn);
      } catch (e) {
        reject(e);
      }
    });
  }
}
