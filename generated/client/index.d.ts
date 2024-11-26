
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Evacuee
 * 
 */
export type Evacuee = $Result.DefaultSelection<Prisma.$EvacueePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Evacuees
 * const evacuees = await prisma.evacuee.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Evacuees
   * const evacuees = await prisma.evacuee.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.evacuee`: Exposes CRUD operations for the **Evacuee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Evacuees
    * const evacuees = await prisma.evacuee.findMany()
    * ```
    */
  get evacuee(): Prisma.EvacueeDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Evacuee: 'Evacuee'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "evacuee"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Evacuee: {
        payload: Prisma.$EvacueePayload<ExtArgs>
        fields: Prisma.EvacueeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EvacueeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvacueePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EvacueeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvacueePayload>
          }
          findFirst: {
            args: Prisma.EvacueeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvacueePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EvacueeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvacueePayload>
          }
          findMany: {
            args: Prisma.EvacueeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvacueePayload>[]
          }
          create: {
            args: Prisma.EvacueeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvacueePayload>
          }
          createMany: {
            args: Prisma.EvacueeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EvacueeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvacueePayload>[]
          }
          delete: {
            args: Prisma.EvacueeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvacueePayload>
          }
          update: {
            args: Prisma.EvacueeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvacueePayload>
          }
          deleteMany: {
            args: Prisma.EvacueeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EvacueeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EvacueeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvacueePayload>
          }
          aggregate: {
            args: Prisma.EvacueeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvacuee>
          }
          groupBy: {
            args: Prisma.EvacueeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EvacueeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EvacueeCountArgs<ExtArgs>
            result: $Utils.Optional<EvacueeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Evacuee
   */

  export type AggregateEvacuee = {
    _count: EvacueeCountAggregateOutputType | null
    _min: EvacueeMinAggregateOutputType | null
    _max: EvacueeMaxAggregateOutputType | null
  }

  export type EvacueeMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    birthDate: Date | null
    gender: string | null
    requiresSupport: boolean | null
    healthCondition: string | null
    medicalNeeds: string | null
    allergy: string | null
    specialNotes: string | null
    publicInfo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EvacueeMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    birthDate: Date | null
    gender: string | null
    requiresSupport: boolean | null
    healthCondition: string | null
    medicalNeeds: string | null
    allergy: string | null
    specialNotes: string | null
    publicInfo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EvacueeCountAggregateOutputType = {
    id: number
    fullName: number
    birthDate: number
    gender: number
    requiresSupport: number
    healthCondition: number
    medicalNeeds: number
    allergy: number
    specialNotes: number
    publicInfo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EvacueeMinAggregateInputType = {
    id?: true
    fullName?: true
    birthDate?: true
    gender?: true
    requiresSupport?: true
    healthCondition?: true
    medicalNeeds?: true
    allergy?: true
    specialNotes?: true
    publicInfo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EvacueeMaxAggregateInputType = {
    id?: true
    fullName?: true
    birthDate?: true
    gender?: true
    requiresSupport?: true
    healthCondition?: true
    medicalNeeds?: true
    allergy?: true
    specialNotes?: true
    publicInfo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EvacueeCountAggregateInputType = {
    id?: true
    fullName?: true
    birthDate?: true
    gender?: true
    requiresSupport?: true
    healthCondition?: true
    medicalNeeds?: true
    allergy?: true
    specialNotes?: true
    publicInfo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EvacueeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evacuee to aggregate.
     */
    where?: EvacueeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evacuees to fetch.
     */
    orderBy?: EvacueeOrderByWithRelationInput | EvacueeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EvacueeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evacuees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evacuees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Evacuees
    **/
    _count?: true | EvacueeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EvacueeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EvacueeMaxAggregateInputType
  }

  export type GetEvacueeAggregateType<T extends EvacueeAggregateArgs> = {
        [P in keyof T & keyof AggregateEvacuee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvacuee[P]>
      : GetScalarType<T[P], AggregateEvacuee[P]>
  }




  export type EvacueeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvacueeWhereInput
    orderBy?: EvacueeOrderByWithAggregationInput | EvacueeOrderByWithAggregationInput[]
    by: EvacueeScalarFieldEnum[] | EvacueeScalarFieldEnum
    having?: EvacueeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EvacueeCountAggregateInputType | true
    _min?: EvacueeMinAggregateInputType
    _max?: EvacueeMaxAggregateInputType
  }

  export type EvacueeGroupByOutputType = {
    id: string
    fullName: string
    birthDate: Date
    gender: string
    requiresSupport: boolean
    healthCondition: string
    medicalNeeds: string
    allergy: string
    specialNotes: string
    publicInfo: boolean
    createdAt: Date
    updatedAt: Date
    _count: EvacueeCountAggregateOutputType | null
    _min: EvacueeMinAggregateOutputType | null
    _max: EvacueeMaxAggregateOutputType | null
  }

  type GetEvacueeGroupByPayload<T extends EvacueeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EvacueeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EvacueeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EvacueeGroupByOutputType[P]>
            : GetScalarType<T[P], EvacueeGroupByOutputType[P]>
        }
      >
    >


  export type EvacueeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    birthDate?: boolean
    gender?: boolean
    requiresSupport?: boolean
    healthCondition?: boolean
    medicalNeeds?: boolean
    allergy?: boolean
    specialNotes?: boolean
    publicInfo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["evacuee"]>

  export type EvacueeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    birthDate?: boolean
    gender?: boolean
    requiresSupport?: boolean
    healthCondition?: boolean
    medicalNeeds?: boolean
    allergy?: boolean
    specialNotes?: boolean
    publicInfo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["evacuee"]>

  export type EvacueeSelectScalar = {
    id?: boolean
    fullName?: boolean
    birthDate?: boolean
    gender?: boolean
    requiresSupport?: boolean
    healthCondition?: boolean
    medicalNeeds?: boolean
    allergy?: boolean
    specialNotes?: boolean
    publicInfo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $EvacueePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Evacuee"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      birthDate: Date
      gender: string
      requiresSupport: boolean
      healthCondition: string
      medicalNeeds: string
      allergy: string
      specialNotes: string
      publicInfo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["evacuee"]>
    composites: {}
  }

  type EvacueeGetPayload<S extends boolean | null | undefined | EvacueeDefaultArgs> = $Result.GetResult<Prisma.$EvacueePayload, S>

  type EvacueeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EvacueeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EvacueeCountAggregateInputType | true
    }

  export interface EvacueeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Evacuee'], meta: { name: 'Evacuee' } }
    /**
     * Find zero or one Evacuee that matches the filter.
     * @param {EvacueeFindUniqueArgs} args - Arguments to find a Evacuee
     * @example
     * // Get one Evacuee
     * const evacuee = await prisma.evacuee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EvacueeFindUniqueArgs>(args: SelectSubset<T, EvacueeFindUniqueArgs<ExtArgs>>): Prisma__EvacueeClient<$Result.GetResult<Prisma.$EvacueePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Evacuee that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EvacueeFindUniqueOrThrowArgs} args - Arguments to find a Evacuee
     * @example
     * // Get one Evacuee
     * const evacuee = await prisma.evacuee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EvacueeFindUniqueOrThrowArgs>(args: SelectSubset<T, EvacueeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EvacueeClient<$Result.GetResult<Prisma.$EvacueePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Evacuee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvacueeFindFirstArgs} args - Arguments to find a Evacuee
     * @example
     * // Get one Evacuee
     * const evacuee = await prisma.evacuee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EvacueeFindFirstArgs>(args?: SelectSubset<T, EvacueeFindFirstArgs<ExtArgs>>): Prisma__EvacueeClient<$Result.GetResult<Prisma.$EvacueePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Evacuee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvacueeFindFirstOrThrowArgs} args - Arguments to find a Evacuee
     * @example
     * // Get one Evacuee
     * const evacuee = await prisma.evacuee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EvacueeFindFirstOrThrowArgs>(args?: SelectSubset<T, EvacueeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EvacueeClient<$Result.GetResult<Prisma.$EvacueePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Evacuees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvacueeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Evacuees
     * const evacuees = await prisma.evacuee.findMany()
     * 
     * // Get first 10 Evacuees
     * const evacuees = await prisma.evacuee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const evacueeWithIdOnly = await prisma.evacuee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EvacueeFindManyArgs>(args?: SelectSubset<T, EvacueeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvacueePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Evacuee.
     * @param {EvacueeCreateArgs} args - Arguments to create a Evacuee.
     * @example
     * // Create one Evacuee
     * const Evacuee = await prisma.evacuee.create({
     *   data: {
     *     // ... data to create a Evacuee
     *   }
     * })
     * 
     */
    create<T extends EvacueeCreateArgs>(args: SelectSubset<T, EvacueeCreateArgs<ExtArgs>>): Prisma__EvacueeClient<$Result.GetResult<Prisma.$EvacueePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Evacuees.
     * @param {EvacueeCreateManyArgs} args - Arguments to create many Evacuees.
     * @example
     * // Create many Evacuees
     * const evacuee = await prisma.evacuee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EvacueeCreateManyArgs>(args?: SelectSubset<T, EvacueeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Evacuees and returns the data saved in the database.
     * @param {EvacueeCreateManyAndReturnArgs} args - Arguments to create many Evacuees.
     * @example
     * // Create many Evacuees
     * const evacuee = await prisma.evacuee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Evacuees and only return the `id`
     * const evacueeWithIdOnly = await prisma.evacuee.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EvacueeCreateManyAndReturnArgs>(args?: SelectSubset<T, EvacueeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvacueePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Evacuee.
     * @param {EvacueeDeleteArgs} args - Arguments to delete one Evacuee.
     * @example
     * // Delete one Evacuee
     * const Evacuee = await prisma.evacuee.delete({
     *   where: {
     *     // ... filter to delete one Evacuee
     *   }
     * })
     * 
     */
    delete<T extends EvacueeDeleteArgs>(args: SelectSubset<T, EvacueeDeleteArgs<ExtArgs>>): Prisma__EvacueeClient<$Result.GetResult<Prisma.$EvacueePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Evacuee.
     * @param {EvacueeUpdateArgs} args - Arguments to update one Evacuee.
     * @example
     * // Update one Evacuee
     * const evacuee = await prisma.evacuee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EvacueeUpdateArgs>(args: SelectSubset<T, EvacueeUpdateArgs<ExtArgs>>): Prisma__EvacueeClient<$Result.GetResult<Prisma.$EvacueePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Evacuees.
     * @param {EvacueeDeleteManyArgs} args - Arguments to filter Evacuees to delete.
     * @example
     * // Delete a few Evacuees
     * const { count } = await prisma.evacuee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EvacueeDeleteManyArgs>(args?: SelectSubset<T, EvacueeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evacuees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvacueeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Evacuees
     * const evacuee = await prisma.evacuee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EvacueeUpdateManyArgs>(args: SelectSubset<T, EvacueeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Evacuee.
     * @param {EvacueeUpsertArgs} args - Arguments to update or create a Evacuee.
     * @example
     * // Update or create a Evacuee
     * const evacuee = await prisma.evacuee.upsert({
     *   create: {
     *     // ... data to create a Evacuee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evacuee we want to update
     *   }
     * })
     */
    upsert<T extends EvacueeUpsertArgs>(args: SelectSubset<T, EvacueeUpsertArgs<ExtArgs>>): Prisma__EvacueeClient<$Result.GetResult<Prisma.$EvacueePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Evacuees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvacueeCountArgs} args - Arguments to filter Evacuees to count.
     * @example
     * // Count the number of Evacuees
     * const count = await prisma.evacuee.count({
     *   where: {
     *     // ... the filter for the Evacuees we want to count
     *   }
     * })
    **/
    count<T extends EvacueeCountArgs>(
      args?: Subset<T, EvacueeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EvacueeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evacuee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvacueeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EvacueeAggregateArgs>(args: Subset<T, EvacueeAggregateArgs>): Prisma.PrismaPromise<GetEvacueeAggregateType<T>>

    /**
     * Group by Evacuee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvacueeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EvacueeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EvacueeGroupByArgs['orderBy'] }
        : { orderBy?: EvacueeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EvacueeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvacueeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Evacuee model
   */
  readonly fields: EvacueeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Evacuee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EvacueeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Evacuee model
   */ 
  interface EvacueeFieldRefs {
    readonly id: FieldRef<"Evacuee", 'String'>
    readonly fullName: FieldRef<"Evacuee", 'String'>
    readonly birthDate: FieldRef<"Evacuee", 'DateTime'>
    readonly gender: FieldRef<"Evacuee", 'String'>
    readonly requiresSupport: FieldRef<"Evacuee", 'Boolean'>
    readonly healthCondition: FieldRef<"Evacuee", 'String'>
    readonly medicalNeeds: FieldRef<"Evacuee", 'String'>
    readonly allergy: FieldRef<"Evacuee", 'String'>
    readonly specialNotes: FieldRef<"Evacuee", 'String'>
    readonly publicInfo: FieldRef<"Evacuee", 'Boolean'>
    readonly createdAt: FieldRef<"Evacuee", 'DateTime'>
    readonly updatedAt: FieldRef<"Evacuee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Evacuee findUnique
   */
  export type EvacueeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evacuee
     */
    select?: EvacueeSelect<ExtArgs> | null
    /**
     * Filter, which Evacuee to fetch.
     */
    where: EvacueeWhereUniqueInput
  }

  /**
   * Evacuee findUniqueOrThrow
   */
  export type EvacueeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evacuee
     */
    select?: EvacueeSelect<ExtArgs> | null
    /**
     * Filter, which Evacuee to fetch.
     */
    where: EvacueeWhereUniqueInput
  }

  /**
   * Evacuee findFirst
   */
  export type EvacueeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evacuee
     */
    select?: EvacueeSelect<ExtArgs> | null
    /**
     * Filter, which Evacuee to fetch.
     */
    where?: EvacueeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evacuees to fetch.
     */
    orderBy?: EvacueeOrderByWithRelationInput | EvacueeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Evacuees.
     */
    cursor?: EvacueeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evacuees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evacuees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evacuees.
     */
    distinct?: EvacueeScalarFieldEnum | EvacueeScalarFieldEnum[]
  }

  /**
   * Evacuee findFirstOrThrow
   */
  export type EvacueeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evacuee
     */
    select?: EvacueeSelect<ExtArgs> | null
    /**
     * Filter, which Evacuee to fetch.
     */
    where?: EvacueeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evacuees to fetch.
     */
    orderBy?: EvacueeOrderByWithRelationInput | EvacueeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Evacuees.
     */
    cursor?: EvacueeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evacuees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evacuees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evacuees.
     */
    distinct?: EvacueeScalarFieldEnum | EvacueeScalarFieldEnum[]
  }

  /**
   * Evacuee findMany
   */
  export type EvacueeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evacuee
     */
    select?: EvacueeSelect<ExtArgs> | null
    /**
     * Filter, which Evacuees to fetch.
     */
    where?: EvacueeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evacuees to fetch.
     */
    orderBy?: EvacueeOrderByWithRelationInput | EvacueeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Evacuees.
     */
    cursor?: EvacueeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evacuees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evacuees.
     */
    skip?: number
    distinct?: EvacueeScalarFieldEnum | EvacueeScalarFieldEnum[]
  }

  /**
   * Evacuee create
   */
  export type EvacueeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evacuee
     */
    select?: EvacueeSelect<ExtArgs> | null
    /**
     * The data needed to create a Evacuee.
     */
    data: XOR<EvacueeCreateInput, EvacueeUncheckedCreateInput>
  }

  /**
   * Evacuee createMany
   */
  export type EvacueeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Evacuees.
     */
    data: EvacueeCreateManyInput | EvacueeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Evacuee createManyAndReturn
   */
  export type EvacueeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evacuee
     */
    select?: EvacueeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Evacuees.
     */
    data: EvacueeCreateManyInput | EvacueeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Evacuee update
   */
  export type EvacueeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evacuee
     */
    select?: EvacueeSelect<ExtArgs> | null
    /**
     * The data needed to update a Evacuee.
     */
    data: XOR<EvacueeUpdateInput, EvacueeUncheckedUpdateInput>
    /**
     * Choose, which Evacuee to update.
     */
    where: EvacueeWhereUniqueInput
  }

  /**
   * Evacuee updateMany
   */
  export type EvacueeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Evacuees.
     */
    data: XOR<EvacueeUpdateManyMutationInput, EvacueeUncheckedUpdateManyInput>
    /**
     * Filter which Evacuees to update
     */
    where?: EvacueeWhereInput
  }

  /**
   * Evacuee upsert
   */
  export type EvacueeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evacuee
     */
    select?: EvacueeSelect<ExtArgs> | null
    /**
     * The filter to search for the Evacuee to update in case it exists.
     */
    where: EvacueeWhereUniqueInput
    /**
     * In case the Evacuee found by the `where` argument doesn't exist, create a new Evacuee with this data.
     */
    create: XOR<EvacueeCreateInput, EvacueeUncheckedCreateInput>
    /**
     * In case the Evacuee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EvacueeUpdateInput, EvacueeUncheckedUpdateInput>
  }

  /**
   * Evacuee delete
   */
  export type EvacueeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evacuee
     */
    select?: EvacueeSelect<ExtArgs> | null
    /**
     * Filter which Evacuee to delete.
     */
    where: EvacueeWhereUniqueInput
  }

  /**
   * Evacuee deleteMany
   */
  export type EvacueeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evacuees to delete
     */
    where?: EvacueeWhereInput
  }

  /**
   * Evacuee without action
   */
  export type EvacueeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evacuee
     */
    select?: EvacueeSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EvacueeScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    birthDate: 'birthDate',
    gender: 'gender',
    requiresSupport: 'requiresSupport',
    healthCondition: 'healthCondition',
    medicalNeeds: 'medicalNeeds',
    allergy: 'allergy',
    specialNotes: 'specialNotes',
    publicInfo: 'publicInfo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EvacueeScalarFieldEnum = (typeof EvacueeScalarFieldEnum)[keyof typeof EvacueeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type EvacueeWhereInput = {
    AND?: EvacueeWhereInput | EvacueeWhereInput[]
    OR?: EvacueeWhereInput[]
    NOT?: EvacueeWhereInput | EvacueeWhereInput[]
    id?: StringFilter<"Evacuee"> | string
    fullName?: StringFilter<"Evacuee"> | string
    birthDate?: DateTimeFilter<"Evacuee"> | Date | string
    gender?: StringFilter<"Evacuee"> | string
    requiresSupport?: BoolFilter<"Evacuee"> | boolean
    healthCondition?: StringFilter<"Evacuee"> | string
    medicalNeeds?: StringFilter<"Evacuee"> | string
    allergy?: StringFilter<"Evacuee"> | string
    specialNotes?: StringFilter<"Evacuee"> | string
    publicInfo?: BoolFilter<"Evacuee"> | boolean
    createdAt?: DateTimeFilter<"Evacuee"> | Date | string
    updatedAt?: DateTimeFilter<"Evacuee"> | Date | string
  }

  export type EvacueeOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    birthDate?: SortOrder
    gender?: SortOrder
    requiresSupport?: SortOrder
    healthCondition?: SortOrder
    medicalNeeds?: SortOrder
    allergy?: SortOrder
    specialNotes?: SortOrder
    publicInfo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EvacueeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EvacueeWhereInput | EvacueeWhereInput[]
    OR?: EvacueeWhereInput[]
    NOT?: EvacueeWhereInput | EvacueeWhereInput[]
    fullName?: StringFilter<"Evacuee"> | string
    birthDate?: DateTimeFilter<"Evacuee"> | Date | string
    gender?: StringFilter<"Evacuee"> | string
    requiresSupport?: BoolFilter<"Evacuee"> | boolean
    healthCondition?: StringFilter<"Evacuee"> | string
    medicalNeeds?: StringFilter<"Evacuee"> | string
    allergy?: StringFilter<"Evacuee"> | string
    specialNotes?: StringFilter<"Evacuee"> | string
    publicInfo?: BoolFilter<"Evacuee"> | boolean
    createdAt?: DateTimeFilter<"Evacuee"> | Date | string
    updatedAt?: DateTimeFilter<"Evacuee"> | Date | string
  }, "id">

  export type EvacueeOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    birthDate?: SortOrder
    gender?: SortOrder
    requiresSupport?: SortOrder
    healthCondition?: SortOrder
    medicalNeeds?: SortOrder
    allergy?: SortOrder
    specialNotes?: SortOrder
    publicInfo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EvacueeCountOrderByAggregateInput
    _max?: EvacueeMaxOrderByAggregateInput
    _min?: EvacueeMinOrderByAggregateInput
  }

  export type EvacueeScalarWhereWithAggregatesInput = {
    AND?: EvacueeScalarWhereWithAggregatesInput | EvacueeScalarWhereWithAggregatesInput[]
    OR?: EvacueeScalarWhereWithAggregatesInput[]
    NOT?: EvacueeScalarWhereWithAggregatesInput | EvacueeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Evacuee"> | string
    fullName?: StringWithAggregatesFilter<"Evacuee"> | string
    birthDate?: DateTimeWithAggregatesFilter<"Evacuee"> | Date | string
    gender?: StringWithAggregatesFilter<"Evacuee"> | string
    requiresSupport?: BoolWithAggregatesFilter<"Evacuee"> | boolean
    healthCondition?: StringWithAggregatesFilter<"Evacuee"> | string
    medicalNeeds?: StringWithAggregatesFilter<"Evacuee"> | string
    allergy?: StringWithAggregatesFilter<"Evacuee"> | string
    specialNotes?: StringWithAggregatesFilter<"Evacuee"> | string
    publicInfo?: BoolWithAggregatesFilter<"Evacuee"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Evacuee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Evacuee"> | Date | string
  }

  export type EvacueeCreateInput = {
    id?: string
    fullName: string
    birthDate: Date | string
    gender: string
    requiresSupport: boolean
    healthCondition: string
    medicalNeeds: string
    allergy: string
    specialNotes: string
    publicInfo: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EvacueeUncheckedCreateInput = {
    id?: string
    fullName: string
    birthDate: Date | string
    gender: string
    requiresSupport: boolean
    healthCondition: string
    medicalNeeds: string
    allergy: string
    specialNotes: string
    publicInfo: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EvacueeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    requiresSupport?: BoolFieldUpdateOperationsInput | boolean
    healthCondition?: StringFieldUpdateOperationsInput | string
    medicalNeeds?: StringFieldUpdateOperationsInput | string
    allergy?: StringFieldUpdateOperationsInput | string
    specialNotes?: StringFieldUpdateOperationsInput | string
    publicInfo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvacueeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    requiresSupport?: BoolFieldUpdateOperationsInput | boolean
    healthCondition?: StringFieldUpdateOperationsInput | string
    medicalNeeds?: StringFieldUpdateOperationsInput | string
    allergy?: StringFieldUpdateOperationsInput | string
    specialNotes?: StringFieldUpdateOperationsInput | string
    publicInfo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvacueeCreateManyInput = {
    id?: string
    fullName: string
    birthDate: Date | string
    gender: string
    requiresSupport: boolean
    healthCondition: string
    medicalNeeds: string
    allergy: string
    specialNotes: string
    publicInfo: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EvacueeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    requiresSupport?: BoolFieldUpdateOperationsInput | boolean
    healthCondition?: StringFieldUpdateOperationsInput | string
    medicalNeeds?: StringFieldUpdateOperationsInput | string
    allergy?: StringFieldUpdateOperationsInput | string
    specialNotes?: StringFieldUpdateOperationsInput | string
    publicInfo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvacueeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    requiresSupport?: BoolFieldUpdateOperationsInput | boolean
    healthCondition?: StringFieldUpdateOperationsInput | string
    medicalNeeds?: StringFieldUpdateOperationsInput | string
    allergy?: StringFieldUpdateOperationsInput | string
    specialNotes?: StringFieldUpdateOperationsInput | string
    publicInfo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EvacueeCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    birthDate?: SortOrder
    gender?: SortOrder
    requiresSupport?: SortOrder
    healthCondition?: SortOrder
    medicalNeeds?: SortOrder
    allergy?: SortOrder
    specialNotes?: SortOrder
    publicInfo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EvacueeMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    birthDate?: SortOrder
    gender?: SortOrder
    requiresSupport?: SortOrder
    healthCondition?: SortOrder
    medicalNeeds?: SortOrder
    allergy?: SortOrder
    specialNotes?: SortOrder
    publicInfo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EvacueeMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    birthDate?: SortOrder
    gender?: SortOrder
    requiresSupport?: SortOrder
    healthCondition?: SortOrder
    medicalNeeds?: SortOrder
    allergy?: SortOrder
    specialNotes?: SortOrder
    publicInfo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use EvacueeDefaultArgs instead
     */
    export type EvacueeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EvacueeDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}