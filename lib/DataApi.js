import { data } from './testData';

const mapIntoObject = (array) => {
  return array.reduce((accumulator, current) => {
    accumulator[current.id] = current;
    return accumulator;
  }, {});
};

const delay = 1000;

class DataApi {

  static getArticles() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], mapIntoObject(data.articles)));
      }, delay);
    });
  }

  static getAuthors() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], mapIntoObject(data.authors)));
      }, delay);
    });
  }
}

export default DataApi;
