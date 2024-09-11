---
title: Configuration
description: Learn how to configure the Lando phpMyAdmin service.
---

# Configuration

Here are the configuration options, set to the default values, for this service. If you are unsure about where this goes or what this means, we *highly recommend* scanning the [services documentation](https://docs.lando.dev/core/v3/services/lando.html) to get a good handle on how the magicks work.

Also note that options, in addition to the [build steps](https://docs.lando.dev/core/v3/services/lando.html#build-steps) and [overrides](https://docs.lando.dev/core/v3/services/lando.html#overrides) that are available to every service, are shown below:

```yaml
services:
  myservice:
    type: phpmyadmin:5.0
    hosts: []
    config:
      config: SEE BELOW
    overrides:
      environment: SEE BELOW
```

## Connecting to database services

You will need to list the database services you want to be able to access via `phpmyadmin`. Note that the services in this list should be other MySQL-y services in your application. They can be discovered by running [lando info](https://docs.lando.dev/cli/info.html).

::: warning Note that PhpMyAdmin is designed specifically for MySQL and MariaDB type databases!
You will likely be sad if you try to use a non-MySQL-ish database.
:::

An example of a Landofile's `services` config that connects to two `mysql` database backends called `mysql57` and `mysql8` is shown below:

```yaml
services:
  myservice:
    type: phpmyadmin
    hosts:
      - mysql57
      - mysql8
  mysql57:
    type: mysql:5.7
  mysql8:
    type: mysql:8
```

## Using custom phpmyadmin config file

You can override the default `phpmyadmin` config by setting a custom [phpMyAdmin config file](https://docs.phpmyadmin.net/en/latest/config.html) as shown below:

**A hypothetical project**

Note that you can put your configuration files anywhere inside your application directory. We use a `config` directory but you can call it whatever you want such as `.lando` in the example below:

```bash
./
|-- config
   |-- config.user.inc.php
|-- .lando.yml
```

**Landofile's phpmyadmin config**

```yaml
services:
  myservice:
    type: phpmyadmin
    config:
      config: config/config.user.inc.php
```

## Advanced

There are also [several various envvars](https://hub.docker.com/r/phpmyadmin/phpmyadmin/) exposed by the underlying image we use that you can set to further customize how your PhpMyAdmin works. **These are not officially supported** so we *highly recommend* you do not alter them unless you know what you are doing. Even then, YMMV.

That said, you will need to use a [service override](https://docs.lando.dev/core/v3/services/lando.html#overrides) to take advantage of them as shown below:

```yaml
myservice:
  type: phpmyadmin
  hosts:
    - database
  overrides:
    environment:
      PMA_ARBITRARY: when set to 1 connection to the arbitrary server will be allowed
      PMA_HOST: define address/host name of the MySQL server
      PMA_VERBOSE: define verbose name of the MySQL server
      PMA_PORT: define port of the MySQL server
      PMA_HOSTS: define comma separated list of address/host names of the MySQL servers
      PMA_VERBOSES: define comma separated list of verbose names of the MySQL servers
      PMA_USER: define username to use for config authentication method
      PMA_PASSWORD: define password to use for config authentication method
      PMA_ABSOLUTE_URI: define user-facing URI
```

## Getting information

You can get connection and credential information about your phpmyadmin instance by running [`lando info`](https://docs.lando.dev/cli/info.html). It may also be worth checking out our [accessing services externally guide](https://docs.lando.dev/guides/external-access.html).
