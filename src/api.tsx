import { Composer } from './types';

const rootUrl = 'https://api.openopus.org';

export const getEssentialComposers = async (): Promise<readonly Composer[]> => {
  const response = await fetch(`${rootUrl}/composer/list/rec.json`);
  const data = await response.json();
  const composers = data.composers;
  return composers;
};

export const getPopularComposers = async (): Promise<readonly Composer[]> => {
  const response = await fetch(`${rootUrl}/composer/list/pop.json`);
  const data = await response.json();
  const composers = data.composers;

  return composers;
};

export const searchComposer = async (
  name: string
): Promise<readonly Composer[]> => {
  const response = await fetch(`${rootUrl}/composer/list/search/${name}.json`);
  const data = await response.json();
  const composers = data.composers;
  return composers;
};
