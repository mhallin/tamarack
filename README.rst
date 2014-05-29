==========
 Tamarack
==========

Tamarack is a quantitative web application profiler. It will track the
performance of all requests made to your app, aggregate them, and
present them so you can identify bottlenecks and track improvements
and regressions.

Tamarack consists of three parts: a *collector library* which resides
in your application. The collector will feed the *receiver server*
data, which is then presented in the *explorer*. The data is stored in
PostgreSQL_ and can be scaled up depending on the needs of your
application. The collector is designed to cause minimal overhead in
your application.

.. image:: docs/img/sample_app.png

The data is available in near real time, with only a few minutes of
delay to give all servers time to gather the statistics.

There is currently only an implementation of the Tamarack Collector in
Python primarily for Django, but a Clojure version is coming soon. The
receiver API is a simple HTTP API, so writing bindings for your
language should not be hard.

Setting It Up
=============

Tamarack is built in Clojure_, ClojureScript_ and React.js_. The
easiest way to get started is to use the bundled Vagrant_
configuration, which will set up a machine with all requirements
needed for development. To get started with this development machine,
you will need:

* Vagrant_, which will let you set up a virtual machine through the
  Vagrantfile in this folder.
* Ansible_, which will install all requirements and set up the basics
  of the machine.

After you've installed those two, starting the Vagrant box will set up
everything you need:

.. code:: sh
         
    # Clone this repository
    $ git clone git@github.com:mhallin/tamarack

    # Enter the project folder
    $ cd tamarack

    # Start the Vagrant box
    $ vagrant up

    # Log in to the newly created machine
    $ vagrant ssh

    # Go to the shared tamarack folder
    $ cd tamarack

    # Start the Explorer and Receiver servers
    $ lein ring server-headless

Open up http://localhost:3000 in a browser and everything should work.

Note that the Vagrantfile sets up the virtual machine to have 2 GB
memory, as Java seems to consume a lot of memory. Be sure to have a
lot of memory around, or run the services locally instead.

Where To Go From Here?
======================

As you'll see, the dashboard is empty showing no applications. Soon,
there will be some sample data included, as well as a sample
application.

Until then, you're unfortunately stuck with integrating the Tamarack
Collector with your application. If you have a Django application, you
can use the `Python Tamarack Collector`_.


.. _PostgreSQL: http://www.postgresql.org/
.. _Clojure: http://clojure.org/
.. _ClojureScript: https://github.com/clojure/clojurescript
.. _React.js: http://facebook.github.io/react/
.. _Leiningen: http://leiningen.org/
.. _Vagrant: http://www.vagrantup.com/
.. _Ansible: http://www.ansible.com/home

.. _Python Tamarack Collector: https://github.com/mhallin/tamarack-collector-py

.. _3-Clause BSD License: http://opensource.org/licenses/BSD-3-Clause
