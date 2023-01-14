#! /usr/bin/env node
import { program } from 'commander'
import commit from './commands/commit.js'
import add from './commands/add.js'

program
  .command('commit')
  .action(commit)

program
  .command('add <key>')
  .action(add)

const test = 'dwada'

program.parse()