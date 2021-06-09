# Engineering your application

The goal in this part is to practice and apply the knowledge from previous sections. Putting it all together in a logical and structured way.


## Folders
```
root
|index.js
|package.json
|-- routes // Responsible for splitting up endpoint logic 
    |router.js
    |todo.js
|-- services // These are the workers to handle the logic
    |dbService.js
|-- controllers // Responsible for directing work to corresponding logic, "owns" the process
    |todoController.js
    |userController.js
|-- utils // Shorthands/Tools/Helpers
    |logger.js
```

## Session checklist
1) npm install
2) create folders and files from above description
3) Divide logic from first session into corresponding files(this will take some work, make a good effort and ask if you can't come up with your next action)
4) Focus doing one endpoint end to end request->route->controller->service->dbcall

## Post session activities
To be able to attend the upcoming session you need to have a working API up and running as well as be able to adapt and tweak to the client application needs.

### Checklist
1) The API should be able to respond to CREATE, READ and UPDATE optionally DELETE for TODO
2) The API should be able to respond to READ for USER
