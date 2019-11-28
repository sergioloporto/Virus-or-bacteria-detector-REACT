<h1 align="center">Welcome to Virus or Bacteria detector 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.1-blue.svg?cacheSeconds=2592000" />
</p>

> An app to diagnose if an infection is viral or bacterical.

The tool is also available here: https://distracted-elion-064c0f.netlify.com/


## Notes
Login writes the logged in user to localStorage.
New features to be added: registration mechanism to localStorage and then migration to Firebase


## Install

```sh
npm install
```

## Usage

```sh
npm run start
```
If you want to use the login system then:
```
npm install -g json-server
json-server src/db-json/users.json --watch --port 3005
```

But it's not needed. You can test the diagnose tool without loging in here

## Run tests

```sh
npm run test
```

## Author

👤 **Sergio Lo Porto**

* Website: https://sergioloporto.github.io/dist/
* Github: [@sergioloporto](https://github.com/sergioloporto)
