AngularJS -- Interactive introduction

              ---What is it?---
  -Is a front end framework, more opinionated
  -structural framework for dynamic web apps
  -Use HTML for templating
  -Allows extending HTML's syntac to render custom build components
    -Can build own HTML tags
  -What HTML would have been, had it been designed for applications
    -Orignal purpose of HTML was to put documents(static pieces of paper) on the web
    - Angular gives that document functionality

            ---What does it provide?---

                  --Models (State)--
  -Model is a singleton defined by service
    -Singleton - one instance of model
    -Only one copy of service(where models live)
    -Handles business logic
    -Provide an excellent way to separate data and display
    -great for unit testing!
      -'is the model in a state I expext it to be in?'
    -!-Similar to a JS representation of a database-!-

                  --Templating (View)--
  -AngularJS use HTML for templating
    -Able to choose other engines like jade
  -!-Similar functionaly to handlebars-!-

                    --Controller--
  -Act as an interlayer between model and view
    -should be thin as possible
  -Avoid business logic
  -Should not care about presentaion or DOM manip
  -Should pull in all dependencies to manipulate data
    -routes are controllers
  -Should pull in data from services, helper methods
  -For the most part each controller is attached to one view
  -!-Basically should transform data to what the view needs-!-

              ---Two Way Data Binding---
                  (through scope)
    -Template and model individual changes made on one or the other
      -Through binding in controller (scope is an object in angluar)

                  ---Providers---
    -Built in libraries for angluar
      -Value (global)(preloading Angular on startup with key: value)
      -Constant (global)(like const, key: value to keep on startup that cant ever change)
      -Factory (build services)
      -Service (data model key: value)
      -Provider (builds factories to build services)

                ---Directives---
    -Special markers on a DOM element(attribute, element name, comment, or CSS class) that signals AngularJS's HTML compiler ($compile) to attach a specified behavior to that DOM element or even transform the DOM element and its children
    -Can bake in as much functionality as you want

                ---Animations---
    -On page enter, On page leave, On component enter, On component leave
    -Animations faster on CSS

                ---Modules---
    -Are containers for different parts of the app
    -AngularJS modules are collections of configuration and run blocks which get applied to the application during the bootstrap process
    -CRUD routes
      -encapsulating on a module base makes code clean and easier to find
    -Bootstrapping process (how to start something from nothing)
      -finds all modules up front and runs modules
      -each module has a bootstrap function
      -then main module has a boostrap function
      -then app runs
      -!-Way to load code in proper order-!-

              ---Routing---
    -Define routes, the view, and controller that render when accessing that route
    -Frontend routes
      -typically view routes
    -API style of routing
      -eg.
        -Server side - GET /api/products
          -returns only JSON data
          -/api - convention to signify route only returns data
        -Angular side - /products
          -returns manipulated data for view









