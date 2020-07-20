module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'scope-enum': [2, 'always', ['docs', 'eng', 'tools', 'client', 'abstractions', 'docker', 'all']]
    }
};
