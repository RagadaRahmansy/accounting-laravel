import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type contractorsModel = runtime.Types.Result.DefaultSelection<Prisma.$contractorsPayload>;
export type AggregateContractors = {
    _count: ContractorsCountAggregateOutputType | null;
    _avg: ContractorsAvgAggregateOutputType | null;
    _sum: ContractorsSumAggregateOutputType | null;
    _min: ContractorsMinAggregateOutputType | null;
    _max: ContractorsMaxAggregateOutputType | null;
};
export type ContractorsAvgAggregateOutputType = {
    id: number | null;
};
export type ContractorsSumAggregateOutputType = {
    id: bigint | null;
};
export type ContractorsMinAggregateOutputType = {
    id: bigint | null;
    contractor_name: string | null;
    contractor_wa: string | null;
    keterangan: string | null;
    interval: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type ContractorsMaxAggregateOutputType = {
    id: bigint | null;
    contractor_name: string | null;
    contractor_wa: string | null;
    keterangan: string | null;
    interval: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type ContractorsCountAggregateOutputType = {
    id: number;
    contractor_name: number;
    contractor_wa: number;
    keterangan: number;
    interval: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type ContractorsAvgAggregateInputType = {
    id?: true;
};
export type ContractorsSumAggregateInputType = {
    id?: true;
};
export type ContractorsMinAggregateInputType = {
    id?: true;
    contractor_name?: true;
    contractor_wa?: true;
    keterangan?: true;
    interval?: true;
    created_at?: true;
    updated_at?: true;
};
export type ContractorsMaxAggregateInputType = {
    id?: true;
    contractor_name?: true;
    contractor_wa?: true;
    keterangan?: true;
    interval?: true;
    created_at?: true;
    updated_at?: true;
};
export type ContractorsCountAggregateInputType = {
    id?: true;
    contractor_name?: true;
    contractor_wa?: true;
    keterangan?: true;
    interval?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type ContractorsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.contractorsWhereInput;
    orderBy?: Prisma.contractorsOrderByWithRelationInput | Prisma.contractorsOrderByWithRelationInput[];
    cursor?: Prisma.contractorsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ContractorsCountAggregateInputType;
    _avg?: ContractorsAvgAggregateInputType;
    _sum?: ContractorsSumAggregateInputType;
    _min?: ContractorsMinAggregateInputType;
    _max?: ContractorsMaxAggregateInputType;
};
export type GetContractorsAggregateType<T extends ContractorsAggregateArgs> = {
    [P in keyof T & keyof AggregateContractors]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateContractors[P]> : Prisma.GetScalarType<T[P], AggregateContractors[P]>;
};
export type contractorsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.contractorsWhereInput;
    orderBy?: Prisma.contractorsOrderByWithAggregationInput | Prisma.contractorsOrderByWithAggregationInput[];
    by: Prisma.ContractorsScalarFieldEnum[] | Prisma.ContractorsScalarFieldEnum;
    having?: Prisma.contractorsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContractorsCountAggregateInputType | true;
    _avg?: ContractorsAvgAggregateInputType;
    _sum?: ContractorsSumAggregateInputType;
    _min?: ContractorsMinAggregateInputType;
    _max?: ContractorsMaxAggregateInputType;
};
export type ContractorsGroupByOutputType = {
    id: bigint;
    contractor_name: string;
    contractor_wa: string;
    keterangan: string;
    interval: string;
    created_at: Date | null;
    updated_at: Date | null;
    _count: ContractorsCountAggregateOutputType | null;
    _avg: ContractorsAvgAggregateOutputType | null;
    _sum: ContractorsSumAggregateOutputType | null;
    _min: ContractorsMinAggregateOutputType | null;
    _max: ContractorsMaxAggregateOutputType | null;
};
export type GetContractorsGroupByPayload<T extends contractorsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ContractorsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ContractorsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ContractorsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ContractorsGroupByOutputType[P]>;
}>>;
export type contractorsWhereInput = {
    AND?: Prisma.contractorsWhereInput | Prisma.contractorsWhereInput[];
    OR?: Prisma.contractorsWhereInput[];
    NOT?: Prisma.contractorsWhereInput | Prisma.contractorsWhereInput[];
    id?: Prisma.BigIntFilter<"contractors"> | bigint | number;
    contractor_name?: Prisma.StringFilter<"contractors"> | string;
    contractor_wa?: Prisma.StringFilter<"contractors"> | string;
    keterangan?: Prisma.StringFilter<"contractors"> | string;
    interval?: Prisma.StringFilter<"contractors"> | string;
    created_at?: Prisma.DateTimeNullableFilter<"contractors"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"contractors"> | Date | string | null;
};
export type contractorsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    contractor_name?: Prisma.SortOrder;
    contractor_wa?: Prisma.SortOrder;
    keterangan?: Prisma.SortOrder;
    interval?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type contractorsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.contractorsWhereInput | Prisma.contractorsWhereInput[];
    OR?: Prisma.contractorsWhereInput[];
    NOT?: Prisma.contractorsWhereInput | Prisma.contractorsWhereInput[];
    contractor_name?: Prisma.StringFilter<"contractors"> | string;
    contractor_wa?: Prisma.StringFilter<"contractors"> | string;
    keterangan?: Prisma.StringFilter<"contractors"> | string;
    interval?: Prisma.StringFilter<"contractors"> | string;
    created_at?: Prisma.DateTimeNullableFilter<"contractors"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"contractors"> | Date | string | null;
}, "id">;
export type contractorsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    contractor_name?: Prisma.SortOrder;
    contractor_wa?: Prisma.SortOrder;
    keterangan?: Prisma.SortOrder;
    interval?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.contractorsCountOrderByAggregateInput;
    _avg?: Prisma.contractorsAvgOrderByAggregateInput;
    _max?: Prisma.contractorsMaxOrderByAggregateInput;
    _min?: Prisma.contractorsMinOrderByAggregateInput;
    _sum?: Prisma.contractorsSumOrderByAggregateInput;
};
export type contractorsScalarWhereWithAggregatesInput = {
    AND?: Prisma.contractorsScalarWhereWithAggregatesInput | Prisma.contractorsScalarWhereWithAggregatesInput[];
    OR?: Prisma.contractorsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.contractorsScalarWhereWithAggregatesInput | Prisma.contractorsScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"contractors"> | bigint | number;
    contractor_name?: Prisma.StringWithAggregatesFilter<"contractors"> | string;
    contractor_wa?: Prisma.StringWithAggregatesFilter<"contractors"> | string;
    keterangan?: Prisma.StringWithAggregatesFilter<"contractors"> | string;
    interval?: Prisma.StringWithAggregatesFilter<"contractors"> | string;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"contractors"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"contractors"> | Date | string | null;
};
export type contractorsCreateInput = {
    id?: bigint | number;
    contractor_name: string;
    contractor_wa: string;
    keterangan: string;
    interval: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type contractorsUncheckedCreateInput = {
    id?: bigint | number;
    contractor_name: string;
    contractor_wa: string;
    keterangan: string;
    interval: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type contractorsUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    contractor_name?: Prisma.StringFieldUpdateOperationsInput | string;
    contractor_wa?: Prisma.StringFieldUpdateOperationsInput | string;
    keterangan?: Prisma.StringFieldUpdateOperationsInput | string;
    interval?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type contractorsUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    contractor_name?: Prisma.StringFieldUpdateOperationsInput | string;
    contractor_wa?: Prisma.StringFieldUpdateOperationsInput | string;
    keterangan?: Prisma.StringFieldUpdateOperationsInput | string;
    interval?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type contractorsCreateManyInput = {
    id?: bigint | number;
    contractor_name: string;
    contractor_wa: string;
    keterangan: string;
    interval: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type contractorsUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    contractor_name?: Prisma.StringFieldUpdateOperationsInput | string;
    contractor_wa?: Prisma.StringFieldUpdateOperationsInput | string;
    keterangan?: Prisma.StringFieldUpdateOperationsInput | string;
    interval?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type contractorsUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    contractor_name?: Prisma.StringFieldUpdateOperationsInput | string;
    contractor_wa?: Prisma.StringFieldUpdateOperationsInput | string;
    keterangan?: Prisma.StringFieldUpdateOperationsInput | string;
    interval?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type contractorsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contractor_name?: Prisma.SortOrder;
    contractor_wa?: Prisma.SortOrder;
    keterangan?: Prisma.SortOrder;
    interval?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type contractorsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type contractorsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contractor_name?: Prisma.SortOrder;
    contractor_wa?: Prisma.SortOrder;
    keterangan?: Prisma.SortOrder;
    interval?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type contractorsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contractor_name?: Prisma.SortOrder;
    contractor_wa?: Prisma.SortOrder;
    keterangan?: Prisma.SortOrder;
    interval?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type contractorsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type contractorsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contractor_name?: boolean;
    contractor_wa?: boolean;
    keterangan?: boolean;
    interval?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["contractors"]>;
export type contractorsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contractor_name?: boolean;
    contractor_wa?: boolean;
    keterangan?: boolean;
    interval?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["contractors"]>;
export type contractorsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contractor_name?: boolean;
    contractor_wa?: boolean;
    keterangan?: boolean;
    interval?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["contractors"]>;
export type contractorsSelectScalar = {
    id?: boolean;
    contractor_name?: boolean;
    contractor_wa?: boolean;
    keterangan?: boolean;
    interval?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type contractorsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "contractor_name" | "contractor_wa" | "keterangan" | "interval" | "created_at" | "updated_at", ExtArgs["result"]["contractors"]>;
export type $contractorsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "contractors";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        contractor_name: string;
        contractor_wa: string;
        keterangan: string;
        interval: string;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["contractors"]>;
    composites: {};
};
export type contractorsGetPayload<S extends boolean | null | undefined | contractorsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$contractorsPayload, S>;
export type contractorsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<contractorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ContractorsCountAggregateInputType | true;
};
export interface contractorsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['contractors'];
        meta: {
            name: 'contractors';
        };
    };
    findUnique<T extends contractorsFindUniqueArgs>(args: Prisma.SelectSubset<T, contractorsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__contractorsClient<runtime.Types.Result.GetResult<Prisma.$contractorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends contractorsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, contractorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__contractorsClient<runtime.Types.Result.GetResult<Prisma.$contractorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends contractorsFindFirstArgs>(args?: Prisma.SelectSubset<T, contractorsFindFirstArgs<ExtArgs>>): Prisma.Prisma__contractorsClient<runtime.Types.Result.GetResult<Prisma.$contractorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends contractorsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, contractorsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__contractorsClient<runtime.Types.Result.GetResult<Prisma.$contractorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends contractorsFindManyArgs>(args?: Prisma.SelectSubset<T, contractorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$contractorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends contractorsCreateArgs>(args: Prisma.SelectSubset<T, contractorsCreateArgs<ExtArgs>>): Prisma.Prisma__contractorsClient<runtime.Types.Result.GetResult<Prisma.$contractorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends contractorsCreateManyArgs>(args?: Prisma.SelectSubset<T, contractorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends contractorsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, contractorsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$contractorsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends contractorsDeleteArgs>(args: Prisma.SelectSubset<T, contractorsDeleteArgs<ExtArgs>>): Prisma.Prisma__contractorsClient<runtime.Types.Result.GetResult<Prisma.$contractorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends contractorsUpdateArgs>(args: Prisma.SelectSubset<T, contractorsUpdateArgs<ExtArgs>>): Prisma.Prisma__contractorsClient<runtime.Types.Result.GetResult<Prisma.$contractorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends contractorsDeleteManyArgs>(args?: Prisma.SelectSubset<T, contractorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends contractorsUpdateManyArgs>(args: Prisma.SelectSubset<T, contractorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends contractorsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, contractorsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$contractorsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends contractorsUpsertArgs>(args: Prisma.SelectSubset<T, contractorsUpsertArgs<ExtArgs>>): Prisma.Prisma__contractorsClient<runtime.Types.Result.GetResult<Prisma.$contractorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends contractorsCountArgs>(args?: Prisma.Subset<T, contractorsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ContractorsCountAggregateOutputType> : number>;
    aggregate<T extends ContractorsAggregateArgs>(args: Prisma.Subset<T, ContractorsAggregateArgs>): Prisma.PrismaPromise<GetContractorsAggregateType<T>>;
    groupBy<T extends contractorsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: contractorsGroupByArgs['orderBy'];
    } : {
        orderBy?: contractorsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, contractorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: contractorsFieldRefs;
}
export interface Prisma__contractorsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface contractorsFieldRefs {
    readonly id: Prisma.FieldRef<"contractors", 'BigInt'>;
    readonly contractor_name: Prisma.FieldRef<"contractors", 'String'>;
    readonly contractor_wa: Prisma.FieldRef<"contractors", 'String'>;
    readonly keterangan: Prisma.FieldRef<"contractors", 'String'>;
    readonly interval: Prisma.FieldRef<"contractors", 'String'>;
    readonly created_at: Prisma.FieldRef<"contractors", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"contractors", 'DateTime'>;
}
export type contractorsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contractorsSelect<ExtArgs> | null;
    omit?: Prisma.contractorsOmit<ExtArgs> | null;
    where: Prisma.contractorsWhereUniqueInput;
};
export type contractorsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contractorsSelect<ExtArgs> | null;
    omit?: Prisma.contractorsOmit<ExtArgs> | null;
    where: Prisma.contractorsWhereUniqueInput;
};
export type contractorsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contractorsSelect<ExtArgs> | null;
    omit?: Prisma.contractorsOmit<ExtArgs> | null;
    where?: Prisma.contractorsWhereInput;
    orderBy?: Prisma.contractorsOrderByWithRelationInput | Prisma.contractorsOrderByWithRelationInput[];
    cursor?: Prisma.contractorsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContractorsScalarFieldEnum | Prisma.ContractorsScalarFieldEnum[];
};
export type contractorsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contractorsSelect<ExtArgs> | null;
    omit?: Prisma.contractorsOmit<ExtArgs> | null;
    where?: Prisma.contractorsWhereInput;
    orderBy?: Prisma.contractorsOrderByWithRelationInput | Prisma.contractorsOrderByWithRelationInput[];
    cursor?: Prisma.contractorsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContractorsScalarFieldEnum | Prisma.ContractorsScalarFieldEnum[];
};
export type contractorsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contractorsSelect<ExtArgs> | null;
    omit?: Prisma.contractorsOmit<ExtArgs> | null;
    where?: Prisma.contractorsWhereInput;
    orderBy?: Prisma.contractorsOrderByWithRelationInput | Prisma.contractorsOrderByWithRelationInput[];
    cursor?: Prisma.contractorsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContractorsScalarFieldEnum | Prisma.ContractorsScalarFieldEnum[];
};
export type contractorsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contractorsSelect<ExtArgs> | null;
    omit?: Prisma.contractorsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.contractorsCreateInput, Prisma.contractorsUncheckedCreateInput>;
};
export type contractorsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.contractorsCreateManyInput | Prisma.contractorsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type contractorsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contractorsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.contractorsOmit<ExtArgs> | null;
    data: Prisma.contractorsCreateManyInput | Prisma.contractorsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type contractorsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contractorsSelect<ExtArgs> | null;
    omit?: Prisma.contractorsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.contractorsUpdateInput, Prisma.contractorsUncheckedUpdateInput>;
    where: Prisma.contractorsWhereUniqueInput;
};
export type contractorsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.contractorsUpdateManyMutationInput, Prisma.contractorsUncheckedUpdateManyInput>;
    where?: Prisma.contractorsWhereInput;
    limit?: number;
};
export type contractorsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contractorsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.contractorsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.contractorsUpdateManyMutationInput, Prisma.contractorsUncheckedUpdateManyInput>;
    where?: Prisma.contractorsWhereInput;
    limit?: number;
};
export type contractorsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contractorsSelect<ExtArgs> | null;
    omit?: Prisma.contractorsOmit<ExtArgs> | null;
    where: Prisma.contractorsWhereUniqueInput;
    create: Prisma.XOR<Prisma.contractorsCreateInput, Prisma.contractorsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.contractorsUpdateInput, Prisma.contractorsUncheckedUpdateInput>;
};
export type contractorsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contractorsSelect<ExtArgs> | null;
    omit?: Prisma.contractorsOmit<ExtArgs> | null;
    where: Prisma.contractorsWhereUniqueInput;
};
export type contractorsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.contractorsWhereInput;
    limit?: number;
};
export type contractorsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contractorsSelect<ExtArgs> | null;
    omit?: Prisma.contractorsOmit<ExtArgs> | null;
};
