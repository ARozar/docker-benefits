/* global describe, it */
const { expect } = require('chai'),
spawn = require('spawn-command'),
{ Buffer } = require('safe-buffer');

describe('CLI tool that creates hashes', function () {
    const text = 'Test Data';

    describe('when converting', () => {
        it('converted text can be unencoded', async () => {
            const result = await runCLI(`-t "${text}"`);

            const normalString = Buffer.from(result, 'base64').toString('utf-8')
            
            expect(normalString).to.equal(text);
        });
    });
});

function runCLI(argsAsString) {
    const cwd = process.cwd();
    return new Promise((resolve, reject) => {
        let stdout = '';
        let stderr = '';
        const command = `node ./lib/main.js ${argsAsString}`;
        const child = spawn(command, { cwd });

        child.on('error', error => {
            reject(error);
        });

        child.stdout.on('data', data => {
            stdout += data;
        });

        child.stderr.on('data', data => {
            stderr += data;
        });

        child.on('close', () => {
            if (stderr) {
                reject(stderr);
            } else {
                resolve(stdout);
            }
        });
    });
}