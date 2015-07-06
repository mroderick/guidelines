Lystable developer guidelines
=============================

Editors
-------

There are many text editors and IDEs out there and we all have our favourite.

We're not precious about which ones are in place as at the end of the day the
code speaks for itself. One thing we do encourage is that you have an editor
which can lint your code as you're writing it. This prevents accidental
syntax errors from being committed and that Code Reviews can focus more on
the content of the code being submitted.

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

All new code should be committed to a feature branch branched off ``master``
and branches should have a name descriptive of the feature being worked on.

The ``production`` branch is reserved to track against deployed code.

Code review
-----------

Every branch must be code reviewed before being merged into ``master`` and
have a stamp after the most recent commit indicating that the reviewer is
happy with all the changes in that branch.

Code reviews are a collaborative process and form a conversation between a
developer and one or more other members on the team and should be treated as
such. The goal is to end up with the highest quality code possible (within
scope and reason). The developer of a feature should raise a GitHub Pull
Request when a branch is ready for review and notify the team. Any other
member of the team (with a reasonable amount of context) can opt in to
review the code, although it doesn't make much sense for more than a couple
of people to review the code at any given time.

When reviewing code, comments should be left inline with the lines/blocks
of code they reference unless they are more generic comments on the whole
branch.

As a reviewer, you should focus on the following:

Readability
    Is the code easy to follow and does it follow the conventions of the
    code around it

Naming
    Whilst avoiding unnecessary bikeshedding, naming is important
    (`and it's difficult! <http://martinfowler.com/bliki/TwoHardThings.html>`_)

Interfaces and signatures
    Make sure public facing APIs are intuitive

Testing
    Is the code properly covered by tests and is it easy to correlate
    the tests with the code

Improvements
    Is there anything that you can see that could be improved with
    utilities or patterns that you're aware of.

(The above is not an exhaustive list and feel free to add more to it!)

Documentation
-------------

Where possible code should be documented for other contributers, the wider
development team and any others that may need to utilise code from that
codebase. Special care should be paid to APIs especially public ones that
may be consumed by code living outside of that particular codebase to prevent
engineers from having to dig into code to determine behaviour.

Project specifics
-----------------

See the ``README`` of the project you are contributing to for more specific
guidelines and conventions used within that codebase.
