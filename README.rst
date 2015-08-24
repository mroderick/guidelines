Lystable developer guidelines
=============================

Editors
-------

There are many text editors and IDEs out there and we all have our favourite.

We're not precious about which ones are in place as at the end of the day the
code speaks for itself.

One thing we do encourage is that you have an editor
which can lint your code as you're writing it. This prevents accidental
syntax errors from being committed and that Code Reviews can focus more on
the content of the code being submitted.

We also prefer you to use an editor that loads the editorconfig in each
repository. More information can be found at :

* http://editorconfig.org/
* Sublime : https://github.com/sindresorhus/editorconfig-sublime
* Atom : https://github.com/sindresorhus/atom-editorconfig
* IntelliJ editors (PyCharm etc.) : https://plugins.jetbrains.com/plugin/7294

Testing
-------

Testing is great, it proves that your code works (so that someone else won't
have to) and provides a great comfort blanket for refactoring and working
within complex areas of the codebase.

All new code should be thoroughly unit tested with integration or functional
tests being used to add confidence as necessary. Tests must be deterministic
and watch out for the inevitable daylight savings bugs!

There is such a thing as too much testing and care should be taken not to
add redundent tests or to test third party code. Focus instead on writing
tests with clear objectives and assertions.

Branching
---------

We use `git flow <http://nvie.com/posts/a-successful-git-branching-model/>`_
as the base for our branching model.

All new code should be committed to a feature branch branched off ``develop``
and branches should have a name descriptive of the feature being worked on.

As we have Github connected to JIRA, branches can be created from your epics,
stories, or tasks. You are also encouraged to name your branches so that JIRA
picks up on them automatically. All you have to do is to make sure the
ticket number, ie. `LYS-123`, is in the branch name -- something like
`feature/LYS-123-something-descriptive` should suffice. This helps us
document your commits and branches both during code-reviews and in a
few years time.

The ``master`` branch is reserved to track against deployed code.

Code review / QA
----------------

Every branch must be code reviewed before being merged into ``master`` and
have a stamp after the most recent commit indicating that the reviewer is
happy with all the changes in that branch.

**All code should be checked out and used by the reviewer wherever possible,
especially when related to a feature or some functionality, to ensure the
usability of the end result.**

Code reviews are a collaborative process and form a conversation between a
developer and one or more other members on the team and should be treated as
such. The goal is to end up with the highest quality code possible (within
scope and reason). The developer of a feature should raise a GitHub Pull
Request when a branch is ready for review and notify the team. Any other
member of the team (with a reasonable amount of context) can opt in to
review the code, although it doesn't make much sense for more than a couple
of people to review the code at any given time.

We recommend that you check-out the code that is being reviewed. Take the time
to view the files changed and click through the use stories. Understanding the
code is key to a successful review. Don't be shy to speak to the author and
get a talk through of the code to fully understand the PR.

When reviewing code, comments should be left inline with the lines/blocks
of code they reference unless they are more generic comments on the whole
branch.

As a reviewer, you should focus on the following:

Design Decisions
    Which patterns have been implemented in this branch? Are there other
    options to consider and is there a clear advantage to one over the other?

Readability
    Is the code easy to follow and does it follow the conventions of the
    code around it? Are there things that the linter might have missed or
    suggestions to reformat code so that it's less confusing.

Naming
    Whilst avoiding unnecessary bikeshedding, naming is important
    (`and it's difficult! <http://martinfowler.com/bliki/TwoHardThings.html>`_)

Interfaces and signatures
    Make sure public facing APIs are intuitive.

Testing
    Is the code properly covered by tests and is it easy to correlate
    the tests with the code.

Improvements
    Is there anything that you can see that could be improved with
    utilities or patterns that you're aware of.

(The above is not an exhaustive list and feel free to add more to it!)

.. note::
    It's important for both the author(s) and the reviewer(s) to keep in mind
    that this process is improve the quality of the overall codebase. Tone
    of voice is important and all comments should be constructive rather than
    critical. That being said, short comments are fine as long as they
    effectively communicate the changes required (and why).

    Try to be objective in differentiating between the *right* way to
    implement something and the way *you* would have implemented it if you
    were writing the code.

Merging
-------

The requirements for a pull request to be considered ready to merge
are as follows:

* At least one comment from the reviewer which has been addressed
  (in code or in reply) by the author
* An emoji stamp (:+1: or other) from the reviewer(s) after the most
  recent commit
* The branch must be strictly ahead of master (eg. containing all of the
  commits currently in master)

Documentation
-------------

Where possible code should be documented for other contributers, the wider
development team and any others that may need to utilise code from that
codebase. Special care should be paid to APIs especially public ones that
may be consumed by code living outside of that particular codebase to prevent
engineers from having to dig into code to determine behaviour.

When editing JavaScript please use an extension such a DocBlockr to quickly
add JSDoc style comments to your code. We encourage rigorous JSDoc documentation
in JavaScript to create a complete auto-documentation feature. More information
on JSDoc can be found here : http://usejsdoc.org/howto-amd-modules.html

Blockers
--------

We all get blocked by things from time to time, whether they be waiting for
the answer to a question or waiting for another piece of work to be completed.
We do our best not to schedule work for the same sprint that have cross
dependencies which may not be resolved. It's important to raise the visibility
of the blocker to the rest of the team, especially those who can remove it.
Most commonly this can be done during the daily standup or a discussion at the
point where the blocker is identified.

Improvements
------------

Improvements to the development process should be discussed in the Sprint
Retrospectives at the end of each sprint.

Styleguides
-----------

* `Python <styleguides/python.rst>`_
* `Javascript <styleguides/javascript.rst>`_

Project specifics
-----------------

See the ``README`` of the project you are contributing to for more specific
guidelines and conventions used within that codebase.
