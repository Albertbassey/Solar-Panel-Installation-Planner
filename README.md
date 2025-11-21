# Solar-Panel-Installation-Planner

A MERN (MongoDB, Express, React, Node) application to help design and plan residential solar panel installations. Provides site surveys, system sizing, layout visualization, cost estimates, and basic project management features.

## Project link
- https://solar-panel-installation-planner.vercel.app/

## Github repo
- https://github.com/Albertbassey/Solar-Panel-Installation-Planner.git


## Features
- User authentication (JWT)
- Project creation and management
- Roof/site data and system sizing calculations
- Interactive panel layout preview (client-side)
- Cost and ROI estimates
- REST API for CRUD operations

## Tech stack
- Frontend: React (Create React App / Vite)
- Backend: Node.js + Express
- Database: MongoDB (Atlas or local)
- Auth: JSON Web Tokens
- Optional: WebSockets for realtime updates

## Repo structure (suggested)
- /client — React app
- /server — Express API
- /server/models — Mongoose models
- /server/routes — API routes
- /server/controllers — Business logic
- /server/middleware — Auth, validation, error handling
- /scripts — deployment or seed scripts
- README.md

## Requirements
- Node.js >= 16
- npm or yarn
- MongoDB instance (Atlas or local)

## Local setup

1. Clone repository
    ```
    git clone <repo-url>
    cd Solar-Panel-Installation-Planner
    ```

2. Install dependencies
    ```
    cd server
    npm install
    cd ../client
    npm install
    ```

3. Environment variables (example: server/.env)
    ```
    PORT=5000
    MONGODB_URI=mongodb+srv://<user>:<pass>@cluster0.mongodb.net/solar-db
    JWT_SECRET=your_jwt_secret
    NODE_ENV=development
    ```

4. Run in development (concurrently)
    - Option A: from repo root with a script that runs both
      ```
      npm run dev
      ```
    - Option B: run separately
      ```
      cd server && npm run dev  # nodemon
      cd ../client && npm start
      ```

5. Build for production
    ```
    cd client && npm run build
    # Serve static files from server (configure Express to serve client/build)
    cd ../server && npm start
    ```

## Scripts (example package.json)
- server:
  - dev — nodemon server
  - start — production node server
- client:
  - start — dev server
  - build — production bundle
- root (optional):
  - dev — concurrently run client and server

## API (high level)
- POST /api/auth/register
- POST /api/auth/login
- GET /api/projects
- POST /api/projects
- GET /api/projects/:id
- PUT /api/projects/:id
- DELETE /api/projects/:id

(Protect project routes with auth middleware)

## Testing & Linting
- Unit / integration tests (Jest / Supertest for server, React Testing Library for client)
- Lint: ESLint + Prettier
- Example:
  ```
  cd server && npm test
  cd client && npm test
  ```

## Deployment
- Build client and serve with Express or host frontend separately (Vercel/Netlify) and backend on Heroku, Render, or Cloud service.
- Use environment variables for production DB and secrets.
- Enable HTTPS and secure JWT cookies or Authorization headers.

## Contributing
- Fork, create a feature branch, open a pull request with a clear description and issue references.
- Follow code style and include tests for new behavior.

## License
MIT — see LICENSE file.

## Maintainer
For questions or contributions, open issues or contact the maintainer listed in the repository.
