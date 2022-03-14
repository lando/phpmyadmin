---
title: Using a custom PhpMyAdmin 4.x theme in Lando
description: Learn how to load a custom PhpMyAdmin 4.x theme into Lando
guide: true
authors:
  - name: Jace Bennest
    link: mailto:alliance@lando.dev
    pic: https://avatars0.githubusercontent.com/u/6412919?s=460&u=b96d856896743523cec75bad1d9aec42a7f8a25e&v=4
mailchimp:
  action: https://dev.us12.list-manage.com/subscribe/post?u=59874b4d6910fa65e724a4648&amp;id=613837077f
  title: Want more phpMyAdmin guide content?
  byline: Signup and we will send you a weekly blog digest of similar content to keep you satiated.
  button: Sign me up!
---

[phpMyAdmin](https://www.phpmyadmin.net/) is a free software tool written in PHP, intended to handle the administration of MySQL over the Web. See the [lando docs](https://docs.lando.dev/phpmyadmin) regarding phpMyAdmin for help enabling the service.

:::warning Only for PhpMyAdmin 4.x
Note that this guide is only applicable to the 4.x branch of PhpMyAdmin. You'll want to consult the docs for how to do this in 5.x
:::

This is a basic setup to help you enable extra themes.

## Getting Started

Add the build script to your Lando recipe where you should have the phpMyAdmin service already.

```yaml
services:
  pma:
    type: phpmyadmin:4.7
    build_as_root:
      - chmod +x /app/.lando/pma-theme.sh
      - /app/.lando/pma-theme.sh
```

## Create script to download and install the third-party theme

Create the custom `pma-theme.sh` file.

```bash
touch .lando/pma-theme.sh
vim .lando/pma-theme.sh
```

The location of this file is arbitrary. We placed it inside `.lando/` folder simply because we find it convenient.

```bash
#!/bin/sh
if [ ! -z $LANDO_MOUNT ]; then
  wget https://files.phpmyadmin.net/themes/pmaterial/1.1/pmaterial-1.1.zip
  unzip pmaterial-1.1.zip -d /www/themes/
  rm pmaterial-1.1.zip
fi
```

Checkout the available themes [here](https://www.phpmyadmin.net/themes/). Make sure you choose a theme compatible with your version of phpMyAdmin. Modify the script according to the theme you want.

## Set new theme as the default

Review the [phpMyAdmin docs](https://docs.lando.dev/phpmyadmin) to see how to hook up your config file.

Add this line to your config:

```php
<?php
  ...

  // Set whichever theme you have available here.
  $cfg['ThemeDefault'] = 'pmaterial';

  ...
```

## Rebuild your environment

```bash
lando rebuild -y
```

Done!

Check the output from lando or run `lando info` to get the url for the phpMyAdmin service.
