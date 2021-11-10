const request = require('supertest');
const app = require('../../src/app');

function binaryParser(res, callback) {
  res.setEncoding('binary');
  res.data = '';
  res.on('data', (chunk) => {
    res.data += chunk;
  });
  res.on('end', () => {
    callback(null, JSON.parse(res.data.toString()));
  });
}

describe('GET /multiple', () => {
  test('success response', async (done) => {
    request(app)
      .get('/v1/multiple?prop1=/customers/1')
      .buffer()
      .parse(binaryParser)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.body).toStrictEqual({ prop1: { data: { id: '1', name: 'Bob', surname: 'Dylan' } } });

        done();
      });
  });

  test('response if one sub ruquest fails', async (done) => {
    request(app)
      .get('/v1/multiple?prop1=/customers/1&prop2=/products/6')
      .buffer()
      .parse(binaryParser)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.body).toStrictEqual({
          prop1: { data: { id: '1', name: 'Bob', surname: 'Dylan' } },
          prop2: {
            error: {
              response: {
                message: 'Product not found',
              },
              status: 404,
            },
          },
        });

        done();
      });
  });
});
