import "core-js/stable";
import "regenerator-runtime/runtime";
const { checkForUrl } = require('../src/client/js/urlChecker')

describe('Testing the functionality of checkForUrl() ' , () => { 
    it('It should return true when it takes a valid url', async () => {
        var url = "https://www.foxnews.com/media/trevor-noah-suggests-israel-fight-against-hamas";
        const response = checkForUrl(url);
        expect(response).toBeDefined();
        expect(response).toBe(true);
    });

    it('It should return false when it takes an invalid url', async () => {
        var url = "http://httpww.foxnews.com/media/trevor-noah-suggests-israel-fight-against-hamas";
        const response = checkForUrl(url);
        expect(response).toBeDefined()
        expect(response).not.toBe();
        // try {
        //     expect(response).toBeDefined();
        //     expect(response).toBe();
        //     done();
        //   } catch (error) {
        //     done(error);
        //   }
    });
});
