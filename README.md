![logo](https://user-images.githubusercontent.com/33086430/166148548-31b61d3b-8eb7-42b7-bc69-e8e80f14aa13.png)


# Redberry Covid Form

The Covid Questionnaire is an application for Redberry's new employees. It's purpose is to know their attitude towards the Covid situation and how Redberry can improve and contribute to the company's internal Covid policy.  

---



### Table of Contents
- [Prerequisites](https://github.com/RedberryInternship/covid19-ninadarbaidze#prerequisites)  
- [Tech Stack](https://github.com/RedberryInternship/covid19-ninadarbaidze#tech-stack)
- [Getting Started](https://github.com/RedberryInternship/covid19-ninadarbaidze#getting-started)
- [Testing](https://github.com/RedberryInternship/covid19-ninadarbaidze#testing)
- [Project Structure](https://github.com/RedberryInternship/covid19-ninadarbaidze#project-structure)
- [Resources](https://github.com/RedberryInternship/covid19-ninadarbaidze#resources)

### Prerequisites
:red_circle: *Node JS v16.X*  
:red_circle: *npm v8*

---


### Tech Stack
:red_circle: *React v18.0.0*  
:red_circle: *Taiwlind v3.X*  
:red_circle: *Cypress v9.X*  

---

### Resources

- [Application Design](https://www.figma.com/file/56t2BI25FcD0LAIjR4GVkQ/%E1%83%99%E1%83%98%E1%83%97%E1%83%AE%E1%83%95%E1%83%90%E1%83%A0%E1%83%98?node-id=37%3A3)  
- [Application Design Prototype](https://www.figma.com/proto/56t2BI25FcD0LAIjR4GVkQ/%E1%83%99%E1%83%98%E1%83%97%E1%83%AE%E1%83%95%E1%83%90%E1%83%A0%E1%83%98?node-id=37%3A3&starting-point-node-id=1%3A2&scaling=contain)
- [Git Commit Conventions](https://redberry.gitbook.io/resources/git-is-semantikuri-komitebi)

---

### Getting Started
1. Clone Redberry Covid Form repository from github:

```
git clone https://github.com/RedberryInternship/covid19-ninadarbaidze.git
```


2. Install dependencies

```
npm install
```


3. Make a development server available for the application.

```
npm start
```

---

### Testing

Redberry Covid Form application is test driven. It uses E2E testing framework Cypress.

1. Make sure to install dependences

```
npm install
```

2. Create cypress.json file.

This JSON file is used to store any configuration values you supply. The default behavior of Cypress can be modified by supplying any of the [following](https://docs.cypress.io/guides/references/configuration#Global) configuration options.

You can create and copy initial values from cypress.json.example with following command:

```
cp cypress.json.example cypress.json
```


3. Run a Development server

```
npm start
```

4. Run Cypress end to end testing using command:

```
npx cypress open
```

---

### Project Structure

```

├─── public
├─── src     
│   ├─── assets     
│   ├─── components    
│   ├─── pages 
│   ├───├─── CovidPolitics
│   ├───├───├─── components
│   ├───├───├─── hooks
│   ├───├───├─── CovidPolitics.jsx
│   ├───├─── CovidSituation
│   ├───├───├─── CovidSituation.jsx
│   ├───├─── PersonalInformation
│   ├───├───├─── components
│   ├───├───├─── PersonalInformation.jsx
│   ├───├─── Thanks
│   ├───├───├─── Thanks.jsx
│   ├───├─── Vaccinated
│   ├───├───├─── components
│   ├───├───├───├─── Paragraph.jsx
│   ├───├───├─── Vaccinated.jsx
│   ├───├─── Welcome
│   ├───├───├─── Start.jsx
│   ├─── state  
│   ├───├─── context.js
│   ├───├─── user-context.js     

- .eslintrc.json   
- .prettierrc.js  
- tsconfig.json     
- package-lock.json 
- package.json       
- App.jsx     
- postcss.config.js
- tailwind.config.js

```
