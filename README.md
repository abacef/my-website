# My Website

My Website aims to showcase my resume, some of my recent coding projects, and some cool things that are possible with a web service

## Stack
**Front End**: [React](https://reactjs.org/)

**Back End**: [SparkJava](http://sparkjava.com/) (micro framework middleware), [H2](https://www.h2database.com/html/main.html) (database)

## Features

#### Currently Implemented
- A basic banner
- Routing to different pages from the nav bar

#### In Progress
- Parsing and display of an RSS feed from fuelly.com (tracks my car's fuel ups)
- A bug tracker (REST API) for this website

#### Planned
- Resume in HTML
- Projects page
- [Sudoku Solver](https://github.com/abacef/SudokuSolver) port to the web (shocasing client vs server speed)
- Sudoku Solver in WebAssembly

## Building and Running Locally

#### Pre-Requisites
- Node 11.0.0+
- Java 8+
- Maven 3.3.0+

#### Procedure
- Clone the repository
- In `/path/to/my-website/src/main/resources` run `npm run build`
- In `/path/to/my-website/` run `mvn clean package`
- In `/path/to/my-website/target` run `jar my-website-*.*.*-jar-with-dependencies.jar`
- Point your browser to `localhost:4567`
