import fetch from 'cross-fetch';

export const fetcher = <TData, TVariables, TOutput, TInput = TVariables>(
  query: string,
  variables?: TVariables,
  options?: RequestInit['headers'],
  outputFn?: (data: TData) => TOutput | undefined,
  inputFn?: (variables: TVariables) => TInput,
): (() => Promise<TOutput | undefined>) => {
  return async () => {
    const input = inputFn && variables ? inputFn(variables) : variables;

    const res = await fetch('', {
      method: 'POST',
      ...options,
      body: JSON.stringify({ query, variables: input }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    const output = outputFn ? outputFn(json.data) : json.data;

    if (output === null) throw new Error('Fetcher returned null');

    return output;
  };
};
