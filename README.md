# JSON to GraphQL

This project was a quick proof of concept in which a GraphQL schema definition could be derived from an example API response.
The results are not ordered in a meaningful way, but this could be pretty easily changed.

## Why?

As I have been learning GraphQL, I have started to wonder if there was any benefit to be had by simply converting an existing REST Apis to GraphQL in a 1:1 manner.
This came with a minor annoyance, however, having to manually create a schema. It was then when I thought this could be something to automate, which resulted in this project.

## Usage

See `example.js` for example usage. You'll notice that the only scalar that is not represented through standard javascript is GraphQLID.
Due to there not being an ID type in javascript, this brought along the '@GraphQLType' syntax extension to strings. You can specify any type manually with this syntax, as can be seen with Person.
