## Local Setup

- Install `dennis`

	pip install dennis

## 1. Create a Release Candidate

- Prepare a new release

	dennis prepare [-v 0.2.0]

- Verify the changes

	git diff

- Push them

	dennis push

Further instructions will be printed out, depending on the project you are in.

## 2. Make Bug Fixes to the Release Candidate

- Pull

	git checkout release/v0.2.0
	git pull

- Make changes

- Commit and push

	dennis push

## 3. Create and Merge the PR into Master

- Create the PR

	dennis release

- Publish the GitHub Release

	dennis publish

- Review and Merge the PR

## 4. Create and Merge the PR into Develop

- Create the PR

	dennis mergeback

- Review and Merge the PR

## Too Many Steps... I'm Lost!

- Ask `dennis` what's up next

	dennis whatsnext
