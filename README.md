# Dwarves Foundation Assignment quick start / README

Assignment about integrating with [Github API](https://docs.github.com/en/rest/reference/repos) for fetching the repositories from a username or an organization. This assignment was certified by [Dwarves Foundation](https://dwarves.foundation/).
This project was deployed in this [link](https://dwarves-foundation-assignment.s3.amazonaws.com/index.html). Feel free to check out that.

![dwarves-foundation-assignment](./images/dwarves-foundation-assignment.png)
*Dwarves Foundation Assignment UI*

## Requirements

Before using this Project, make sure you have these dependencies:
- Install [Node](https://nodejs.org/en/), including the npm.

Clone this project and install the dependencies:
```bash
$ git clone https://github.com/shelldog/dwarves-foundation-assignment.git
$ cd dwarves-foundation-assignment
```

## Usage

Before running this Project, first of all you have to make sure to run these commands
```bash
# Create both env files for prod and dev environments
$ touch .env .env.dev
```

To run:
```bash
# Run in development mode
$ npm run dev
```

## Description

This project was made with my own [React Boilerplate](https://github.com/shelldog/react-javascript-boilerplate) integrated with [Webpack](https://webpack.js.org/). Instead of using `npx`, by using this boilerplate I can make sure that the application will run faster and smoother.

## Algorithms

They required me to implement some sorting system by `stars`, `forks` and `views`. So I'm going to use `Quick Sort` algorithm with complexity of O(nlog(n)).

```js
// Source code of Binary Search
const quickSort = (data, type) => {
  if (data.length <= 1) return data;

  let pivot = data[0];
  let left = [];
  let right = [];

  for (let i = 1; i < data.length; i++) {
    if (data[i][type] <= pivot[type]) left.push(data[i]);
    else right.push(data[i]);
  }

  left = quickSort(left, type);
  right = quickSort(right, type);

  // from most to less
  return [...right, pivot, ...left];
}
```
