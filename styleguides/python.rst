Python Styleguide
=================

We follow the pretty universal standards presented in the
`PEP8 proposal <https://www.python.org/dev/peps/pep-0008/>`_. There are many
tools including linters and console scripts to help with static analysis of
your code against these rules.

In addition to the PEP8 rules, below are some extensions or clarifications
that should be followed for Lystable projects.

Brackets
--------

Always favour brackets closing on the same indentation level as they're opened.

Bad:

.. code-block::

    my_function(
        my_param1,
        my_param2,
        )

    # ...

    my_function(my_param1,
                my_param2,
                )

Good:

.. code-block::

    my_function(
        my_param1,
        my_param2,
    )

Multiple brackets can be combined if it aids readability:

.. code-block::

    my_function(my_param1, my_param2={
        'foo': 'bar',
    })

Block statements can be tricky to format for readability if they are too long
to fit on a single line. Avoid double indents if possible, favouring use of
brackets.

Bad:

.. code-block::

    for item in my_generator(
            my_param1, my_param2, my_param3, [1, 2, 3, 4, 5]):
        # do something

    # ...

    for item in my_generator(my_param1, my_param2, my_param3,
                             [1, 2, 3, 4, 5]):
        # do something

Good:

.. code-block::

    for item in my_generator(
        my_param1, my_param2, my_param3, [1, 2, 3, 4, 5]
    ):
        # do something

    # ...

    for item in my_generator(
        my_param1,
        my_param2,
        my_param3,
        [1, 2, 3, 4, 5],
    ):
        # do something
