# Parking Lot rater

## Description

This project is a Tinder style application built with React that allows users to rate parking lots by swiping left or right. 
Users can label parking lots as "liked" or "disliked" and view a summary of their choices.

## Tech Stack
React Vite, Typescript, Material UI, GraphQL, Jest

## Demo 
Here's a demo gif showing the swiping functionality and the summary view:

<img src="https://github.com/BhagyaPrasadSamarathunga/Assets/blob/main/Park_Rater_demo.gif" width="900" />

## Features 
- **Tinder View**: Swipe right to "like" a parking lot or left to "dislike" it.
- **Summary View**: After swiping through the parking lots, users can view a summary of liked and disliked lots.
- **Responsive Design**: Optimized for various screen sizes.
- **Scalable Architecture**: Built with React and Apollo Client, making it easy to integrate with GraphQL APIs.

## Code Quality 
- This project uses [ESLint](https://eslint.org/) to maintain code quality and enforce consistent coding standards.

## Setup

```
npm install
```
```
In the root directory of Parking-Lots-Rater project, create a file named .env.
Open the .env file and add the following line: VITE_GRAPHQL_API_URL=<YOUR_APOLLO_API_URL_HERE>
```

## Run App

```
npm start
```

## Run Tests

```
npm test
```

## Run eslint

```
npm lint
```

## Improvement
- Increase Unit Test coverage
- Enhance Filtering and Sorting Options
- Enhance UI/UX
- Accessibility Improvements
- Implement the behaviour of "like" and "dislike" button like tinder app
