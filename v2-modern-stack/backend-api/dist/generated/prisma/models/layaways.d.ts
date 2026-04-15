import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type layawaysModel = runtime.Types.Result.DefaultSelection<Prisma.$layawaysPayload>;
export type AggregateLayaways = {
    _count: LayawaysCountAggregateOutputType | null;
    _avg: LayawaysAvgAggregateOutputType | null;
    _sum: LayawaysSumAggregateOutputType | null;
    _min: LayawaysMinAggregateOutputType | null;
    _max: LayawaysMaxAggregateOutputType | null;
};
export type LayawaysAvgAggregateOutputType = {
    id: number | null;
    tenor: number | null;
    price: number | null;
};
export type LayawaysSumAggregateOutputType = {
    id: bigint | null;
    tenor: number | null;
    price: number | null;
};
export type LayawaysMinAggregateOutputType = {
    id: bigint | null;
    is_finish: boolean | null;
    customer_name: string | null;
    customer_wa: string | null;
    tenor: number | null;
    project: string | null;
    block: string | null;
    price: number | null;
    note: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type LayawaysMaxAggregateOutputType = {
    id: bigint | null;
    is_finish: boolean | null;
    customer_name: string | null;
    customer_wa: string | null;
    tenor: number | null;
    project: string | null;
    block: string | null;
    price: number | null;
    note: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type LayawaysCountAggregateOutputType = {
    id: number;
    is_finish: number;
    customer_name: number;
    customer_wa: number;
    tenor: number;
    project: number;
    block: number;
    price: number;
    note: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type LayawaysAvgAggregateInputType = {
    id?: true;
    tenor?: true;
    price?: true;
};
export type LayawaysSumAggregateInputType = {
    id?: true;
    tenor?: true;
    price?: true;
};
export type LayawaysMinAggregateInputType = {
    id?: true;
    is_finish?: true;
    customer_name?: true;
    customer_wa?: true;
    tenor?: true;
    project?: true;
    block?: true;
    price?: true;
    note?: true;
    created_at?: true;
    updated_at?: true;
};
export type LayawaysMaxAggregateInputType = {
    id?: true;
    is_finish?: true;
    customer_name?: true;
    customer_wa?: true;
    tenor?: true;
    project?: true;
    block?: true;
    price?: true;
    note?: true;
    created_at?: true;
    updated_at?: true;
};
export type LayawaysCountAggregateInputType = {
    id?: true;
    is_finish?: true;
    customer_name?: true;
    customer_wa?: true;
    tenor?: true;
    project?: true;
    block?: true;
    price?: true;
    note?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type LayawaysAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.layawaysWhereInput;
    orderBy?: Prisma.layawaysOrderByWithRelationInput | Prisma.layawaysOrderByWithRelationInput[];
    cursor?: Prisma.layawaysWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LayawaysCountAggregateInputType;
    _avg?: LayawaysAvgAggregateInputType;
    _sum?: LayawaysSumAggregateInputType;
    _min?: LayawaysMinAggregateInputType;
    _max?: LayawaysMaxAggregateInputType;
};
export type GetLayawaysAggregateType<T extends LayawaysAggregateArgs> = {
    [P in keyof T & keyof AggregateLayaways]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLayaways[P]> : Prisma.GetScalarType<T[P], AggregateLayaways[P]>;
};
export type layawaysGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.layawaysWhereInput;
    orderBy?: Prisma.layawaysOrderByWithAggregationInput | Prisma.layawaysOrderByWithAggregationInput[];
    by: Prisma.LayawaysScalarFieldEnum[] | Prisma.LayawaysScalarFieldEnum;
    having?: Prisma.layawaysScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LayawaysCountAggregateInputType | true;
    _avg?: LayawaysAvgAggregateInputType;
    _sum?: LayawaysSumAggregateInputType;
    _min?: LayawaysMinAggregateInputType;
    _max?: LayawaysMaxAggregateInputType;
};
export type LayawaysGroupByOutputType = {
    id: bigint;
    is_finish: boolean;
    customer_name: string;
    customer_wa: string;
    tenor: number;
    project: string;
    block: string;
    price: number;
    note: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    _count: LayawaysCountAggregateOutputType | null;
    _avg: LayawaysAvgAggregateOutputType | null;
    _sum: LayawaysSumAggregateOutputType | null;
    _min: LayawaysMinAggregateOutputType | null;
    _max: LayawaysMaxAggregateOutputType | null;
};
export type GetLayawaysGroupByPayload<T extends layawaysGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LayawaysGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LayawaysGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LayawaysGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LayawaysGroupByOutputType[P]>;
}>>;
export type layawaysWhereInput = {
    AND?: Prisma.layawaysWhereInput | Prisma.layawaysWhereInput[];
    OR?: Prisma.layawaysWhereInput[];
    NOT?: Prisma.layawaysWhereInput | Prisma.layawaysWhereInput[];
    id?: Prisma.BigIntFilter<"layaways"> | bigint | number;
    is_finish?: Prisma.BoolFilter<"layaways"> | boolean;
    customer_name?: Prisma.StringFilter<"layaways"> | string;
    customer_wa?: Prisma.StringFilter<"layaways"> | string;
    tenor?: Prisma.IntFilter<"layaways"> | number;
    project?: Prisma.StringFilter<"layaways"> | string;
    block?: Prisma.StringFilter<"layaways"> | string;
    price?: Prisma.IntFilter<"layaways"> | number;
    note?: Prisma.StringNullableFilter<"layaways"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"layaways"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"layaways"> | Date | string | null;
};
export type layawaysOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    is_finish?: Prisma.SortOrder;
    customer_name?: Prisma.SortOrder;
    customer_wa?: Prisma.SortOrder;
    tenor?: Prisma.SortOrder;
    project?: Prisma.SortOrder;
    block?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type layawaysWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.layawaysWhereInput | Prisma.layawaysWhereInput[];
    OR?: Prisma.layawaysWhereInput[];
    NOT?: Prisma.layawaysWhereInput | Prisma.layawaysWhereInput[];
    is_finish?: Prisma.BoolFilter<"layaways"> | boolean;
    customer_name?: Prisma.StringFilter<"layaways"> | string;
    customer_wa?: Prisma.StringFilter<"layaways"> | string;
    tenor?: Prisma.IntFilter<"layaways"> | number;
    project?: Prisma.StringFilter<"layaways"> | string;
    block?: Prisma.StringFilter<"layaways"> | string;
    price?: Prisma.IntFilter<"layaways"> | number;
    note?: Prisma.StringNullableFilter<"layaways"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"layaways"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"layaways"> | Date | string | null;
}, "id">;
export type layawaysOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    is_finish?: Prisma.SortOrder;
    customer_name?: Prisma.SortOrder;
    customer_wa?: Prisma.SortOrder;
    tenor?: Prisma.SortOrder;
    project?: Prisma.SortOrder;
    block?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.layawaysCountOrderByAggregateInput;
    _avg?: Prisma.layawaysAvgOrderByAggregateInput;
    _max?: Prisma.layawaysMaxOrderByAggregateInput;
    _min?: Prisma.layawaysMinOrderByAggregateInput;
    _sum?: Prisma.layawaysSumOrderByAggregateInput;
};
export type layawaysScalarWhereWithAggregatesInput = {
    AND?: Prisma.layawaysScalarWhereWithAggregatesInput | Prisma.layawaysScalarWhereWithAggregatesInput[];
    OR?: Prisma.layawaysScalarWhereWithAggregatesInput[];
    NOT?: Prisma.layawaysScalarWhereWithAggregatesInput | Prisma.layawaysScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"layaways"> | bigint | number;
    is_finish?: Prisma.BoolWithAggregatesFilter<"layaways"> | boolean;
    customer_name?: Prisma.StringWithAggregatesFilter<"layaways"> | string;
    customer_wa?: Prisma.StringWithAggregatesFilter<"layaways"> | string;
    tenor?: Prisma.IntWithAggregatesFilter<"layaways"> | number;
    project?: Prisma.StringWithAggregatesFilter<"layaways"> | string;
    block?: Prisma.StringWithAggregatesFilter<"layaways"> | string;
    price?: Prisma.IntWithAggregatesFilter<"layaways"> | number;
    note?: Prisma.StringNullableWithAggregatesFilter<"layaways"> | string | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"layaways"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"layaways"> | Date | string | null;
};
export type layawaysCreateInput = {
    id?: bigint | number;
    is_finish?: boolean;
    customer_name: string;
    customer_wa: string;
    tenor: number;
    project: string;
    block: string;
    price: number;
    note?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type layawaysUncheckedCreateInput = {
    id?: bigint | number;
    is_finish?: boolean;
    customer_name: string;
    customer_wa: string;
    tenor: number;
    project: string;
    block: string;
    price: number;
    note?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type layawaysUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    is_finish?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    customer_name?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_wa?: Prisma.StringFieldUpdateOperationsInput | string;
    tenor?: Prisma.IntFieldUpdateOperationsInput | number;
    project?: Prisma.StringFieldUpdateOperationsInput | string;
    block?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type layawaysUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    is_finish?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    customer_name?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_wa?: Prisma.StringFieldUpdateOperationsInput | string;
    tenor?: Prisma.IntFieldUpdateOperationsInput | number;
    project?: Prisma.StringFieldUpdateOperationsInput | string;
    block?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type layawaysCreateManyInput = {
    id?: bigint | number;
    is_finish?: boolean;
    customer_name: string;
    customer_wa: string;
    tenor: number;
    project: string;
    block: string;
    price: number;
    note?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type layawaysUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    is_finish?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    customer_name?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_wa?: Prisma.StringFieldUpdateOperationsInput | string;
    tenor?: Prisma.IntFieldUpdateOperationsInput | number;
    project?: Prisma.StringFieldUpdateOperationsInput | string;
    block?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type layawaysUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    is_finish?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    customer_name?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_wa?: Prisma.StringFieldUpdateOperationsInput | string;
    tenor?: Prisma.IntFieldUpdateOperationsInput | number;
    project?: Prisma.StringFieldUpdateOperationsInput | string;
    block?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type layawaysCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    is_finish?: Prisma.SortOrder;
    customer_name?: Prisma.SortOrder;
    customer_wa?: Prisma.SortOrder;
    tenor?: Prisma.SortOrder;
    project?: Prisma.SortOrder;
    block?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type layawaysAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenor?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
};
export type layawaysMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    is_finish?: Prisma.SortOrder;
    customer_name?: Prisma.SortOrder;
    customer_wa?: Prisma.SortOrder;
    tenor?: Prisma.SortOrder;
    project?: Prisma.SortOrder;
    block?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type layawaysMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    is_finish?: Prisma.SortOrder;
    customer_name?: Prisma.SortOrder;
    customer_wa?: Prisma.SortOrder;
    tenor?: Prisma.SortOrder;
    project?: Prisma.SortOrder;
    block?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type layawaysSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenor?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type layawaysSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    is_finish?: boolean;
    customer_name?: boolean;
    customer_wa?: boolean;
    tenor?: boolean;
    project?: boolean;
    block?: boolean;
    price?: boolean;
    note?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["layaways"]>;
export type layawaysSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    is_finish?: boolean;
    customer_name?: boolean;
    customer_wa?: boolean;
    tenor?: boolean;
    project?: boolean;
    block?: boolean;
    price?: boolean;
    note?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["layaways"]>;
export type layawaysSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    is_finish?: boolean;
    customer_name?: boolean;
    customer_wa?: boolean;
    tenor?: boolean;
    project?: boolean;
    block?: boolean;
    price?: boolean;
    note?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["layaways"]>;
export type layawaysSelectScalar = {
    id?: boolean;
    is_finish?: boolean;
    customer_name?: boolean;
    customer_wa?: boolean;
    tenor?: boolean;
    project?: boolean;
    block?: boolean;
    price?: boolean;
    note?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type layawaysOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "is_finish" | "customer_name" | "customer_wa" | "tenor" | "project" | "block" | "price" | "note" | "created_at" | "updated_at", ExtArgs["result"]["layaways"]>;
export type $layawaysPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "layaways";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        is_finish: boolean;
        customer_name: string;
        customer_wa: string;
        tenor: number;
        project: string;
        block: string;
        price: number;
        note: string | null;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["layaways"]>;
    composites: {};
};
export type layawaysGetPayload<S extends boolean | null | undefined | layawaysDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$layawaysPayload, S>;
export type layawaysCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<layawaysFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LayawaysCountAggregateInputType | true;
};
export interface layawaysDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['layaways'];
        meta: {
            name: 'layaways';
        };
    };
    findUnique<T extends layawaysFindUniqueArgs>(args: Prisma.SelectSubset<T, layawaysFindUniqueArgs<ExtArgs>>): Prisma.Prisma__layawaysClient<runtime.Types.Result.GetResult<Prisma.$layawaysPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends layawaysFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, layawaysFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__layawaysClient<runtime.Types.Result.GetResult<Prisma.$layawaysPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends layawaysFindFirstArgs>(args?: Prisma.SelectSubset<T, layawaysFindFirstArgs<ExtArgs>>): Prisma.Prisma__layawaysClient<runtime.Types.Result.GetResult<Prisma.$layawaysPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends layawaysFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, layawaysFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__layawaysClient<runtime.Types.Result.GetResult<Prisma.$layawaysPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends layawaysFindManyArgs>(args?: Prisma.SelectSubset<T, layawaysFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$layawaysPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends layawaysCreateArgs>(args: Prisma.SelectSubset<T, layawaysCreateArgs<ExtArgs>>): Prisma.Prisma__layawaysClient<runtime.Types.Result.GetResult<Prisma.$layawaysPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends layawaysCreateManyArgs>(args?: Prisma.SelectSubset<T, layawaysCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends layawaysCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, layawaysCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$layawaysPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends layawaysDeleteArgs>(args: Prisma.SelectSubset<T, layawaysDeleteArgs<ExtArgs>>): Prisma.Prisma__layawaysClient<runtime.Types.Result.GetResult<Prisma.$layawaysPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends layawaysUpdateArgs>(args: Prisma.SelectSubset<T, layawaysUpdateArgs<ExtArgs>>): Prisma.Prisma__layawaysClient<runtime.Types.Result.GetResult<Prisma.$layawaysPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends layawaysDeleteManyArgs>(args?: Prisma.SelectSubset<T, layawaysDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends layawaysUpdateManyArgs>(args: Prisma.SelectSubset<T, layawaysUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends layawaysUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, layawaysUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$layawaysPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends layawaysUpsertArgs>(args: Prisma.SelectSubset<T, layawaysUpsertArgs<ExtArgs>>): Prisma.Prisma__layawaysClient<runtime.Types.Result.GetResult<Prisma.$layawaysPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends layawaysCountArgs>(args?: Prisma.Subset<T, layawaysCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LayawaysCountAggregateOutputType> : number>;
    aggregate<T extends LayawaysAggregateArgs>(args: Prisma.Subset<T, LayawaysAggregateArgs>): Prisma.PrismaPromise<GetLayawaysAggregateType<T>>;
    groupBy<T extends layawaysGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: layawaysGroupByArgs['orderBy'];
    } : {
        orderBy?: layawaysGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, layawaysGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLayawaysGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: layawaysFieldRefs;
}
export interface Prisma__layawaysClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface layawaysFieldRefs {
    readonly id: Prisma.FieldRef<"layaways", 'BigInt'>;
    readonly is_finish: Prisma.FieldRef<"layaways", 'Boolean'>;
    readonly customer_name: Prisma.FieldRef<"layaways", 'String'>;
    readonly customer_wa: Prisma.FieldRef<"layaways", 'String'>;
    readonly tenor: Prisma.FieldRef<"layaways", 'Int'>;
    readonly project: Prisma.FieldRef<"layaways", 'String'>;
    readonly block: Prisma.FieldRef<"layaways", 'String'>;
    readonly price: Prisma.FieldRef<"layaways", 'Int'>;
    readonly note: Prisma.FieldRef<"layaways", 'String'>;
    readonly created_at: Prisma.FieldRef<"layaways", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"layaways", 'DateTime'>;
}
export type layawaysFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.layawaysSelect<ExtArgs> | null;
    omit?: Prisma.layawaysOmit<ExtArgs> | null;
    where: Prisma.layawaysWhereUniqueInput;
};
export type layawaysFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.layawaysSelect<ExtArgs> | null;
    omit?: Prisma.layawaysOmit<ExtArgs> | null;
    where: Prisma.layawaysWhereUniqueInput;
};
export type layawaysFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.layawaysSelect<ExtArgs> | null;
    omit?: Prisma.layawaysOmit<ExtArgs> | null;
    where?: Prisma.layawaysWhereInput;
    orderBy?: Prisma.layawaysOrderByWithRelationInput | Prisma.layawaysOrderByWithRelationInput[];
    cursor?: Prisma.layawaysWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LayawaysScalarFieldEnum | Prisma.LayawaysScalarFieldEnum[];
};
export type layawaysFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.layawaysSelect<ExtArgs> | null;
    omit?: Prisma.layawaysOmit<ExtArgs> | null;
    where?: Prisma.layawaysWhereInput;
    orderBy?: Prisma.layawaysOrderByWithRelationInput | Prisma.layawaysOrderByWithRelationInput[];
    cursor?: Prisma.layawaysWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LayawaysScalarFieldEnum | Prisma.LayawaysScalarFieldEnum[];
};
export type layawaysFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.layawaysSelect<ExtArgs> | null;
    omit?: Prisma.layawaysOmit<ExtArgs> | null;
    where?: Prisma.layawaysWhereInput;
    orderBy?: Prisma.layawaysOrderByWithRelationInput | Prisma.layawaysOrderByWithRelationInput[];
    cursor?: Prisma.layawaysWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LayawaysScalarFieldEnum | Prisma.LayawaysScalarFieldEnum[];
};
export type layawaysCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.layawaysSelect<ExtArgs> | null;
    omit?: Prisma.layawaysOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.layawaysCreateInput, Prisma.layawaysUncheckedCreateInput>;
};
export type layawaysCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.layawaysCreateManyInput | Prisma.layawaysCreateManyInput[];
    skipDuplicates?: boolean;
};
export type layawaysCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.layawaysSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.layawaysOmit<ExtArgs> | null;
    data: Prisma.layawaysCreateManyInput | Prisma.layawaysCreateManyInput[];
    skipDuplicates?: boolean;
};
export type layawaysUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.layawaysSelect<ExtArgs> | null;
    omit?: Prisma.layawaysOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.layawaysUpdateInput, Prisma.layawaysUncheckedUpdateInput>;
    where: Prisma.layawaysWhereUniqueInput;
};
export type layawaysUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.layawaysUpdateManyMutationInput, Prisma.layawaysUncheckedUpdateManyInput>;
    where?: Prisma.layawaysWhereInput;
    limit?: number;
};
export type layawaysUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.layawaysSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.layawaysOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.layawaysUpdateManyMutationInput, Prisma.layawaysUncheckedUpdateManyInput>;
    where?: Prisma.layawaysWhereInput;
    limit?: number;
};
export type layawaysUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.layawaysSelect<ExtArgs> | null;
    omit?: Prisma.layawaysOmit<ExtArgs> | null;
    where: Prisma.layawaysWhereUniqueInput;
    create: Prisma.XOR<Prisma.layawaysCreateInput, Prisma.layawaysUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.layawaysUpdateInput, Prisma.layawaysUncheckedUpdateInput>;
};
export type layawaysDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.layawaysSelect<ExtArgs> | null;
    omit?: Prisma.layawaysOmit<ExtArgs> | null;
    where: Prisma.layawaysWhereUniqueInput;
};
export type layawaysDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.layawaysWhereInput;
    limit?: number;
};
export type layawaysDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.layawaysSelect<ExtArgs> | null;
    omit?: Prisma.layawaysOmit<ExtArgs> | null;
};
