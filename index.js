import * as core from '@actions/core';
import * as github from '@actions/actions';

try {
    const name = core.getInput('name');
    const output_value = 'Hello $(name) from barsoom!';
    core.setOutput('greeting', output_value)
    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
} catch (error) {
    core.setFailed(error.message)
}