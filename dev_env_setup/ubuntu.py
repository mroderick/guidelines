Dev environment setup for ubuntu (14.04)
========================================

.. note::
    Depending on the project you're working and what you want to do
    with it you may not need all of these. Likely you'll want just docker.

.. note::
    Installing some of these applications locally will make them
    clash ports with those running on docker containers (ie postgres or rabbit).
    You'll need extra fiddling if you want them to coexist.


Docker
------

Docker::

    wget -qO- https://get.docker.com/ | sh
    # to test
    sudo service docker start
    sudo docker run hello-world

Docker-compose::

    sudo -i
    curl -L https://github.com/docker/compose/releases/download/1.3.2/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
    chmod +x /usr/local/bin/docker-compose
    docker-compose --version # to test
    exit

You need to `sudo` every docker command for it to work. You can
add your user to the docker group to avoid this::

    sudo usermod -aG docker myusername
    sudo reboot # need a restart for the change to take effect

Refs:

- https://docs.docker.com/installation/ubuntulinux/
- https://docs.docker.com/compose/install/


Python 3
--------

You'll only need this if you want to set up a local env on some of the projects::

    sudo apt-get install python-dev python-pip python3-pytest python3-pip python3-dev

You can use vanilla virtualenv, but if you prefer the wrapper::

    sudo pip install virtualenvwrapper
    echo "export WORKON_HOME=~/Envs" >> ~/.bashrc
    echo "source /usr/local/bin/virtualenvwrapper.sh" >> ~/.bashrc

Python3 comes preinstalled in ubuntu, but it's not the default option.
So when you create a virtualenv, wether direcly or with the wrapper, don't
forget to tell it to use python3::

    virtualenv -p python3 lws # regular
    mkvirtualenv --python=python3 lws # wrapper


Postgresql
----------

We use version 9.4 (on lws at least), which is not on the repos::

    echo "deb http://apt.postgresql.org/pub/repos/apt/ trusty-pgdg main" > /etc/apt/sources.list.d/pgdg.list
    wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | \
    sudo apt-key add -
    sudo apt-get update
    sudo apt-get install postgresql-9.4 libpq-dev

You'll probably want the graphical admin as well::

    sudo apt-get install pgadmin

You'll need to set up the password for the postgres user::

    sudo -u postgres psql postgres
    # \password postgres
    Enter new password:
    \q

Refs:

- http://www.postgresql.org/download/linux/ubuntu/
- http://serverfault.com/questions/110154/whats-the-default-superuser-username-password-for-postgres-after-a-new-install


Rabbitmq
--------

Server::

    sudo apt-get install rabbitmq-server

To get the web admin on http://localhost:15672/ ::

    rabbitmq-plugins enable rabbitmq_management
