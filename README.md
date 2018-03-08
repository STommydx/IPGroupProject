# IP Project #

This is the working repository for IP 2017-18 Semester 2 Project. This README file is copied from last semester's OOP repo, so expect some errors. :P

### How do I get set up? ###

Simply clone the repo to get started up. :)

```bash
git clone [clone-url]
cd IPGroupProject
```

### Contribution guidelines ###

The project would not be successful without your contribution! Follow the steps to create a new feature:

1.  You should on `master` branch by default, create a new brench base on it
```bash
git checkout -b feature/yourfeaturename
```
2.  Make awesome changes to the code!
3.  Add changes to a commit by `git add`. Use `git status` to see what your changes.
```bash
git add .
git status
```
4.  Commit the change. A code editor will appear and ask you for commit message.
```bash
git commit
```

Before submitting, you should clean up your work:

1.  Switch to `master` branch, do a pull to update latest changes
```bash
git checkout master
git pull
```
2.  Switch back to `feature/yourfeaturename`, run a rebase with master
```bash
git rebase master
```
3.  Resolve conflicts if needed, seek help if you don't know how to do so

Lastly push the branch to GitHub and create a PR:

1.  Push Branch `feature/yourfeaturename` to GitHub.
```bash
git commit -u origin feature/yourfeaturename
```
2.  Go to GitHub and create a pull request
3.  Set the source as `feature/yourfeaturename` and merge into `master`
4.  Wait for approval!

If you are a crazy person and want to know more, refer to the following 2 links for more details:

1.  [GitHub Standard Fork & Pull Request Workflow](https://gist.github.com/Chaser324/ce0505fbed06b947d962)
2.  [Pull Requests | Atlassian Git Tutorial](https://www.atlassian.com/git/tutorials/making-a-pull-request)

Do try to learn git, you will learn it anyway in COMP 3111. :D

If your brain are f up will all these sh*t steps, just put it in Google Drive and ask Tommy to help......


### Who do I talk to? ###

If you got any problems, feel free to drop a WhatsApp to Tommy Li, who is responsible for managing this useless repo. He will kindly answer you asap. :)
