[Back to README](../README.md)

# **Getting Started**
<a name="getting-started"></a>

## **Content**
* [Not Yet a Contributor](#not-contributor)
* [Already a Contributor](#already-contributor)
* [Prerequisite](#prerequisite)
* [Cloning](#cloning)
* [Changing Branches](#change-branches)
* [Updating a Branch](#update-branch)
* [Installation](#installation)
* [Local Development](#local-development)
* [Issues Or questions](#issues-questions)


## **Not Yet a Contributor**
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

## **Already a Contributor**
<a name="already-contributor"></a>
If you're already a contributor, then follow the instructions below.

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

## **Changing Branches**
<a name="change-branches"></a>
The `dev` branch has the most recent activity and updates to work with.

```bash
  # check current branch and branches
  $ git branch
  # change branches
  & git checkout dev
  # directly updates branch to the latest changes
  $ git pull origin dev
```

## **Updating a Branch**
<a name="update-branch"></a>
If you have forked the repo, then you'll have to update to the latest activity from the main repo. This requires setting up a remote origin with the main repo then fetching the updates.

#### Setting and Using an Upstream
```bash
  # add main repo as 'upstream'
  $ git remote add upstream https://github.com/inland-empire-software-development/main.git
  # fetch changes
  $ git fetch upstream
  # merge changes
  $ git merge upstream/master
```
You can use `git pull` instead of `git fetch` if you want to apply the changes directly, which is ideal if work just has begun. Additionally, you may also want to fetch changes from the main repo's branch as well, such as `dev`.

```bash
  # fetch changes from a branch
  $ git fetch upstream dev
  # merge changes to current branch
  $ git merge upstream/dev
```

## **Installation**
<a name="installation"></a>
  This installs all the packages required to run the project.

  **NOTE:** [Yarn](https://yarnpkg.com/) is required.
  ```bash
  # install packages before running the app
  $ yarn install
  ```

## **Local Development**
<a name="local-development"></a>
  **NOTE:** This make take a few minutes to start up. `yarn dev` will host a local server with the website, and will automatically rebuild and hotload changes.

  ```bash
  # make sure you are in the `./main` project directory
  $ yarn dev
  ```

## **Issues or Questions**
<a name="issues-questions"></a>
Please visit us on Slack or leave an issue!