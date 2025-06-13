# 🏴‍☠️ One Piece Character Finder


Project developed as part of the **DIO** Docker course. The initial goal was to create a simple "Hello World" project running in an Apache container with Docker. To improve the initial scope, I created a One Piece character identifier, with a public API and dynamic information.


## 📌 About the project

The application is composed of HTML, CSS and JavaScript and runs in a Docker container with Apache.

When you type a character's name, the system queries the [One Piece public API](https://www.freepublicapis.com/one-piece-api) and displays information such as occupation, age, bounty, and other data.

## 🐳 How to Run Locally
1. Clone the repository
```bash
git clone https://github.com/gvicencotti/one-piece-character-finder.git
cd one-piece-character-finder
```

2. Upload the project with docker
```bash
docker-compose up
```

3. Access in browser
```bash
http://localhost:8080
```
