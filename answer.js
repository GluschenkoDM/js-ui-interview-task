const logger = require('./logger');
// logger.push('log message') => undefined;
// logger.get() => ['logged', 'messages', 'array'];

/* Test:
    Verify 10 logged messages have been saved in correct order
*/

describe('Logger', () => {
    it('should save 10 messages in correct order', async () => {
        // Arrange
        let expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        // Act
        for (const value of expected) {
            await logger.push(value);
        }

        //Assert
        let actual = await logger.get();

        console.log('Expected result:\t' + expected);
        console.log('Actual result:\t\t' + actual);
    });
});
