import { Configuration, OpenAIApi } from 'openai'
import { program } from 'commander'
import { exec } from 'child_process'
import chalk from 'chalk'
import conf from 'conf'
const config = new conf()
const apiKey = config.get('OPENAI_API_KEY')

const configuration = new Configuration({
  apiKey: apiKey,
})
const openai = new OpenAIApi(configuration)

const commit = () => {
  if (apiKey) {
    exec('git diff --staged --stat --summary', async ( error, stdout, stderr ) => {
      if (stdout) {
        let filesChanged = stdout.split("\n");
        let generateMessage = 'Write a commit message for the changes in this directory ' + filesChanged.join(',')

        const commitMessage = await openai.createCompletion({
          model: 'text-davinci-003',
          prompt: generateMessage,
          max_tokens: 2000,
        })
        exec(`git commit -m '${commitMessage.data.choices[0].text}'`)
        console.log(chalk.green.bold(`Created a commit with the message: ${commitMessage.data.choices[0].text}`))

      } else {
        console.log(chalk.red.bold('No changes to commit'))
      }
    })
  } else {
    console.log(chalk.red.bold('Please add your OpenAI API key first'))
  }
}

export default commit