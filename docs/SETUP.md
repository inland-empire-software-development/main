[Back to README](../README.md)

# **Getting Started**
<a name="getting-started"></a>

## **Content**
* [Not yet a contributor](#not-contributor)
* [Already a contributor](#already-contributor)
* [Prerequisite](#prerequisite)
* [Cloning](#cloning)
* [Installation](#installation)
* [Running the project](#run-project)


## **Not yet a contributor**
<a name="not-contributor"></a>
  If you're not a **contributor** you can contact an admin on Slack to become a contributor or you can fork the repo and contribute from there.
  
  * **How to fork** 
  <p align="center">
    <img 
     alt="how to fork"
      width="500px"
      src="https://user-images.githubusercontent.com/36907562/55709480-3f679000-599d-11e9-95bc-a1c832d279ee.png">
  </p>

  * **Afterwards, clone the repo from your fork by copying the url provided**
    * **NOTE:** Unless you understand SSH, make sure you clone using HTTPS. It should say **Clone with HTTPS**
    * Check [Installation](#installation) guidelines if you're unsure how to clone.
  <p align="center">
    <img
      alt="cloning forked repo"
      width="500px"
      src="https://user-images.githubusercontent.com/36907562/55709990-6f636300-599e-11e9-841b-275ba1910c7f.png">
  </p>

## **Already a contributor**
<a name="already-contributor"></a>
If you're already a contributor, then just follow the instructions below.

## **Prerequisite**
<a name="prerequisite"></a>
These are the basic requirements to get the project running on your machine

* git (to clone the repository and push changes to the repo)
* yarn (to install packages)

## **Cloning**
<a name="cloning"></a>
Getting a copy of the project onto your machine.
```bash
  # clone the repo using https
  $ git clone https://github.com/inland-empire-software-development/landing.git

  #for people who fork, it should look like this
  $ git clone https://github.com/your_github_username/landing.git
```

## **Installation**
<a name="installation"></a>
  This installs all the packages required to run the project.

  **NOTE:** Yarn is required.
  ```bash
  # install packages before running the app
  $ yarn install
  ```
 
## **Running the project on your computer**
<a name="run-project"></a>
  **NOTE:** This make take a few minutes to start up.
  ```bash
  # starting the project
  # make sure you are in the project directory
  $ yarn start
  ```