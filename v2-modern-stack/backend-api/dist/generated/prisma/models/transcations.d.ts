import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type transcationsModel = runtime.Types.Result.DefaultSelection<Prisma.$transcationsPayload>;
export type AggregateTranscations = {
    _count: TranscationsCountAggregateOutputType | null;
    _avg: TranscationsAvgAggregateOutputType | null;
    _sum: TranscationsSumAggregateOutputType | null;
    _min: TranscationsMinAggregateOutputType | null;
    _max: TranscationsMaxAggregateOutputType | null;
};
export type TranscationsAvgAggregateOutputType = {
    id: number | null;
    type_id: number | null;
    quantity: number | null;
    price: number | null;
    final_price: number | null;
};
export type TranscationsSumAggregateOutputType = {
    id: bigint | null;
    type_id: bigint | null;
    quantity: number | null;
    price: number | null;
    final_price: number | null;
};
export type TranscationsMinAggregateOutputType = {
    id: bigint | null;
    type_id: bigint | null;
    name: string | null;
    quantity: number | null;
    price: number | null;
    final_price: number | null;
    unit: string | null;
    status: string | null;
    jatuh_tempo: Date | null;
    paid_at: Date | null;
    note: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type TranscationsMaxAggregateOutputType = {
    id: bigint | null;
    type_id: bigint | null;
    name: string | null;
    quantity: number | null;
    price: number | null;
    final_price: number | null;
    unit: string | null;
    status: string | null;
    jatuh_tempo: Date | null;
    paid_at: Date | null;
    note: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type TranscationsCountAggregateOutputType = {
    id: number;
    type_id: number;
    name: number;
    quantity: number;
    price: number;
    final_price: number;
    unit: number;
    status: number;
    jatuh_tempo: number;
    paid_at: number;
    note: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type TranscationsAvgAggregateInputType = {
    id?: true;
    type_id?: true;
    quantity?: true;
    price?: true;
    final_price?: true;
};
export type TranscationsSumAggregateInputType = {
    id?: true;
    type_id?: true;
    quantity?: true;
    price?: true;
    final_price?: true;
};
export type TranscationsMinAggregateInputType = {
    id?: true;
    type_id?: true;
    name?: true;
    quantity?: true;
    price?: true;
    final_price?: true;
    unit?: true;
    status?: true;
    jatuh_tempo?: true;
    paid_at?: true;
    note?: true;
    created_at?: true;
    updated_at?: true;
};
export type TranscationsMaxAggregateInputType = {
    id?: true;
    type_id?: true;
    name?: true;
    quantity?: true;
    price?: true;
    final_price?: true;
    unit?: true;
    status?: true;
    jatuh_tempo?: true;
    paid_at?: true;
    note?: true;
    created_at?: true;
    updated_at?: true;
};
export type TranscationsCountAggregateInputType = {
    id?: true;
    type_id?: true;
    name?: true;
    quantity?: true;
    price?: true;
    final_price?: true;
    unit?: true;
    status?: true;
    jatuh_tempo?: true;
    paid_at?: true;
    note?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type TranscationsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.transcationsWhereInput;
    orderBy?: Prisma.transcationsOrderByWithRelationInput | Prisma.transcationsOrderByWithRelationInput[];
    cursor?: Prisma.transcationsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TranscationsCountAggregateInputType;
    _avg?: TranscationsAvgAggregateInputType;
    _sum?: TranscationsSumAggregateInputType;
    _min?: TranscationsMinAggregateInputType;
    _max?: TranscationsMaxAggregateInputType;
};
export type GetTranscationsAggregateType<T extends TranscationsAggregateArgs> = {
    [P in keyof T & keyof AggregateTranscations]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTranscations[P]> : Prisma.GetScalarType<T[P], AggregateTranscations[P]>;
};
export type transcationsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.transcationsWhereInput;
    orderBy?: Prisma.transcationsOrderByWithAggregationInput | Prisma.transcationsOrderByWithAggregationInput[];
    by: Prisma.TranscationsScalarFieldEnum[] | Prisma.TranscationsScalarFieldEnum;
    having?: Prisma.transcationsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TranscationsCountAggregateInputType | true;
    _avg?: TranscationsAvgAggregateInputType;
    _sum?: TranscationsSumAggregateInputType;
    _min?: TranscationsMinAggregateInputType;
    _max?: TranscationsMaxAggregateInputType;
};
export type TranscationsGroupByOutputType = {
    id: bigint;
    type_id: bigint;
    name: string;
    quantity: number;
    price: number;
    final_price: number;
    unit: string;
    status: string;
    jatuh_tempo: Date | null;
    paid_at: Date | null;
    note: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    _count: TranscationsCountAggregateOutputType | null;
    _avg: TranscationsAvgAggregateOutputType | null;
    _sum: TranscationsSumAggregateOutputType | null;
    _min: TranscationsMinAggregateOutputType | null;
    _max: TranscationsMaxAggregateOutputType | null;
};
export type GetTranscationsGroupByPayload<T extends transcationsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TranscationsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TranscationsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TranscationsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TranscationsGroupByOutputType[P]>;
}>>;
export type transcationsWhereInput = {
    AND?: Prisma.transcationsWhereInput | Prisma.transcationsWhereInput[];
    OR?: Prisma.transcationsWhereInput[];
    NOT?: Prisma.transcationsWhereInput | Prisma.transcationsWhereInput[];
    id?: Prisma.BigIntFilter<"transcations"> | bigint | number;
    type_id?: Prisma.BigIntFilter<"transcations"> | bigint | number;
    name?: Prisma.StringFilter<"transcations"> | string;
    quantity?: Prisma.IntFilter<"transcations"> | number;
    price?: Prisma.IntFilter<"transcations"> | number;
    final_price?: Prisma.IntFilter<"transcations"> | number;
    unit?: Prisma.StringFilter<"transcations"> | string;
    status?: Prisma.StringFilter<"transcations"> | string;
    jatuh_tempo?: Prisma.DateTimeNullableFilter<"transcations"> | Date | string | null;
    paid_at?: Prisma.DateTimeNullableFilter<"transcations"> | Date | string | null;
    note?: Prisma.StringNullableFilter<"transcations"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"transcations"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"transcations"> | Date | string | null;
};
export type transcationsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    type_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    final_price?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    jatuh_tempo?: Prisma.SortOrderInput | Prisma.SortOrder;
    paid_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type transcationsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.transcationsWhereInput | Prisma.transcationsWhereInput[];
    OR?: Prisma.transcationsWhereInput[];
    NOT?: Prisma.transcationsWhereInput | Prisma.transcationsWhereInput[];
    type_id?: Prisma.BigIntFilter<"transcations"> | bigint | number;
    name?: Prisma.StringFilter<"transcations"> | string;
    quantity?: Prisma.IntFilter<"transcations"> | number;
    price?: Prisma.IntFilter<"transcations"> | number;
    final_price?: Prisma.IntFilter<"transcations"> | number;
    unit?: Prisma.StringFilter<"transcations"> | string;
    status?: Prisma.StringFilter<"transcations"> | string;
    jatuh_tempo?: Prisma.DateTimeNullableFilter<"transcations"> | Date | string | null;
    paid_at?: Prisma.DateTimeNullableFilter<"transcations"> | Date | string | null;
    note?: Prisma.StringNullableFilter<"transcations"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"transcations"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"transcations"> | Date | string | null;
}, "id">;
export type transcationsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    type_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    final_price?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    jatuh_tempo?: Prisma.SortOrderInput | Prisma.SortOrder;
    paid_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.transcationsCountOrderByAggregateInput;
    _avg?: Prisma.transcationsAvgOrderByAggregateInput;
    _max?: Prisma.transcationsMaxOrderByAggregateInput;
    _min?: Prisma.transcationsMinOrderByAggregateInput;
    _sum?: Prisma.transcationsSumOrderByAggregateInput;
};
export type transcationsScalarWhereWithAggregatesInput = {
    AND?: Prisma.transcationsScalarWhereWithAggregatesInput | Prisma.transcationsScalarWhereWithAggregatesInput[];
    OR?: Prisma.transcationsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.transcationsScalarWhereWithAggregatesInput | Prisma.transcationsScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"transcations"> | bigint | number;
    type_id?: Prisma.BigIntWithAggregatesFilter<"transcations"> | bigint | number;
    name?: Prisma.StringWithAggregatesFilter<"transcations"> | string;
    quantity?: Prisma.IntWithAggregatesFilter<"transcations"> | number;
    price?: Prisma.IntWithAggregatesFilter<"transcations"> | number;
    final_price?: Prisma.IntWithAggregatesFilter<"transcations"> | number;
    unit?: Prisma.StringWithAggregatesFilter<"transcations"> | string;
    status?: Prisma.StringWithAggregatesFilter<"transcations"> | string;
    jatuh_tempo?: Prisma.DateTimeNullableWithAggregatesFilter<"transcations"> | Date | string | null;
    paid_at?: Prisma.DateTimeNullableWithAggregatesFilter<"transcations"> | Date | string | null;
    note?: Prisma.StringNullableWithAggregatesFilter<"transcations"> | string | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"transcations"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"transcations"> | Date | string | null;
};
export type transcationsCreateInput = {
    id?: bigint | number;
    type_id: bigint | number;
    name: string;
    quantity: number;
    price: number;
    final_price: number;
    unit: string;
    status: string;
    jatuh_tempo?: Date | string | null;
    paid_at?: Date | string | null;
    note?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type transcationsUncheckedCreateInput = {
    id?: bigint | number;
    type_id: bigint | number;
    name: string;
    quantity: number;
    price: number;
    final_price: number;
    unit: string;
    status: string;
    jatuh_tempo?: Date | string | null;
    paid_at?: Date | string | null;
    note?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type transcationsUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    type_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    final_price?: Prisma.IntFieldUpdateOperationsInput | number;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    jatuh_tempo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type transcationsUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    type_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    final_price?: Prisma.IntFieldUpdateOperationsInput | number;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    jatuh_tempo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type transcationsCreateManyInput = {
    id?: bigint | number;
    type_id: bigint | number;
    name: string;
    quantity: number;
    price: number;
    final_price: number;
    unit: string;
    status: string;
    jatuh_tempo?: Date | string | null;
    paid_at?: Date | string | null;
    note?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type transcationsUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    type_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    final_price?: Prisma.IntFieldUpdateOperationsInput | number;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    jatuh_tempo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type transcationsUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    type_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    final_price?: Prisma.IntFieldUpdateOperationsInput | number;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    jatuh_tempo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type transcationsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    final_price?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    jatuh_tempo?: Prisma.SortOrder;
    paid_at?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type transcationsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    final_price?: Prisma.SortOrder;
};
export type transcationsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    final_price?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    jatuh_tempo?: Prisma.SortOrder;
    paid_at?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type transcationsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    final_price?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    jatuh_tempo?: Prisma.SortOrder;
    paid_at?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type transcationsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    final_price?: Prisma.SortOrder;
};
export type transcationsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type_id?: boolean;
    name?: boolean;
    quantity?: boolean;
    price?: boolean;
    final_price?: boolean;
    unit?: boolean;
    status?: boolean;
    jatuh_tempo?: boolean;
    paid_at?: boolean;
    note?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["transcations"]>;
export type transcationsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type_id?: boolean;
    name?: boolean;
    quantity?: boolean;
    price?: boolean;
    final_price?: boolean;
    unit?: boolean;
    status?: boolean;
    jatuh_tempo?: boolean;
    paid_at?: boolean;
    note?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["transcations"]>;
export type transcationsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type_id?: boolean;
    name?: boolean;
    quantity?: boolean;
    price?: boolean;
    final_price?: boolean;
    unit?: boolean;
    status?: boolean;
    jatuh_tempo?: boolean;
    paid_at?: boolean;
    note?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["transcations"]>;
export type transcationsSelectScalar = {
    id?: boolean;
    type_id?: boolean;
    name?: boolean;
    quantity?: boolean;
    price?: boolean;
    final_price?: boolean;
    unit?: boolean;
    status?: boolean;
    jatuh_tempo?: boolean;
    paid_at?: boolean;
    note?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type transcationsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "type_id" | "name" | "quantity" | "price" | "final_price" | "unit" | "status" | "jatuh_tempo" | "paid_at" | "note" | "created_at" | "updated_at", ExtArgs["result"]["transcations"]>;
export type $transcationsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "transcations";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        type_id: bigint;
        name: string;
        quantity: number;
        price: number;
        final_price: number;
        unit: string;
        status: string;
        jatuh_tempo: Date | null;
        paid_at: Date | null;
        note: string | null;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["transcations"]>;
    composites: {};
};
export type transcationsGetPayload<S extends boolean | null | undefined | transcationsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$transcationsPayload, S>;
export type transcationsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<transcationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TranscationsCountAggregateInputType | true;
};
export interface transcationsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['transcations'];
        meta: {
            name: 'transcations';
        };
    };
    findUnique<T extends transcationsFindUniqueArgs>(args: Prisma.SelectSubset<T, transcationsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__transcationsClient<runtime.Types.Result.GetResult<Prisma.$transcationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends transcationsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, transcationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__transcationsClient<runtime.Types.Result.GetResult<Prisma.$transcationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends transcationsFindFirstArgs>(args?: Prisma.SelectSubset<T, transcationsFindFirstArgs<ExtArgs>>): Prisma.Prisma__transcationsClient<runtime.Types.Result.GetResult<Prisma.$transcationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends transcationsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, transcationsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__transcationsClient<runtime.Types.Result.GetResult<Prisma.$transcationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends transcationsFindManyArgs>(args?: Prisma.SelectSubset<T, transcationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transcationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends transcationsCreateArgs>(args: Prisma.SelectSubset<T, transcationsCreateArgs<ExtArgs>>): Prisma.Prisma__transcationsClient<runtime.Types.Result.GetResult<Prisma.$transcationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends transcationsCreateManyArgs>(args?: Prisma.SelectSubset<T, transcationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends transcationsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, transcationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transcationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends transcationsDeleteArgs>(args: Prisma.SelectSubset<T, transcationsDeleteArgs<ExtArgs>>): Prisma.Prisma__transcationsClient<runtime.Types.Result.GetResult<Prisma.$transcationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends transcationsUpdateArgs>(args: Prisma.SelectSubset<T, transcationsUpdateArgs<ExtArgs>>): Prisma.Prisma__transcationsClient<runtime.Types.Result.GetResult<Prisma.$transcationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends transcationsDeleteManyArgs>(args?: Prisma.SelectSubset<T, transcationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends transcationsUpdateManyArgs>(args: Prisma.SelectSubset<T, transcationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends transcationsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, transcationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transcationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends transcationsUpsertArgs>(args: Prisma.SelectSubset<T, transcationsUpsertArgs<ExtArgs>>): Prisma.Prisma__transcationsClient<runtime.Types.Result.GetResult<Prisma.$transcationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends transcationsCountArgs>(args?: Prisma.Subset<T, transcationsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TranscationsCountAggregateOutputType> : number>;
    aggregate<T extends TranscationsAggregateArgs>(args: Prisma.Subset<T, TranscationsAggregateArgs>): Prisma.PrismaPromise<GetTranscationsAggregateType<T>>;
    groupBy<T extends transcationsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: transcationsGroupByArgs['orderBy'];
    } : {
        orderBy?: transcationsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, transcationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTranscationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: transcationsFieldRefs;
}
export interface Prisma__transcationsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface transcationsFieldRefs {
    readonly id: Prisma.FieldRef<"transcations", 'BigInt'>;
    readonly type_id: Prisma.FieldRef<"transcations", 'BigInt'>;
    readonly name: Prisma.FieldRef<"transcations", 'String'>;
    readonly quantity: Prisma.FieldRef<"transcations", 'Int'>;
    readonly price: Prisma.FieldRef<"transcations", 'Int'>;
    readonly final_price: Prisma.FieldRef<"transcations", 'Int'>;
    readonly unit: Prisma.FieldRef<"transcations", 'String'>;
    readonly status: Prisma.FieldRef<"transcations", 'String'>;
    readonly jatuh_tempo: Prisma.FieldRef<"transcations", 'DateTime'>;
    readonly paid_at: Prisma.FieldRef<"transcations", 'DateTime'>;
    readonly note: Prisma.FieldRef<"transcations", 'String'>;
    readonly created_at: Prisma.FieldRef<"transcations", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"transcations", 'DateTime'>;
}
export type transcationsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.transcationsSelect<ExtArgs> | null;
    omit?: Prisma.transcationsOmit<ExtArgs> | null;
    where: Prisma.transcationsWhereUniqueInput;
};
export type transcationsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.transcationsSelect<ExtArgs> | null;
    omit?: Prisma.transcationsOmit<ExtArgs> | null;
    where: Prisma.transcationsWhereUniqueInput;
};
export type transcationsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.transcationsSelect<ExtArgs> | null;
    omit?: Prisma.transcationsOmit<ExtArgs> | null;
    where?: Prisma.transcationsWhereInput;
    orderBy?: Prisma.transcationsOrderByWithRelationInput | Prisma.transcationsOrderByWithRelationInput[];
    cursor?: Prisma.transcationsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TranscationsScalarFieldEnum | Prisma.TranscationsScalarFieldEnum[];
};
export type transcationsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.transcationsSelect<ExtArgs> | null;
    omit?: Prisma.transcationsOmit<ExtArgs> | null;
    where?: Prisma.transcationsWhereInput;
    orderBy?: Prisma.transcationsOrderByWithRelationInput | Prisma.transcationsOrderByWithRelationInput[];
    cursor?: Prisma.transcationsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TranscationsScalarFieldEnum | Prisma.TranscationsScalarFieldEnum[];
};
export type transcationsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.transcationsSelect<ExtArgs> | null;
    omit?: Prisma.transcationsOmit<ExtArgs> | null;
    where?: Prisma.transcationsWhereInput;
    orderBy?: Prisma.transcationsOrderByWithRelationInput | Prisma.transcationsOrderByWithRelationInput[];
    cursor?: Prisma.transcationsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TranscationsScalarFieldEnum | Prisma.TranscationsScalarFieldEnum[];
};
export type transcationsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.transcationsSelect<ExtArgs> | null;
    omit?: Prisma.transcationsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.transcationsCreateInput, Prisma.transcationsUncheckedCreateInput>;
};
export type transcationsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.transcationsCreateManyInput | Prisma.transcationsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type transcationsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.transcationsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.transcationsOmit<ExtArgs> | null;
    data: Prisma.transcationsCreateManyInput | Prisma.transcationsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type transcationsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.transcationsSelect<ExtArgs> | null;
    omit?: Prisma.transcationsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.transcationsUpdateInput, Prisma.transcationsUncheckedUpdateInput>;
    where: Prisma.transcationsWhereUniqueInput;
};
export type transcationsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.transcationsUpdateManyMutationInput, Prisma.transcationsUncheckedUpdateManyInput>;
    where?: Prisma.transcationsWhereInput;
    limit?: number;
};
export type transcationsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.transcationsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.transcationsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.transcationsUpdateManyMutationInput, Prisma.transcationsUncheckedUpdateManyInput>;
    where?: Prisma.transcationsWhereInput;
    limit?: number;
};
export type transcationsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.transcationsSelect<ExtArgs> | null;
    omit?: Prisma.transcationsOmit<ExtArgs> | null;
    where: Prisma.transcationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.transcationsCreateInput, Prisma.transcationsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.transcationsUpdateInput, Prisma.transcationsUncheckedUpdateInput>;
};
export type transcationsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.transcationsSelect<ExtArgs> | null;
    omit?: Prisma.transcationsOmit<ExtArgs> | null;
    where: Prisma.transcationsWhereUniqueInput;
};
export type transcationsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.transcationsWhereInput;
    limit?: number;
};
export type transcationsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.transcationsSelect<ExtArgs> | null;
    omit?: Prisma.transcationsOmit<ExtArgs> | null;
};
