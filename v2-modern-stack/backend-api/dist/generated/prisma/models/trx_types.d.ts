import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type trx_typesModel = runtime.Types.Result.DefaultSelection<Prisma.$trx_typesPayload>;
export type AggregateTrx_types = {
    _count: Trx_typesCountAggregateOutputType | null;
    _avg: Trx_typesAvgAggregateOutputType | null;
    _sum: Trx_typesSumAggregateOutputType | null;
    _min: Trx_typesMinAggregateOutputType | null;
    _max: Trx_typesMaxAggregateOutputType | null;
};
export type Trx_typesAvgAggregateOutputType = {
    id: number | null;
};
export type Trx_typesSumAggregateOutputType = {
    id: bigint | null;
};
export type Trx_typesMinAggregateOutputType = {
    id: bigint | null;
    name: string | null;
    cash_flow: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Trx_typesMaxAggregateOutputType = {
    id: bigint | null;
    name: string | null;
    cash_flow: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Trx_typesCountAggregateOutputType = {
    id: number;
    name: number;
    cash_flow: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Trx_typesAvgAggregateInputType = {
    id?: true;
};
export type Trx_typesSumAggregateInputType = {
    id?: true;
};
export type Trx_typesMinAggregateInputType = {
    id?: true;
    name?: true;
    cash_flow?: true;
    created_at?: true;
    updated_at?: true;
};
export type Trx_typesMaxAggregateInputType = {
    id?: true;
    name?: true;
    cash_flow?: true;
    created_at?: true;
    updated_at?: true;
};
export type Trx_typesCountAggregateInputType = {
    id?: true;
    name?: true;
    cash_flow?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Trx_typesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.trx_typesWhereInput;
    orderBy?: Prisma.trx_typesOrderByWithRelationInput | Prisma.trx_typesOrderByWithRelationInput[];
    cursor?: Prisma.trx_typesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Trx_typesCountAggregateInputType;
    _avg?: Trx_typesAvgAggregateInputType;
    _sum?: Trx_typesSumAggregateInputType;
    _min?: Trx_typesMinAggregateInputType;
    _max?: Trx_typesMaxAggregateInputType;
};
export type GetTrx_typesAggregateType<T extends Trx_typesAggregateArgs> = {
    [P in keyof T & keyof AggregateTrx_types]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTrx_types[P]> : Prisma.GetScalarType<T[P], AggregateTrx_types[P]>;
};
export type trx_typesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.trx_typesWhereInput;
    orderBy?: Prisma.trx_typesOrderByWithAggregationInput | Prisma.trx_typesOrderByWithAggregationInput[];
    by: Prisma.Trx_typesScalarFieldEnum[] | Prisma.Trx_typesScalarFieldEnum;
    having?: Prisma.trx_typesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Trx_typesCountAggregateInputType | true;
    _avg?: Trx_typesAvgAggregateInputType;
    _sum?: Trx_typesSumAggregateInputType;
    _min?: Trx_typesMinAggregateInputType;
    _max?: Trx_typesMaxAggregateInputType;
};
export type Trx_typesGroupByOutputType = {
    id: bigint;
    name: string;
    cash_flow: string;
    created_at: Date | null;
    updated_at: Date | null;
    _count: Trx_typesCountAggregateOutputType | null;
    _avg: Trx_typesAvgAggregateOutputType | null;
    _sum: Trx_typesSumAggregateOutputType | null;
    _min: Trx_typesMinAggregateOutputType | null;
    _max: Trx_typesMaxAggregateOutputType | null;
};
export type GetTrx_typesGroupByPayload<T extends trx_typesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Trx_typesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Trx_typesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Trx_typesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Trx_typesGroupByOutputType[P]>;
}>>;
export type trx_typesWhereInput = {
    AND?: Prisma.trx_typesWhereInput | Prisma.trx_typesWhereInput[];
    OR?: Prisma.trx_typesWhereInput[];
    NOT?: Prisma.trx_typesWhereInput | Prisma.trx_typesWhereInput[];
    id?: Prisma.BigIntFilter<"trx_types"> | bigint | number;
    name?: Prisma.StringFilter<"trx_types"> | string;
    cash_flow?: Prisma.StringFilter<"trx_types"> | string;
    created_at?: Prisma.DateTimeNullableFilter<"trx_types"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"trx_types"> | Date | string | null;
};
export type trx_typesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    cash_flow?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type trx_typesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.trx_typesWhereInput | Prisma.trx_typesWhereInput[];
    OR?: Prisma.trx_typesWhereInput[];
    NOT?: Prisma.trx_typesWhereInput | Prisma.trx_typesWhereInput[];
    name?: Prisma.StringFilter<"trx_types"> | string;
    cash_flow?: Prisma.StringFilter<"trx_types"> | string;
    created_at?: Prisma.DateTimeNullableFilter<"trx_types"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"trx_types"> | Date | string | null;
}, "id">;
export type trx_typesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    cash_flow?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.trx_typesCountOrderByAggregateInput;
    _avg?: Prisma.trx_typesAvgOrderByAggregateInput;
    _max?: Prisma.trx_typesMaxOrderByAggregateInput;
    _min?: Prisma.trx_typesMinOrderByAggregateInput;
    _sum?: Prisma.trx_typesSumOrderByAggregateInput;
};
export type trx_typesScalarWhereWithAggregatesInput = {
    AND?: Prisma.trx_typesScalarWhereWithAggregatesInput | Prisma.trx_typesScalarWhereWithAggregatesInput[];
    OR?: Prisma.trx_typesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.trx_typesScalarWhereWithAggregatesInput | Prisma.trx_typesScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"trx_types"> | bigint | number;
    name?: Prisma.StringWithAggregatesFilter<"trx_types"> | string;
    cash_flow?: Prisma.StringWithAggregatesFilter<"trx_types"> | string;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"trx_types"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"trx_types"> | Date | string | null;
};
export type trx_typesCreateInput = {
    id?: bigint | number;
    name: string;
    cash_flow: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type trx_typesUncheckedCreateInput = {
    id?: bigint | number;
    name: string;
    cash_flow: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type trx_typesUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_flow?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type trx_typesUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_flow?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type trx_typesCreateManyInput = {
    id?: bigint | number;
    name: string;
    cash_flow: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type trx_typesUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_flow?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type trx_typesUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_flow?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type trx_typesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    cash_flow?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type trx_typesAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type trx_typesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    cash_flow?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type trx_typesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    cash_flow?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type trx_typesSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type trx_typesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    cash_flow?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["trx_types"]>;
export type trx_typesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    cash_flow?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["trx_types"]>;
export type trx_typesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    cash_flow?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["trx_types"]>;
export type trx_typesSelectScalar = {
    id?: boolean;
    name?: boolean;
    cash_flow?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type trx_typesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "cash_flow" | "created_at" | "updated_at", ExtArgs["result"]["trx_types"]>;
export type $trx_typesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "trx_types";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        name: string;
        cash_flow: string;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["trx_types"]>;
    composites: {};
};
export type trx_typesGetPayload<S extends boolean | null | undefined | trx_typesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$trx_typesPayload, S>;
export type trx_typesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<trx_typesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Trx_typesCountAggregateInputType | true;
};
export interface trx_typesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['trx_types'];
        meta: {
            name: 'trx_types';
        };
    };
    findUnique<T extends trx_typesFindUniqueArgs>(args: Prisma.SelectSubset<T, trx_typesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__trx_typesClient<runtime.Types.Result.GetResult<Prisma.$trx_typesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends trx_typesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, trx_typesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__trx_typesClient<runtime.Types.Result.GetResult<Prisma.$trx_typesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends trx_typesFindFirstArgs>(args?: Prisma.SelectSubset<T, trx_typesFindFirstArgs<ExtArgs>>): Prisma.Prisma__trx_typesClient<runtime.Types.Result.GetResult<Prisma.$trx_typesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends trx_typesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, trx_typesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__trx_typesClient<runtime.Types.Result.GetResult<Prisma.$trx_typesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends trx_typesFindManyArgs>(args?: Prisma.SelectSubset<T, trx_typesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$trx_typesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends trx_typesCreateArgs>(args: Prisma.SelectSubset<T, trx_typesCreateArgs<ExtArgs>>): Prisma.Prisma__trx_typesClient<runtime.Types.Result.GetResult<Prisma.$trx_typesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends trx_typesCreateManyArgs>(args?: Prisma.SelectSubset<T, trx_typesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends trx_typesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, trx_typesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$trx_typesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends trx_typesDeleteArgs>(args: Prisma.SelectSubset<T, trx_typesDeleteArgs<ExtArgs>>): Prisma.Prisma__trx_typesClient<runtime.Types.Result.GetResult<Prisma.$trx_typesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends trx_typesUpdateArgs>(args: Prisma.SelectSubset<T, trx_typesUpdateArgs<ExtArgs>>): Prisma.Prisma__trx_typesClient<runtime.Types.Result.GetResult<Prisma.$trx_typesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends trx_typesDeleteManyArgs>(args?: Prisma.SelectSubset<T, trx_typesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends trx_typesUpdateManyArgs>(args: Prisma.SelectSubset<T, trx_typesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends trx_typesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, trx_typesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$trx_typesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends trx_typesUpsertArgs>(args: Prisma.SelectSubset<T, trx_typesUpsertArgs<ExtArgs>>): Prisma.Prisma__trx_typesClient<runtime.Types.Result.GetResult<Prisma.$trx_typesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends trx_typesCountArgs>(args?: Prisma.Subset<T, trx_typesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Trx_typesCountAggregateOutputType> : number>;
    aggregate<T extends Trx_typesAggregateArgs>(args: Prisma.Subset<T, Trx_typesAggregateArgs>): Prisma.PrismaPromise<GetTrx_typesAggregateType<T>>;
    groupBy<T extends trx_typesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: trx_typesGroupByArgs['orderBy'];
    } : {
        orderBy?: trx_typesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, trx_typesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrx_typesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: trx_typesFieldRefs;
}
export interface Prisma__trx_typesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface trx_typesFieldRefs {
    readonly id: Prisma.FieldRef<"trx_types", 'BigInt'>;
    readonly name: Prisma.FieldRef<"trx_types", 'String'>;
    readonly cash_flow: Prisma.FieldRef<"trx_types", 'String'>;
    readonly created_at: Prisma.FieldRef<"trx_types", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"trx_types", 'DateTime'>;
}
export type trx_typesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.trx_typesSelect<ExtArgs> | null;
    omit?: Prisma.trx_typesOmit<ExtArgs> | null;
    where: Prisma.trx_typesWhereUniqueInput;
};
export type trx_typesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.trx_typesSelect<ExtArgs> | null;
    omit?: Prisma.trx_typesOmit<ExtArgs> | null;
    where: Prisma.trx_typesWhereUniqueInput;
};
export type trx_typesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.trx_typesSelect<ExtArgs> | null;
    omit?: Prisma.trx_typesOmit<ExtArgs> | null;
    where?: Prisma.trx_typesWhereInput;
    orderBy?: Prisma.trx_typesOrderByWithRelationInput | Prisma.trx_typesOrderByWithRelationInput[];
    cursor?: Prisma.trx_typesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Trx_typesScalarFieldEnum | Prisma.Trx_typesScalarFieldEnum[];
};
export type trx_typesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.trx_typesSelect<ExtArgs> | null;
    omit?: Prisma.trx_typesOmit<ExtArgs> | null;
    where?: Prisma.trx_typesWhereInput;
    orderBy?: Prisma.trx_typesOrderByWithRelationInput | Prisma.trx_typesOrderByWithRelationInput[];
    cursor?: Prisma.trx_typesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Trx_typesScalarFieldEnum | Prisma.Trx_typesScalarFieldEnum[];
};
export type trx_typesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.trx_typesSelect<ExtArgs> | null;
    omit?: Prisma.trx_typesOmit<ExtArgs> | null;
    where?: Prisma.trx_typesWhereInput;
    orderBy?: Prisma.trx_typesOrderByWithRelationInput | Prisma.trx_typesOrderByWithRelationInput[];
    cursor?: Prisma.trx_typesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Trx_typesScalarFieldEnum | Prisma.Trx_typesScalarFieldEnum[];
};
export type trx_typesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.trx_typesSelect<ExtArgs> | null;
    omit?: Prisma.trx_typesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.trx_typesCreateInput, Prisma.trx_typesUncheckedCreateInput>;
};
export type trx_typesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.trx_typesCreateManyInput | Prisma.trx_typesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type trx_typesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.trx_typesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.trx_typesOmit<ExtArgs> | null;
    data: Prisma.trx_typesCreateManyInput | Prisma.trx_typesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type trx_typesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.trx_typesSelect<ExtArgs> | null;
    omit?: Prisma.trx_typesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.trx_typesUpdateInput, Prisma.trx_typesUncheckedUpdateInput>;
    where: Prisma.trx_typesWhereUniqueInput;
};
export type trx_typesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.trx_typesUpdateManyMutationInput, Prisma.trx_typesUncheckedUpdateManyInput>;
    where?: Prisma.trx_typesWhereInput;
    limit?: number;
};
export type trx_typesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.trx_typesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.trx_typesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.trx_typesUpdateManyMutationInput, Prisma.trx_typesUncheckedUpdateManyInput>;
    where?: Prisma.trx_typesWhereInput;
    limit?: number;
};
export type trx_typesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.trx_typesSelect<ExtArgs> | null;
    omit?: Prisma.trx_typesOmit<ExtArgs> | null;
    where: Prisma.trx_typesWhereUniqueInput;
    create: Prisma.XOR<Prisma.trx_typesCreateInput, Prisma.trx_typesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.trx_typesUpdateInput, Prisma.trx_typesUncheckedUpdateInput>;
};
export type trx_typesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.trx_typesSelect<ExtArgs> | null;
    omit?: Prisma.trx_typesOmit<ExtArgs> | null;
    where: Prisma.trx_typesWhereUniqueInput;
};
export type trx_typesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.trx_typesWhereInput;
    limit?: number;
};
export type trx_typesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.trx_typesSelect<ExtArgs> | null;
    omit?: Prisma.trx_typesOmit<ExtArgs> | null;
};
