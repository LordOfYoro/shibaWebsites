## Use state management for the front (developed in React)

* Status: WIP
* Deciders:
    * [Dylan Bogaert](mailto:dylanbogaert@wevii.net)
* Date: 2023

### Context and Problem Statement

In the case of an increase in my skills, I'm looking for the best state management option for React.

### Decision Drivers

The chosen language must:

* be simple to use
* can support many cases
* must be performant and can be used on big or/and small systems
* Simplify state management instead of using React Hooks which don't provide good practices / concepts

### Considered Options

* [Redux](#redux)
* [MobX](#mobX)
* [Unstated](#unstated)
* [Recoil](#recoil)

### Search

#### Redux

Redux is a widely-used library. 
It uses a concept called a "store" to hold the application's state, and actions and reducers to update the state.

Advantage :
- Simplicity to use
- Structuration
- Flexibility
- Big community
- Testability (it is easy to test the different parts of app in isolation. This can make it easier to write reliable, maintainable code.)

Disadvantage :
- Be verbose
- Require a lot of boilerplate code :/ (This can make it more difficult to get started with Redux, especially for small or simple projects.)
- Steep learning curve (not simple to learn actions, reducers, and the unidirectional data flow can be difficult to understand)
- Not suitable for new / junior developer
- Overkill for simple projects (add complexity of redux isn't worth)

#### MobX

MobX uses a concept called "observables" to track the state of an application,
and allows components to "observe" the state and automatically re-render when the state changes.

Advantage:
- Easy to learn
- Easy to use (to verify)
- Transactions batch state update (be more performant than Redux)

Disadvantage :
- Structuration (designed to be simple to use but don't have structure)
- Dependency tracking (concept "observables" need to manually specify dependencies 
If you don't do this correctly, your component may not re-render when it should, which can lead to bugs.)
- Potential for abuse: Because MobX makes it easy to make any piece of state "observable",
it can be tempting to use it to track too much state in application. 
This can lead to unnecessary re-renders and performance issues.

#### Unstated

Unstated is a small library. 
It's designed for managing small pieces of state that are specific to a particular component or set of components.

Advantage :
- Easy to use (don't have to set up any additional stores or dispatch actions to update store )
- Small (minimal api = more performant)
- Easy to learn (use React's context API, it's easy to understand, even for developers who are new to state management.)

Disadvantage :
- Don't provide many features (unlike the other)
- It may not be suitable for managing larger or more complex pieces of state that need to be shared across multiple components.
- Structuration (designed to be simple to use but don't have structure)

It has a minimal API and is easy to use, but it does not provide as many features as some other options.

#### Recoil

Recoil uses a concept called "atoms" and "selectors" to manage state in a React app.

Advantage :
- Powerful
- Simplicity
- Easy to use
- Library from Facebook (potentially growing community)

Disadvantage :
- Early stages of development
- Limited adoption (community isn't present at the moment)
- Steep learning curve (atoms and selectors concept)

### Decision Outcome

There's no a global solution..

- MobX don't have structure and need to manually specify dependencies, ok if set up structure (must be considered)
- Unstated isn't a good option for large application, but it's a good option for minimal application. (to learn in future)
- Recoil is a good option, but it's in early stages of development (to watch in the future)

The Best option for the moment is to learn Redux for the moment

- For big application is better to use [Redux](#redux)
- For small/simple application is better to use [Unstated](#unstated)
- In the future check [Recoil](#recoil) for replace Redux

Mobx isn't a good choice too big disadvantage in particular that it isn't suitable for juniors developers + no structure.
