const app = require('./index');

let server;
let baseUrl;

// Start a server on a free port before the tests run.
beforeAll((done) => {
  server = app.listen(0, () => {
    baseUrl = `http://localhost:${server.address().port}`;
    done();
  });
});

// Stop the server when the tests are finished.
afterAll((done) => {
  server.close(done);
});

test('GET / returns the home page', async () => {
  const response = await fetch(`${baseUrl}/`);
  expect(response.status).toBe(200);
  expect(await response.text()).toBe('Hello, IS117! Your web server is working.');
});

test('GET /about returns the about page', async () => {
  const response = await fetch(`${baseUrl}/about`);
  expect(response.status).toBe(200);
  expect(await response.text()).toBe('A web server receives a request and sends a response.');
});

test('GET /missing-page returns 404', async () => {
  const response = await fetch(`${baseUrl}/missing-page`);
  expect(response.status).toBe(404);
  expect(await response.text()).toBe('Page not found.');
});