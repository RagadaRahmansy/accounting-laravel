import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type layaway_detailsModel = runtime.Types.Result.DefaultSelection<Prisma.$layaway_detailsPayload>;
export type AggregateLayaway_details = {
    _count: Layaway_detailsCountAggregateOutputType | null;
    _avg: Layaway_detailsAvgAggregateOutputType | null;
    _sum: Layaway_detailsSumAggregateOutputType | null;
    _min: Layaway_detailsMinAggregateOutputType | null;
    _max: Layaway_detailsMaxAggregateOutputType | null;
};
export type Layaway_detailsAvgAggregateOutputType = {
    id: number | null;
    layaway_id: number | null;
    month: number | null;
    paid: number | null;
};
export type Layaway_detailsSumAggregateOutputType = {
    id: bigint | null;
    layaway_id: bigint | null;
    month: number | null;
    paid: number | null;
};
export type Layaway_detailsMinAggregateOutputType = {
    id: bigint | null;
    layaway_id: bigint | null;
    month: number | null;
    jatuh_tempo: Date | null;
    paid: number | null;
    paid_at: Date | null;
    note: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Layaway_detailsMaxAggregateOutputType = {
    id: bigint | null;
    layaway_id: bigint | null;
    month: number | null;
    jatuh_tempo: Date | null;
    paid: number | null;
    paid_at: Date | null;
    note: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Layaway_detailsCountAggregateOutputType = {
    id: number;
    layaway_id: number;
    month: number;
    jatuh_tempo: number;
    paid: number;
    paid_at: number;
    note: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Layaway_detailsAvgAggregateInputType = {
    id?: true;
    layaway_id?: true;
    month?: true;
    paid?: true;
};
export type Layaway_detailsSumAggregateInputType = {
    id?: true;
    layaway_id?: true;
    month?: true;
    paid?: true;
};
export type Layaway_detailsMinAggregateInputType = {
    id?: true;
    layaway_id?: true;
    month?: true;
    jatuh_tempo?: true;
    paid?: true;
    paid_at?: true;
    note?: true;
    created_at?: true;
    updated_at?: true;
};
export type Layaway_detailsMaxAggregateInputType = {
    id?: true;
    layaway_id?: true;
    month?: true;
    jatuh_tempo?: true;
    paid?: true;
    paid_at?: true;
    note?: true;
    created_at?: true;
    updated_at?: true;
};
export type Layaway_detailsCountAggregateInputType = {
    id?: true;
    layaway_id?: true;
    month?: true;
    jatuh_tempo?: true;
    paid?: true;
    paid_at?: true;
    note?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Layaway_detailsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.layaway_detailsWhereInput;
    orderBy?: Prisma.layaway_detailsOrderByWithRelationInput | Prisma.layaway_detailsOrderByWithRelationInput[];
    cursor?: Prisma.layaway_detailsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Layaway_detailsCountAggregateInputType;
    _avg?: Layaway_detailsAvgAggregateInputType;
    _sum?: Layaway_detailsSumAggregateInputType;
    _min?: Layaway_detailsMinAggregateInputType;
    _max?: Layaway_detailsMaxAggregateInputType;
};
export type GetLayaway_detailsAggregateType<T extends Layaway_detailsAggregateArgs> = {
    [P in keyof T & keyof AggregateLayaway_details]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLayaway_details[P]> : Prisma.GetScalarType<T[P], AggregateLayaway_details[P]>;
};
export type layaway_detailsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.layaway_detailsWhereInput;
    orderBy?: Prisma.layaway_detailsOrderByWithAggregationInput | Prisma.layaway_detailsOrderByWithAggregationInput[];
    by: Prisma.Layaway_detailsScalarFieldEnum[] | Prisma.Layaway_detailsScalarFieldEnum;
    having?: Prisma.layaway_detailsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Layaway_detailsCountAggregateInputType | true;
    _avg?: Layaway_detailsAvgAggregateInputType;
    _sum?: Layaway_detailsSumAggregateInputType;
    _min?: Layaway_detailsMinAggregateInputType;
    _max?: Layaway_detailsMaxAggregateInputType;
};
export type Layaway_detailsGroupByOutputType = {
    id: bigint;
    layaway_id: bigint;
    month: number;
    jatuh_tempo: Date;
    paid: number | null;
    paid_at: Date | null;
    note: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    _count: Layaway_detailsCountAggregateOutputType | null;
    _avg: Layaway_detailsAvgAggregateOutputType | null;
    _sum: Layaway_detailsSumAggregateOutputType | null;
    _min: Layaway_detailsMinAggregateOutputType | null;
    _max: Layaway_detailsMaxAggregateOutputType | null;
};
export type GetLayaway_detailsGroupByPayload<T extends layaway_detailsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Layaway_detailsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Layaway_detailsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Layaway_detailsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Layaway_detailsGroupByOutputType[P]>;
}>>;
export type layaway_detailsWhereInput = {
    AND?: Prisma.layaway_detailsWhereInput | Prisma.layaway_detailsWhereInput[];
    OR?: Prisma.layaway_detailsWhereInput[];
    NOT?: Prisma.layaway_detailsWhereInput | Prisma.layaway_detailsWhereInput[];
    id?: Prisma.BigIntFilter<"layaway_details"> | bigint | number;
    layaway_id?: Prisma.BigIntFilter<"layaway_details"> | bigint | number;
    month?: Prisma.IntFilter<"layaway_details"> | number;
    jatuh_tempo?: Prisma.DateTimeFilter<"layaway_details"> | Date | string;
    paid?: Prisma.IntNullableFilter<"layaway_details"> | number | null;
    paid_at?: Prisma.DateTimeNullableFilter<"layaway_details"> | Date | string | null;
    note?: Prisma.StringNullableFilter<"layaway_details"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"layaway_details"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"layaway_details"> | Date | string | null;
};
export type layaway_detailsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    layaway_id?: Prisma.SortOrder;
    month?: Prisma.SortOrder;
    jatuh_tempo?: Prisma.SortOrder;
    paid?: Prisma.SortOrderInput | Prisma.SortOrder;
    paid_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type layaway_detailsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.layaway_detailsWhereInput | Prisma.layaway_detailsWhereInput[];
    OR?: Prisma.layaway_detailsWhereInput[];
    NOT?: Prisma.layaway_detailsWhereInput | Prisma.layaway_detailsWhereInput[];
    layaway_id?: Prisma.BigIntFilter<"layaway_details"> | bigint | number;
    month?: Prisma.IntFilter<"layaway_details"> | number;
    jatuh_tempo?: Prisma.DateTimeFilter<"layaway_details"> | Date | string;
    paid?: Prisma.IntNullableFilter<"layaway_details"> | number | null;
    paid_at?: Prisma.DateTimeNullableFilter<"layaway_details"> | Date | string | null;
    note?: Prisma.StringNullableFilter<"layaway_details"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"layaway_details"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"layaway_details"> | Date | string | null;
}, "id">;
export type layaway_detailsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    layaway_id?: Prisma.SortOrder;
    month?: Prisma.SortOrder;
    jatuh_tempo?: Prisma.SortOrder;
    paid?: Prisma.SortOrderInput | Prisma.SortOrder;
    paid_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.layaway_detailsCountOrderByAggregateInput;
    _avg?: Prisma.layaway_detailsAvgOrderByAggregateInput;
    _max?: Prisma.layaway_detailsMaxOrderByAggregateInput;
    _min?: Prisma.layaway_detailsMinOrderByAggregateInput;
    _sum?: Prisma.layaway_detailsSumOrderByAggregateInput;
};
export type layaway_detailsScalarWhereWithAggregatesInput = {
    AND?: Prisma.layaway_detailsScalarWhereWithAggregatesInput | Prisma.layaway_detailsScalarWhereWithAggregatesInput[];
    OR?: Prisma.layaway_detailsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.layaway_detailsScalarWhereWithAggregatesInput | Prisma.layaway_detailsScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"layaway_details"> | bigint | number;
    layaway_id?: Prisma.BigIntWithAggregatesFilter<"layaway_details"> | bigint | number;
    month?: Prisma.IntWithAggregatesFilter<"layaway_details"> | number;
    jatuh_tempo?: Prisma.DateTimeWithAggregatesFilter<"layaway_details"> | Date | string;
    paid?: Prisma.IntNullableWithAggregatesFilter<"layaway_details"> | number | null;
    paid_at?: Prisma.DateTimeNullableWithAggregatesFilter<"layaway_details"> | Date | string | null;
    note?: Prisma.StringNullableWithAggregatesFilter<"layaway_details"> | string | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"layaway_details"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"layaway_details"> | Date | string | null;
};
export type layaway_detailsCreateInput = {
    id?: bigint | number;
    layaway_id: bigint | number;
    month: number;
    jatuh_tempo: Date | string;
    paid?: number | null;
    paid_at?: Date | string | null;
    note?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type layaway_detailsUncheckedCreateInput = {
    id?: bigint | number;
    layaway_id: bigint | number;
    month: number;
    jatuh_tempo: Date | string;
    paid?: number | null;
    paid_at?: Date | string | null;
    note?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type layaway_detailsUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    layaway_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    month?: Prisma.IntFieldUpdateOperationsInput | number;
    jatuh_tempo?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paid?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type layaway_detailsUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    layaway_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    month?: Prisma.IntFieldUpdateOperationsInput | number;
    jatuh_tempo?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paid?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type layaway_detailsCreateManyInput = {
    id?: bigint | number;
    layaway_id: bigint | number;
    month: number;
    jatuh_tempo: Date | string;
    paid?: number | null;
    paid_at?: Date | string | null;
    note?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type layaway_detailsUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    layaway_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    month?: Prisma.IntFieldUpdateOperationsInput | number;
    jatuh_tempo?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paid?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type layaway_detailsUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    layaway_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    month?: Prisma.IntFieldUpdateOperationsInput | number;
    jatuh_tempo?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paid?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type layaway_detailsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    layaway_id?: Prisma.SortOrder;
    month?: Prisma.SortOrder;
    jatuh_tempo?: Prisma.SortOrder;
    paid?: Prisma.SortOrder;
    paid_at?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type layaway_detailsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    layaway_id?: Prisma.SortOrder;
    month?: Prisma.SortOrder;
    paid?: Prisma.SortOrder;
};
export type layaway_detailsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    layaway_id?: Prisma.SortOrder;
    month?: Prisma.SortOrder;
    jatuh_tempo?: Prisma.SortOrder;
    paid?: Prisma.SortOrder;
    paid_at?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type layaway_detailsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    layaway_id?: Prisma.SortOrder;
    month?: Prisma.SortOrder;
    jatuh_tempo?: Prisma.SortOrder;
    paid?: Prisma.SortOrder;
    paid_at?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type layaway_detailsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    layaway_id?: Prisma.SortOrder;
    month?: Prisma.SortOrder;
    paid?: Prisma.SortOrder;
};
export type layaway_detailsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    layaway_id?: boolean;
    month?: boolean;
    jatuh_tempo?: boolean;
    paid?: boolean;
    paid_at?: boolean;
    note?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["layaway_details"]>;
export type layaway_detailsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    layaway_id?: boolean;
    month?: boolean;
    jatuh_tempo?: boolean;
    paid?: boolean;
    paid_at?: boolean;
    note?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["layaway_details"]>;
export type layaway_detailsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    layaway_id?: boolean;
    month?: boolean;
    jatuh_tempo?: boolean;
    paid?: boolean;
    paid_at?: boolean;
    note?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["layaway_details"]>;
export type layaway_detailsSelectScalar = {
    id?: boolean;
    layaway_id?: boolean;
    month?: boolean;
    jatuh_tempo?: boolean;
    paid?: boolean;
    paid_at?: boolean;
    note?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type layaway_detailsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "layaway_id" | "month" | "jatuh_tempo" | "paid" | "paid_at" | "note" | "created_at" | "updated_at", ExtArgs["result"]["layaway_details"]>;
export type $layaway_detailsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "layaway_details";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        layaway_id: bigint;
        month: number;
        jatuh_tempo: Date;
        paid: number | null;
        paid_at: Date | null;
        note: string | null;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["layaway_details"]>;
    composites: {};
};
export type layaway_detailsGetPayload<S extends boolean | null | undefined | layaway_detailsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$layaway_detailsPayload, S>;
export type layaway_detailsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<layaway_detailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Layaway_detailsCountAggregateInputType | true;
};
export interface layaway_detailsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['layaway_details'];
        meta: {
            name: 'layaway_details';
        };
    };
    findUnique<T extends layaway_detailsFindUniqueArgs>(args: Prisma.SelectSubset<T, layaway_detailsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__layaway_detailsClient<runtime.Types.Result.GetResult<Prisma.$layaway_detailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends layaway_detailsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, layaway_detailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__layaway_detailsClient<runtime.Types.Result.GetResult<Prisma.$layaway_detailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends layaway_detailsFindFirstArgs>(args?: Prisma.SelectSubset<T, layaway_detailsFindFirstArgs<ExtArgs>>): Prisma.Prisma__layaway_detailsClient<runtime.Types.Result.GetResult<Prisma.$layaway_detailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends layaway_detailsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, layaway_detailsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__layaway_detailsClient<runtime.Types.Result.GetResult<Prisma.$layaway_detailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends layaway_detailsFindManyArgs>(args?: Prisma.SelectSubset<T, layaway_detailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$layaway_detailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends layaway_detailsCreateArgs>(args: Prisma.SelectSubset<T, layaway_detailsCreateArgs<ExtArgs>>): Prisma.Prisma__layaway_detailsClient<runtime.Types.Result.GetResult<Prisma.$layaway_detailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends layaway_detailsCreateManyArgs>(args?: Prisma.SelectSubset<T, layaway_detailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends layaway_detailsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, layaway_detailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$layaway_detailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends layaway_detailsDeleteArgs>(args: Prisma.SelectSubset<T, layaway_detailsDeleteArgs<ExtArgs>>): Prisma.Prisma__layaway_detailsClient<runtime.Types.Result.GetResult<Prisma.$layaway_detailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends layaway_detailsUpdateArgs>(args: Prisma.SelectSubset<T, layaway_detailsUpdateArgs<ExtArgs>>): Prisma.Prisma__layaway_detailsClient<runtime.Types.Result.GetResult<Prisma.$layaway_detailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends layaway_detailsDeleteManyArgs>(args?: Prisma.SelectSubset<T, layaway_detailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends layaway_detailsUpdateManyArgs>(args: Prisma.SelectSubset<T, layaway_detailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends layaway_detailsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, layaway_detailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$layaway_detailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends layaway_detailsUpsertArgs>(args: Prisma.SelectSubset<T, layaway_detailsUpsertArgs<ExtArgs>>): Prisma.Prisma__layaway_detailsClient<runtime.Types.Result.GetResult<Prisma.$layaway_detailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends layaway_detailsCountArgs>(args?: Prisma.Subset<T, layaway_detailsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Layaway_detailsCountAggregateOutputType> : number>;
    aggregate<T extends Layaway_detailsAggregateArgs>(args: Prisma.Subset<T, Layaway_detailsAggregateArgs>): Prisma.PrismaPromise<GetLayaway_detailsAggregateType<T>>;
    groupBy<T extends layaway_detailsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: layaway_detailsGroupByArgs['orderBy'];
    } : {
        orderBy?: layaway_detailsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, layaway_detailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLayaway_detailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: layaway_detailsFieldRefs;
}
export interface Prisma__layaway_detailsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface layaway_detailsFieldRefs {
    readonly id: Prisma.FieldRef<"layaway_details", 'BigInt'>;
    readonly layaway_id: Prisma.FieldRef<"layaway_details", 'BigInt'>;
    readonly month: Prisma.FieldRef<"layaway_details", 'Int'>;
    readonly jatuh_tempo: Prisma.FieldRef<"layaway_details", 'DateTime'>;
    readonly paid: Prisma.FieldRef<"layaway_details", 'Int'>;
    readonly paid_at: Prisma.FieldRef<"layaway_details", 'DateTime'>;
    readonly note: Prisma.FieldRef<"layaway_details", 'String'>;
    readonly created_at: Prisma.FieldRef<"layaway_details", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"layaway_details", 'DateTime'>;
}
export type layaway_detailsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.layaway_detailsSelect<ExtArgs> | null;
    omit?: Prisma.layaway_detailsOmit<ExtArgs> | null;
    where: Prisma.layaway_detailsWhereUniqueInput;
};
export type layaway_detailsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.layaway_detailsSelect<ExtArgs> | null;
    omit?: Prisma.layaway_detailsOmit<ExtArgs> | null;
    where: Prisma.layaway_detailsWhereUniqueInput;
};
export type layaway_detailsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.layaway_detailsSelect<ExtArgs> | null;
    omit?: Prisma.layaway_detailsOmit<ExtArgs> | null;
    where?: Prisma.layaway_detailsWhereInput;
    orderBy?: Prisma.layaway_detailsOrderByWithRelationInput | Prisma.layaway_detailsOrderByWithRelationInput[];
    cursor?: Prisma.layaway_detailsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Layaway_detailsScalarFieldEnum | Prisma.Layaway_detailsScalarFieldEnum[];
};
export type layaway_detailsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.layaway_detailsSelect<ExtArgs> | null;
    omit?: Prisma.layaway_detailsOmit<ExtArgs> | null;
    where?: Prisma.layaway_detailsWhereInput;
    orderBy?: Prisma.layaway_detailsOrderByWithRelationInput | Prisma.layaway_detailsOrderByWithRelationInput[];
    cursor?: Prisma.layaway_detailsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Layaway_detailsScalarFieldEnum | Prisma.Layaway_detailsScalarFieldEnum[];
};
export type layaway_detailsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.layaway_detailsSelect<ExtArgs> | null;
    omit?: Prisma.layaway_detailsOmit<ExtArgs> | null;
    where?: Prisma.layaway_detailsWhereInput;
    orderBy?: Prisma.layaway_detailsOrderByWithRelationInput | Prisma.layaway_detailsOrderByWithRelationInput[];
    cursor?: Prisma.layaway_detailsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Layaway_detailsScalarFieldEnum | Prisma.Layaway_detailsScalarFieldEnum[];
};
export type layaway_detailsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.layaway_detailsSelect<ExtArgs> | null;
    omit?: Prisma.layaway_detailsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.layaway_detailsCreateInput, Prisma.layaway_detailsUncheckedCreateInput>;
};
export type layaway_detailsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.layaway_detailsCreateManyInput | Prisma.layaway_detailsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type layaway_detailsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.layaway_detailsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.layaway_detailsOmit<ExtArgs> | null;
    data: Prisma.layaway_detailsCreateManyInput | Prisma.layaway_detailsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type layaway_detailsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.layaway_detailsSelect<ExtArgs> | null;
    omit?: Prisma.layaway_detailsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.layaway_detailsUpdateInput, Prisma.layaway_detailsUncheckedUpdateInput>;
    where: Prisma.layaway_detailsWhereUniqueInput;
};
export type layaway_detailsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.layaway_detailsUpdateManyMutationInput, Prisma.layaway_detailsUncheckedUpdateManyInput>;
    where?: Prisma.layaway_detailsWhereInput;
    limit?: number;
};
export type layaway_detailsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.layaway_detailsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.layaway_detailsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.layaway_detailsUpdateManyMutationInput, Prisma.layaway_detailsUncheckedUpdateManyInput>;
    where?: Prisma.layaway_detailsWhereInput;
    limit?: number;
};
export type layaway_detailsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.layaway_detailsSelect<ExtArgs> | null;
    omit?: Prisma.layaway_detailsOmit<ExtArgs> | null;
    where: Prisma.layaway_detailsWhereUniqueInput;
    create: Prisma.XOR<Prisma.layaway_detailsCreateInput, Prisma.layaway_detailsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.layaway_detailsUpdateInput, Prisma.layaway_detailsUncheckedUpdateInput>;
};
export type layaway_detailsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.layaway_detailsSelect<ExtArgs> | null;
    omit?: Prisma.layaway_detailsOmit<ExtArgs> | null;
    where: Prisma.layaway_detailsWhereUniqueInput;
};
export type layaway_detailsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.layaway_detailsWhereInput;
    limit?: number;
};
export type layaway_detailsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.layaway_detailsSelect<ExtArgs> | null;
    omit?: Prisma.layaway_detailsOmit<ExtArgs> | null;
};
