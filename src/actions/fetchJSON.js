import articles from '../JSON/blog/articles.json';

const router = {
  blog: {
    articles
  }
}

export const get = url => {
  url = url.split('?')[0];
  const routeGroup = url.split('/').slice(1);
  return new Promise((resolve, reject) => {
    let currentData = router;
    routeGroup.forEach(route => {
      currentData = currentData[route];
    });
    resolve(currentData);
  });
}

export default get;