#!/usr/bin/env node

const yargs = require('yargs');
const handler = require("./lib/handler");

yargs
  .usage("$0 <cmd> [args]")
  .demandOption(
    ["create"],
    `Please provide the <name> of the file you want the schema to be saved in.`
  )
  .command(
    "$0 [create]",
    "Mongo-scaffold - create a mongo schema",
    yargs => {
      yargs.positional("--create", {
        type: "string",
        alias: "c",
        describe: "Name of the file where the schema would be stored."
      });
    },
    (argv) => handler({
      argv
    })
  )
  .help().argv;