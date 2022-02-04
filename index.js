const core = require('@actions/core');
// const wait = require('./wait');


// most @actions toolkit packages have async methods
async function run() {
  try {
      const ff = core.getInput('file');
    const tag = core.getInput('tag');
    core.info(`Loading file ${ff} tag: ${tag}`);

    // core.debug((new Date()).toTimeString()); // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true
      // var funcf = require(ff);
    // const res = funcf(tag);
      const res = 'Test completed';
    core.setOutput('result', res);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
