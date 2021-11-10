const http = require('http');

const getMultiple = async (req, res, next) => {
  try {
    res.status(200);
    res.setHeader('content-type', 'application/json');
    res.write('{');

    const queryKeys = Object.keys(req.query);

    let i = 0;
    for (const item of queryKeys) {
      await new Promise((resolve, reject) => {
        http.get(`http://localhost:3000/v1/${req.query[item]}`, (data) => {
          data.on('data', (chunk) => {
          	const objChunk = JSON.parse(chunk.toString());
          	const extendedObj = objChunk.status ? { [item]: { error: objChunk } } : { [item]: { data: objChunk } };
          	const strObj = JSON.stringify(extendedObj);

          	res.write(`${strObj.substring(1, strObj.length - 1)}${i !== queryKeys.length - 1 ? ',\n' : ''}`);
          });
          data.on('end', () => {
            resolve('done');
          });
          data.on('error', reject);
        });
      });
      ++i;
    }

    res.write('}');
    res.end();
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getMultiple,
};
