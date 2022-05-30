# Sample code of React + Redux-toolkit + typescript with Clean architecture
This project is a sample code to introduce a Clean Architecture to a web service or to use a Redux Architecture and a Clean Architecture together.

## Use Stack
Typescript, Webpack, React, Redux-toolkit.

## Clean Architecture
<img src=_readme/clean-architecture.png width="800">

As with various architectures, the primary purpose of a clean architecture is to separate concerns. Divide the hierarchy according to each interest, design domain-centric rather than detailed implementation, and make sure that the internal area does not depend on external elements such as the framework or database UI.

* Distinguish between detailed implementation areas and domain areas.
* Architecture does not depend on the framework.
* The outer zone can depend on the inner zone, but the inner zone cannot depend on the outer zone.
* Both high-level and low-level modules rely on abstraction.


* **Entities:** Entities encapsulate business rules or the most general, high-level rules. An entity can be an object with methods or a set of data structures and functions. They are the least likely to change when something external changes.
* **Use Cases:** The use case layer contains application-specific business rules. It encapsulates and implements all use cases of the system.Changes in this layer affect features. This layer should not be affected by changes to externalities such as database, user interface. The use case layer is isolated from these concerns. Changes to the operation of the application do not affect use cases. If the details of a use case change, then some code in that layer will certainly be affected.
* **Interface Adapters:** The adapter layer is a set of adapters that convert data from use case format and entities, to format for an external layers such as database or web.
* **Frameworks and Drivers:** The outermost layer of the model is usually made up of frameworks such as the web framework database.
* **Crossing Boundaries:** At the bottom right of the diagram, the controller and presenters communicating with the use cases in the next layer. The control flow: it starts in the controller, moves through the use case, and then runs through the presenter. Also note the source code dependencies: each points to the use case.


Complying with these simple rules is not difficult, and it will create a system that is testable, maintainable, and with all the benefits that entails. When one of the external parts of the system becomes obsolete, the replacement is done in a minimum of time.

## Clean Architecture Implementation
After the definition of clean architecture in an abstract way, here is the projection of this architecture in the context of a web app described by this diagram:

<img src=_readme/clean-architecture-impl.png width="800">

* Entities and use cases work together and are the center of the system. Communication with the first layer of the Framework is done with DataSource via an interface.

* There are two main parts Business and Framework, the business part is the most important part in the system because it contains the business logic independently of the other parts.

## Directory Structure
<img src=_readme/package.png width="400">

## Detailed Architecture Concepts
To explain this architecture in detail, we take a simple example of inserting a note. 
* First,we create a Note entity.

<img src=_readme/note.png width="200">

* Then we define the use case of inserting a note and the interaction with the framework layer.

<img src=_readme/insert-note.png width="600">

From this figure it is possible to test the use cases without needing the actual network or cache service, and the same for the other parts. Also now in the interactors directory we can see the different use cases like classes (InserNewNote example in the figure) this helps to design a system that is easy to maintain, and has described itself what it improves the performance of the teamwork ,and it supports parallel work.

## Communication Flow
We can distinguish two cases: 

* Flow without network call:

<img src=_readme/flow1.png width="500">

**1-** Click event on the ui.

**2-** Action dispatched to the store.

**3-** Find correspond reducer with action.

**4-** Get current state.

**5-** Update state.

**6-** Notify ui to update.

* Flow with network call:

<img src=_readme/flow2.png width="600">

**1-** Click event on the ui.

**2-** Action dispatched to the store.

**3-** Dispatch use case (thunk).

**4-** Request api.

**5-** Response from api.

**6-** Find correspond reducer with action.

**7-** Get current state.

**8-** Update state.

**9-** Notify ui to update.

## Screenshots
<img src=_readme/app.png width="800">

## Run Project
### 1. Mock Server
#### Install
```shell
# $ cd /server
$ npm install
```
#### Start
```shell
# $ cd /server
$ npm start
```

### 2. Web
#### Install
```shell
# root project directory
$ npm install
```

#### Start
```shell
# root project directory
$ npm start
```

## Credits
* https://github.com/falsy/react-with-clean-architecture/tree/v1.8.1
* https://www.youtube.com/playlist?list=PLejc1JbD4ZFREfrBoSl8tjAPZOY6HNqZv
* https://github.com/KimzCodes/reduxt-toolkit-thunk-book-app
* https://github.com/Abouelyatim/Open-API-Android-App-Clean
* https://redux.js.org/
