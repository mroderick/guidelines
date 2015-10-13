## Local Setup

- Install `dennis`
```
	pip install dennis
```

## 1. Create a Release Candidate

- Prepare a new release
```
	dennis prepare [-v 0.2.0]
```
- Push the changes
```
	dennis push
```

Further instructions will be printed out, depending on the project you are in.

## 2. (Optional) Make Fixes to the Release Candidate

- Pull
```
	git checkout release/v0.2.0
	git pull
```
- Make changes

- Commit and push
```
	dennis push
```
## 3. Merge into Master

- Merges RC into Master, publishes a GitHub release, and merges Master back into Develop
```
	dennis release
```
