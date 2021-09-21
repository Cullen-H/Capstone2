# Collaborator

### Tech Stack
- React
- NodeJS

### Front End or Back End Focus?
- For this project, a lot of focus must be placed on both backend and frontend.

### What type of application?
- This will be a website, however I have plans to build this as a desktop app in the future using electron(or Java).

### Goal this Application Achieves
- I dislike the layout and functional use for Teams, Slack, and Discord. I would like this project to help rectify some of the things I dislike and implement the things I like.
- I would also like to create a heavier focus on software development.

### Demographic
- This will be targeted towards developement teams who need a collaboration software supporting text and voice channels.

### Data
- I plan to create a backend api for user data, messages, etc...
- I will also you the github api for various repository viewing and sharing tools.
  - one click invite collaborator is one possible example.
- I have not yet chosen between a sql or nosql backend.
  - SQL: Postgres
  - NoSQL: mongoDB or scyllaDB

### General Outline

#### Possible Database Schema
Server Table:
  - serverId: generated server uuid - Type Int
  - serverName: given server nickname - Type varchar
  - serverSettings: server-wide unique settings - Type JSON - Possibly a unique settings table
    - this should include server/channel settings as well as user permissions.

User Table:
  - userId: generated user uuid - Type Int
  - userSettings: global user settings - Type JSON - Possibly a unique settings table

Text Channel Table:
  - channelId: generated channel uuid - Type Int

Direct Message Table:
  - channelId: generated channel uuid - Type Int

Message:
  - messageId: generated message uuid - Type Int
  - timestamp: message post timestamp - in UTC converted to users time zone
  - serverId: foreign key to serverId
  - channelId: foreign key to text or dm channelId
  - userId: foreign key to userId

#### Possible API issues
- difficulty integrating GitHub in a meaningful way before creating a desktop application

#### Sensitive Info
- All user and server specific information must be hidden.
- Allow for server owner to create private channels etc

#### Functionality
- Text chatting
- Possible voice and video chatting
- GitHub repo sharing and viewing

#### User Flow
- Log in and sign up pages ->
- Single page application once logged in ->
  - Similar flow to slack/discord/teams
  - Ability to view text channels
  - Ability to have a dm conversation with an individual within the same server
- Admin can manage the server by adding channels and editing user permissions

#### How is this more than CRUD?
- This application will use websockets and dynamic usage of the GitHub api

#### Stretch Goals
- electron or java desktop application
  - along with this, more github integration similar to github desktop in some ways
- voice channels
  - screens sharing
  - webcam support
- more user and server customization settings
- api that would allow for bot support
