module.exports = {
    require: [
        'ts-node/register',
        './test/Base.ts'
    ],
    exit: true,
    timeout: 999999,
    'preserve-symlinks': true,
    spec: [
        './test/**/*.test.ts',
        // './test/src/ProtoGenerator/generate.test.ts'
    ],
    // fgrep: 'ignoredReferenceTargets',
    parallel: false
}