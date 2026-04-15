"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.UsersScalarFieldEnum = exports.Trx_typesScalarFieldEnum = exports.TranscationsScalarFieldEnum = exports.StocksScalarFieldEnum = exports.Stock_historiesScalarFieldEnum = exports.Personal_access_tokensScalarFieldEnum = exports.MigrationsScalarFieldEnum = exports.LayawaysScalarFieldEnum = exports.Layaway_detailsScalarFieldEnum = exports.Items_categoriesScalarFieldEnum = exports.Failed_jobsScalarFieldEnum = exports.ContractorsScalarFieldEnum = exports.Contractor_detailsScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = __importStar(require("@prisma/client/runtime/client"));
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.6.0",
    engine: "75cbdc1eb7150937890ad5465d861175c6624711"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    contractor_details: 'contractor_details',
    contractors: 'contractors',
    failed_jobs: 'failed_jobs',
    items_categories: 'items_categories',
    layaway_details: 'layaway_details',
    layaways: 'layaways',
    migrations: 'migrations',
    personal_access_tokens: 'personal_access_tokens',
    stock_histories: 'stock_histories',
    stocks: 'stocks',
    transcations: 'transcations',
    trx_types: 'trx_types',
    users: 'users'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.Contractor_detailsScalarFieldEnum = {
    id: 'id',
    contractor_id: 'contractor_id',
    periode: 'periode',
    pay: 'pay',
    payment_date: 'payment_date',
    jatuh_tempo: 'jatuh_tempo',
    note: 'note',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.ContractorsScalarFieldEnum = {
    id: 'id',
    contractor_name: 'contractor_name',
    contractor_wa: 'contractor_wa',
    keterangan: 'keterangan',
    interval: 'interval',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Failed_jobsScalarFieldEnum = {
    id: 'id',
    uuid: 'uuid',
    connection: 'connection',
    queue: 'queue',
    payload: 'payload',
    exception: 'exception',
    failed_at: 'failed_at'
};
exports.Items_categoriesScalarFieldEnum = {
    id: 'id',
    name: 'name',
    note: 'note',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Layaway_detailsScalarFieldEnum = {
    id: 'id',
    layaway_id: 'layaway_id',
    month: 'month',
    jatuh_tempo: 'jatuh_tempo',
    paid: 'paid',
    paid_at: 'paid_at',
    note: 'note',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.LayawaysScalarFieldEnum = {
    id: 'id',
    is_finish: 'is_finish',
    customer_name: 'customer_name',
    customer_wa: 'customer_wa',
    tenor: 'tenor',
    project: 'project',
    block: 'block',
    price: 'price',
    note: 'note',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.MigrationsScalarFieldEnum = {
    id: 'id',
    migration: 'migration',
    batch: 'batch'
};
exports.Personal_access_tokensScalarFieldEnum = {
    id: 'id',
    tokenable_type: 'tokenable_type',
    tokenable_id: 'tokenable_id',
    name: 'name',
    token: 'token',
    abilities: 'abilities',
    last_used_at: 'last_used_at',
    expires_at: 'expires_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Stock_historiesScalarFieldEnum = {
    id: 'id',
    stock_id: 'stock_id',
    alocate_to: 'alocate_to',
    action: 'action',
    quantity: 'quantity',
    note: 'note',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.StocksScalarFieldEnum = {
    id: 'id',
    category_id: 'category_id',
    name: 'name',
    quantity: 'quantity',
    unit: 'unit',
    note: 'note',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.TranscationsScalarFieldEnum = {
    id: 'id',
    type_id: 'type_id',
    name: 'name',
    quantity: 'quantity',
    price: 'price',
    final_price: 'final_price',
    unit: 'unit',
    status: 'status',
    jatuh_tempo: 'jatuh_tempo',
    paid_at: 'paid_at',
    note: 'note',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Trx_typesScalarFieldEnum = {
    id: 'id',
    name: 'name',
    cash_flow: 'cash_flow',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.UsersScalarFieldEnum = {
    id: 'id',
    full_name: 'full_name',
    username: 'username',
    role: 'role',
    password: 'password',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map