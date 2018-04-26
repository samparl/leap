# About Leap
It is intended to autocomplete typed airport searches in each of two endpoints, and then optionally calculate the distance between the two in nautical miles. Costs for APIs that provided latitudinal and longitudinal data were too high, so the application will mainly feature autocomplete until a reasonable option can be found and tested.

# Tech Stack
This application was written with Node.js and Express.js on the back end, and with ReactJS on the front end.

# Set Up
1. Clone the repository from github.
2. Get an API key from the current provider: https://aviation-edge.com/developers/
3. Create a .env file in the project's root folder and configure it with
  1. CLIENT_PORT - the port from which you will serve the UI
  2. API_PORT - the port from which you will serve the API
  3. AIRPORT_API_KEY - the key you obtained in the last step
  4. API_URL - the host address of API pointed to by the client

Some sample values for the .env file configuration:
CLIENT_PORT=4000
API_PORT=8000
API_URL=http://localhost:8000
AIRPORT_API_KEY="abc"
