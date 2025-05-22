export default {
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn(),
  create: jest.fn(),
  defaults: {
    headers: {
      common: {},
    },
  },
};
