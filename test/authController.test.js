const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const app = require('../src/app');
const authService = require('../src/services/authService');

chai.use(chaiHttp);
const { expect } = chai;

describe('Auth Controller', () => {
  let authenticateStub;

  beforeEach(() => {
    authenticateStub = sinon.stub(authService, 'authenticate');
  });

  afterEach(() => {
    authenticateStub.restore();
  });

  it('should return 200 and user data for valid credentials', async () => {
    authenticateStub.returns({ id: 1, username: 'user1' });

    const res = await chai.request(app)
      .post('/login')
      .send({ username: 'user1', password: 'pass1' });

    expect(res).to.have.status(200);
    expect(res.body).to.have.property('message', 'Login successful');
    expect(res.body.user).to.deep.equal({ id: 1, username: 'user1' });
  });

  it('should return 401 for invalid credentials', async () => {
    authenticateStub.returns(null);

    const res = await chai.request(app)
      .post('/login')
      .send({ username: 'user1', password: 'wrongpass' });

    expect(res).to.have.status(401);
    expect(res.body).to.have.property('message', 'Invalid credentials');
  });

  it('should call authenticate with correct parameters', async () => {
    authenticateStub.returns(null);

    await chai.request(app)
      .post('/login')
      .send({ username: 'user1', password: 'pass1' });

    expect(authenticateStub.calledOnceWith('user1', 'pass1')).to.be.true;
  });

  it('should handle missing username or password', async () => {
    const res = await chai.request(app)
      .post('/login')
      .send({ username: 'user1' });

    expect(res).to.have.status(401);
    expect(res.body).to.have.property('message', 'Invalid credentials');
  });

  it('should handle empty request body', async () => {
    const res = await chai.request(app)
      .post('/login')
      .send({});

    expect(res).to.have.status(401);
    expect(res.body).to.have.property('message', 'Invalid credentials');
  });
});

