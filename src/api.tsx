const rootUrl = 'https://api.openopus.org';

export const getEssentialComposers = async () => {
  const response = await fetch(`${rootUrl}/composer/list/rec.json`);
  const data = await response.json();
  const composers = data.composers;
  return composers;
};

export const getPopularComposers = async () => {
  const response = await fetch(`${rootUrl}/composer/list/pop.json`);
  const data = await response.json();
  const composers = data.composers;

  return composers;
};

export const searchComposer = async (name: string) => {
  const response = await fetch(`${rootUrl}/composer/list/search/${name}.json`);
  const data = await response.json();
  if (data.status.success === 'false') {
    return data.status.error;
  }
  const composers = data.composers;
  return composers;
};
