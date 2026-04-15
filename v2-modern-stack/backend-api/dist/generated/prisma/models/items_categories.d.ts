import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type items_categoriesModel = runtime.Types.Result.DefaultSelection<Prisma.$items_categoriesPayload>;
export type AggregateItems_categories = {
    _count: Items_categoriesCountAggregateOutputType | null;
    _avg: Items_categoriesAvgAggregateOutputType | null;
    _sum: Items_categoriesSumAggregateOutputType | null;
    _min: Items_categoriesMinAggregateOutputType | null;
    _max: Items_categoriesMaxAggregateOutputType | null;
};
export type Items_categoriesAvgAggregateOutputType = {
    id: number | null;
};
export type Items_categoriesSumAggregateOutputType = {
    id: bigint | null;
};
export type Items_categoriesMinAggregateOutputType = {
    id: bigint | null;
    name: string | null;
    note: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Items_categoriesMaxAggregateOutputType = {
    id: bigint | null;
    name: string | null;
    note: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Items_categoriesCountAggregateOutputType = {
    id: number;
    name: number;
    note: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Items_categoriesAvgAggregateInputType = {
    id?: true;
};
export type Items_categoriesSumAggregateInputType = {
    id?: true;
};
export type Items_categoriesMinAggregateInputType = {
    id?: true;
    name?: true;
    note?: true;
    created_at?: true;
    updated_at?: true;
};
export type Items_categoriesMaxAggregateInputType = {
    id?: true;
    name?: true;
    note?: true;
    created_at?: true;
    updated_at?: true;
};
export type Items_categoriesCountAggregateInputType = {
    id?: true;
    name?: true;
    note?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Items_categoriesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.items_categoriesWhereInput;
    orderBy?: Prisma.items_categoriesOrderByWithRelationInput | Prisma.items_categoriesOrderByWithRelationInput[];
    cursor?: Prisma.items_categoriesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Items_categoriesCountAggregateInputType;
    _avg?: Items_categoriesAvgAggregateInputType;
    _sum?: Items_categoriesSumAggregateInputType;
    _min?: Items_categoriesMinAggregateInputType;
    _max?: Items_categoriesMaxAggregateInputType;
};
export type GetItems_categoriesAggregateType<T extends Items_categoriesAggregateArgs> = {
    [P in keyof T & keyof AggregateItems_categories]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateItems_categories[P]> : Prisma.GetScalarType<T[P], AggregateItems_categories[P]>;
};
export type items_categoriesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.items_categoriesWhereInput;
    orderBy?: Prisma.items_categoriesOrderByWithAggregationInput | Prisma.items_categoriesOrderByWithAggregationInput[];
    by: Prisma.Items_categoriesScalarFieldEnum[] | Prisma.Items_categoriesScalarFieldEnum;
    having?: Prisma.items_categoriesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Items_categoriesCountAggregateInputType | true;
    _avg?: Items_categoriesAvgAggregateInputType;
    _sum?: Items_categoriesSumAggregateInputType;
    _min?: Items_categoriesMinAggregateInputType;
    _max?: Items_categoriesMaxAggregateInputType;
};
export type Items_categoriesGroupByOutputType = {
    id: bigint;
    name: string;
    note: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    _count: Items_categoriesCountAggregateOutputType | null;
    _avg: Items_categoriesAvgAggregateOutputType | null;
    _sum: Items_categoriesSumAggregateOutputType | null;
    _min: Items_categoriesMinAggregateOutputType | null;
    _max: Items_categoriesMaxAggregateOutputType | null;
};
export type GetItems_categoriesGroupByPayload<T extends items_categoriesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Items_categoriesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Items_categoriesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Items_categoriesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Items_categoriesGroupByOutputType[P]>;
}>>;
export type items_categoriesWhereInput = {
    AND?: Prisma.items_categoriesWhereInput | Prisma.items_categoriesWhereInput[];
    OR?: Prisma.items_categoriesWhereInput[];
    NOT?: Prisma.items_categoriesWhereInput | Prisma.items_categoriesWhereInput[];
    id?: Prisma.BigIntFilter<"items_categories"> | bigint | number;
    name?: Prisma.StringFilter<"items_categories"> | string;
    note?: Prisma.StringNullableFilter<"items_categories"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"items_categories"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"items_categories"> | Date | string | null;
};
export type items_categoriesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type items_categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.items_categoriesWhereInput | Prisma.items_categoriesWhereInput[];
    OR?: Prisma.items_categoriesWhereInput[];
    NOT?: Prisma.items_categoriesWhereInput | Prisma.items_categoriesWhereInput[];
    name?: Prisma.StringFilter<"items_categories"> | string;
    note?: Prisma.StringNullableFilter<"items_categories"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"items_categories"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"items_categories"> | Date | string | null;
}, "id">;
export type items_categoriesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.items_categoriesCountOrderByAggregateInput;
    _avg?: Prisma.items_categoriesAvgOrderByAggregateInput;
    _max?: Prisma.items_categoriesMaxOrderByAggregateInput;
    _min?: Prisma.items_categoriesMinOrderByAggregateInput;
    _sum?: Prisma.items_categoriesSumOrderByAggregateInput;
};
export type items_categoriesScalarWhereWithAggregatesInput = {
    AND?: Prisma.items_categoriesScalarWhereWithAggregatesInput | Prisma.items_categoriesScalarWhereWithAggregatesInput[];
    OR?: Prisma.items_categoriesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.items_categoriesScalarWhereWithAggregatesInput | Prisma.items_categoriesScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"items_categories"> | bigint | number;
    name?: Prisma.StringWithAggregatesFilter<"items_categories"> | string;
    note?: Prisma.StringNullableWithAggregatesFilter<"items_categories"> | string | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"items_categories"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"items_categories"> | Date | string | null;
};
export type items_categoriesCreateInput = {
    id?: bigint | number;
    name: string;
    note?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type items_categoriesUncheckedCreateInput = {
    id?: bigint | number;
    name: string;
    note?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type items_categoriesUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type items_categoriesUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type items_categoriesCreateManyInput = {
    id?: bigint | number;
    name: string;
    note?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type items_categoriesUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type items_categoriesUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type items_categoriesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type items_categoriesAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type items_categoriesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type items_categoriesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type items_categoriesSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type items_categoriesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    note?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["items_categories"]>;
export type items_categoriesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    note?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["items_categories"]>;
export type items_categoriesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    note?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["items_categories"]>;
export type items_categoriesSelectScalar = {
    id?: boolean;
    name?: boolean;
    note?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type items_categoriesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "note" | "created_at" | "updated_at", ExtArgs["result"]["items_categories"]>;
export type $items_categoriesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "items_categories";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        name: string;
        note: string | null;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["items_categories"]>;
    composites: {};
};
export type items_categoriesGetPayload<S extends boolean | null | undefined | items_categoriesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$items_categoriesPayload, S>;
export type items_categoriesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<items_categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Items_categoriesCountAggregateInputType | true;
};
export interface items_categoriesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['items_categories'];
        meta: {
            name: 'items_categories';
        };
    };
    findUnique<T extends items_categoriesFindUniqueArgs>(args: Prisma.SelectSubset<T, items_categoriesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__items_categoriesClient<runtime.Types.Result.GetResult<Prisma.$items_categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends items_categoriesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, items_categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__items_categoriesClient<runtime.Types.Result.GetResult<Prisma.$items_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends items_categoriesFindFirstArgs>(args?: Prisma.SelectSubset<T, items_categoriesFindFirstArgs<ExtArgs>>): Prisma.Prisma__items_categoriesClient<runtime.Types.Result.GetResult<Prisma.$items_categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends items_categoriesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, items_categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__items_categoriesClient<runtime.Types.Result.GetResult<Prisma.$items_categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends items_categoriesFindManyArgs>(args?: Prisma.SelectSubset<T, items_categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$items_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends items_categoriesCreateArgs>(args: Prisma.SelectSubset<T, items_categoriesCreateArgs<ExtArgs>>): Prisma.Prisma__items_categoriesClient<runtime.Types.Result.GetResult<Prisma.$items_categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends items_categoriesCreateManyArgs>(args?: Prisma.SelectSubset<T, items_categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends items_categoriesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, items_categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$items_categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends items_categoriesDeleteArgs>(args: Prisma.SelectSubset<T, items_categoriesDeleteArgs<ExtArgs>>): Prisma.Prisma__items_categoriesClient<runtime.Types.Result.GetResult<Prisma.$items_categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends items_categoriesUpdateArgs>(args: Prisma.SelectSubset<T, items_categoriesUpdateArgs<ExtArgs>>): Prisma.Prisma__items_categoriesClient<runtime.Types.Result.GetResult<Prisma.$items_categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends items_categoriesDeleteManyArgs>(args?: Prisma.SelectSubset<T, items_categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends items_categoriesUpdateManyArgs>(args: Prisma.SelectSubset<T, items_categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends items_categoriesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, items_categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$items_categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends items_categoriesUpsertArgs>(args: Prisma.SelectSubset<T, items_categoriesUpsertArgs<ExtArgs>>): Prisma.Prisma__items_categoriesClient<runtime.Types.Result.GetResult<Prisma.$items_categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends items_categoriesCountArgs>(args?: Prisma.Subset<T, items_categoriesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Items_categoriesCountAggregateOutputType> : number>;
    aggregate<T extends Items_categoriesAggregateArgs>(args: Prisma.Subset<T, Items_categoriesAggregateArgs>): Prisma.PrismaPromise<GetItems_categoriesAggregateType<T>>;
    groupBy<T extends items_categoriesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: items_categoriesGroupByArgs['orderBy'];
    } : {
        orderBy?: items_categoriesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, items_categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItems_categoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: items_categoriesFieldRefs;
}
export interface Prisma__items_categoriesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface items_categoriesFieldRefs {
    readonly id: Prisma.FieldRef<"items_categories", 'BigInt'>;
    readonly name: Prisma.FieldRef<"items_categories", 'String'>;
    readonly note: Prisma.FieldRef<"items_categories", 'String'>;
    readonly created_at: Prisma.FieldRef<"items_categories", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"items_categories", 'DateTime'>;
}
export type items_categoriesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.items_categoriesSelect<ExtArgs> | null;
    omit?: Prisma.items_categoriesOmit<ExtArgs> | null;
    where: Prisma.items_categoriesWhereUniqueInput;
};
export type items_categoriesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.items_categoriesSelect<ExtArgs> | null;
    omit?: Prisma.items_categoriesOmit<ExtArgs> | null;
    where: Prisma.items_categoriesWhereUniqueInput;
};
export type items_categoriesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.items_categoriesSelect<ExtArgs> | null;
    omit?: Prisma.items_categoriesOmit<ExtArgs> | null;
    where?: Prisma.items_categoriesWhereInput;
    orderBy?: Prisma.items_categoriesOrderByWithRelationInput | Prisma.items_categoriesOrderByWithRelationInput[];
    cursor?: Prisma.items_categoriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Items_categoriesScalarFieldEnum | Prisma.Items_categoriesScalarFieldEnum[];
};
export type items_categoriesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.items_categoriesSelect<ExtArgs> | null;
    omit?: Prisma.items_categoriesOmit<ExtArgs> | null;
    where?: Prisma.items_categoriesWhereInput;
    orderBy?: Prisma.items_categoriesOrderByWithRelationInput | Prisma.items_categoriesOrderByWithRelationInput[];
    cursor?: Prisma.items_categoriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Items_categoriesScalarFieldEnum | Prisma.Items_categoriesScalarFieldEnum[];
};
export type items_categoriesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.items_categoriesSelect<ExtArgs> | null;
    omit?: Prisma.items_categoriesOmit<ExtArgs> | null;
    where?: Prisma.items_categoriesWhereInput;
    orderBy?: Prisma.items_categoriesOrderByWithRelationInput | Prisma.items_categoriesOrderByWithRelationInput[];
    cursor?: Prisma.items_categoriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Items_categoriesScalarFieldEnum | Prisma.Items_categoriesScalarFieldEnum[];
};
export type items_categoriesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.items_categoriesSelect<ExtArgs> | null;
    omit?: Prisma.items_categoriesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.items_categoriesCreateInput, Prisma.items_categoriesUncheckedCreateInput>;
};
export type items_categoriesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.items_categoriesCreateManyInput | Prisma.items_categoriesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type items_categoriesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.items_categoriesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.items_categoriesOmit<ExtArgs> | null;
    data: Prisma.items_categoriesCreateManyInput | Prisma.items_categoriesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type items_categoriesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.items_categoriesSelect<ExtArgs> | null;
    omit?: Prisma.items_categoriesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.items_categoriesUpdateInput, Prisma.items_categoriesUncheckedUpdateInput>;
    where: Prisma.items_categoriesWhereUniqueInput;
};
export type items_categoriesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.items_categoriesUpdateManyMutationInput, Prisma.items_categoriesUncheckedUpdateManyInput>;
    where?: Prisma.items_categoriesWhereInput;
    limit?: number;
};
export type items_categoriesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.items_categoriesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.items_categoriesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.items_categoriesUpdateManyMutationInput, Prisma.items_categoriesUncheckedUpdateManyInput>;
    where?: Prisma.items_categoriesWhereInput;
    limit?: number;
};
export type items_categoriesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.items_categoriesSelect<ExtArgs> | null;
    omit?: Prisma.items_categoriesOmit<ExtArgs> | null;
    where: Prisma.items_categoriesWhereUniqueInput;
    create: Prisma.XOR<Prisma.items_categoriesCreateInput, Prisma.items_categoriesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.items_categoriesUpdateInput, Prisma.items_categoriesUncheckedUpdateInput>;
};
export type items_categoriesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.items_categoriesSelect<ExtArgs> | null;
    omit?: Prisma.items_categoriesOmit<ExtArgs> | null;
    where: Prisma.items_categoriesWhereUniqueInput;
};
export type items_categoriesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.items_categoriesWhereInput;
    limit?: number;
};
export type items_categoriesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.items_categoriesSelect<ExtArgs> | null;
    omit?: Prisma.items_categoriesOmit<ExtArgs> | null;
};
