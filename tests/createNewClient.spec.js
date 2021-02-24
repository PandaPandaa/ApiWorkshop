import chai, {expect} from 'chai';
import chaiHttp from 'chai-http'
import { createClient } from '../soureceBooksApis/clientApi';
chai.use(require('chai-Http'));

export let clientName;

describe('Client create test suite', async ()=> {
    it('Should test is is possible to create new client @debug', async ()=> {
        const timeStamp = new Date().toLocaleString();
        clientName = `Name of organization ${timeStamp}`;
        const responseFromClientCreate = await createClient(clientName);

        expect(responseFromClientCreate).to.have.status(200);
        expect(responseFromClientCreate.data).to.haveOwnProperty('clientId').to.be.not.null;
    })
})