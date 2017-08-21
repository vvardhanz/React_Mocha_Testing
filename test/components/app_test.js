import { renderComponent, expect } from '../test_helper';
import App from  '../../src/components/app';

//use 'describe' to group togeather similar tests
describe('App', () => {

    //Use 'it' to test a single attribute of a traget
    it('show the correct test', () => {

        //Create an instance of App
        const component = renderComponent(App);

        //Use 'expect' to make an 'assertion' about a terget
        expect(component).to.conatain('react simple starter');

    });

});
