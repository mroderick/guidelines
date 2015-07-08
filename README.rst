Lystable developer guidelines
=============================

Overview
--------

#. `Development process <#development-process>`_
    * `Editors <#editors>`_
    * `Testing <#testing>`_
    * `Branching <#branching>`_
    * `Code review <#code-review>`_
    * `Documentation <#documentation>`_
    * `Blockers <#blockers>`_
#. `Scoping new work <#scoping-new-work>`_
    * `Identifying new work <#identifying-new-work>`_
#. `Improvements <#improvements>`_
#. `Project specifics <#project-specifics>`_

Styleguides:
    * `Python <styleguides/python.rst>`_
    * `Javascript <styleguides/javascript.rst>`_

Development process
-------------------

Editors
~~~~~~~

There are many text editors and IDEs out there and we all have our favourite.

We're not precious about which ones are in place as at the end of the day the
code speaks for itself. One thing we do encourage is that you have an editor
which can lint your code as you're writing it. This prevents accidental
syntax errors from being committed and that Code Reviews can focus more on
the content of the code being submitted.

Testing
~~~~~~~

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
~~~~~~~~~

All new code should be committed to a feature branch branched off ``master``
and branches should have a name descriptive of the feature being worked on.

The ``production`` branch is reserved to track against deployed code.

Code review
~~~~~~~~~~~

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

Documentation
~~~~~~~~~~~~~

Where possible code should be documented for other contributers, the wider
development team and any others that may need to utilise code from that
codebase. Special care should be paid to APIs especially public ones that
may be consumed by code living outside of that particular codebase to prevent
engineers from having to dig into code to determine behaviour.

Blockers
~~~~~~~~

We all get blocked by things from time to time, whether they be waiting for
the answer to a question or waiting for another piece of work to be completed.
We do our best not to schedule work for the same sprint that have cross
dependencies which may not be resolved. It's important to raise the visibility
of the blocker to the rest of the team, especially those who can remove it.
Most commonly this can be done during the daily standup or a discussion at the
point where the blocker is identified.

Scoping new work
----------------

Identifying new work
~~~~~~~~~~~~~~~~~~~~

New work tends to fall into two categories, Product/Feature work or
Technical/Infrastructure work. This may be identified ahead of time from a
roadmap or through the course of some other work where changes fall outside
the scope of the current ticket. The process for scoping this work should
primarily look the same regardless of it's source.

Clarifying the requirements
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Without clear requirements, the implementation and the desired end result
is likely to take longer to achieve.

A good idea is to validate the requirements with others that will be
impacted by the proposed changes. For Product work, this could be whoever
requested the feature, or other members of the product team. For
infrastructure or architecture work this might be other engineers that would
use the result most frequently.

Epics
~~~~~

If a feature requires a substantial amount of effort or input from several
parties, it makes sense to group a number of tickets under an `Epic`.

What to include in a ticket
~~~~~~~~~~~~~~~~~~~~~~~~~~~

* Context - Why are we building this and where does it fit alongside other
  tickets (blockers etc.)
* Definition of done (tests, docs, reviews, etc) - clear outcomes of this
  ticket
* Links to supporting documentation (designs, google docs, etc)
* Implementation suggestions - We don't need to do all the design work but the
  engineer picking up the ticket should have a clear understanding of what
  the intended implementation was (also helps for sizing)
* Where the new code is likely to live (clientside? / serverside? / existing
  service? / new component?)
* Outstanding questions that need answering as part of this ticket
* What is out of scope for this ticket

Sizing
~~~~~~

* max size
* planning poker
* atomic bits of work

Improvements
------------

Improvements to the development process should be discussed in the Sprint
Retrospectives at the end of each sprint.

Project specifics
-----------------

See the ``README`` of the project you are contributing to for more specific
guidelines and conventions used within that codebase.
