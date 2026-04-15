import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: any;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: any;
export declare const JsonNull: any;
export declare const AnyNull: any;
export declare const ModelName: {
    readonly contractor_details: "contractor_details";
    readonly contractors: "contractors";
    readonly failed_jobs: "failed_jobs";
    readonly items_categories: "items_categories";
    readonly layaway_details: "layaway_details";
    readonly layaways: "layaways";
    readonly migrations: "migrations";
    readonly personal_access_tokens: "personal_access_tokens";
    readonly stock_histories: "stock_histories";
    readonly stocks: "stocks";
    readonly transcations: "transcations";
    readonly trx_types: "trx_types";
    readonly users: "users";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: any;
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const Contractor_detailsScalarFieldEnum: {
    readonly id: "id";
    readonly contractor_id: "contractor_id";
    readonly periode: "periode";
    readonly pay: "pay";
    readonly payment_date: "payment_date";
    readonly jatuh_tempo: "jatuh_tempo";
    readonly note: "note";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Contractor_detailsScalarFieldEnum = (typeof Contractor_detailsScalarFieldEnum)[keyof typeof Contractor_detailsScalarFieldEnum];
export declare const ContractorsScalarFieldEnum: {
    readonly id: "id";
    readonly contractor_name: "contractor_name";
    readonly contractor_wa: "contractor_wa";
    readonly keterangan: "keterangan";
    readonly interval: "interval";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type ContractorsScalarFieldEnum = (typeof ContractorsScalarFieldEnum)[keyof typeof ContractorsScalarFieldEnum];
export declare const Failed_jobsScalarFieldEnum: {
    readonly id: "id";
    readonly uuid: "uuid";
    readonly connection: "connection";
    readonly queue: "queue";
    readonly payload: "payload";
    readonly exception: "exception";
    readonly failed_at: "failed_at";
};
export type Failed_jobsScalarFieldEnum = (typeof Failed_jobsScalarFieldEnum)[keyof typeof Failed_jobsScalarFieldEnum];
export declare const Items_categoriesScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly note: "note";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Items_categoriesScalarFieldEnum = (typeof Items_categoriesScalarFieldEnum)[keyof typeof Items_categoriesScalarFieldEnum];
export declare const Layaway_detailsScalarFieldEnum: {
    readonly id: "id";
    readonly layaway_id: "layaway_id";
    readonly month: "month";
    readonly jatuh_tempo: "jatuh_tempo";
    readonly paid: "paid";
    readonly paid_at: "paid_at";
    readonly note: "note";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Layaway_detailsScalarFieldEnum = (typeof Layaway_detailsScalarFieldEnum)[keyof typeof Layaway_detailsScalarFieldEnum];
export declare const LayawaysScalarFieldEnum: {
    readonly id: "id";
    readonly is_finish: "is_finish";
    readonly customer_name: "customer_name";
    readonly customer_wa: "customer_wa";
    readonly tenor: "tenor";
    readonly project: "project";
    readonly block: "block";
    readonly price: "price";
    readonly note: "note";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type LayawaysScalarFieldEnum = (typeof LayawaysScalarFieldEnum)[keyof typeof LayawaysScalarFieldEnum];
export declare const MigrationsScalarFieldEnum: {
    readonly id: "id";
    readonly migration: "migration";
    readonly batch: "batch";
};
export type MigrationsScalarFieldEnum = (typeof MigrationsScalarFieldEnum)[keyof typeof MigrationsScalarFieldEnum];
export declare const Personal_access_tokensScalarFieldEnum: {
    readonly id: "id";
    readonly tokenable_type: "tokenable_type";
    readonly tokenable_id: "tokenable_id";
    readonly name: "name";
    readonly token: "token";
    readonly abilities: "abilities";
    readonly last_used_at: "last_used_at";
    readonly expires_at: "expires_at";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Personal_access_tokensScalarFieldEnum = (typeof Personal_access_tokensScalarFieldEnum)[keyof typeof Personal_access_tokensScalarFieldEnum];
export declare const Stock_historiesScalarFieldEnum: {
    readonly id: "id";
    readonly stock_id: "stock_id";
    readonly alocate_to: "alocate_to";
    readonly action: "action";
    readonly quantity: "quantity";
    readonly note: "note";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Stock_historiesScalarFieldEnum = (typeof Stock_historiesScalarFieldEnum)[keyof typeof Stock_historiesScalarFieldEnum];
export declare const StocksScalarFieldEnum: {
    readonly id: "id";
    readonly category_id: "category_id";
    readonly name: "name";
    readonly quantity: "quantity";
    readonly unit: "unit";
    readonly note: "note";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type StocksScalarFieldEnum = (typeof StocksScalarFieldEnum)[keyof typeof StocksScalarFieldEnum];
export declare const TranscationsScalarFieldEnum: {
    readonly id: "id";
    readonly type_id: "type_id";
    readonly name: "name";
    readonly quantity: "quantity";
    readonly price: "price";
    readonly final_price: "final_price";
    readonly unit: "unit";
    readonly status: "status";
    readonly jatuh_tempo: "jatuh_tempo";
    readonly paid_at: "paid_at";
    readonly note: "note";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type TranscationsScalarFieldEnum = (typeof TranscationsScalarFieldEnum)[keyof typeof TranscationsScalarFieldEnum];
export declare const Trx_typesScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly cash_flow: "cash_flow";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Trx_typesScalarFieldEnum = (typeof Trx_typesScalarFieldEnum)[keyof typeof Trx_typesScalarFieldEnum];
export declare const UsersScalarFieldEnum: {
    readonly id: "id";
    readonly full_name: "full_name";
    readonly username: "username";
    readonly role: "role";
    readonly password: "password";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
