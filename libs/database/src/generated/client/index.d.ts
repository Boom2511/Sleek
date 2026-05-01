
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Station
 * 
 */
export type Station = $Result.DefaultSelection<Prisma.$StationPayload>
/**
 * Model Charger
 * 
 */
export type Charger = $Result.DefaultSelection<Prisma.$ChargerPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Stations
 * const stations = await prisma.station.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Stations
   * const stations = await prisma.station.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.station`: Exposes CRUD operations for the **Station** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stations
    * const stations = await prisma.station.findMany()
    * ```
    */
  get station(): Prisma.StationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.charger`: Exposes CRUD operations for the **Charger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chargers
    * const chargers = await prisma.charger.findMany()
    * ```
    */
  get charger(): Prisma.ChargerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Station: 'Station',
    Charger: 'Charger',
    Booking: 'Booking'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "station" | "charger" | "booking"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Station: {
        payload: Prisma.$StationPayload<ExtArgs>
        fields: Prisma.StationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          findFirst: {
            args: Prisma.StationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          findMany: {
            args: Prisma.StationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>[]
          }
          create: {
            args: Prisma.StationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          createMany: {
            args: Prisma.StationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>[]
          }
          delete: {
            args: Prisma.StationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          update: {
            args: Prisma.StationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          deleteMany: {
            args: Prisma.StationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>[]
          }
          upsert: {
            args: Prisma.StationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          aggregate: {
            args: Prisma.StationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStation>
          }
          groupBy: {
            args: Prisma.StationGroupByArgs<ExtArgs>
            result: $Utils.Optional<StationGroupByOutputType>[]
          }
          count: {
            args: Prisma.StationCountArgs<ExtArgs>
            result: $Utils.Optional<StationCountAggregateOutputType> | number
          }
        }
      }
      Charger: {
        payload: Prisma.$ChargerPayload<ExtArgs>
        fields: Prisma.ChargerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChargerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChargerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerPayload>
          }
          findFirst: {
            args: Prisma.ChargerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChargerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerPayload>
          }
          findMany: {
            args: Prisma.ChargerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerPayload>[]
          }
          create: {
            args: Prisma.ChargerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerPayload>
          }
          createMany: {
            args: Prisma.ChargerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChargerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerPayload>[]
          }
          delete: {
            args: Prisma.ChargerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerPayload>
          }
          update: {
            args: Prisma.ChargerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerPayload>
          }
          deleteMany: {
            args: Prisma.ChargerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChargerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChargerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerPayload>[]
          }
          upsert: {
            args: Prisma.ChargerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerPayload>
          }
          aggregate: {
            args: Prisma.ChargerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharger>
          }
          groupBy: {
            args: Prisma.ChargerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChargerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChargerCountArgs<ExtArgs>
            result: $Utils.Optional<ChargerCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    station?: StationOmit
    charger?: ChargerOmit
    booking?: BookingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type StationCountOutputType
   */

  export type StationCountOutputType = {
    chargers: number
  }

  export type StationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chargers?: boolean | StationCountOutputTypeCountChargersArgs
  }

  // Custom InputTypes
  /**
   * StationCountOutputType without action
   */
  export type StationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StationCountOutputType
     */
    select?: StationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StationCountOutputType without action
   */
  export type StationCountOutputTypeCountChargersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChargerWhereInput
  }


  /**
   * Count Type ChargerCountOutputType
   */

  export type ChargerCountOutputType = {
    bookings: number
  }

  export type ChargerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | ChargerCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * ChargerCountOutputType without action
   */
  export type ChargerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargerCountOutputType
     */
    select?: ChargerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChargerCountOutputType without action
   */
  export type ChargerCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Station
   */

  export type AggregateStation = {
    _count: StationCountAggregateOutputType | null
    _min: StationMinAggregateOutputType | null
    _max: StationMaxAggregateOutputType | null
  }

  export type StationMinAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    createdAt: Date | null
  }

  export type StationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    createdAt: Date | null
  }

  export type StationCountAggregateOutputType = {
    id: number
    name: number
    location: number
    createdAt: number
    _all: number
  }


  export type StationMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
    createdAt?: true
  }

  export type StationMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
    createdAt?: true
  }

  export type StationCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    createdAt?: true
    _all?: true
  }

  export type StationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Station to aggregate.
     */
    where?: StationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stations to fetch.
     */
    orderBy?: StationOrderByWithRelationInput | StationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stations
    **/
    _count?: true | StationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StationMaxAggregateInputType
  }

  export type GetStationAggregateType<T extends StationAggregateArgs> = {
        [P in keyof T & keyof AggregateStation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStation[P]>
      : GetScalarType<T[P], AggregateStation[P]>
  }




  export type StationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StationWhereInput
    orderBy?: StationOrderByWithAggregationInput | StationOrderByWithAggregationInput[]
    by: StationScalarFieldEnum[] | StationScalarFieldEnum
    having?: StationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StationCountAggregateInputType | true
    _min?: StationMinAggregateInputType
    _max?: StationMaxAggregateInputType
  }

  export type StationGroupByOutputType = {
    id: string
    name: string
    location: string
    createdAt: Date
    _count: StationCountAggregateOutputType | null
    _min: StationMinAggregateOutputType | null
    _max: StationMaxAggregateOutputType | null
  }

  type GetStationGroupByPayload<T extends StationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StationGroupByOutputType[P]>
            : GetScalarType<T[P], StationGroupByOutputType[P]>
        }
      >
    >


  export type StationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    createdAt?: boolean
    chargers?: boolean | Station$chargersArgs<ExtArgs>
    _count?: boolean | StationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["station"]>

  export type StationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["station"]>

  export type StationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["station"]>

  export type StationSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
    createdAt?: boolean
  }

  export type StationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "location" | "createdAt", ExtArgs["result"]["station"]>
  export type StationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chargers?: boolean | Station$chargersArgs<ExtArgs>
    _count?: boolean | StationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Station"
    objects: {
      chargers: Prisma.$ChargerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      location: string
      createdAt: Date
    }, ExtArgs["result"]["station"]>
    composites: {}
  }

  type StationGetPayload<S extends boolean | null | undefined | StationDefaultArgs> = $Result.GetResult<Prisma.$StationPayload, S>

  type StationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StationCountAggregateInputType | true
    }

  export interface StationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Station'], meta: { name: 'Station' } }
    /**
     * Find zero or one Station that matches the filter.
     * @param {StationFindUniqueArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StationFindUniqueArgs>(args: SelectSubset<T, StationFindUniqueArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Station that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StationFindUniqueOrThrowArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StationFindUniqueOrThrowArgs>(args: SelectSubset<T, StationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Station that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationFindFirstArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StationFindFirstArgs>(args?: SelectSubset<T, StationFindFirstArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Station that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationFindFirstOrThrowArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StationFindFirstOrThrowArgs>(args?: SelectSubset<T, StationFindFirstOrThrowArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stations
     * const stations = await prisma.station.findMany()
     * 
     * // Get first 10 Stations
     * const stations = await prisma.station.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stationWithIdOnly = await prisma.station.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StationFindManyArgs>(args?: SelectSubset<T, StationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Station.
     * @param {StationCreateArgs} args - Arguments to create a Station.
     * @example
     * // Create one Station
     * const Station = await prisma.station.create({
     *   data: {
     *     // ... data to create a Station
     *   }
     * })
     * 
     */
    create<T extends StationCreateArgs>(args: SelectSubset<T, StationCreateArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stations.
     * @param {StationCreateManyArgs} args - Arguments to create many Stations.
     * @example
     * // Create many Stations
     * const station = await prisma.station.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StationCreateManyArgs>(args?: SelectSubset<T, StationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stations and returns the data saved in the database.
     * @param {StationCreateManyAndReturnArgs} args - Arguments to create many Stations.
     * @example
     * // Create many Stations
     * const station = await prisma.station.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stations and only return the `id`
     * const stationWithIdOnly = await prisma.station.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StationCreateManyAndReturnArgs>(args?: SelectSubset<T, StationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Station.
     * @param {StationDeleteArgs} args - Arguments to delete one Station.
     * @example
     * // Delete one Station
     * const Station = await prisma.station.delete({
     *   where: {
     *     // ... filter to delete one Station
     *   }
     * })
     * 
     */
    delete<T extends StationDeleteArgs>(args: SelectSubset<T, StationDeleteArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Station.
     * @param {StationUpdateArgs} args - Arguments to update one Station.
     * @example
     * // Update one Station
     * const station = await prisma.station.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StationUpdateArgs>(args: SelectSubset<T, StationUpdateArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stations.
     * @param {StationDeleteManyArgs} args - Arguments to filter Stations to delete.
     * @example
     * // Delete a few Stations
     * const { count } = await prisma.station.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StationDeleteManyArgs>(args?: SelectSubset<T, StationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stations
     * const station = await prisma.station.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StationUpdateManyArgs>(args: SelectSubset<T, StationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stations and returns the data updated in the database.
     * @param {StationUpdateManyAndReturnArgs} args - Arguments to update many Stations.
     * @example
     * // Update many Stations
     * const station = await prisma.station.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stations and only return the `id`
     * const stationWithIdOnly = await prisma.station.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StationUpdateManyAndReturnArgs>(args: SelectSubset<T, StationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Station.
     * @param {StationUpsertArgs} args - Arguments to update or create a Station.
     * @example
     * // Update or create a Station
     * const station = await prisma.station.upsert({
     *   create: {
     *     // ... data to create a Station
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Station we want to update
     *   }
     * })
     */
    upsert<T extends StationUpsertArgs>(args: SelectSubset<T, StationUpsertArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationCountArgs} args - Arguments to filter Stations to count.
     * @example
     * // Count the number of Stations
     * const count = await prisma.station.count({
     *   where: {
     *     // ... the filter for the Stations we want to count
     *   }
     * })
    **/
    count<T extends StationCountArgs>(
      args?: Subset<T, StationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Station.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StationAggregateArgs>(args: Subset<T, StationAggregateArgs>): Prisma.PrismaPromise<GetStationAggregateType<T>>

    /**
     * Group by Station.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationGroupByArgs} args - Group by arguments.
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
      T extends StationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StationGroupByArgs['orderBy'] }
        : { orderBy?: StationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Station model
   */
  readonly fields: StationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Station.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chargers<T extends Station$chargersArgs<ExtArgs> = {}>(args?: Subset<T, Station$chargersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Station model
   */
  interface StationFieldRefs {
    readonly id: FieldRef<"Station", 'String'>
    readonly name: FieldRef<"Station", 'String'>
    readonly location: FieldRef<"Station", 'String'>
    readonly createdAt: FieldRef<"Station", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Station findUnique
   */
  export type StationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter, which Station to fetch.
     */
    where: StationWhereUniqueInput
  }

  /**
   * Station findUniqueOrThrow
   */
  export type StationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter, which Station to fetch.
     */
    where: StationWhereUniqueInput
  }

  /**
   * Station findFirst
   */
  export type StationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter, which Station to fetch.
     */
    where?: StationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stations to fetch.
     */
    orderBy?: StationOrderByWithRelationInput | StationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stations.
     */
    cursor?: StationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stations.
     */
    distinct?: StationScalarFieldEnum | StationScalarFieldEnum[]
  }

  /**
   * Station findFirstOrThrow
   */
  export type StationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter, which Station to fetch.
     */
    where?: StationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stations to fetch.
     */
    orderBy?: StationOrderByWithRelationInput | StationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stations.
     */
    cursor?: StationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stations.
     */
    distinct?: StationScalarFieldEnum | StationScalarFieldEnum[]
  }

  /**
   * Station findMany
   */
  export type StationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter, which Stations to fetch.
     */
    where?: StationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stations to fetch.
     */
    orderBy?: StationOrderByWithRelationInput | StationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stations.
     */
    cursor?: StationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stations.
     */
    distinct?: StationScalarFieldEnum | StationScalarFieldEnum[]
  }

  /**
   * Station create
   */
  export type StationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * The data needed to create a Station.
     */
    data: XOR<StationCreateInput, StationUncheckedCreateInput>
  }

  /**
   * Station createMany
   */
  export type StationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stations.
     */
    data: StationCreateManyInput | StationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Station createManyAndReturn
   */
  export type StationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * The data used to create many Stations.
     */
    data: StationCreateManyInput | StationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Station update
   */
  export type StationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * The data needed to update a Station.
     */
    data: XOR<StationUpdateInput, StationUncheckedUpdateInput>
    /**
     * Choose, which Station to update.
     */
    where: StationWhereUniqueInput
  }

  /**
   * Station updateMany
   */
  export type StationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stations.
     */
    data: XOR<StationUpdateManyMutationInput, StationUncheckedUpdateManyInput>
    /**
     * Filter which Stations to update
     */
    where?: StationWhereInput
    /**
     * Limit how many Stations to update.
     */
    limit?: number
  }

  /**
   * Station updateManyAndReturn
   */
  export type StationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * The data used to update Stations.
     */
    data: XOR<StationUpdateManyMutationInput, StationUncheckedUpdateManyInput>
    /**
     * Filter which Stations to update
     */
    where?: StationWhereInput
    /**
     * Limit how many Stations to update.
     */
    limit?: number
  }

  /**
   * Station upsert
   */
  export type StationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * The filter to search for the Station to update in case it exists.
     */
    where: StationWhereUniqueInput
    /**
     * In case the Station found by the `where` argument doesn't exist, create a new Station with this data.
     */
    create: XOR<StationCreateInput, StationUncheckedCreateInput>
    /**
     * In case the Station was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StationUpdateInput, StationUncheckedUpdateInput>
  }

  /**
   * Station delete
   */
  export type StationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter which Station to delete.
     */
    where: StationWhereUniqueInput
  }

  /**
   * Station deleteMany
   */
  export type StationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stations to delete
     */
    where?: StationWhereInput
    /**
     * Limit how many Stations to delete.
     */
    limit?: number
  }

  /**
   * Station.chargers
   */
  export type Station$chargersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charger
     */
    select?: ChargerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charger
     */
    omit?: ChargerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerInclude<ExtArgs> | null
    where?: ChargerWhereInput
    orderBy?: ChargerOrderByWithRelationInput | ChargerOrderByWithRelationInput[]
    cursor?: ChargerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChargerScalarFieldEnum | ChargerScalarFieldEnum[]
  }

  /**
   * Station without action
   */
  export type StationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
  }


  /**
   * Model Charger
   */

  export type AggregateCharger = {
    _count: ChargerCountAggregateOutputType | null
    _min: ChargerMinAggregateOutputType | null
    _max: ChargerMaxAggregateOutputType | null
  }

  export type ChargerMinAggregateOutputType = {
    id: string | null
    stationId: string | null
    type: string | null
    status: string | null
  }

  export type ChargerMaxAggregateOutputType = {
    id: string | null
    stationId: string | null
    type: string | null
    status: string | null
  }

  export type ChargerCountAggregateOutputType = {
    id: number
    stationId: number
    type: number
    status: number
    _all: number
  }


  export type ChargerMinAggregateInputType = {
    id?: true
    stationId?: true
    type?: true
    status?: true
  }

  export type ChargerMaxAggregateInputType = {
    id?: true
    stationId?: true
    type?: true
    status?: true
  }

  export type ChargerCountAggregateInputType = {
    id?: true
    stationId?: true
    type?: true
    status?: true
    _all?: true
  }

  export type ChargerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Charger to aggregate.
     */
    where?: ChargerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chargers to fetch.
     */
    orderBy?: ChargerOrderByWithRelationInput | ChargerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChargerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chargers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chargers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chargers
    **/
    _count?: true | ChargerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChargerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChargerMaxAggregateInputType
  }

  export type GetChargerAggregateType<T extends ChargerAggregateArgs> = {
        [P in keyof T & keyof AggregateCharger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharger[P]>
      : GetScalarType<T[P], AggregateCharger[P]>
  }




  export type ChargerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChargerWhereInput
    orderBy?: ChargerOrderByWithAggregationInput | ChargerOrderByWithAggregationInput[]
    by: ChargerScalarFieldEnum[] | ChargerScalarFieldEnum
    having?: ChargerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChargerCountAggregateInputType | true
    _min?: ChargerMinAggregateInputType
    _max?: ChargerMaxAggregateInputType
  }

  export type ChargerGroupByOutputType = {
    id: string
    stationId: string
    type: string
    status: string
    _count: ChargerCountAggregateOutputType | null
    _min: ChargerMinAggregateOutputType | null
    _max: ChargerMaxAggregateOutputType | null
  }

  type GetChargerGroupByPayload<T extends ChargerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChargerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChargerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChargerGroupByOutputType[P]>
            : GetScalarType<T[P], ChargerGroupByOutputType[P]>
        }
      >
    >


  export type ChargerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stationId?: boolean
    type?: boolean
    status?: boolean
    station?: boolean | StationDefaultArgs<ExtArgs>
    bookings?: boolean | Charger$bookingsArgs<ExtArgs>
    _count?: boolean | ChargerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["charger"]>

  export type ChargerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stationId?: boolean
    type?: boolean
    status?: boolean
    station?: boolean | StationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["charger"]>

  export type ChargerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stationId?: boolean
    type?: boolean
    status?: boolean
    station?: boolean | StationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["charger"]>

  export type ChargerSelectScalar = {
    id?: boolean
    stationId?: boolean
    type?: boolean
    status?: boolean
  }

  export type ChargerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "stationId" | "type" | "status", ExtArgs["result"]["charger"]>
  export type ChargerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    station?: boolean | StationDefaultArgs<ExtArgs>
    bookings?: boolean | Charger$bookingsArgs<ExtArgs>
    _count?: boolean | ChargerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChargerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    station?: boolean | StationDefaultArgs<ExtArgs>
  }
  export type ChargerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    station?: boolean | StationDefaultArgs<ExtArgs>
  }

  export type $ChargerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Charger"
    objects: {
      station: Prisma.$StationPayload<ExtArgs>
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      stationId: string
      type: string
      status: string
    }, ExtArgs["result"]["charger"]>
    composites: {}
  }

  type ChargerGetPayload<S extends boolean | null | undefined | ChargerDefaultArgs> = $Result.GetResult<Prisma.$ChargerPayload, S>

  type ChargerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChargerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChargerCountAggregateInputType | true
    }

  export interface ChargerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Charger'], meta: { name: 'Charger' } }
    /**
     * Find zero or one Charger that matches the filter.
     * @param {ChargerFindUniqueArgs} args - Arguments to find a Charger
     * @example
     * // Get one Charger
     * const charger = await prisma.charger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChargerFindUniqueArgs>(args: SelectSubset<T, ChargerFindUniqueArgs<ExtArgs>>): Prisma__ChargerClient<$Result.GetResult<Prisma.$ChargerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Charger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChargerFindUniqueOrThrowArgs} args - Arguments to find a Charger
     * @example
     * // Get one Charger
     * const charger = await prisma.charger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChargerFindUniqueOrThrowArgs>(args: SelectSubset<T, ChargerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChargerClient<$Result.GetResult<Prisma.$ChargerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Charger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargerFindFirstArgs} args - Arguments to find a Charger
     * @example
     * // Get one Charger
     * const charger = await prisma.charger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChargerFindFirstArgs>(args?: SelectSubset<T, ChargerFindFirstArgs<ExtArgs>>): Prisma__ChargerClient<$Result.GetResult<Prisma.$ChargerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Charger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargerFindFirstOrThrowArgs} args - Arguments to find a Charger
     * @example
     * // Get one Charger
     * const charger = await prisma.charger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChargerFindFirstOrThrowArgs>(args?: SelectSubset<T, ChargerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChargerClient<$Result.GetResult<Prisma.$ChargerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chargers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chargers
     * const chargers = await prisma.charger.findMany()
     * 
     * // Get first 10 Chargers
     * const chargers = await prisma.charger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chargerWithIdOnly = await prisma.charger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChargerFindManyArgs>(args?: SelectSubset<T, ChargerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Charger.
     * @param {ChargerCreateArgs} args - Arguments to create a Charger.
     * @example
     * // Create one Charger
     * const Charger = await prisma.charger.create({
     *   data: {
     *     // ... data to create a Charger
     *   }
     * })
     * 
     */
    create<T extends ChargerCreateArgs>(args: SelectSubset<T, ChargerCreateArgs<ExtArgs>>): Prisma__ChargerClient<$Result.GetResult<Prisma.$ChargerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chargers.
     * @param {ChargerCreateManyArgs} args - Arguments to create many Chargers.
     * @example
     * // Create many Chargers
     * const charger = await prisma.charger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChargerCreateManyArgs>(args?: SelectSubset<T, ChargerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chargers and returns the data saved in the database.
     * @param {ChargerCreateManyAndReturnArgs} args - Arguments to create many Chargers.
     * @example
     * // Create many Chargers
     * const charger = await prisma.charger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chargers and only return the `id`
     * const chargerWithIdOnly = await prisma.charger.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChargerCreateManyAndReturnArgs>(args?: SelectSubset<T, ChargerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Charger.
     * @param {ChargerDeleteArgs} args - Arguments to delete one Charger.
     * @example
     * // Delete one Charger
     * const Charger = await prisma.charger.delete({
     *   where: {
     *     // ... filter to delete one Charger
     *   }
     * })
     * 
     */
    delete<T extends ChargerDeleteArgs>(args: SelectSubset<T, ChargerDeleteArgs<ExtArgs>>): Prisma__ChargerClient<$Result.GetResult<Prisma.$ChargerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Charger.
     * @param {ChargerUpdateArgs} args - Arguments to update one Charger.
     * @example
     * // Update one Charger
     * const charger = await prisma.charger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChargerUpdateArgs>(args: SelectSubset<T, ChargerUpdateArgs<ExtArgs>>): Prisma__ChargerClient<$Result.GetResult<Prisma.$ChargerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chargers.
     * @param {ChargerDeleteManyArgs} args - Arguments to filter Chargers to delete.
     * @example
     * // Delete a few Chargers
     * const { count } = await prisma.charger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChargerDeleteManyArgs>(args?: SelectSubset<T, ChargerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chargers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chargers
     * const charger = await prisma.charger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChargerUpdateManyArgs>(args: SelectSubset<T, ChargerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chargers and returns the data updated in the database.
     * @param {ChargerUpdateManyAndReturnArgs} args - Arguments to update many Chargers.
     * @example
     * // Update many Chargers
     * const charger = await prisma.charger.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chargers and only return the `id`
     * const chargerWithIdOnly = await prisma.charger.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChargerUpdateManyAndReturnArgs>(args: SelectSubset<T, ChargerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Charger.
     * @param {ChargerUpsertArgs} args - Arguments to update or create a Charger.
     * @example
     * // Update or create a Charger
     * const charger = await prisma.charger.upsert({
     *   create: {
     *     // ... data to create a Charger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Charger we want to update
     *   }
     * })
     */
    upsert<T extends ChargerUpsertArgs>(args: SelectSubset<T, ChargerUpsertArgs<ExtArgs>>): Prisma__ChargerClient<$Result.GetResult<Prisma.$ChargerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chargers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargerCountArgs} args - Arguments to filter Chargers to count.
     * @example
     * // Count the number of Chargers
     * const count = await prisma.charger.count({
     *   where: {
     *     // ... the filter for the Chargers we want to count
     *   }
     * })
    **/
    count<T extends ChargerCountArgs>(
      args?: Subset<T, ChargerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChargerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Charger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChargerAggregateArgs>(args: Subset<T, ChargerAggregateArgs>): Prisma.PrismaPromise<GetChargerAggregateType<T>>

    /**
     * Group by Charger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargerGroupByArgs} args - Group by arguments.
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
      T extends ChargerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChargerGroupByArgs['orderBy'] }
        : { orderBy?: ChargerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChargerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChargerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Charger model
   */
  readonly fields: ChargerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Charger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChargerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    station<T extends StationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StationDefaultArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookings<T extends Charger$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Charger$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Charger model
   */
  interface ChargerFieldRefs {
    readonly id: FieldRef<"Charger", 'String'>
    readonly stationId: FieldRef<"Charger", 'String'>
    readonly type: FieldRef<"Charger", 'String'>
    readonly status: FieldRef<"Charger", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Charger findUnique
   */
  export type ChargerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charger
     */
    select?: ChargerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charger
     */
    omit?: ChargerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerInclude<ExtArgs> | null
    /**
     * Filter, which Charger to fetch.
     */
    where: ChargerWhereUniqueInput
  }

  /**
   * Charger findUniqueOrThrow
   */
  export type ChargerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charger
     */
    select?: ChargerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charger
     */
    omit?: ChargerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerInclude<ExtArgs> | null
    /**
     * Filter, which Charger to fetch.
     */
    where: ChargerWhereUniqueInput
  }

  /**
   * Charger findFirst
   */
  export type ChargerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charger
     */
    select?: ChargerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charger
     */
    omit?: ChargerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerInclude<ExtArgs> | null
    /**
     * Filter, which Charger to fetch.
     */
    where?: ChargerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chargers to fetch.
     */
    orderBy?: ChargerOrderByWithRelationInput | ChargerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chargers.
     */
    cursor?: ChargerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chargers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chargers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chargers.
     */
    distinct?: ChargerScalarFieldEnum | ChargerScalarFieldEnum[]
  }

  /**
   * Charger findFirstOrThrow
   */
  export type ChargerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charger
     */
    select?: ChargerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charger
     */
    omit?: ChargerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerInclude<ExtArgs> | null
    /**
     * Filter, which Charger to fetch.
     */
    where?: ChargerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chargers to fetch.
     */
    orderBy?: ChargerOrderByWithRelationInput | ChargerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chargers.
     */
    cursor?: ChargerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chargers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chargers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chargers.
     */
    distinct?: ChargerScalarFieldEnum | ChargerScalarFieldEnum[]
  }

  /**
   * Charger findMany
   */
  export type ChargerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charger
     */
    select?: ChargerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charger
     */
    omit?: ChargerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerInclude<ExtArgs> | null
    /**
     * Filter, which Chargers to fetch.
     */
    where?: ChargerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chargers to fetch.
     */
    orderBy?: ChargerOrderByWithRelationInput | ChargerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chargers.
     */
    cursor?: ChargerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chargers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chargers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chargers.
     */
    distinct?: ChargerScalarFieldEnum | ChargerScalarFieldEnum[]
  }

  /**
   * Charger create
   */
  export type ChargerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charger
     */
    select?: ChargerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charger
     */
    omit?: ChargerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerInclude<ExtArgs> | null
    /**
     * The data needed to create a Charger.
     */
    data: XOR<ChargerCreateInput, ChargerUncheckedCreateInput>
  }

  /**
   * Charger createMany
   */
  export type ChargerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chargers.
     */
    data: ChargerCreateManyInput | ChargerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Charger createManyAndReturn
   */
  export type ChargerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charger
     */
    select?: ChargerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Charger
     */
    omit?: ChargerOmit<ExtArgs> | null
    /**
     * The data used to create many Chargers.
     */
    data: ChargerCreateManyInput | ChargerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Charger update
   */
  export type ChargerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charger
     */
    select?: ChargerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charger
     */
    omit?: ChargerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerInclude<ExtArgs> | null
    /**
     * The data needed to update a Charger.
     */
    data: XOR<ChargerUpdateInput, ChargerUncheckedUpdateInput>
    /**
     * Choose, which Charger to update.
     */
    where: ChargerWhereUniqueInput
  }

  /**
   * Charger updateMany
   */
  export type ChargerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chargers.
     */
    data: XOR<ChargerUpdateManyMutationInput, ChargerUncheckedUpdateManyInput>
    /**
     * Filter which Chargers to update
     */
    where?: ChargerWhereInput
    /**
     * Limit how many Chargers to update.
     */
    limit?: number
  }

  /**
   * Charger updateManyAndReturn
   */
  export type ChargerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charger
     */
    select?: ChargerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Charger
     */
    omit?: ChargerOmit<ExtArgs> | null
    /**
     * The data used to update Chargers.
     */
    data: XOR<ChargerUpdateManyMutationInput, ChargerUncheckedUpdateManyInput>
    /**
     * Filter which Chargers to update
     */
    where?: ChargerWhereInput
    /**
     * Limit how many Chargers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Charger upsert
   */
  export type ChargerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charger
     */
    select?: ChargerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charger
     */
    omit?: ChargerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerInclude<ExtArgs> | null
    /**
     * The filter to search for the Charger to update in case it exists.
     */
    where: ChargerWhereUniqueInput
    /**
     * In case the Charger found by the `where` argument doesn't exist, create a new Charger with this data.
     */
    create: XOR<ChargerCreateInput, ChargerUncheckedCreateInput>
    /**
     * In case the Charger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChargerUpdateInput, ChargerUncheckedUpdateInput>
  }

  /**
   * Charger delete
   */
  export type ChargerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charger
     */
    select?: ChargerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charger
     */
    omit?: ChargerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerInclude<ExtArgs> | null
    /**
     * Filter which Charger to delete.
     */
    where: ChargerWhereUniqueInput
  }

  /**
   * Charger deleteMany
   */
  export type ChargerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chargers to delete
     */
    where?: ChargerWhereInput
    /**
     * Limit how many Chargers to delete.
     */
    limit?: number
  }

  /**
   * Charger.bookings
   */
  export type Charger$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Charger without action
   */
  export type ChargerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charger
     */
    select?: ChargerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charger
     */
    omit?: ChargerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    chargerId: string | null
    startTime: Date | null
    endTime: Date | null
    status: string | null
    createdAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    chargerId: string | null
    startTime: Date | null
    endTime: Date | null
    status: string | null
    createdAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    userId: number
    chargerId: number
    startTime: number
    endTime: number
    status: number
    createdAt: number
    _all: number
  }


  export type BookingMinAggregateInputType = {
    id?: true
    userId?: true
    chargerId?: true
    startTime?: true
    endTime?: true
    status?: true
    createdAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    userId?: true
    chargerId?: true
    startTime?: true
    endTime?: true
    status?: true
    createdAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    userId?: true
    chargerId?: true
    startTime?: true
    endTime?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    userId: string
    chargerId: string
    startTime: Date
    endTime: Date
    status: string
    createdAt: Date
    _count: BookingCountAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    chargerId?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    createdAt?: boolean
    charger?: boolean | ChargerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    chargerId?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    createdAt?: boolean
    charger?: boolean | ChargerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    chargerId?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    createdAt?: boolean
    charger?: boolean | ChargerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    userId?: boolean
    chargerId?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "chargerId" | "startTime" | "endTime" | "status" | "createdAt", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    charger?: boolean | ChargerDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    charger?: boolean | ChargerDefaultArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    charger?: boolean | ChargerDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      charger: Prisma.$ChargerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      chargerId: string
      startTime: Date
      endTime: Date
      status: string
      createdAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    charger<T extends ChargerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChargerDefaultArgs<ExtArgs>>): Prisma__ChargerClient<$Result.GetResult<Prisma.$ChargerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly userId: FieldRef<"Booking", 'String'>
    readonly chargerId: FieldRef<"Booking", 'String'>
    readonly startTime: FieldRef<"Booking", 'DateTime'>
    readonly endTime: FieldRef<"Booking", 'DateTime'>
    readonly status: FieldRef<"Booking", 'String'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
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


  export const StationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location',
    createdAt: 'createdAt'
  };

  export type StationScalarFieldEnum = (typeof StationScalarFieldEnum)[keyof typeof StationScalarFieldEnum]


  export const ChargerScalarFieldEnum: {
    id: 'id',
    stationId: 'stationId',
    type: 'type',
    status: 'status'
  };

  export type ChargerScalarFieldEnum = (typeof ChargerScalarFieldEnum)[keyof typeof ChargerScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    chargerId: 'chargerId',
    startTime: 'startTime',
    endTime: 'endTime',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


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


  export type StationWhereInput = {
    AND?: StationWhereInput | StationWhereInput[]
    OR?: StationWhereInput[]
    NOT?: StationWhereInput | StationWhereInput[]
    id?: StringFilter<"Station"> | string
    name?: StringFilter<"Station"> | string
    location?: StringFilter<"Station"> | string
    createdAt?: DateTimeFilter<"Station"> | Date | string
    chargers?: ChargerListRelationFilter
  }

  export type StationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    chargers?: ChargerOrderByRelationAggregateInput
  }

  export type StationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StationWhereInput | StationWhereInput[]
    OR?: StationWhereInput[]
    NOT?: StationWhereInput | StationWhereInput[]
    name?: StringFilter<"Station"> | string
    location?: StringFilter<"Station"> | string
    createdAt?: DateTimeFilter<"Station"> | Date | string
    chargers?: ChargerListRelationFilter
  }, "id">

  export type StationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    _count?: StationCountOrderByAggregateInput
    _max?: StationMaxOrderByAggregateInput
    _min?: StationMinOrderByAggregateInput
  }

  export type StationScalarWhereWithAggregatesInput = {
    AND?: StationScalarWhereWithAggregatesInput | StationScalarWhereWithAggregatesInput[]
    OR?: StationScalarWhereWithAggregatesInput[]
    NOT?: StationScalarWhereWithAggregatesInput | StationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Station"> | string
    name?: StringWithAggregatesFilter<"Station"> | string
    location?: StringWithAggregatesFilter<"Station"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Station"> | Date | string
  }

  export type ChargerWhereInput = {
    AND?: ChargerWhereInput | ChargerWhereInput[]
    OR?: ChargerWhereInput[]
    NOT?: ChargerWhereInput | ChargerWhereInput[]
    id?: StringFilter<"Charger"> | string
    stationId?: StringFilter<"Charger"> | string
    type?: StringFilter<"Charger"> | string
    status?: StringFilter<"Charger"> | string
    station?: XOR<StationScalarRelationFilter, StationWhereInput>
    bookings?: BookingListRelationFilter
  }

  export type ChargerOrderByWithRelationInput = {
    id?: SortOrder
    stationId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    station?: StationOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type ChargerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChargerWhereInput | ChargerWhereInput[]
    OR?: ChargerWhereInput[]
    NOT?: ChargerWhereInput | ChargerWhereInput[]
    stationId?: StringFilter<"Charger"> | string
    type?: StringFilter<"Charger"> | string
    status?: StringFilter<"Charger"> | string
    station?: XOR<StationScalarRelationFilter, StationWhereInput>
    bookings?: BookingListRelationFilter
  }, "id">

  export type ChargerOrderByWithAggregationInput = {
    id?: SortOrder
    stationId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    _count?: ChargerCountOrderByAggregateInput
    _max?: ChargerMaxOrderByAggregateInput
    _min?: ChargerMinOrderByAggregateInput
  }

  export type ChargerScalarWhereWithAggregatesInput = {
    AND?: ChargerScalarWhereWithAggregatesInput | ChargerScalarWhereWithAggregatesInput[]
    OR?: ChargerScalarWhereWithAggregatesInput[]
    NOT?: ChargerScalarWhereWithAggregatesInput | ChargerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Charger"> | string
    stationId?: StringWithAggregatesFilter<"Charger"> | string
    type?: StringWithAggregatesFilter<"Charger"> | string
    status?: StringWithAggregatesFilter<"Charger"> | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    userId?: StringFilter<"Booking"> | string
    chargerId?: StringFilter<"Booking"> | string
    startTime?: DateTimeFilter<"Booking"> | Date | string
    endTime?: DateTimeFilter<"Booking"> | Date | string
    status?: StringFilter<"Booking"> | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    charger?: XOR<ChargerScalarRelationFilter, ChargerWhereInput>
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    chargerId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    charger?: ChargerOrderByWithRelationInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    userId?: StringFilter<"Booking"> | string
    chargerId?: StringFilter<"Booking"> | string
    startTime?: DateTimeFilter<"Booking"> | Date | string
    endTime?: DateTimeFilter<"Booking"> | Date | string
    status?: StringFilter<"Booking"> | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    charger?: XOR<ChargerScalarRelationFilter, ChargerWhereInput>
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    chargerId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    userId?: StringWithAggregatesFilter<"Booking"> | string
    chargerId?: StringWithAggregatesFilter<"Booking"> | string
    startTime?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    status?: StringWithAggregatesFilter<"Booking"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type StationCreateInput = {
    id?: string
    name: string
    location: string
    createdAt?: Date | string
    chargers?: ChargerCreateNestedManyWithoutStationInput
  }

  export type StationUncheckedCreateInput = {
    id?: string
    name: string
    location: string
    createdAt?: Date | string
    chargers?: ChargerUncheckedCreateNestedManyWithoutStationInput
  }

  export type StationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chargers?: ChargerUpdateManyWithoutStationNestedInput
  }

  export type StationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chargers?: ChargerUncheckedUpdateManyWithoutStationNestedInput
  }

  export type StationCreateManyInput = {
    id?: string
    name: string
    location: string
    createdAt?: Date | string
  }

  export type StationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChargerCreateInput = {
    id?: string
    type: string
    status: string
    station: StationCreateNestedOneWithoutChargersInput
    bookings?: BookingCreateNestedManyWithoutChargerInput
  }

  export type ChargerUncheckedCreateInput = {
    id?: string
    stationId: string
    type: string
    status: string
    bookings?: BookingUncheckedCreateNestedManyWithoutChargerInput
  }

  export type ChargerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    station?: StationUpdateOneRequiredWithoutChargersNestedInput
    bookings?: BookingUpdateManyWithoutChargerNestedInput
  }

  export type ChargerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stationId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    bookings?: BookingUncheckedUpdateManyWithoutChargerNestedInput
  }

  export type ChargerCreateManyInput = {
    id?: string
    stationId: string
    type: string
    status: string
  }

  export type ChargerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ChargerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    stationId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type BookingCreateInput = {
    id?: string
    userId: string
    startTime: Date | string
    endTime: Date | string
    status: string
    createdAt?: Date | string
    charger: ChargerCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    userId: string
    chargerId: string
    startTime: Date | string
    endTime: Date | string
    status: string
    createdAt?: Date | string
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    charger?: ChargerUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    chargerId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyInput = {
    id?: string
    userId: string
    chargerId: string
    startTime: Date | string
    endTime: Date | string
    status: string
    createdAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    chargerId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type ChargerListRelationFilter = {
    every?: ChargerWhereInput
    some?: ChargerWhereInput
    none?: ChargerWhereInput
  }

  export type ChargerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
  }

  export type StationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
  }

  export type StationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
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

  export type StationScalarRelationFilter = {
    is?: StationWhereInput
    isNot?: StationWhereInput
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChargerCountOrderByAggregateInput = {
    id?: SortOrder
    stationId?: SortOrder
    type?: SortOrder
    status?: SortOrder
  }

  export type ChargerMaxOrderByAggregateInput = {
    id?: SortOrder
    stationId?: SortOrder
    type?: SortOrder
    status?: SortOrder
  }

  export type ChargerMinOrderByAggregateInput = {
    id?: SortOrder
    stationId?: SortOrder
    type?: SortOrder
    status?: SortOrder
  }

  export type ChargerScalarRelationFilter = {
    is?: ChargerWhereInput
    isNot?: ChargerWhereInput
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chargerId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chargerId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chargerId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ChargerCreateNestedManyWithoutStationInput = {
    create?: XOR<ChargerCreateWithoutStationInput, ChargerUncheckedCreateWithoutStationInput> | ChargerCreateWithoutStationInput[] | ChargerUncheckedCreateWithoutStationInput[]
    connectOrCreate?: ChargerCreateOrConnectWithoutStationInput | ChargerCreateOrConnectWithoutStationInput[]
    createMany?: ChargerCreateManyStationInputEnvelope
    connect?: ChargerWhereUniqueInput | ChargerWhereUniqueInput[]
  }

  export type ChargerUncheckedCreateNestedManyWithoutStationInput = {
    create?: XOR<ChargerCreateWithoutStationInput, ChargerUncheckedCreateWithoutStationInput> | ChargerCreateWithoutStationInput[] | ChargerUncheckedCreateWithoutStationInput[]
    connectOrCreate?: ChargerCreateOrConnectWithoutStationInput | ChargerCreateOrConnectWithoutStationInput[]
    createMany?: ChargerCreateManyStationInputEnvelope
    connect?: ChargerWhereUniqueInput | ChargerWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ChargerUpdateManyWithoutStationNestedInput = {
    create?: XOR<ChargerCreateWithoutStationInput, ChargerUncheckedCreateWithoutStationInput> | ChargerCreateWithoutStationInput[] | ChargerUncheckedCreateWithoutStationInput[]
    connectOrCreate?: ChargerCreateOrConnectWithoutStationInput | ChargerCreateOrConnectWithoutStationInput[]
    upsert?: ChargerUpsertWithWhereUniqueWithoutStationInput | ChargerUpsertWithWhereUniqueWithoutStationInput[]
    createMany?: ChargerCreateManyStationInputEnvelope
    set?: ChargerWhereUniqueInput | ChargerWhereUniqueInput[]
    disconnect?: ChargerWhereUniqueInput | ChargerWhereUniqueInput[]
    delete?: ChargerWhereUniqueInput | ChargerWhereUniqueInput[]
    connect?: ChargerWhereUniqueInput | ChargerWhereUniqueInput[]
    update?: ChargerUpdateWithWhereUniqueWithoutStationInput | ChargerUpdateWithWhereUniqueWithoutStationInput[]
    updateMany?: ChargerUpdateManyWithWhereWithoutStationInput | ChargerUpdateManyWithWhereWithoutStationInput[]
    deleteMany?: ChargerScalarWhereInput | ChargerScalarWhereInput[]
  }

  export type ChargerUncheckedUpdateManyWithoutStationNestedInput = {
    create?: XOR<ChargerCreateWithoutStationInput, ChargerUncheckedCreateWithoutStationInput> | ChargerCreateWithoutStationInput[] | ChargerUncheckedCreateWithoutStationInput[]
    connectOrCreate?: ChargerCreateOrConnectWithoutStationInput | ChargerCreateOrConnectWithoutStationInput[]
    upsert?: ChargerUpsertWithWhereUniqueWithoutStationInput | ChargerUpsertWithWhereUniqueWithoutStationInput[]
    createMany?: ChargerCreateManyStationInputEnvelope
    set?: ChargerWhereUniqueInput | ChargerWhereUniqueInput[]
    disconnect?: ChargerWhereUniqueInput | ChargerWhereUniqueInput[]
    delete?: ChargerWhereUniqueInput | ChargerWhereUniqueInput[]
    connect?: ChargerWhereUniqueInput | ChargerWhereUniqueInput[]
    update?: ChargerUpdateWithWhereUniqueWithoutStationInput | ChargerUpdateWithWhereUniqueWithoutStationInput[]
    updateMany?: ChargerUpdateManyWithWhereWithoutStationInput | ChargerUpdateManyWithWhereWithoutStationInput[]
    deleteMany?: ChargerScalarWhereInput | ChargerScalarWhereInput[]
  }

  export type StationCreateNestedOneWithoutChargersInput = {
    create?: XOR<StationCreateWithoutChargersInput, StationUncheckedCreateWithoutChargersInput>
    connectOrCreate?: StationCreateOrConnectWithoutChargersInput
    connect?: StationWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutChargerInput = {
    create?: XOR<BookingCreateWithoutChargerInput, BookingUncheckedCreateWithoutChargerInput> | BookingCreateWithoutChargerInput[] | BookingUncheckedCreateWithoutChargerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutChargerInput | BookingCreateOrConnectWithoutChargerInput[]
    createMany?: BookingCreateManyChargerInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutChargerInput = {
    create?: XOR<BookingCreateWithoutChargerInput, BookingUncheckedCreateWithoutChargerInput> | BookingCreateWithoutChargerInput[] | BookingUncheckedCreateWithoutChargerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutChargerInput | BookingCreateOrConnectWithoutChargerInput[]
    createMany?: BookingCreateManyChargerInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type StationUpdateOneRequiredWithoutChargersNestedInput = {
    create?: XOR<StationCreateWithoutChargersInput, StationUncheckedCreateWithoutChargersInput>
    connectOrCreate?: StationCreateOrConnectWithoutChargersInput
    upsert?: StationUpsertWithoutChargersInput
    connect?: StationWhereUniqueInput
    update?: XOR<XOR<StationUpdateToOneWithWhereWithoutChargersInput, StationUpdateWithoutChargersInput>, StationUncheckedUpdateWithoutChargersInput>
  }

  export type BookingUpdateManyWithoutChargerNestedInput = {
    create?: XOR<BookingCreateWithoutChargerInput, BookingUncheckedCreateWithoutChargerInput> | BookingCreateWithoutChargerInput[] | BookingUncheckedCreateWithoutChargerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutChargerInput | BookingCreateOrConnectWithoutChargerInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutChargerInput | BookingUpsertWithWhereUniqueWithoutChargerInput[]
    createMany?: BookingCreateManyChargerInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutChargerInput | BookingUpdateWithWhereUniqueWithoutChargerInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutChargerInput | BookingUpdateManyWithWhereWithoutChargerInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutChargerNestedInput = {
    create?: XOR<BookingCreateWithoutChargerInput, BookingUncheckedCreateWithoutChargerInput> | BookingCreateWithoutChargerInput[] | BookingUncheckedCreateWithoutChargerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutChargerInput | BookingCreateOrConnectWithoutChargerInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutChargerInput | BookingUpsertWithWhereUniqueWithoutChargerInput[]
    createMany?: BookingCreateManyChargerInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutChargerInput | BookingUpdateWithWhereUniqueWithoutChargerInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutChargerInput | BookingUpdateManyWithWhereWithoutChargerInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ChargerCreateNestedOneWithoutBookingsInput = {
    create?: XOR<ChargerCreateWithoutBookingsInput, ChargerUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ChargerCreateOrConnectWithoutBookingsInput
    connect?: ChargerWhereUniqueInput
  }

  export type ChargerUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<ChargerCreateWithoutBookingsInput, ChargerUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ChargerCreateOrConnectWithoutBookingsInput
    upsert?: ChargerUpsertWithoutBookingsInput
    connect?: ChargerWhereUniqueInput
    update?: XOR<XOR<ChargerUpdateToOneWithWhereWithoutBookingsInput, ChargerUpdateWithoutBookingsInput>, ChargerUncheckedUpdateWithoutBookingsInput>
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

  export type ChargerCreateWithoutStationInput = {
    id?: string
    type: string
    status: string
    bookings?: BookingCreateNestedManyWithoutChargerInput
  }

  export type ChargerUncheckedCreateWithoutStationInput = {
    id?: string
    type: string
    status: string
    bookings?: BookingUncheckedCreateNestedManyWithoutChargerInput
  }

  export type ChargerCreateOrConnectWithoutStationInput = {
    where: ChargerWhereUniqueInput
    create: XOR<ChargerCreateWithoutStationInput, ChargerUncheckedCreateWithoutStationInput>
  }

  export type ChargerCreateManyStationInputEnvelope = {
    data: ChargerCreateManyStationInput | ChargerCreateManyStationInput[]
    skipDuplicates?: boolean
  }

  export type ChargerUpsertWithWhereUniqueWithoutStationInput = {
    where: ChargerWhereUniqueInput
    update: XOR<ChargerUpdateWithoutStationInput, ChargerUncheckedUpdateWithoutStationInput>
    create: XOR<ChargerCreateWithoutStationInput, ChargerUncheckedCreateWithoutStationInput>
  }

  export type ChargerUpdateWithWhereUniqueWithoutStationInput = {
    where: ChargerWhereUniqueInput
    data: XOR<ChargerUpdateWithoutStationInput, ChargerUncheckedUpdateWithoutStationInput>
  }

  export type ChargerUpdateManyWithWhereWithoutStationInput = {
    where: ChargerScalarWhereInput
    data: XOR<ChargerUpdateManyMutationInput, ChargerUncheckedUpdateManyWithoutStationInput>
  }

  export type ChargerScalarWhereInput = {
    AND?: ChargerScalarWhereInput | ChargerScalarWhereInput[]
    OR?: ChargerScalarWhereInput[]
    NOT?: ChargerScalarWhereInput | ChargerScalarWhereInput[]
    id?: StringFilter<"Charger"> | string
    stationId?: StringFilter<"Charger"> | string
    type?: StringFilter<"Charger"> | string
    status?: StringFilter<"Charger"> | string
  }

  export type StationCreateWithoutChargersInput = {
    id?: string
    name: string
    location: string
    createdAt?: Date | string
  }

  export type StationUncheckedCreateWithoutChargersInput = {
    id?: string
    name: string
    location: string
    createdAt?: Date | string
  }

  export type StationCreateOrConnectWithoutChargersInput = {
    where: StationWhereUniqueInput
    create: XOR<StationCreateWithoutChargersInput, StationUncheckedCreateWithoutChargersInput>
  }

  export type BookingCreateWithoutChargerInput = {
    id?: string
    userId: string
    startTime: Date | string
    endTime: Date | string
    status: string
    createdAt?: Date | string
  }

  export type BookingUncheckedCreateWithoutChargerInput = {
    id?: string
    userId: string
    startTime: Date | string
    endTime: Date | string
    status: string
    createdAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutChargerInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutChargerInput, BookingUncheckedCreateWithoutChargerInput>
  }

  export type BookingCreateManyChargerInputEnvelope = {
    data: BookingCreateManyChargerInput | BookingCreateManyChargerInput[]
    skipDuplicates?: boolean
  }

  export type StationUpsertWithoutChargersInput = {
    update: XOR<StationUpdateWithoutChargersInput, StationUncheckedUpdateWithoutChargersInput>
    create: XOR<StationCreateWithoutChargersInput, StationUncheckedCreateWithoutChargersInput>
    where?: StationWhereInput
  }

  export type StationUpdateToOneWithWhereWithoutChargersInput = {
    where?: StationWhereInput
    data: XOR<StationUpdateWithoutChargersInput, StationUncheckedUpdateWithoutChargersInput>
  }

  export type StationUpdateWithoutChargersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StationUncheckedUpdateWithoutChargersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpsertWithWhereUniqueWithoutChargerInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutChargerInput, BookingUncheckedUpdateWithoutChargerInput>
    create: XOR<BookingCreateWithoutChargerInput, BookingUncheckedCreateWithoutChargerInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutChargerInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutChargerInput, BookingUncheckedUpdateWithoutChargerInput>
  }

  export type BookingUpdateManyWithWhereWithoutChargerInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutChargerInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: StringFilter<"Booking"> | string
    userId?: StringFilter<"Booking"> | string
    chargerId?: StringFilter<"Booking"> | string
    startTime?: DateTimeFilter<"Booking"> | Date | string
    endTime?: DateTimeFilter<"Booking"> | Date | string
    status?: StringFilter<"Booking"> | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type ChargerCreateWithoutBookingsInput = {
    id?: string
    type: string
    status: string
    station: StationCreateNestedOneWithoutChargersInput
  }

  export type ChargerUncheckedCreateWithoutBookingsInput = {
    id?: string
    stationId: string
    type: string
    status: string
  }

  export type ChargerCreateOrConnectWithoutBookingsInput = {
    where: ChargerWhereUniqueInput
    create: XOR<ChargerCreateWithoutBookingsInput, ChargerUncheckedCreateWithoutBookingsInput>
  }

  export type ChargerUpsertWithoutBookingsInput = {
    update: XOR<ChargerUpdateWithoutBookingsInput, ChargerUncheckedUpdateWithoutBookingsInput>
    create: XOR<ChargerCreateWithoutBookingsInput, ChargerUncheckedCreateWithoutBookingsInput>
    where?: ChargerWhereInput
  }

  export type ChargerUpdateToOneWithWhereWithoutBookingsInput = {
    where?: ChargerWhereInput
    data: XOR<ChargerUpdateWithoutBookingsInput, ChargerUncheckedUpdateWithoutBookingsInput>
  }

  export type ChargerUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    station?: StationUpdateOneRequiredWithoutChargersNestedInput
  }

  export type ChargerUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    stationId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ChargerCreateManyStationInput = {
    id?: string
    type: string
    status: string
  }

  export type ChargerUpdateWithoutStationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    bookings?: BookingUpdateManyWithoutChargerNestedInput
  }

  export type ChargerUncheckedUpdateWithoutStationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    bookings?: BookingUncheckedUpdateManyWithoutChargerNestedInput
  }

  export type ChargerUncheckedUpdateManyWithoutStationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type BookingCreateManyChargerInput = {
    id?: string
    userId: string
    startTime: Date | string
    endTime: Date | string
    status: string
    createdAt?: Date | string
  }

  export type BookingUpdateWithoutChargerInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateWithoutChargerInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutChargerInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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