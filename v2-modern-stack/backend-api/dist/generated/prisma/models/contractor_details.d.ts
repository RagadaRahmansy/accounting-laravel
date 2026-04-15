import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type contractor_detailsModel = runtime.Types.Result.DefaultSelection<Prisma.$contractor_detailsPayload>;
export type AggregateContractor_details = {
    _count: Contractor_detailsCountAggregateOutputType | null;
    _avg: Contractor_detailsAvgAggregateOutputType | null;
    _sum: Contractor_detailsSumAggregateOutputType | null;
    _min: Contractor_detailsMinAggregateOutputType | null;
    _max: Contractor_detailsMaxAggregateOutputType | null;
};
export type Contractor_detailsAvgAggregateOutputType = {
    id: number | null;
    contractor_id: number | null;
    periode: number | null;
    pay: number | null;
};
export type Contractor_detailsSumAggregateOutputType = {
    id: bigint | null;
    contractor_id: bigint | null;
    periode: number | null;
    pay: number | null;
};
export type Contractor_detailsMinAggregateOutputType = {
    id: bigint | null;
    contractor_id: bigint | null;
    periode: number | null;
    pay: number | null;
    payment_date: Date | null;
    jatuh_tempo: Date | null;
    note: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Contractor_detailsMaxAggregateOutputType = {
    id: bigint | null;
    contractor_id: bigint | null;
    periode: number | null;
    pay: number | null;
    payment_date: Date | null;
    jatuh_tempo: Date | null;
    note: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Contractor_detailsCountAggregateOutputType = {
    id: number;
    contractor_id: number;
    periode: number;
    pay: number;
    payment_date: number;
    jatuh_tempo: number;
    note: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Contractor_detailsAvgAggregateInputType = {
    id?: true;
    contractor_id?: true;
    periode?: true;
    pay?: true;
};
export type Contractor_detailsSumAggregateInputType = {
    id?: true;
    contractor_id?: true;
    periode?: true;
    pay?: true;
};
export type Contractor_detailsMinAggregateInputType = {
    id?: true;
    contractor_id?: true;
    periode?: true;
    pay?: true;
    payment_date?: true;
    jatuh_tempo?: true;
    note?: true;
    created_at?: true;
    updated_at?: true;
};
export type Contractor_detailsMaxAggregateInputType = {
    id?: true;
    contractor_id?: true;
    periode?: true;
    pay?: true;
    payment_date?: true;
    jatuh_tempo?: true;
    note?: true;
    created_at?: true;
    updated_at?: true;
};
export type Contractor_detailsCountAggregateInputType = {
    id?: true;
    contractor_id?: true;
    periode?: true;
    pay?: true;
    payment_date?: true;
    jatuh_tempo?: true;
    note?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Contractor_detailsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.contractor_detailsWhereInput;
    orderBy?: Prisma.contractor_detailsOrderByWithRelationInput | Prisma.contractor_detailsOrderByWithRelationInput[];
    cursor?: Prisma.contractor_detailsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Contractor_detailsCountAggregateInputType;
    _avg?: Contractor_detailsAvgAggregateInputType;
    _sum?: Contractor_detailsSumAggregateInputType;
    _min?: Contractor_detailsMinAggregateInputType;
    _max?: Contractor_detailsMaxAggregateInputType;
};
export type GetContractor_detailsAggregateType<T extends Contractor_detailsAggregateArgs> = {
    [P in keyof T & keyof AggregateContractor_details]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateContractor_details[P]> : Prisma.GetScalarType<T[P], AggregateContractor_details[P]>;
};
export type contractor_detailsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.contractor_detailsWhereInput;
    orderBy?: Prisma.contractor_detailsOrderByWithAggregationInput | Prisma.contractor_detailsOrderByWithAggregationInput[];
    by: Prisma.Contractor_detailsScalarFieldEnum[] | Prisma.Contractor_detailsScalarFieldEnum;
    having?: Prisma.contractor_detailsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Contractor_detailsCountAggregateInputType | true;
    _avg?: Contractor_detailsAvgAggregateInputType;
    _sum?: Contractor_detailsSumAggregateInputType;
    _min?: Contractor_detailsMinAggregateInputType;
    _max?: Contractor_detailsMaxAggregateInputType;
};
export type Contractor_detailsGroupByOutputType = {
    id: bigint;
    contractor_id: bigint;
    periode: number;
    pay: number | null;
    payment_date: Date | null;
    jatuh_tempo: Date;
    note: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    _count: Contractor_detailsCountAggregateOutputType | null;
    _avg: Contractor_detailsAvgAggregateOutputType | null;
    _sum: Contractor_detailsSumAggregateOutputType | null;
    _min: Contractor_detailsMinAggregateOutputType | null;
    _max: Contractor_detailsMaxAggregateOutputType | null;
};
export type GetContractor_detailsGroupByPayload<T extends contractor_detailsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Contractor_detailsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Contractor_detailsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Contractor_detailsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Contractor_detailsGroupByOutputType[P]>;
}>>;
export type contractor_detailsWhereInput = {
    AND?: Prisma.contractor_detailsWhereInput | Prisma.contractor_detailsWhereInput[];
    OR?: Prisma.contractor_detailsWhereInput[];
    NOT?: Prisma.contractor_detailsWhereInput | Prisma.contractor_detailsWhereInput[];
    id?: Prisma.BigIntFilter<"contractor_details"> | bigint | number;
    contractor_id?: Prisma.BigIntFilter<"contractor_details"> | bigint | number;
    periode?: Prisma.IntFilter<"contractor_details"> | number;
    pay?: Prisma.IntNullableFilter<"contractor_details"> | number | null;
    payment_date?: Prisma.DateTimeNullableFilter<"contractor_details"> | Date | string | null;
    jatuh_tempo?: Prisma.DateTimeFilter<"contractor_details"> | Date | string;
    note?: Prisma.StringNullableFilter<"contractor_details"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"contractor_details"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"contractor_details"> | Date | string | null;
};
export type contractor_detailsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    contractor_id?: Prisma.SortOrder;
    periode?: Prisma.SortOrder;
    pay?: Prisma.SortOrderInput | Prisma.SortOrder;
    payment_date?: Prisma.SortOrderInput | Prisma.SortOrder;
    jatuh_tempo?: Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type contractor_detailsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.contractor_detailsWhereInput | Prisma.contractor_detailsWhereInput[];
    OR?: Prisma.contractor_detailsWhereInput[];
    NOT?: Prisma.contractor_detailsWhereInput | Prisma.contractor_detailsWhereInput[];
    contractor_id?: Prisma.BigIntFilter<"contractor_details"> | bigint | number;
    periode?: Prisma.IntFilter<"contractor_details"> | number;
    pay?: Prisma.IntNullableFilter<"contractor_details"> | number | null;
    payment_date?: Prisma.DateTimeNullableFilter<"contractor_details"> | Date | string | null;
    jatuh_tempo?: Prisma.DateTimeFilter<"contractor_details"> | Date | string;
    note?: Prisma.StringNullableFilter<"contractor_details"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"contractor_details"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"contractor_details"> | Date | string | null;
}, "id">;
export type contractor_detailsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    contractor_id?: Prisma.SortOrder;
    periode?: Prisma.SortOrder;
    pay?: Prisma.SortOrderInput | Prisma.SortOrder;
    payment_date?: Prisma.SortOrderInput | Prisma.SortOrder;
    jatuh_tempo?: Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.contractor_detailsCountOrderByAggregateInput;
    _avg?: Prisma.contractor_detailsAvgOrderByAggregateInput;
    _max?: Prisma.contractor_detailsMaxOrderByAggregateInput;
    _min?: Prisma.contractor_detailsMinOrderByAggregateInput;
    _sum?: Prisma.contractor_detailsSumOrderByAggregateInput;
};
export type contractor_detailsScalarWhereWithAggregatesInput = {
    AND?: Prisma.contractor_detailsScalarWhereWithAggregatesInput | Prisma.contractor_detailsScalarWhereWithAggregatesInput[];
    OR?: Prisma.contractor_detailsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.contractor_detailsScalarWhereWithAggregatesInput | Prisma.contractor_detailsScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"contractor_details"> | bigint | number;
    contractor_id?: Prisma.BigIntWithAggregatesFilter<"contractor_details"> | bigint | number;
    periode?: Prisma.IntWithAggregatesFilter<"contractor_details"> | number;
    pay?: Prisma.IntNullableWithAggregatesFilter<"contractor_details"> | number | null;
    payment_date?: Prisma.DateTimeNullableWithAggregatesFilter<"contractor_details"> | Date | string | null;
    jatuh_tempo?: Prisma.DateTimeWithAggregatesFilter<"contractor_details"> | Date | string;
    note?: Prisma.StringNullableWithAggregatesFilter<"contractor_details"> | string | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"contractor_details"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"contractor_details"> | Date | string | null;
};
export type contractor_detailsCreateInput = {
    id?: bigint | number;
    contractor_id: bigint | number;
    periode: number;
    pay?: number | null;
    payment_date?: Date | string | null;
    jatuh_tempo: Date | string;
    note?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type contractor_detailsUncheckedCreateInput = {
    id?: bigint | number;
    contractor_id: bigint | number;
    periode: number;
    pay?: number | null;
    payment_date?: Date | string | null;
    jatuh_tempo: Date | string;
    note?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type contractor_detailsUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    contractor_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    periode?: Prisma.IntFieldUpdateOperationsInput | number;
    pay?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    payment_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    jatuh_tempo?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type contractor_detailsUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    contractor_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    periode?: Prisma.IntFieldUpdateOperationsInput | number;
    pay?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    payment_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    jatuh_tempo?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type contractor_detailsCreateManyInput = {
    id?: bigint | number;
    contractor_id: bigint | number;
    periode: number;
    pay?: number | null;
    payment_date?: Date | string | null;
    jatuh_tempo: Date | string;
    note?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type contractor_detailsUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    contractor_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    periode?: Prisma.IntFieldUpdateOperationsInput | number;
    pay?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    payment_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    jatuh_tempo?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type contractor_detailsUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    contractor_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    periode?: Prisma.IntFieldUpdateOperationsInput | number;
    pay?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    payment_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    jatuh_tempo?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type contractor_detailsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contractor_id?: Prisma.SortOrder;
    periode?: Prisma.SortOrder;
    pay?: Prisma.SortOrder;
    payment_date?: Prisma.SortOrder;
    jatuh_tempo?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type contractor_detailsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contractor_id?: Prisma.SortOrder;
    periode?: Prisma.SortOrder;
    pay?: Prisma.SortOrder;
};
export type contractor_detailsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contractor_id?: Prisma.SortOrder;
    periode?: Prisma.SortOrder;
    pay?: Prisma.SortOrder;
    payment_date?: Prisma.SortOrder;
    jatuh_tempo?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type contractor_detailsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contractor_id?: Prisma.SortOrder;
    periode?: Prisma.SortOrder;
    pay?: Prisma.SortOrder;
    payment_date?: Prisma.SortOrder;
    jatuh_tempo?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type contractor_detailsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contractor_id?: Prisma.SortOrder;
    periode?: Prisma.SortOrder;
    pay?: Prisma.SortOrder;
};
export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number;
    increment?: bigint | number;
    decrement?: bigint | number;
    multiply?: bigint | number;
    divide?: bigint | number;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type contractor_detailsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contractor_id?: boolean;
    periode?: boolean;
    pay?: boolean;
    payment_date?: boolean;
    jatuh_tempo?: boolean;
    note?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["contractor_details"]>;
export type contractor_detailsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contractor_id?: boolean;
    periode?: boolean;
    pay?: boolean;
    payment_date?: boolean;
    jatuh_tempo?: boolean;
    note?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["contractor_details"]>;
export type contractor_detailsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contractor_id?: boolean;
    periode?: boolean;
    pay?: boolean;
    payment_date?: boolean;
    jatuh_tempo?: boolean;
    note?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["contractor_details"]>;
export type contractor_detailsSelectScalar = {
    id?: boolean;
    contractor_id?: boolean;
    periode?: boolean;
    pay?: boolean;
    payment_date?: boolean;
    jatuh_tempo?: boolean;
    note?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type contractor_detailsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "contractor_id" | "periode" | "pay" | "payment_date" | "jatuh_tempo" | "note" | "created_at" | "updated_at", ExtArgs["result"]["contractor_details"]>;
export type $contractor_detailsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "contractor_details";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        contractor_id: bigint;
        periode: number;
        pay: number | null;
        payment_date: Date | null;
        jatuh_tempo: Date;
        note: string | null;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["contractor_details"]>;
    composites: {};
};
export type contractor_detailsGetPayload<S extends boolean | null | undefined | contractor_detailsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$contractor_detailsPayload, S>;
export type contractor_detailsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<contractor_detailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Contractor_detailsCountAggregateInputType | true;
};
export interface contractor_detailsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['contractor_details'];
        meta: {
            name: 'contractor_details';
        };
    };
    findUnique<T extends contractor_detailsFindUniqueArgs>(args: Prisma.SelectSubset<T, contractor_detailsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__contractor_detailsClient<runtime.Types.Result.GetResult<Prisma.$contractor_detailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends contractor_detailsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, contractor_detailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__contractor_detailsClient<runtime.Types.Result.GetResult<Prisma.$contractor_detailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends contractor_detailsFindFirstArgs>(args?: Prisma.SelectSubset<T, contractor_detailsFindFirstArgs<ExtArgs>>): Prisma.Prisma__contractor_detailsClient<runtime.Types.Result.GetResult<Prisma.$contractor_detailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends contractor_detailsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, contractor_detailsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__contractor_detailsClient<runtime.Types.Result.GetResult<Prisma.$contractor_detailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends contractor_detailsFindManyArgs>(args?: Prisma.SelectSubset<T, contractor_detailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$contractor_detailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends contractor_detailsCreateArgs>(args: Prisma.SelectSubset<T, contractor_detailsCreateArgs<ExtArgs>>): Prisma.Prisma__contractor_detailsClient<runtime.Types.Result.GetResult<Prisma.$contractor_detailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends contractor_detailsCreateManyArgs>(args?: Prisma.SelectSubset<T, contractor_detailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends contractor_detailsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, contractor_detailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$contractor_detailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends contractor_detailsDeleteArgs>(args: Prisma.SelectSubset<T, contractor_detailsDeleteArgs<ExtArgs>>): Prisma.Prisma__contractor_detailsClient<runtime.Types.Result.GetResult<Prisma.$contractor_detailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends contractor_detailsUpdateArgs>(args: Prisma.SelectSubset<T, contractor_detailsUpdateArgs<ExtArgs>>): Prisma.Prisma__contractor_detailsClient<runtime.Types.Result.GetResult<Prisma.$contractor_detailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends contractor_detailsDeleteManyArgs>(args?: Prisma.SelectSubset<T, contractor_detailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends contractor_detailsUpdateManyArgs>(args: Prisma.SelectSubset<T, contractor_detailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends contractor_detailsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, contractor_detailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$contractor_detailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends contractor_detailsUpsertArgs>(args: Prisma.SelectSubset<T, contractor_detailsUpsertArgs<ExtArgs>>): Prisma.Prisma__contractor_detailsClient<runtime.Types.Result.GetResult<Prisma.$contractor_detailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends contractor_detailsCountArgs>(args?: Prisma.Subset<T, contractor_detailsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Contractor_detailsCountAggregateOutputType> : number>;
    aggregate<T extends Contractor_detailsAggregateArgs>(args: Prisma.Subset<T, Contractor_detailsAggregateArgs>): Prisma.PrismaPromise<GetContractor_detailsAggregateType<T>>;
    groupBy<T extends contractor_detailsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: contractor_detailsGroupByArgs['orderBy'];
    } : {
        orderBy?: contractor_detailsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, contractor_detailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractor_detailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: contractor_detailsFieldRefs;
}
export interface Prisma__contractor_detailsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface contractor_detailsFieldRefs {
    readonly id: Prisma.FieldRef<"contractor_details", 'BigInt'>;
    readonly contractor_id: Prisma.FieldRef<"contractor_details", 'BigInt'>;
    readonly periode: Prisma.FieldRef<"contractor_details", 'Int'>;
    readonly pay: Prisma.FieldRef<"contractor_details", 'Int'>;
    readonly payment_date: Prisma.FieldRef<"contractor_details", 'DateTime'>;
    readonly jatuh_tempo: Prisma.FieldRef<"contractor_details", 'DateTime'>;
    readonly note: Prisma.FieldRef<"contractor_details", 'String'>;
    readonly created_at: Prisma.FieldRef<"contractor_details", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"contractor_details", 'DateTime'>;
}
export type contractor_detailsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contractor_detailsSelect<ExtArgs> | null;
    omit?: Prisma.contractor_detailsOmit<ExtArgs> | null;
    where: Prisma.contractor_detailsWhereUniqueInput;
};
export type contractor_detailsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contractor_detailsSelect<ExtArgs> | null;
    omit?: Prisma.contractor_detailsOmit<ExtArgs> | null;
    where: Prisma.contractor_detailsWhereUniqueInput;
};
export type contractor_detailsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contractor_detailsSelect<ExtArgs> | null;
    omit?: Prisma.contractor_detailsOmit<ExtArgs> | null;
    where?: Prisma.contractor_detailsWhereInput;
    orderBy?: Prisma.contractor_detailsOrderByWithRelationInput | Prisma.contractor_detailsOrderByWithRelationInput[];
    cursor?: Prisma.contractor_detailsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Contractor_detailsScalarFieldEnum | Prisma.Contractor_detailsScalarFieldEnum[];
};
export type contractor_detailsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contractor_detailsSelect<ExtArgs> | null;
    omit?: Prisma.contractor_detailsOmit<ExtArgs> | null;
    where?: Prisma.contractor_detailsWhereInput;
    orderBy?: Prisma.contractor_detailsOrderByWithRelationInput | Prisma.contractor_detailsOrderByWithRelationInput[];
    cursor?: Prisma.contractor_detailsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Contractor_detailsScalarFieldEnum | Prisma.Contractor_detailsScalarFieldEnum[];
};
export type contractor_detailsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contractor_detailsSelect<ExtArgs> | null;
    omit?: Prisma.contractor_detailsOmit<ExtArgs> | null;
    where?: Prisma.contractor_detailsWhereInput;
    orderBy?: Prisma.contractor_detailsOrderByWithRelationInput | Prisma.contractor_detailsOrderByWithRelationInput[];
    cursor?: Prisma.contractor_detailsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Contractor_detailsScalarFieldEnum | Prisma.Contractor_detailsScalarFieldEnum[];
};
export type contractor_detailsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contractor_detailsSelect<ExtArgs> | null;
    omit?: Prisma.contractor_detailsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.contractor_detailsCreateInput, Prisma.contractor_detailsUncheckedCreateInput>;
};
export type contractor_detailsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.contractor_detailsCreateManyInput | Prisma.contractor_detailsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type contractor_detailsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contractor_detailsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.contractor_detailsOmit<ExtArgs> | null;
    data: Prisma.contractor_detailsCreateManyInput | Prisma.contractor_detailsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type contractor_detailsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contractor_detailsSelect<ExtArgs> | null;
    omit?: Prisma.contractor_detailsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.contractor_detailsUpdateInput, Prisma.contractor_detailsUncheckedUpdateInput>;
    where: Prisma.contractor_detailsWhereUniqueInput;
};
export type contractor_detailsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.contractor_detailsUpdateManyMutationInput, Prisma.contractor_detailsUncheckedUpdateManyInput>;
    where?: Prisma.contractor_detailsWhereInput;
    limit?: number;
};
export type contractor_detailsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contractor_detailsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.contractor_detailsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.contractor_detailsUpdateManyMutationInput, Prisma.contractor_detailsUncheckedUpdateManyInput>;
    where?: Prisma.contractor_detailsWhereInput;
    limit?: number;
};
export type contractor_detailsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contractor_detailsSelect<ExtArgs> | null;
    omit?: Prisma.contractor_detailsOmit<ExtArgs> | null;
    where: Prisma.contractor_detailsWhereUniqueInput;
    create: Prisma.XOR<Prisma.contractor_detailsCreateInput, Prisma.contractor_detailsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.contractor_detailsUpdateInput, Prisma.contractor_detailsUncheckedUpdateInput>;
};
export type contractor_detailsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contractor_detailsSelect<ExtArgs> | null;
    omit?: Prisma.contractor_detailsOmit<ExtArgs> | null;
    where: Prisma.contractor_detailsWhereUniqueInput;
};
export type contractor_detailsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.contractor_detailsWhereInput;
    limit?: number;
};
export type contractor_detailsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contractor_detailsSelect<ExtArgs> | null;
    omit?: Prisma.contractor_detailsOmit<ExtArgs> | null;
};
