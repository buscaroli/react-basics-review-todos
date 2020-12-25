# ReactJS Basics

Reviewing react by implementing simple functionalities.

## App: To-Do

Simple TO-DO application that allows the user to add and remove todo notes. When deleted the notes are moved into a separate bin where the user can decide whether to recover or destroy them. 
Focus on implementing the functionality, basic styling and unpolished.

### Features

* React Context
* React Hooks
..* useState, useContext, useEffect
* How to use two Contexts one inside the other
* How to use localStorage to persist data in the Browser in between sessions
* Used uuid to associate a unique key to each item in a list
..* It's important to create the ID while adding the item in the list and NOT when rendering the list with Map; this would associate the same item with different keys at each render which leads to a decrease in performance
* (Poorly) Styled with semantic-ui-css