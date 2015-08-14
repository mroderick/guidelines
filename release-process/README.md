# Creating a Release Candidate

- Go to the GitHub repository page, e.g. https://github.com/lystable/lws
- Click on the branch drop-down and check the list of tags there
- Find the latest tag, let's say this is **v0.2.1**
- Create a branch with the name **release/v0.2.2** (see [Incrementing Versions](#version-increment))
- Check the repository's own release.md file to see if there are additional steps for this repository

CircleCI will now build and deploy your release candidate to the staging environment.

- API: api.lystable.net
- App: *.lystable.net

# Making hot fixes to the Release Candidate

This works the same way as your own feature branch, you add commits to it until you're satisfied.

- Pull your release candidate branch
```
git checkout release/v0.2.2
```
- Make changes
- Commit and push
```
git commit -a
git push -u origin release/v0.2.2
```

This will deploy to staging again. Once you're happy with the branch, make a PR to production.

# Merging a Release Candidate into Production

- Open a PR for the branch **release/v0.2.2** into the **production** branch
- Visit the release page for that project (e.g. for LWS it is https://github.com/lystable/lws/releases)
- Create a release with the tag **v0.2.2** with your release branch as the target branch **release/v0.2.2**. 

You should add a high-level description of the features in this release.

You should label this release as a **pre-release** (tick the box at the bottom) until your PR is merged into production.

- Once the PR is merged into production, visit your pre-release and hit **Publish**.

# Merging any Hot Fixes back into master

Because the hot fixes were done on the release branch and then went straight into production, we haven't got them yet in master. This means we need to bring them into master by **merging production into master**.

- Open a PR from production into master

# Additional Info

## <a name="version-increment">Incrementing Versions</a>

In x.y.z, only increment the z, until the team has reached a consensus to upgrade y and / or x.
