# Creating a Release Candidate

- Checkout the repository you are about to release locally and pull the latest changes from develop
```
git checkout develop
git pull
```
- Run this command to get the latest tag. Let's say this is **v0.1.3**
```
git describe --abbrev=0 --tags
```
- Create a branch locally with the name **release/v0.2.0** (see [Incrementing Versions](#version-increment))
```
git checkout -b release/v0.2.0
```
- Generate the change log
```
sawyer -u <GitHub username> lystable/<repository> v0.1.3 v0.2.0
```
- Add the new change log to the start of CHANGELOG.md
- Read through it and make any changes to ensure it is well organised and correct
- Check the repository's own RELEASE.md file to see if there are additional steps for this repository
- Push it upstream as normal
```
git commit -a
git push -u origin release/v0.2.0
```

CircleCI will now build and deploy your release candidate to the staging environment.

- API: api.lystable.net
- App: *.lystable.net

# Making Bug Fixes to the Release Candidate

This works the same way as your own feature branch, you add commits to it until you're satisfied.

- Make changes
- Commit and push
```
git commit -a
git push -u origin release/v0.2.0
```

This will deploy to staging again. Once you're happy with the branch, move to the next step of merging to production.

# Merging a Release Candidate into Master

- Open a PR for **release/v0.2.0** (head) into **master** (base)
- Once the PR is merged into master, create a new release for that project via its release page, e.g. here is the [LWS release page](https://github.com/lystable/lws/releases).
- Use tag **v0.2.0** with the **master** branch as the target branch.
- Copy the new CHANGELOG.md section into the release description
- Hit **Publish** at the bottom of the release page when done.

# Merging any Bug Fixes back into Develop

Because the bug fixes were done on the release branch and then went straight into master, we haven't got them yet in develop. This means we need to bring them into develop by **merging master into develop**.

- Open a PR for **master** (head) into **develop** (base). **Do NOT delete the master branch** after merging it into develop, as is normally the process when merging feature branches into develop.

# Additional Info

## <a name="version-increment">Incrementing Versions</a>

In x.y.z, increment the y for a new release with additional features.

Increment the z for bug fixes.

This numbering follows the conventions outlined [here](http://semver.org/).
