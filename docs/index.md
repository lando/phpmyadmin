---
title: phpMyAdmin Lando Plugin
description: Add a highly configurable phpmyadmin service to Lando for local development with all the power of Docker and Docker Compose; connect all your databases for easy GUI goodness.
---

# phpMyAdmin

[phpMyAdmin](https://www.phpmyadmin.net/) is a free software tool written in PHP, intended to handle the administration of MySQL over the Web.

You can easily add it to your Lando app by adding an entry to the [services](https://docs.lando.dev/config/services.html) top-level config in your [Landofile](https://docs.lando.dev/config/lando.html).

```yaml
services:
  myservice:
    type: phpmyadmin
```

## Supported versions

*   **[5.1](https://hub.docker.com/r/phpmyadmin/phpmyadmin/)** **(default)**
*   [5.0](https://hub.docker.com/r/phpmyadmin/phpmyadmin/)
*   [custom](https://docs.lando.dev/config/services.html#advanced)

## Legacy versions

*   [4.9](https://hub.docker.com/r/phpmyadmin/phpmyadmin/)
*   [4.8](https://hub.docker.com/r/phpmyadmin/phpmyadmin/)
*   [4.7](https://hub.docker.com/r/phpmyadmin/phpmyadmin/)
*   [4.6](https://hub.docker.com/r/phpmyadmin/phpmyadmin/)

## Patch versions

This service does not support patch versions but if you **really** need something like that, you could consider using either a [custom compose service](https://docs.lando.dev/compose) or a service [overrides](https://docs.lando.dev/config/services.html#overrides).

## Custom Installation

This plugin is included with Lando by default. That means if you have Lando version `3.0.8` or higher then this plugin is already installed!

However if you would like to manually install the plugin, update it to the bleeding edge or install a particular version then use the below. Note that this installation method requires Lando `3.5.0+`.

:::: code-group
::: code-group-item DOCKER
```bash:no-line-numbers
# Ensure you have a global plugins directory
mkdir -p ~/.lando/plugins

# Install plugin
# NOTE: Modify the "yarn add @lando/phpmyadmin" line to install a particular version eg
# yarn add @lando/phpmyadmin@0.5.2
docker run --rm -it -v ${HOME}/.lando/plugins:/plugins -w /tmp node:14-alpine sh -c \
  "yarn init -y \
  && yarn add @lando/phpmyadmin --production --flat --no-default-rc --no-lockfile --link-duplicates \
  && yarn install --production --cwd /tmp/node_modules/@lando/phpmyadmin \
  && mkdir -p /plugins/@lando \
  && mv --force /tmp/node_modules/@lando/phpmyadmin /plugins/@lando/phpmyadmin"

# Rebuild the plugin cache
lando --clear
```
:::
::: code-group-item HYPERDRIVE
```bash:no-line-numbers
# @TODO
# @NOTE: This doesn't actaully work yet
hyperdrive install @lando/phpmyadmin
```
::::

You should be able to verify the plugin is installed by running `lando config --path plugins` and checking for `@lando/phpmyadmin`. This command will also show you _where_ the plugin is being loaded from.
