import axios from 'axios';

type Payload = {
  url: string;
  method: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  signal: boolean;
};

export default async ({ url, method, data, signal }: Payload) => {
  try {
    const result = await axios({
      method,
      url,
      ...(signal && { cancelToken: signal }),
      ...(data && { data }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
    });
    return { data: result.data };
  } catch (error) {
    return { error };
  }
};
