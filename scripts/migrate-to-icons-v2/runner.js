#!/usr/bin/env node
const {exec} = require('child_process');
const [,, ...args] = process.argv;
const pathArg = args.find(arg => arg.startsWith('--path')) || '--path=src/';
const typeArg = args.find(arg => arg.startsWith('--type')) || '--type=external';

const path = pathArg.split('=')[1];
const type = typeArg.split('=')[1];
exec(`MIGRATION=${type} jscodeshift -t scripts/migrate-to-icons-v2 ${path}`);
