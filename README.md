<!-- Please update value in the {}  -->

<h1 align="center">Crypto Price Card</h1>

<div align="center">
   A simple card component to render crypto data.
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Notes](#notes)
  - [Built With](#built-with)
- [How To Run the application](#how-to-run-the-application)

<!-- OVERVIEW -->


## Notes
Some noteworthy information about this project are;

- I decided to prevent refresh of page during polling of the endpoint after every 20 seconds so that the user is not being continously distracted or been dsiturbed and have to start from the first page all over again. However inspection of the code and the browser's network tab will show the pollling of the endpoint happening every 20 seconds.

- I tried to be as modular as possible to ensure that the code base is scalable hence I wrote a number of components even down to an ErrorDisplay component to display an error.

- As regards testing I wrote a few unit tests to test all of the base components in `./components/base` seeing the project is not quite robust and I am not expected to spend too long on it leading me to write integration/e2e tests. Hence I wrote that quantity of tests owing largely to not being required to spend too much time on the task else I would have written more.

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com) for deployment
## How To Run the application

<!-- Example: -->

To clone and run this application locally, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/elminhoemmanuel/crypto-price-card.git

# Move into the crypto-price-card folder
$ cd crypto-price-card

# open up your command line and then Install dependencies
$ npm install

# Run the app
$ npm run dev

# Run tests
$ npm run test
```
