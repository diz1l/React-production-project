import { StateSchema } from 'app/providers/StoreProvider';
import { getCaunterValue } from './getCaunterValue';

describe('getCaunterValue', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCaunterValue(state as StateSchema)).toEqual(10);
    });

    test('should work with 0 value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 0 },
        };
        expect(getCaunterValue(state as StateSchema)).toEqual(0);
    });
});
