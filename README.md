# modelapp
A experiment for tools on modeling using DDD and Isomorphic JavaScript.

## Problem

- Creating a testable, decoupled, business layer can be very costly due to the lack 
of popular interfaces or libraries that should suggests a common protocol between the 
other layers. As a example of the power of such protocol is Ruby on Rails.

- Currently there are a incredible number of JavaScript modules for 
infrastructure (as we call code not related to the business) to our disposal, 
but on other hand there is almost none that helps with the business modeling per se.


## Hypothesis

Tools (libs / modules) can make maintenance easier for decoupled business code 
by (1) suggesting a common interface for other layers and (2) by code reuse.

## Goal 

First, create a simple application (with enough complexity) using vanilla JavaScript and applying the layers below:

      ┌────────────────────────────────────┐
      │   Presentation (MVC server, MVC    │
      │client, CLI, Crons, test suite, etc)│
      └────────────────────────────────────┘
                         │                  
                    [Protocol]
                         │                  
      ┌────────────────────────────────────┐
      │              Business              │
      └────────────────────────────────────┘
                         │                  
                    [Protocol]
                         │                  
      ┌────────────────────────────────────┐
      │   Persistence (ORM, AJax, Stubs,   │
      │            Mocks, etc.)            │
      └────────────────────────────────────┘

After that we can start experimenting by refactoring the current code and extracting possible small helpers, modules, etc. 

These helpers and modules should work with the current project struct, classes, etc., but should be possible to extend it to other structures.

## Assumptions

- Pure JavaScript and/or small modules over full stack frameworks
- OO, SOLID, Domain driven design and Design Patterns over "single file application"
- Composition over inheritance
- Reusable, highly decoupled, business layer over big ball of mud

That is, while there is value in the items on the right, we value the items on the left more.

Highly inspired by: [Architecture the Lost Years by Robert Martin](https://www.youtube.com/watch?v=WpkDN78P884)

## Other attempts
POC for Isomorphic JavaScript : https://github.com/Vizir/isomorphic_js
