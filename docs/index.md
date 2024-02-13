---
title: phpMyAdmin Lando Plugin
description: Add a highly configurable phpmyadmin service to Lando for local development with all the power of Docker and Docker Compose; connect all your databases for easy GUI goodness.
next: ./config.html
---

# phpMyAdmin

[phpMyAdmin](https://www.phpmyadmin.net/) is a free software tool written in PHP, intended to handle the administration of MySQL over the Web.

You can easily add it to your Lando app by adding an entry to the [services](https://docs.lando.dev/core/v3/lando-service.html) top-level config in your [Landofile](https://docs.lando.dev/core/v3).

```yaml
services:
  myservice:
    type: phpmyadmin
```

## Supported versions

*   **[5.1](https://hub.docker.com/r/phpmyadmin/phpmyadmin/)** **(default)**
*   [5.0](https://hub.docker.com/r/phpmyadmin/phpmyadmin/)
*   [custom](https://docs.lando.dev/core/v3/lando-service.html#overrides)

## Legacy versions

*   [4.9](https://hub.docker.com/r/phpmyadmin/phpmyadmin/)
*   [4.8](https://hub.docker.com/r/phpmyadmin/phpmyadmin/)
*   [4.7](https://hub.docker.com/r/phpmyadmin/phpmyadmin/)
*   [4.6](https://hub.docker.com/r/phpmyadmin/phpmyadmin/)

## Patch versions

This service does not support patch versions but if you **really** need something like that, you could consider using either a [custom compose service](https://docs.lando.dev/plugins/compose) or a service [overrides](https://docs.lando.dev/core/v3/lando-service.html#overrides).

