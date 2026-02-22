PhpMyAdmin MySQL Example
========================

This example exists primarily to test phpMyAdmin with MySQL specifically:

* [PhpMyAdmin Service](https://docs.devwithlando.io/tutorials/phpmyadmin.html)

Start up tests
--------------

Run the following commands to get up and running with this example.

```bash
# Should install Lando plugin dependency.
npm ci
```

```bash
# Should start up successfully
lando poweroff
lando start
```

Verification commands
---------------------

Run the following commands to validate things are rolling as they should.

```bash
# Should return 200 for the pma admin site
lando exec pma -- curl -I localhost | grep 200 | grep OK

# Should have mysql database that works correctly
lando exec database -- mysql -umysql -pmysql database -e quit

# Should have our database hooked up to PMA
lando exec pma -- env | grep PMA_HOSTS=database

# Should be version 5.2.x
lando exec pma -- curl -s localhost | grep -oP '<span class="version">\K[^<]+' | tee >(cat 1>&2) | grep -q '5.2.'
```

Destroy tests
-------------

Run the following commands to trash this app like nothing ever happened.

```bash
# Should be destroyed with success
lando destroy -y
lando poweroff
```
