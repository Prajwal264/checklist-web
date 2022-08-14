import { DefaultToastOptions, Renderable, toast } from 'svelte-french-toast';

export const executePromise = (
  promise: Promise<any>, msgs: {
    loading: Renderable;
    success: Renderable;
  }, opts?: DefaultToastOptions) => {
  return toast.promise(promise, {
    error: null,
    loading: msgs.loading,
    success: ((data) => {
      if (!data.error) {
        return msgs.success;
      }
      throw new Error(data.error);
    }) as any,
  }, {
    error: {
      style: 'display: none'
    },
    ...opts,
  });
}