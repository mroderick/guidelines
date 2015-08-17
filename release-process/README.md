# Creating a Release Candidate

- Checkout the repository you are about to release locally and pull the latest changes from master
```
git checkout master
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
- Check the repository's own RELEASE.md file to see if there are additional steps for this repository
- Push it upstream as normal
```
git commit -a
git push -u origin release/v0.2.0
```

CircleCI will now build and deploy your release candidate to the staging environment.

- API: api.lystable.net
- App: *.lystable.net

# Making hot fixes to the Release Candidate

This works the same way as your own feature branch, you add commits to it until you're satisfied.

- Make changes
- Commit and push
```
git commit -a
git push -u origin release/v0.2.0
```

This will deploy to staging again. Once you're happy with the branch, move to the next step of merging to production.

# Merging a Release Candidate into Production

- Open a PR for **release/v0.2.0** (head) into **production** (base)
- Once the PR is merged into production, create a new release for that project via its release page, e.g. here is the [LWS release page](https://github.com/lystable/lws/releases).
- Use tag **v0.2.0** with the **production** branch as the target branch.

You should add a high-level description of the features in this release.

Hit **Publish** at the bottom of the release page when done.

# Merging any Hot Fixes back into master

Because the hot fixes were done on the release branch and then went straight into production, we haven't got them yet in master. This means we need to bring them into master by **merging production into master**.

- Open a PR for **production** (head) into **master** (base). **Do NOT delete the production branch** after merging it into master, as is normally the process when merging feature branches into master.

# Additional Info

## <a name="version-increment">Incrementing Versions</a>

In x.y.z, increment the y for a new release with additional features.

Increment the z for bug fixes.

This numbering follows the conventions outlined [here](http://semver.org/).
