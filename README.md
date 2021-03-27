# hexo-sponsor-button

This simple hexo plugin allow you to integrate in your post a "donate me" button.

At now it only support ko-fi, since I need it.
If you need a specific platform, please, open an issue.

## Usage

Simply, add in your post .md file the "sponsor" tag:

{% sponsor %}

This allows my plugin to render the button instead.

## Configuration

You need to add to your _config.yml these lines:

``` YAML
funding:
  service: ko-fi # At now, it only support ko-fi
  username: 'name' # Your ko-fi username
```

To customize even more, here's all available parameters:
``` YAML
funding:
  service: ko-fi # string (required) The funding service
  username: 'name' # string (required) Your ko-fi username
  enable: true|false # bool (default: true) Specifies if enable this plugin
  text: '' # string (default: undefined) If specified, overrides the default "Support Me on {service}" string
  icon_size: '#px' # string (default: '24px') Specifies the icon size (width = height)
  icon_color: '#rrggbb' # string (default: '#000000') Specifies the icon color
  border_radius: '#px' # string (default: undefined) If provided, make the container's borders rounded
  background_color: '#rrggbb' # string (default: undefined) Specifies the container's background color
  container_padding: '#px' # string (default: '8px') Specifies the internal content padding. Use this in combination with border_radius to achieve a decent result
```

## License
This project is under the MIT license.
