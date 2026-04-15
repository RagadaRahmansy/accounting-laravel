import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type stock_historiesModel = runtime.Types.Result.DefaultSelection<Prisma.$stock_historiesPayload>;
export type AggregateStock_histories = {
    _count: Stock_historiesCountAggregateOutputType | null;
    _avg: Stock_historiesAvgAggregateOutputType | null;
    _sum: Stock_historiesSumAggregateOutputType | null;
    _min: Stock_historiesMinAggregateOutputType | null;
    _max: Stock_historiesMaxAggregateOutputType | null;
};
export type Stock_historiesAvgAggregateOutputType = {
    id: number | null;
    stock_id: number | null;
    quantity: number | null;
};
export type Stock_historiesSumAggregateOutputType = {
    id: bigint | null;
    stock_id: bigint | null;
    quantity: number | null;
};
export type Stock_historiesMinAggregateOutputType = {
    id: bigint | null;
    stock_id: bigint | null;
    alocate_to: string | null;
    action: string | null;
    quantity: number | null;
    note: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Stock_historiesMaxAggregateOutputType = {
    id: bigint | null;
    stock_id: bigint | null;
    alocate_to: string | null;
    action: string | null;
    quantity: number | null;
    note: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Stock_historiesCountAggregateOutputType = {
    id: number;
    stock_id: number;
    alocate_to: number;
    action: number;
    quantity: number;
    note: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Stock_historiesAvgAggregateInputType = {
    id?: true;
    stock_id?: true;
    quantity?: true;
};
export type Stock_historiesSumAggregateInputType = {
    id?: true;
    stock_id?: true;
    quantity?: true;
};
export type Stock_historiesMinAggregateInputType = {
    id?: true;
    stock_id?: true;
    alocate_to?: true;
    action?: true;
    quantity?: true;
    note?: true;
    created_at?: true;
    updated_at?: true;
};
export type Stock_historiesMaxAggregateInputType = {
    id?: true;
    stock_id?: true;
    alocate_to?: true;
    action?: true;
    quantity?: true;
    note?: true;
    created_at?: true;
    updated_at?: true;
};
export type Stock_historiesCountAggregateInputType = {
    id?: true;
    stock_id?: true;
    alocate_to?: true;
    action?: true;
    quantity?: true;
    note?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Stock_historiesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.stock_historiesWhereInput;
    orderBy?: Prisma.stock_historiesOrderByWithRelationInput | Prisma.stock_historiesOrderByWithRelationInput[];
    cursor?: Prisma.stock_historiesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Stock_historiesCountAggregateInputType;
    _avg?: Stock_historiesAvgAggregateInputType;
    _sum?: Stock_historiesSumAggregateInputType;
    _min?: Stock_historiesMinAggregateInputType;
    _max?: Stock_historiesMaxAggregateInputType;
};
export type GetStock_historiesAggregateType<T extends Stock_historiesAggregateArgs> = {
    [P in keyof T & keyof AggregateStock_histories]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStock_histories[P]> : Prisma.GetScalarType<T[P], AggregateStock_histories[P]>;
};
export type stock_historiesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.stock_historiesWhereInput;
    orderBy?: Prisma.stock_historiesOrderByWithAggregationInput | Prisma.stock_historiesOrderByWithAggregationInput[];
    by: Prisma.Stock_historiesScalarFieldEnum[] | Prisma.Stock_historiesScalarFieldEnum;
    having?: Prisma.stock_historiesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Stock_historiesCountAggregateInputType | true;
    _avg?: Stock_historiesAvgAggregateInputType;
    _sum?: Stock_historiesSumAggregateInputType;
    _min?: Stock_historiesMinAggregateInputType;
    _max?: Stock_historiesMaxAggregateInputType;
};
export type Stock_historiesGroupByOutputType = {
    id: bigint;
    stock_id: bigint;
    alocate_to: string;
    action: string;
    quantity: number;
    note: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    _count: Stock_historiesCountAggregateOutputType | null;
    _avg: Stock_historiesAvgAggregateOutputType | null;
    _sum: Stock_historiesSumAggregateOutputType | null;
    _min: Stock_historiesMinAggregateOutputType | null;
    _max: Stock_historiesMaxAggregateOutputType | null;
};
export type GetStock_historiesGroupByPayload<T extends stock_historiesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Stock_historiesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Stock_historiesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Stock_historiesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Stock_historiesGroupByOutputType[P]>;
}>>;
export type stock_historiesWhereInput = {
    AND?: Prisma.stock_historiesWhereInput | Prisma.stock_historiesWhereInput[];
    OR?: Prisma.stock_historiesWhereInput[];
    NOT?: Prisma.stock_historiesWhereInput | Prisma.stock_historiesWhereInput[];
    id?: Prisma.BigIntFilter<"stock_histories"> | bigint | number;
    stock_id?: Prisma.BigIntFilter<"stock_histories"> | bigint | number;
    alocate_to?: Prisma.StringFilter<"stock_histories"> | string;
    action?: Prisma.StringFilter<"stock_histories"> | string;
    quantity?: Prisma.IntFilter<"stock_histories"> | number;
    note?: Prisma.StringNullableFilter<"stock_histories"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"stock_histories"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"stock_histories"> | Date | string | null;
};
export type stock_historiesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    stock_id?: Prisma.SortOrder;
    alocate_to?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type stock_historiesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.stock_historiesWhereInput | Prisma.stock_historiesWhereInput[];
    OR?: Prisma.stock_historiesWhereInput[];
    NOT?: Prisma.stock_historiesWhereInput | Prisma.stock_historiesWhereInput[];
    stock_id?: Prisma.BigIntFilter<"stock_histories"> | bigint | number;
    alocate_to?: Prisma.StringFilter<"stock_histories"> | string;
    action?: Prisma.StringFilter<"stock_histories"> | string;
    quantity?: Prisma.IntFilter<"stock_histories"> | number;
    note?: Prisma.StringNullableFilter<"stock_histories"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"stock_histories"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"stock_histories"> | Date | string | null;
}, "id">;
export type stock_historiesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    stock_id?: Prisma.SortOrder;
    alocate_to?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.stock_historiesCountOrderByAggregateInput;
    _avg?: Prisma.stock_historiesAvgOrderByAggregateInput;
    _max?: Prisma.stock_historiesMaxOrderByAggregateInput;
    _min?: Prisma.stock_historiesMinOrderByAggregateInput;
    _sum?: Prisma.stock_historiesSumOrderByAggregateInput;
};
export type stock_historiesScalarWhereWithAggregatesInput = {
    AND?: Prisma.stock_historiesScalarWhereWithAggregatesInput | Prisma.stock_historiesScalarWhereWithAggregatesInput[];
    OR?: Prisma.stock_historiesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.stock_historiesScalarWhereWithAggregatesInput | Prisma.stock_historiesScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"stock_histories"> | bigint | number;
    stock_id?: Prisma.BigIntWithAggregatesFilter<"stock_histories"> | bigint | number;
    alocate_to?: Prisma.StringWithAggregatesFilter<"stock_histories"> | string;
    action?: Prisma.StringWithAggregatesFilter<"stock_histories"> | string;
    quantity?: Prisma.IntWithAggregatesFilter<"stock_histories"> | number;
    note?: Prisma.StringNullableWithAggregatesFilter<"stock_histories"> | string | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"stock_histories"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"stock_histories"> | Date | string | null;
};
export type stock_historiesCreateInput = {
    id?: bigint | number;
    stock_id: bigint | number;
    alocate_to: string;
    action: string;
    quantity: number;
    note?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type stock_historiesUncheckedCreateInput = {
    id?: bigint | number;
    stock_id: bigint | number;
    alocate_to: string;
    action: string;
    quantity: number;
    note?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type stock_historiesUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    stock_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    alocate_to?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type stock_historiesUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    stock_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    alocate_to?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type stock_historiesCreateManyInput = {
    id?: bigint | number;
    stock_id: bigint | number;
    alocate_to: string;
    action: string;
    quantity: number;
    note?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type stock_historiesUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    stock_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    alocate_to?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type stock_historiesUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    stock_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    alocate_to?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type stock_historiesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    stock_id?: Prisma.SortOrder;
    alocate_to?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type stock_historiesAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    stock_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type stock_historiesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    stock_id?: Prisma.SortOrder;
    alocate_to?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type stock_historiesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    stock_id?: Prisma.SortOrder;
    alocate_to?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type stock_historiesSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    stock_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type stock_historiesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    stock_id?: boolean;
    alocate_to?: boolean;
    action?: boolean;
    quantity?: boolean;
    note?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["stock_histories"]>;
export type stock_historiesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    stock_id?: boolean;
    alocate_to?: boolean;
    action?: boolean;
    quantity?: boolean;
    note?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["stock_histories"]>;
export type stock_historiesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    stock_id?: boolean;
    alocate_to?: boolean;
    action?: boolean;
    quantity?: boolean;
    note?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["stock_histories"]>;
export type stock_historiesSelectScalar = {
    id?: boolean;
    stock_id?: boolean;
    alocate_to?: boolean;
    action?: boolean;
    quantity?: boolean;
    note?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type stock_historiesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "stock_id" | "alocate_to" | "action" | "quantity" | "note" | "created_at" | "updated_at", ExtArgs["result"]["stock_histories"]>;
export type $stock_historiesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "stock_histories";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        stock_id: bigint;
        alocate_to: string;
        action: string;
        quantity: number;
        note: string | null;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["stock_histories"]>;
    composites: {};
};
export type stock_historiesGetPayload<S extends boolean | null | undefined | stock_historiesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$stock_historiesPayload, S>;
export type stock_historiesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<stock_historiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Stock_historiesCountAggregateInputType | true;
};
export interface stock_historiesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['stock_histories'];
        meta: {
            name: 'stock_histories';
        };
    };
    findUnique<T extends stock_historiesFindUniqueArgs>(args: Prisma.SelectSubset<T, stock_historiesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__stock_historiesClient<runtime.Types.Result.GetResult<Prisma.$stock_historiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends stock_historiesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, stock_historiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__stock_historiesClient<runtime.Types.Result.GetResult<Prisma.$stock_historiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends stock_historiesFindFirstArgs>(args?: Prisma.SelectSubset<T, stock_historiesFindFirstArgs<ExtArgs>>): Prisma.Prisma__stock_historiesClient<runtime.Types.Result.GetResult<Prisma.$stock_historiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends stock_historiesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, stock_historiesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__stock_historiesClient<runtime.Types.Result.GetResult<Prisma.$stock_historiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends stock_historiesFindManyArgs>(args?: Prisma.SelectSubset<T, stock_historiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$stock_historiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends stock_historiesCreateArgs>(args: Prisma.SelectSubset<T, stock_historiesCreateArgs<ExtArgs>>): Prisma.Prisma__stock_historiesClient<runtime.Types.Result.GetResult<Prisma.$stock_historiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends stock_historiesCreateManyArgs>(args?: Prisma.SelectSubset<T, stock_historiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends stock_historiesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, stock_historiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$stock_historiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends stock_historiesDeleteArgs>(args: Prisma.SelectSubset<T, stock_historiesDeleteArgs<ExtArgs>>): Prisma.Prisma__stock_historiesClient<runtime.Types.Result.GetResult<Prisma.$stock_historiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends stock_historiesUpdateArgs>(args: Prisma.SelectSubset<T, stock_historiesUpdateArgs<ExtArgs>>): Prisma.Prisma__stock_historiesClient<runtime.Types.Result.GetResult<Prisma.$stock_historiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends stock_historiesDeleteManyArgs>(args?: Prisma.SelectSubset<T, stock_historiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends stock_historiesUpdateManyArgs>(args: Prisma.SelectSubset<T, stock_historiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends stock_historiesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, stock_historiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$stock_historiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends stock_historiesUpsertArgs>(args: Prisma.SelectSubset<T, stock_historiesUpsertArgs<ExtArgs>>): Prisma.Prisma__stock_historiesClient<runtime.Types.Result.GetResult<Prisma.$stock_historiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends stock_historiesCountArgs>(args?: Prisma.Subset<T, stock_historiesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Stock_historiesCountAggregateOutputType> : number>;
    aggregate<T extends Stock_historiesAggregateArgs>(args: Prisma.Subset<T, Stock_historiesAggregateArgs>): Prisma.PrismaPromise<GetStock_historiesAggregateType<T>>;
    groupBy<T extends stock_historiesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: stock_historiesGroupByArgs['orderBy'];
    } : {
        orderBy?: stock_historiesGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, stock_historiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStock_historiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: stock_historiesFieldRefs;
}
export interface Prisma__stock_historiesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface stock_historiesFieldRefs {
    readonly id: Prisma.FieldRef<"stock_histories", 'BigInt'>;
    readonly stock_id: Prisma.FieldRef<"stock_histories", 'BigInt'>;
    readonly alocate_to: Prisma.FieldRef<"stock_histories", 'String'>;
    readonly action: Prisma.FieldRef<"stock_histories", 'String'>;
    readonly quantity: Prisma.FieldRef<"stock_histories", 'Int'>;
    readonly note: Prisma.FieldRef<"stock_histories", 'String'>;
    readonly created_at: Prisma.FieldRef<"stock_histories", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"stock_histories", 'DateTime'>;
}
export type stock_historiesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stock_historiesSelect<ExtArgs> | null;
    omit?: Prisma.stock_historiesOmit<ExtArgs> | null;
    where: Prisma.stock_historiesWhereUniqueInput;
};
export type stock_historiesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stock_historiesSelect<ExtArgs> | null;
    omit?: Prisma.stock_historiesOmit<ExtArgs> | null;
    where: Prisma.stock_historiesWhereUniqueInput;
};
export type stock_historiesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stock_historiesSelect<ExtArgs> | null;
    omit?: Prisma.stock_historiesOmit<ExtArgs> | null;
    where?: Prisma.stock_historiesWhereInput;
    orderBy?: Prisma.stock_historiesOrderByWithRelationInput | Prisma.stock_historiesOrderByWithRelationInput[];
    cursor?: Prisma.stock_historiesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Stock_historiesScalarFieldEnum | Prisma.Stock_historiesScalarFieldEnum[];
};
export type stock_historiesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stock_historiesSelect<ExtArgs> | null;
    omit?: Prisma.stock_historiesOmit<ExtArgs> | null;
    where?: Prisma.stock_historiesWhereInput;
    orderBy?: Prisma.stock_historiesOrderByWithRelationInput | Prisma.stock_historiesOrderByWithRelationInput[];
    cursor?: Prisma.stock_historiesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Stock_historiesScalarFieldEnum | Prisma.Stock_historiesScalarFieldEnum[];
};
export type stock_historiesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stock_historiesSelect<ExtArgs> | null;
    omit?: Prisma.stock_historiesOmit<ExtArgs> | null;
    where?: Prisma.stock_historiesWhereInput;
    orderBy?: Prisma.stock_historiesOrderByWithRelationInput | Prisma.stock_historiesOrderByWithRelationInput[];
    cursor?: Prisma.stock_historiesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Stock_historiesScalarFieldEnum | Prisma.Stock_historiesScalarFieldEnum[];
};
export type stock_historiesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stock_historiesSelect<ExtArgs> | null;
    omit?: Prisma.stock_historiesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.stock_historiesCreateInput, Prisma.stock_historiesUncheckedCreateInput>;
};
export type stock_historiesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.stock_historiesCreateManyInput | Prisma.stock_historiesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type stock_historiesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stock_historiesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.stock_historiesOmit<ExtArgs> | null;
    data: Prisma.stock_historiesCreateManyInput | Prisma.stock_historiesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type stock_historiesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stock_historiesSelect<ExtArgs> | null;
    omit?: Prisma.stock_historiesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.stock_historiesUpdateInput, Prisma.stock_historiesUncheckedUpdateInput>;
    where: Prisma.stock_historiesWhereUniqueInput;
};
export type stock_historiesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.stock_historiesUpdateManyMutationInput, Prisma.stock_historiesUncheckedUpdateManyInput>;
    where?: Prisma.stock_historiesWhereInput;
    limit?: number;
};
export type stock_historiesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stock_historiesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.stock_historiesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.stock_historiesUpdateManyMutationInput, Prisma.stock_historiesUncheckedUpdateManyInput>;
    where?: Prisma.stock_historiesWhereInput;
    limit?: number;
};
export type stock_historiesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stock_historiesSelect<ExtArgs> | null;
    omit?: Prisma.stock_historiesOmit<ExtArgs> | null;
    where: Prisma.stock_historiesWhereUniqueInput;
    create: Prisma.XOR<Prisma.stock_historiesCreateInput, Prisma.stock_historiesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.stock_historiesUpdateInput, Prisma.stock_historiesUncheckedUpdateInput>;
};
export type stock_historiesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stock_historiesSelect<ExtArgs> | null;
    omit?: Prisma.stock_historiesOmit<ExtArgs> | null;
    where: Prisma.stock_historiesWhereUniqueInput;
};
export type stock_historiesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.stock_historiesWhereInput;
    limit?: number;
};
export type stock_historiesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stock_historiesSelect<ExtArgs> | null;
    omit?: Prisma.stock_historiesOmit<ExtArgs> | null;
};
