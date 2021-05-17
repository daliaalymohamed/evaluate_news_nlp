import "core-js/stable";
import "regenerator-runtime/runtime";
import { handleSubmit } from '../src/client/js/formHandler';

describe('Testing handle_submit function' , () => {
    it('should return true', async () => {
        expect(handleSubmit).toBeDefined();
        expect(handleSubmit).not.toBeNull();
    });
    
});