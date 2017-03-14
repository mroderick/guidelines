Python Styleguide
=================

We follow the pretty universal standards presented in the
`PEP8 proposal <https://www.python.org/dev/peps/pep-0008/>`_. There are many
tools including linters and console scripts to help with static analysis of
your code against these rules.

For a more detailed style guide, please read through
`Googles style guide <https://google.github.io/styleguide/pyguide.html>`_.

In addition, below are some extensions or clarifications
that should be followed for Lystable projects.

Brackets
--------

Always favour brackets closing on the same indentation level as they're opened.

Bad:

.. code-block:: python

    my_function(
        my_param1,
        my_param2,
        )

    # ...

    my_function(my_param1,
                my_param2,
                )

Good:

.. code-block:: python

    my_function(
        my_param1,
        my_param2,
    )

Multiple brackets can be combined if it aids readability:

.. code-block:: python

    my_function(my_param1, my_param2={
        'foo': 'bar',
    })

Block statements can be tricky to format for readability if they are too long
to fit on a single line. Avoid double indents if possible, favouring use of
brackets.

Bad:

.. code-block:: python

    for item in my_generator(
            my_param1, my_param2, my_param3, [1, 2, 3, 4, 5]):
        # do something

    # ...

    for item in my_generator(my_param1, my_param2, my_param3,
                             [1, 2, 3, 4, 5]):
        # do something

Good:

.. code-block:: python

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
