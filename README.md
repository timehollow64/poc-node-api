# Node API

API made with Node.
Tested with the native Node testing framework.

## N-Layers Architecture:

### src - source code

- entities - object mappings
- factories - instance generators
- repositories - data access
- routes - endpoint mappings
- services - communication between routes <-> repositories layer (business logic)
- utils
- handler -> communication between routes <-> server
- index.js -> server instance

### tests -> all automated test suites

- integration tests - testing on the user point of view. It's also an E2E there's no app consuming it.
- unit tests - tests that must run without any external connections such as ddbb, external APIs, etc.

### Tasks:

- [] it should have an endpoint for storing heroes' data.
- [] it should have an endpoint for retrieving heroes' data.
- [] it should have an endpoint for updating heroes' data.
- [] it should have an endpoint for deleting heroes' data.
- [] it should test when the application throws an error.
