# Creating a Release Candidate

- Go to the GitHub repository page, e.g. https://github.com/lystable/lws
- Click on the branch drop-down and check the list of tags there
- Find the latest tag, let's say this is **v0.2.0**
- Create a branch with the name **release/v0.3.0**

CircleCI will now build and deploy your release candidate to the staging environment.

- API: api.lystable.net
- App: *.lystable.net

# Making hot fixes to the Release Candidate

This works the same way as your own feature branch, you add commits to it until you're satisfied.

- Pull your release candidate branch
```
git checkout release/v0.3.0
```
- Make changes
- Commit and push
```
git commit -a
git push -u origin release/v0.3.0
```

This will deploy to staging again. Once you're happy with the branch, make a PR to production.

# Merging a Release Candidate into Production

- Open a PR for the branch **release/v0.3.0** into the **production** branch
- Visit the release page for that project (e.g. for LWS it is https://github.com/lystable/lws/releases)
- Create a release with the tag **v0.3.0**. It should contain: a) tag name, b) title, c) high-level description of the features in this release.

Make sure you label it as a **pre-release** until your PR is merged.

- Once the PR is merged into production, visit the pre-release and hit **Publish**.

