import { ItemsServiceInterface } from "../../infraestructure/items.infrastructure.interface";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ItemsControllerInterface {
  getQuery(query: string): Promise<any>;
  getItems(id: string): Promise <any>;
}

export type ItemsGetServiceInterface = ItemsServiceInterface

interface elementAutor {
  name: string;
  lastname: string;
}

export interface elementPrice {
  currency: string;
  amount: number;
  decimals: number;
}

export interface elementItem {
  id: string;
  title: string;
  price: elementPrice;
  picture: string;
  condition: string;
  free_shipping: boolean;
  state: string;
}

export interface elementItemWithCategory {
  id: string;
  title: string;
  price: elementPrice;
  picture: string;
  condition: string;
  free_shipping: boolean;
  category_id: string;
  state: string;
  sold_quantity: number,
}

export interface ItemResponseInterface {
  author: elementAutor;
  categories: string[];
  items: elementItem[];
  category_id: any;
}

export interface ItemResponseToExternalInterface {
  author: elementAutor;
  categories: string[];
  items: elementItem[];
  categoryPath: ObjectCategoryReturn;
}

export interface ItemResponsebyIdInterface {
  author: elementAutor;
  items: elementItemWithCategory[];
}

export interface ItemDetailResponsebyIdInterface {
  author: elementAutor;
  item: elementItemWithCategory;
}

export interface ItemDetailResponsebyIdToExternalInterface {
  author: elementAutor;
  item: elementItem;
  categoryPath: ObjectCategoryReturn;
}

interface elementPaging {
  total: number;
  primary_results: number;
  offset: number;
  limit: number;
}

interface elementSort {
  id: string;
  name: string;
}

interface elementAvailableSort {
  id: string;
  name: string;
}

interface elementValueFilter {
  id: string;
  name: string;
  results: number;
}

interface elementAvailableFilter {
  id: string;
  name: string;
  type: string;
  values: elementValueFilter[];
}

interface elementShipping {
  free_shipping: boolean;
  mode: string;
  tags: string[];
  logistic_type: string;
  store_pick_up: boolean
}

interface elementAddress {
  state_id: string;
  state_name: string;
  city_id: number | null,
  city_name: string;
}

export interface itemResultapiInterface {
  id: string;
  site_id: string;
  title: string;
  seller: string[];
  price: number;
  prices: string[];
  sale_price: number | undefined | null;
  currency_id: string;
  available_quantity: number;
  sold_quantity: number;
  buying_mode: string;
  listing_type_id: string;
  stop_time: string;
  condition: string;
  permalink: string;
  thumbnail: string;
  thumbnail_id: string;
  accepts_mercadopago: boolean;
  installments: string[];
  address: elementAddress;
  shipping: elementShipping;
  seller_address: string[];
  attributes: undefined | [];
  original_price: number;
  category_id: string;
  official_store_id: number | null;
  domain_id: string;
  catalog_product_id: string;
  tags: undefined | [];
  catalog_listing: boolean;
  use_thumbnail_id: boolean;
  offer_score: string | null;
  offer_share: string | null;
  match_score: string | null;
  order_backend: number;
}

export interface ItemApiResponseInterface {
  site_id: string;
  country_default_time_zone: string;
  query: string;
  paging: elementPaging;
  results: itemResultapiInterface[];
  sort: elementSort;
  available_sort: elementAvailableSort[];
  filters: any;
  available_filters: elementAvailableFilter[];
}

export interface ItemApiResponsebyIdInterface {
  site_id: string;
  country_default_time_zone: string;
  query: string;
  paging: elementPaging;
  results: itemResultapiInterface[];
  sort: elementSort;
  available_sort: elementAvailableSort[];
  filters: any;
  available_filters: elementAvailableFilter[];
}

interface elementSnapshot {
  url: string;
  width: number;
  height: number;
  status: string;
}

export interface DetailApiResponseInterface {
  text: string;
  plain_text: string;
  last_updated: string;
  date_created: string;
  snapshot:elementSnapshot;
}

export interface elementItemDetail {
  id: string;
  title: string;
  price: elementPrice;
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity: number;
  description: string;
}

export interface ItemResponsebyIdWithDetailInterface {
  author: elementAutor;
  items: elementItemDetail;
}

export interface ItemApiResponseDataInterface {
  id: string;
  site_id: string;
  title: string;
  subtitle: null;
  seller_id: number;
  category_id: string;
  official_store_id: null;
  price: number;
  base_price:number;
  original_price: null;
  currency_id: string;
  initial_quantity: number;
  available_quantity: number;
  sold_quantity: number;
  sale_terms: any;
  buying_mode: string;
  listing_type_id: string;
  start_time: string;
  stop_time: string;
  condition: string;
  permalink: string;
  thumbnail_id: string;
  thumbnail: string;
  secure_thumbnail: string;
  pictures: any;
  video_id: any;
  descriptions: any;
  accepts_mercadopago: boolean;
  non_mercado_pago_payment_methods: any;
  shipping: any;
  international_delivery_mode: string;
  seller_address: any;
  seller_contact: null;
  location: any;
  coverage_areas: any;
  attributes: any;
  warnings: any;
  listing_source: string ;
  variations: any;
  status: string;
  sub_status: any;
  tags: any;
  warranty: string;
  catalog_product_id: string;
  domain_id: string;
  parent_item_id: null;
  differential_pricing: null;
  deal_ids: any;
  automatic_relist: boolean;
  date_created: string;
  last_updated: string;
  health: null;
  catalog_listing: boolean;
  channels: string[]
}

export interface elementpathRoot {
  id: string;
  name: string;
}

export interface CategoryApiResponseInterface {
  id: string;
  name: string;
  picture: string | null;
  permalink: string | null;
  total_items_in_this_category: number;
  path_from_root: elementpathRoot[];
  children_categories: any | undefined;
  attribute_types: string;
  settings: any | undefined;
  channels_settings: any | undefined;
  meta_categ_id: number | null;
  attributable: boolean;
  date_created: string;
}

export interface ObjectCategoryReturn {
  id: string;
  name: string;
  path_from_root: elementpathRoot[];
}
