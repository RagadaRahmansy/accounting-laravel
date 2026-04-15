import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type stocksModel = runtime.Types.Result.DefaultSelection<Prisma.$stocksPayload>;
export type AggregateStocks = {
    _count: StocksCountAggregateOutputType | null;
    _avg: StocksAvgAggregateOutputType | null;
    _sum: StocksSumAggregateOutputType | null;
    _min: StocksMinAggregateOutputType | null;
    _max: StocksMaxAggregateOutputType | null;
};
export type StocksAvgAggregateOutputType = {
    id: number | null;
    category_id: number | null;
    quantity: number | null;
};
export type StocksSumAggregateOutputType = {
    id: bigint | null;
    category_id: bigint | null;
    quantity: number | null;
};
export type StocksMinAggregateOutputType = {
    id: bigint | null;
    category_id: bigint | null;
    name: string | null;
    quantity: number | null;
    unit: string | null;
    note: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type StocksMaxAggregateOutputType = {
    id: bigint | null;
    category_id: bigint | null;
    name: string | null;
    quantity: number | null;
    unit: string | null;
    note: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type StocksCountAggregateOutputType = {
    id: number;
    category_id: number;
    name: number;
    quantity: number;
    unit: number;
    note: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type StocksAvgAggregateInputType = {
    id?: true;
    category_id?: true;
    quantity?: true;
};
export type StocksSumAggregateInputType = {
    id?: true;
    category_id?: true;
    quantity?: true;
};
export type StocksMinAggregateInputType = {
    id?: true;
    category_id?: true;
    name?: true;
    quantity?: true;
    unit?: true;
    note?: true;
    created_at?: true;
    updated_at?: true;
};
export type StocksMaxAggregateInputType = {
    id?: true;
    category_id?: true;
    name?: true;
    quantity?: true;
    unit?: true;
    note?: true;
    created_at?: true;
    updated_at?: true;
};
export type StocksCountAggregateInputType = {
    id?: true;
    category_id?: true;
    name?: true;
    quantity?: true;
    unit?: true;
    note?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type StocksAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.stocksWhereInput;
    orderBy?: Prisma.stocksOrderByWithRelationInput | Prisma.stocksOrderByWithRelationInput[];
    cursor?: Prisma.stocksWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StocksCountAggregateInputType;
    _avg?: StocksAvgAggregateInputType;
    _sum?: StocksSumAggregateInputType;
    _min?: StocksMinAggregateInputType;
    _max?: StocksMaxAggregateInputType;
};
export type GetStocksAggregateType<T extends StocksAggregateArgs> = {
    [P in keyof T & keyof AggregateStocks]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStocks[P]> : Prisma.GetScalarType<T[P], AggregateStocks[P]>;
};
export type stocksGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.stocksWhereInput;
    orderBy?: Prisma.stocksOrderByWithAggregationInput | Prisma.stocksOrderByWithAggregationInput[];
    by: Prisma.StocksScalarFieldEnum[] | Prisma.StocksScalarFieldEnum;
    having?: Prisma.stocksScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StocksCountAggregateInputType | true;
    _avg?: StocksAvgAggregateInputType;
    _sum?: StocksSumAggregateInputType;
    _min?: StocksMinAggregateInputType;
    _max?: StocksMaxAggregateInputType;
};
export type StocksGroupByOutputType = {
    id: bigint;
    category_id: bigint;
    name: string;
    quantity: number;
    unit: string | null;
    note: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    _count: StocksCountAggregateOutputType | null;
    _avg: StocksAvgAggregateOutputType | null;
    _sum: StocksSumAggregateOutputType | null;
    _min: StocksMinAggregateOutputType | null;
    _max: StocksMaxAggregateOutputType | null;
};
export type GetStocksGroupByPayload<T extends stocksGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StocksGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StocksGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StocksGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StocksGroupByOutputType[P]>;
}>>;
export type stocksWhereInput = {
    AND?: Prisma.stocksWhereInput | Prisma.stocksWhereInput[];
    OR?: Prisma.stocksWhereInput[];
    NOT?: Prisma.stocksWhereInput | Prisma.stocksWhereInput[];
    id?: Prisma.BigIntFilter<"stocks"> | bigint | number;
    category_id?: Prisma.BigIntFilter<"stocks"> | bigint | number;
    name?: Prisma.StringFilter<"stocks"> | string;
    quantity?: Prisma.IntFilter<"stocks"> | number;
    unit?: Prisma.StringNullableFilter<"stocks"> | string | null;
    note?: Prisma.StringNullableFilter<"stocks"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"stocks"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"stocks"> | Date | string | null;
};
export type stocksOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit?: Prisma.SortOrderInput | Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type stocksWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.stocksWhereInput | Prisma.stocksWhereInput[];
    OR?: Prisma.stocksWhereInput[];
    NOT?: Prisma.stocksWhereInput | Prisma.stocksWhereInput[];
    category_id?: Prisma.BigIntFilter<"stocks"> | bigint | number;
    name?: Prisma.StringFilter<"stocks"> | string;
    quantity?: Prisma.IntFilter<"stocks"> | number;
    unit?: Prisma.StringNullableFilter<"stocks"> | string | null;
    note?: Prisma.StringNullableFilter<"stocks"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"stocks"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"stocks"> | Date | string | null;
}, "id">;
export type stocksOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit?: Prisma.SortOrderInput | Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.stocksCountOrderByAggregateInput;
    _avg?: Prisma.stocksAvgOrderByAggregateInput;
    _max?: Prisma.stocksMaxOrderByAggregateInput;
    _min?: Prisma.stocksMinOrderByAggregateInput;
    _sum?: Prisma.stocksSumOrderByAggregateInput;
};
export type stocksScalarWhereWithAggregatesInput = {
    AND?: Prisma.stocksScalarWhereWithAggregatesInput | Prisma.stocksScalarWhereWithAggregatesInput[];
    OR?: Prisma.stocksScalarWhereWithAggregatesInput[];
    NOT?: Prisma.stocksScalarWhereWithAggregatesInput | Prisma.stocksScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"stocks"> | bigint | number;
    category_id?: Prisma.BigIntWithAggregatesFilter<"stocks"> | bigint | number;
    name?: Prisma.StringWithAggregatesFilter<"stocks"> | string;
    quantity?: Prisma.IntWithAggregatesFilter<"stocks"> | number;
    unit?: Prisma.StringNullableWithAggregatesFilter<"stocks"> | string | null;
    note?: Prisma.StringNullableWithAggregatesFilter<"stocks"> | string | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"stocks"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"stocks"> | Date | string | null;
};
export type stocksCreateInput = {
    id?: bigint | number;
    category_id: bigint | number;
    name: string;
    quantity?: number;
    unit?: string | null;
    note?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type stocksUncheckedCreateInput = {
    id?: bigint | number;
    category_id: bigint | number;
    name: string;
    quantity?: number;
    unit?: string | null;
    note?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type stocksUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    category_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type stocksUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    category_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type stocksCreateManyInput = {
    id?: bigint | number;
    category_id: bigint | number;
    name: string;
    quantity?: number;
    unit?: string | null;
    note?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type stocksUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    category_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type stocksUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    category_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type stocksCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type stocksAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type stocksMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type stocksMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type stocksSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type stocksSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    category_id?: boolean;
    name?: boolean;
    quantity?: boolean;
    unit?: boolean;
    note?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["stocks"]>;
export type stocksSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    category_id?: boolean;
    name?: boolean;
    quantity?: boolean;
    unit?: boolean;
    note?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["stocks"]>;
export type stocksSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    category_id?: boolean;
    name?: boolean;
    quantity?: boolean;
    unit?: boolean;
    note?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["stocks"]>;
export type stocksSelectScalar = {
    id?: boolean;
    category_id?: boolean;
    name?: boolean;
    quantity?: boolean;
    unit?: boolean;
    note?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type stocksOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "category_id" | "name" | "quantity" | "unit" | "note" | "created_at" | "updated_at", ExtArgs["result"]["stocks"]>;
export type $stocksPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "stocks";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        category_id: bigint;
        name: string;
        quantity: number;
        unit: string | null;
        note: string | null;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["stocks"]>;
    composites: {};
};
export type stocksGetPayload<S extends boolean | null | undefined | stocksDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$stocksPayload, S>;
export type stocksCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<stocksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StocksCountAggregateInputType | true;
};
export interface stocksDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['stocks'];
        meta: {
            name: 'stocks';
        };
    };
    findUnique<T extends stocksFindUniqueArgs>(args: Prisma.SelectSubset<T, stocksFindUniqueArgs<ExtArgs>>): Prisma.Prisma__stocksClient<runtime.Types.Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends stocksFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, stocksFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__stocksClient<runtime.Types.Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends stocksFindFirstArgs>(args?: Prisma.SelectSubset<T, stocksFindFirstArgs<ExtArgs>>): Prisma.Prisma__stocksClient<runtime.Types.Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends stocksFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, stocksFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__stocksClient<runtime.Types.Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends stocksFindManyArgs>(args?: Prisma.SelectSubset<T, stocksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends stocksCreateArgs>(args: Prisma.SelectSubset<T, stocksCreateArgs<ExtArgs>>): Prisma.Prisma__stocksClient<runtime.Types.Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends stocksCreateManyArgs>(args?: Prisma.SelectSubset<T, stocksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends stocksCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, stocksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends stocksDeleteArgs>(args: Prisma.SelectSubset<T, stocksDeleteArgs<ExtArgs>>): Prisma.Prisma__stocksClient<runtime.Types.Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends stocksUpdateArgs>(args: Prisma.SelectSubset<T, stocksUpdateArgs<ExtArgs>>): Prisma.Prisma__stocksClient<runtime.Types.Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends stocksDeleteManyArgs>(args?: Prisma.SelectSubset<T, stocksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends stocksUpdateManyArgs>(args: Prisma.SelectSubset<T, stocksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends stocksUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, stocksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends stocksUpsertArgs>(args: Prisma.SelectSubset<T, stocksUpsertArgs<ExtArgs>>): Prisma.Prisma__stocksClient<runtime.Types.Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends stocksCountArgs>(args?: Prisma.Subset<T, stocksCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StocksCountAggregateOutputType> : number>;
    aggregate<T extends StocksAggregateArgs>(args: Prisma.Subset<T, StocksAggregateArgs>): Prisma.PrismaPromise<GetStocksAggregateType<T>>;
    groupBy<T extends stocksGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: stocksGroupByArgs['orderBy'];
    } : {
        orderBy?: stocksGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, stocksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStocksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: stocksFieldRefs;
}
export interface Prisma__stocksClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface stocksFieldRefs {
    readonly id: Prisma.FieldRef<"stocks", 'BigInt'>;
    readonly category_id: Prisma.FieldRef<"stocks", 'BigInt'>;
    readonly name: Prisma.FieldRef<"stocks", 'String'>;
    readonly quantity: Prisma.FieldRef<"stocks", 'Int'>;
    readonly unit: Prisma.FieldRef<"stocks", 'String'>;
    readonly note: Prisma.FieldRef<"stocks", 'String'>;
    readonly created_at: Prisma.FieldRef<"stocks", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"stocks", 'DateTime'>;
}
export type stocksFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stocksSelect<ExtArgs> | null;
    omit?: Prisma.stocksOmit<ExtArgs> | null;
    where: Prisma.stocksWhereUniqueInput;
};
export type stocksFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stocksSelect<ExtArgs> | null;
    omit?: Prisma.stocksOmit<ExtArgs> | null;
    where: Prisma.stocksWhereUniqueInput;
};
export type stocksFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stocksSelect<ExtArgs> | null;
    omit?: Prisma.stocksOmit<ExtArgs> | null;
    where?: Prisma.stocksWhereInput;
    orderBy?: Prisma.stocksOrderByWithRelationInput | Prisma.stocksOrderByWithRelationInput[];
    cursor?: Prisma.stocksWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StocksScalarFieldEnum | Prisma.StocksScalarFieldEnum[];
};
export type stocksFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stocksSelect<ExtArgs> | null;
    omit?: Prisma.stocksOmit<ExtArgs> | null;
    where?: Prisma.stocksWhereInput;
    orderBy?: Prisma.stocksOrderByWithRelationInput | Prisma.stocksOrderByWithRelationInput[];
    cursor?: Prisma.stocksWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StocksScalarFieldEnum | Prisma.StocksScalarFieldEnum[];
};
export type stocksFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stocksSelect<ExtArgs> | null;
    omit?: Prisma.stocksOmit<ExtArgs> | null;
    where?: Prisma.stocksWhereInput;
    orderBy?: Prisma.stocksOrderByWithRelationInput | Prisma.stocksOrderByWithRelationInput[];
    cursor?: Prisma.stocksWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StocksScalarFieldEnum | Prisma.StocksScalarFieldEnum[];
};
export type stocksCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stocksSelect<ExtArgs> | null;
    omit?: Prisma.stocksOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.stocksCreateInput, Prisma.stocksUncheckedCreateInput>;
};
export type stocksCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.stocksCreateManyInput | Prisma.stocksCreateManyInput[];
    skipDuplicates?: boolean;
};
export type stocksCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stocksSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.stocksOmit<ExtArgs> | null;
    data: Prisma.stocksCreateManyInput | Prisma.stocksCreateManyInput[];
    skipDuplicates?: boolean;
};
export type stocksUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stocksSelect<ExtArgs> | null;
    omit?: Prisma.stocksOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.stocksUpdateInput, Prisma.stocksUncheckedUpdateInput>;
    where: Prisma.stocksWhereUniqueInput;
};
export type stocksUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.stocksUpdateManyMutationInput, Prisma.stocksUncheckedUpdateManyInput>;
    where?: Prisma.stocksWhereInput;
    limit?: number;
};
export type stocksUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stocksSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.stocksOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.stocksUpdateManyMutationInput, Prisma.stocksUncheckedUpdateManyInput>;
    where?: Prisma.stocksWhereInput;
    limit?: number;
};
export type stocksUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stocksSelect<ExtArgs> | null;
    omit?: Prisma.stocksOmit<ExtArgs> | null;
    where: Prisma.stocksWhereUniqueInput;
    create: Prisma.XOR<Prisma.stocksCreateInput, Prisma.stocksUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.stocksUpdateInput, Prisma.stocksUncheckedUpdateInput>;
};
export type stocksDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stocksSelect<ExtArgs> | null;
    omit?: Prisma.stocksOmit<ExtArgs> | null;
    where: Prisma.stocksWhereUniqueInput;
};
export type stocksDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.stocksWhereInput;
    limit?: number;
};
export type stocksDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stocksSelect<ExtArgs> | null;
    omit?: Prisma.stocksOmit<ExtArgs> | null;
};
