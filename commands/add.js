import conf from 'conf'
import chalk from 'chalk'
const config = new conf()

const add = (key) => {
  let apiKey = config.get('OPENAI_API_KEY')

  if (!apiKey) {
    apiKey = ''
  }

  apiKey = key

  config.set('OPENAI_API_KEY', apiKey)

  console.log(chalk.green.bold('Added API key successfully'))
}

export default add