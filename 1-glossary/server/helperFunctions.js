
const getArrayFromPageNumber = (pageNumber, data) => {
  return new Promise((resolve, reject) => {
    return data.slice(pageNumber*10, (pageNumber + 1) * 10);
  }).then(results => resolve(results)).catch(err => reject(err));
}

exports.getArrayFromPageNumber = getArrayFromPageNumber;