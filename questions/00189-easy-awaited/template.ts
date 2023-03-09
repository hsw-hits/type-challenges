// 이거 쉬움 아닌듯

type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer U>
  ? U extends PromiseLike<unknown>
    ? MyAwaited<U> : U
  : void

type ExampleType = Promise<string>

type Result = MyAwaited<ExampleType> // string

