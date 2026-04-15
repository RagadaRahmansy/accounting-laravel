import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: any;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: any;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: any;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: any;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: any;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: any;
export declare const empty: any;
export declare const join: any;
export declare const raw: any;
export declare const Sql: any;
export type Sql = runtime.Sql;
export declare const Decimal: any;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: any;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: any;
export declare const JsonNull: any;
export declare const AnyNull: any;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "contractor_details" | "contractors" | "failed_jobs" | "items_categories" | "layaway_details" | "layaways" | "migrations" | "personal_access_tokens" | "stock_histories" | "stocks" | "transcations" | "trx_types" | "users";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        contractor_details: {
            payload: Prisma.$contractor_detailsPayload<ExtArgs>;
            fields: Prisma.contractor_detailsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.contractor_detailsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contractor_detailsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.contractor_detailsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contractor_detailsPayload>;
                };
                findFirst: {
                    args: Prisma.contractor_detailsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contractor_detailsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.contractor_detailsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contractor_detailsPayload>;
                };
                findMany: {
                    args: Prisma.contractor_detailsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contractor_detailsPayload>[];
                };
                create: {
                    args: Prisma.contractor_detailsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contractor_detailsPayload>;
                };
                createMany: {
                    args: Prisma.contractor_detailsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.contractor_detailsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contractor_detailsPayload>[];
                };
                delete: {
                    args: Prisma.contractor_detailsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contractor_detailsPayload>;
                };
                update: {
                    args: Prisma.contractor_detailsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contractor_detailsPayload>;
                };
                deleteMany: {
                    args: Prisma.contractor_detailsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.contractor_detailsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.contractor_detailsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contractor_detailsPayload>[];
                };
                upsert: {
                    args: Prisma.contractor_detailsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contractor_detailsPayload>;
                };
                aggregate: {
                    args: Prisma.Contractor_detailsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateContractor_details>;
                };
                groupBy: {
                    args: Prisma.contractor_detailsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Contractor_detailsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.contractor_detailsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Contractor_detailsCountAggregateOutputType> | number;
                };
            };
        };
        contractors: {
            payload: Prisma.$contractorsPayload<ExtArgs>;
            fields: Prisma.contractorsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.contractorsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contractorsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.contractorsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contractorsPayload>;
                };
                findFirst: {
                    args: Prisma.contractorsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contractorsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.contractorsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contractorsPayload>;
                };
                findMany: {
                    args: Prisma.contractorsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contractorsPayload>[];
                };
                create: {
                    args: Prisma.contractorsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contractorsPayload>;
                };
                createMany: {
                    args: Prisma.contractorsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.contractorsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contractorsPayload>[];
                };
                delete: {
                    args: Prisma.contractorsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contractorsPayload>;
                };
                update: {
                    args: Prisma.contractorsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contractorsPayload>;
                };
                deleteMany: {
                    args: Prisma.contractorsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.contractorsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.contractorsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contractorsPayload>[];
                };
                upsert: {
                    args: Prisma.contractorsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contractorsPayload>;
                };
                aggregate: {
                    args: Prisma.ContractorsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateContractors>;
                };
                groupBy: {
                    args: Prisma.contractorsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ContractorsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.contractorsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ContractorsCountAggregateOutputType> | number;
                };
            };
        };
        failed_jobs: {
            payload: Prisma.$failed_jobsPayload<ExtArgs>;
            fields: Prisma.failed_jobsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.failed_jobsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$failed_jobsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.failed_jobsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$failed_jobsPayload>;
                };
                findFirst: {
                    args: Prisma.failed_jobsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$failed_jobsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.failed_jobsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$failed_jobsPayload>;
                };
                findMany: {
                    args: Prisma.failed_jobsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$failed_jobsPayload>[];
                };
                create: {
                    args: Prisma.failed_jobsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$failed_jobsPayload>;
                };
                createMany: {
                    args: Prisma.failed_jobsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.failed_jobsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$failed_jobsPayload>[];
                };
                delete: {
                    args: Prisma.failed_jobsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$failed_jobsPayload>;
                };
                update: {
                    args: Prisma.failed_jobsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$failed_jobsPayload>;
                };
                deleteMany: {
                    args: Prisma.failed_jobsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.failed_jobsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.failed_jobsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$failed_jobsPayload>[];
                };
                upsert: {
                    args: Prisma.failed_jobsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$failed_jobsPayload>;
                };
                aggregate: {
                    args: Prisma.Failed_jobsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFailed_jobs>;
                };
                groupBy: {
                    args: Prisma.failed_jobsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Failed_jobsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.failed_jobsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Failed_jobsCountAggregateOutputType> | number;
                };
            };
        };
        items_categories: {
            payload: Prisma.$items_categoriesPayload<ExtArgs>;
            fields: Prisma.items_categoriesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.items_categoriesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$items_categoriesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.items_categoriesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$items_categoriesPayload>;
                };
                findFirst: {
                    args: Prisma.items_categoriesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$items_categoriesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.items_categoriesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$items_categoriesPayload>;
                };
                findMany: {
                    args: Prisma.items_categoriesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$items_categoriesPayload>[];
                };
                create: {
                    args: Prisma.items_categoriesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$items_categoriesPayload>;
                };
                createMany: {
                    args: Prisma.items_categoriesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.items_categoriesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$items_categoriesPayload>[];
                };
                delete: {
                    args: Prisma.items_categoriesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$items_categoriesPayload>;
                };
                update: {
                    args: Prisma.items_categoriesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$items_categoriesPayload>;
                };
                deleteMany: {
                    args: Prisma.items_categoriesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.items_categoriesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.items_categoriesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$items_categoriesPayload>[];
                };
                upsert: {
                    args: Prisma.items_categoriesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$items_categoriesPayload>;
                };
                aggregate: {
                    args: Prisma.Items_categoriesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateItems_categories>;
                };
                groupBy: {
                    args: Prisma.items_categoriesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Items_categoriesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.items_categoriesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Items_categoriesCountAggregateOutputType> | number;
                };
            };
        };
        layaway_details: {
            payload: Prisma.$layaway_detailsPayload<ExtArgs>;
            fields: Prisma.layaway_detailsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.layaway_detailsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$layaway_detailsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.layaway_detailsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$layaway_detailsPayload>;
                };
                findFirst: {
                    args: Prisma.layaway_detailsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$layaway_detailsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.layaway_detailsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$layaway_detailsPayload>;
                };
                findMany: {
                    args: Prisma.layaway_detailsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$layaway_detailsPayload>[];
                };
                create: {
                    args: Prisma.layaway_detailsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$layaway_detailsPayload>;
                };
                createMany: {
                    args: Prisma.layaway_detailsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.layaway_detailsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$layaway_detailsPayload>[];
                };
                delete: {
                    args: Prisma.layaway_detailsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$layaway_detailsPayload>;
                };
                update: {
                    args: Prisma.layaway_detailsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$layaway_detailsPayload>;
                };
                deleteMany: {
                    args: Prisma.layaway_detailsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.layaway_detailsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.layaway_detailsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$layaway_detailsPayload>[];
                };
                upsert: {
                    args: Prisma.layaway_detailsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$layaway_detailsPayload>;
                };
                aggregate: {
                    args: Prisma.Layaway_detailsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLayaway_details>;
                };
                groupBy: {
                    args: Prisma.layaway_detailsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Layaway_detailsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.layaway_detailsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Layaway_detailsCountAggregateOutputType> | number;
                };
            };
        };
        layaways: {
            payload: Prisma.$layawaysPayload<ExtArgs>;
            fields: Prisma.layawaysFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.layawaysFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$layawaysPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.layawaysFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$layawaysPayload>;
                };
                findFirst: {
                    args: Prisma.layawaysFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$layawaysPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.layawaysFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$layawaysPayload>;
                };
                findMany: {
                    args: Prisma.layawaysFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$layawaysPayload>[];
                };
                create: {
                    args: Prisma.layawaysCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$layawaysPayload>;
                };
                createMany: {
                    args: Prisma.layawaysCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.layawaysCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$layawaysPayload>[];
                };
                delete: {
                    args: Prisma.layawaysDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$layawaysPayload>;
                };
                update: {
                    args: Prisma.layawaysUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$layawaysPayload>;
                };
                deleteMany: {
                    args: Prisma.layawaysDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.layawaysUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.layawaysUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$layawaysPayload>[];
                };
                upsert: {
                    args: Prisma.layawaysUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$layawaysPayload>;
                };
                aggregate: {
                    args: Prisma.LayawaysAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLayaways>;
                };
                groupBy: {
                    args: Prisma.layawaysGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LayawaysGroupByOutputType>[];
                };
                count: {
                    args: Prisma.layawaysCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LayawaysCountAggregateOutputType> | number;
                };
            };
        };
        migrations: {
            payload: Prisma.$migrationsPayload<ExtArgs>;
            fields: Prisma.migrationsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.migrationsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$migrationsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.migrationsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$migrationsPayload>;
                };
                findFirst: {
                    args: Prisma.migrationsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$migrationsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.migrationsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$migrationsPayload>;
                };
                findMany: {
                    args: Prisma.migrationsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$migrationsPayload>[];
                };
                create: {
                    args: Prisma.migrationsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$migrationsPayload>;
                };
                createMany: {
                    args: Prisma.migrationsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.migrationsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$migrationsPayload>[];
                };
                delete: {
                    args: Prisma.migrationsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$migrationsPayload>;
                };
                update: {
                    args: Prisma.migrationsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$migrationsPayload>;
                };
                deleteMany: {
                    args: Prisma.migrationsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.migrationsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.migrationsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$migrationsPayload>[];
                };
                upsert: {
                    args: Prisma.migrationsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$migrationsPayload>;
                };
                aggregate: {
                    args: Prisma.MigrationsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMigrations>;
                };
                groupBy: {
                    args: Prisma.migrationsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MigrationsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.migrationsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MigrationsCountAggregateOutputType> | number;
                };
            };
        };
        personal_access_tokens: {
            payload: Prisma.$personal_access_tokensPayload<ExtArgs>;
            fields: Prisma.personal_access_tokensFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.personal_access_tokensFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personal_access_tokensPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.personal_access_tokensFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personal_access_tokensPayload>;
                };
                findFirst: {
                    args: Prisma.personal_access_tokensFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personal_access_tokensPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.personal_access_tokensFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personal_access_tokensPayload>;
                };
                findMany: {
                    args: Prisma.personal_access_tokensFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personal_access_tokensPayload>[];
                };
                create: {
                    args: Prisma.personal_access_tokensCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personal_access_tokensPayload>;
                };
                createMany: {
                    args: Prisma.personal_access_tokensCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.personal_access_tokensCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personal_access_tokensPayload>[];
                };
                delete: {
                    args: Prisma.personal_access_tokensDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personal_access_tokensPayload>;
                };
                update: {
                    args: Prisma.personal_access_tokensUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personal_access_tokensPayload>;
                };
                deleteMany: {
                    args: Prisma.personal_access_tokensDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.personal_access_tokensUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.personal_access_tokensUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personal_access_tokensPayload>[];
                };
                upsert: {
                    args: Prisma.personal_access_tokensUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personal_access_tokensPayload>;
                };
                aggregate: {
                    args: Prisma.Personal_access_tokensAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePersonal_access_tokens>;
                };
                groupBy: {
                    args: Prisma.personal_access_tokensGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Personal_access_tokensGroupByOutputType>[];
                };
                count: {
                    args: Prisma.personal_access_tokensCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Personal_access_tokensCountAggregateOutputType> | number;
                };
            };
        };
        stock_histories: {
            payload: Prisma.$stock_historiesPayload<ExtArgs>;
            fields: Prisma.stock_historiesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.stock_historiesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stock_historiesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.stock_historiesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stock_historiesPayload>;
                };
                findFirst: {
                    args: Prisma.stock_historiesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stock_historiesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.stock_historiesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stock_historiesPayload>;
                };
                findMany: {
                    args: Prisma.stock_historiesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stock_historiesPayload>[];
                };
                create: {
                    args: Prisma.stock_historiesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stock_historiesPayload>;
                };
                createMany: {
                    args: Prisma.stock_historiesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.stock_historiesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stock_historiesPayload>[];
                };
                delete: {
                    args: Prisma.stock_historiesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stock_historiesPayload>;
                };
                update: {
                    args: Prisma.stock_historiesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stock_historiesPayload>;
                };
                deleteMany: {
                    args: Prisma.stock_historiesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.stock_historiesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.stock_historiesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stock_historiesPayload>[];
                };
                upsert: {
                    args: Prisma.stock_historiesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stock_historiesPayload>;
                };
                aggregate: {
                    args: Prisma.Stock_historiesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStock_histories>;
                };
                groupBy: {
                    args: Prisma.stock_historiesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Stock_historiesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.stock_historiesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Stock_historiesCountAggregateOutputType> | number;
                };
            };
        };
        stocks: {
            payload: Prisma.$stocksPayload<ExtArgs>;
            fields: Prisma.stocksFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.stocksFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stocksPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.stocksFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stocksPayload>;
                };
                findFirst: {
                    args: Prisma.stocksFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stocksPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.stocksFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stocksPayload>;
                };
                findMany: {
                    args: Prisma.stocksFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stocksPayload>[];
                };
                create: {
                    args: Prisma.stocksCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stocksPayload>;
                };
                createMany: {
                    args: Prisma.stocksCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.stocksCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stocksPayload>[];
                };
                delete: {
                    args: Prisma.stocksDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stocksPayload>;
                };
                update: {
                    args: Prisma.stocksUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stocksPayload>;
                };
                deleteMany: {
                    args: Prisma.stocksDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.stocksUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.stocksUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stocksPayload>[];
                };
                upsert: {
                    args: Prisma.stocksUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stocksPayload>;
                };
                aggregate: {
                    args: Prisma.StocksAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStocks>;
                };
                groupBy: {
                    args: Prisma.stocksGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StocksGroupByOutputType>[];
                };
                count: {
                    args: Prisma.stocksCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StocksCountAggregateOutputType> | number;
                };
            };
        };
        transcations: {
            payload: Prisma.$transcationsPayload<ExtArgs>;
            fields: Prisma.transcationsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.transcationsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transcationsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.transcationsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transcationsPayload>;
                };
                findFirst: {
                    args: Prisma.transcationsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transcationsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.transcationsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transcationsPayload>;
                };
                findMany: {
                    args: Prisma.transcationsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transcationsPayload>[];
                };
                create: {
                    args: Prisma.transcationsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transcationsPayload>;
                };
                createMany: {
                    args: Prisma.transcationsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.transcationsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transcationsPayload>[];
                };
                delete: {
                    args: Prisma.transcationsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transcationsPayload>;
                };
                update: {
                    args: Prisma.transcationsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transcationsPayload>;
                };
                deleteMany: {
                    args: Prisma.transcationsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.transcationsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.transcationsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transcationsPayload>[];
                };
                upsert: {
                    args: Prisma.transcationsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transcationsPayload>;
                };
                aggregate: {
                    args: Prisma.TranscationsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTranscations>;
                };
                groupBy: {
                    args: Prisma.transcationsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TranscationsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.transcationsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TranscationsCountAggregateOutputType> | number;
                };
            };
        };
        trx_types: {
            payload: Prisma.$trx_typesPayload<ExtArgs>;
            fields: Prisma.trx_typesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.trx_typesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$trx_typesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.trx_typesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$trx_typesPayload>;
                };
                findFirst: {
                    args: Prisma.trx_typesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$trx_typesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.trx_typesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$trx_typesPayload>;
                };
                findMany: {
                    args: Prisma.trx_typesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$trx_typesPayload>[];
                };
                create: {
                    args: Prisma.trx_typesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$trx_typesPayload>;
                };
                createMany: {
                    args: Prisma.trx_typesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.trx_typesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$trx_typesPayload>[];
                };
                delete: {
                    args: Prisma.trx_typesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$trx_typesPayload>;
                };
                update: {
                    args: Prisma.trx_typesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$trx_typesPayload>;
                };
                deleteMany: {
                    args: Prisma.trx_typesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.trx_typesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.trx_typesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$trx_typesPayload>[];
                };
                upsert: {
                    args: Prisma.trx_typesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$trx_typesPayload>;
                };
                aggregate: {
                    args: Prisma.Trx_typesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTrx_types>;
                };
                groupBy: {
                    args: Prisma.trx_typesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Trx_typesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.trx_typesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Trx_typesCountAggregateOutputType> | number;
                };
            };
        };
        users: {
            payload: Prisma.$usersPayload<ExtArgs>;
            fields: Prisma.usersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.usersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                findFirst: {
                    args: Prisma.usersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                findMany: {
                    args: Prisma.usersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>[];
                };
                create: {
                    args: Prisma.usersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                createMany: {
                    args: Prisma.usersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>[];
                };
                delete: {
                    args: Prisma.usersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                update: {
                    args: Prisma.usersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                deleteMany: {
                    args: Prisma.usersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.usersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>[];
                };
                upsert: {
                    args: Prisma.usersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                aggregate: {
                    args: Prisma.UsersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUsers>;
                };
                groupBy: {
                    args: Prisma.usersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.usersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsersCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
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
export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>;
export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    contractor_details?: Prisma.contractor_detailsOmit;
    contractors?: Prisma.contractorsOmit;
    failed_jobs?: Prisma.failed_jobsOmit;
    items_categories?: Prisma.items_categoriesOmit;
    layaway_details?: Prisma.layaway_detailsOmit;
    layaways?: Prisma.layawaysOmit;
    migrations?: Prisma.migrationsOmit;
    personal_access_tokens?: Prisma.personal_access_tokensOmit;
    stock_histories?: Prisma.stock_historiesOmit;
    stocks?: Prisma.stocksOmit;
    transcations?: Prisma.transcationsOmit;
    trx_types?: Prisma.trx_typesOmit;
    users?: Prisma.usersOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
