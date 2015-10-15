## Local Setup

- [Install dennis](https://github.com/lystable/dennis)

**All `dennis` commands should be run while inside the project-to-be-released directory.**

## 1. Create a Release Candidate

- Prepare a new release
```
	dennis prepare --type fix --user <GitHub username>
```

## 2. QA Cycle

- Do QA testing

- Make changes
```
	git checkout release/v0.2.0
	git pull
	...
	... make changes ...
	...
	git commit -a
	git push -u origin release/v0.2.0
```

## 3. Complete Release

- Merges RC into Master, publishes a GitHub release, and merges Master back into Develop
```
	dennis release --user <GitHub username>
```
