PhpMyAdmin Example
==================

This example exists primarily to test the following documentation:

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
lando exec defaults -- curl -I localhost | grep 200 | grep OK
lando exec pma -- curl -I localhost | grep 200 | grep OK
lando exec pma_theme -- curl -I localhost | grep 200 | grep OK

# Should have databases that work correctly
lando exec database -- mysql -umariadb -pmariadb database -e quit
lando exec database2 -- mysql -umariadb -pmariadb database -e quit

# Should have our databases hooked up to PMA
lando exec defaults -- env | grep PMA_HOSTS=database,database2
lando exec pma -- env | grep PMA_HOSTS=database,database2
lando exec pma_theme -- env | grep PMA_HOSTS=database,database2

# Should be version 5.1.x
lando exec defaults -- curl -s localhost | grep -oP '<span class="version">\K[^<]+' | tee >(cat 1>&2) | grep -q '5.1.'

# Should be version 5.2.x
lando exec pma -- curl -s localhost | grep -oP '<span class="version">\K[^<]+' | tee >(cat 1>&2) | grep -q '5.2.'

# Should have set a custom config file if specified
lando exec pma_theme -- cat /etc/phpmyadmin/config.user.inc.php | grep ThemeDefault | grep pmaterial
```

Destroy tests
-------------

Run the following commands to trash this app like nothing ever happened.

```bash
# Should be destroyed with success
lando destroy -y
lando poweroff
```
