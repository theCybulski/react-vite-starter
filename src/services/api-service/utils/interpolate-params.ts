export const interpolateParams = (url: string, params: { [key: string]: any }) => {
  const urlParts = url.split('/');

  const urlWithReplacedParams = urlParts.reduce<string[]>((acc, curr) => {
    if (curr.startsWith(':')) {
      const paramValue = params[curr.slice(1)];
      return [...acc, paramValue];
    }

    return [...acc, curr];
  }, []);

  return urlWithReplacedParams.join('/');
};
