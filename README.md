# auto-commit

![Alt Text](/public/demo.gif)
Improve workflow and efficiency by generating commit messages using the GPT-3 model.

## Installation
Clone the repo onto your machine and install the CLI globally:
```sh
git clone https://github.com/joelinnn/auto-commit.git
npm i -g
```

## Setup
Before being able to generate commit messages, you need to get an API key from your OpenAI [dashboard](https://beta.openai.com/) and save it:
```sh
auto add 'your_api_key_here'
```
Once your key has been added, you can use this command to generate commit messages for any staged changes in your repo:
```sh
auto commit
```
