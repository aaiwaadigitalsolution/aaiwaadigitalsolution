export const createPageUrl = (path) => {
  if (path === 'Home') return '/';
  return `/${path.toLowerCase()}`;
};