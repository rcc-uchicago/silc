# 23-01-2014 

Modified offline caching by ..

Renaming `app.manifest` to `offline.appcache`.

Modifying line 2 of `index.html`

    - <html manifest="app.manifest">
    + <html manifest="offline.cache">

Updating `.htaccess` and `Makefile` accordingly.


# 26-11-2013 

Within `one-finger-rotation` branch ...

* removed 157-degree-angle trials
* added `site` task to `Makefile`
* deployed task instance on [joyrexus.github.io](http://joyrexus.github.io/silc/tasks/rotation/one-finger)


# 04-09-2013 

Enabled resource cacheing for offline usage by ...

Adding manifest file, `app.manifest`, listing resources to cache.

Modifying line 2 of `index.html`

    - <html>
    + <html manifest="app.manifest">

Modifying line 215 of `/private/etc/apache2/httpd.conf`

    - AllowOverride None
    + AllowOverride All

Adding `.htaccess` file containing ...

    AddType text/cache-manifest	.manifest

Using `curl` to check that the manifest is being served with the right mime type.

    PAGE=http://joyrexus.github.io/silc/tasks/rotation/one-finger/offline.appcache
    curl -I --get $PAGE | grep Content-Type

This should return `Content-Type: text/cache-manifest`.


# 04-08-2013 

Added the following to `src/main.coffee` to prevent default scrolling.

    document.ontouchmove = (e) -> e.preventDefault()  # prevent scrolling

Added the following to `index.html` to enable home screen icon and startup
splash screen images.

```html
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

<link rel="apple-touch-icon" href="apple-touch-icon.png"/>

<!-- startup image - landscape (748 x 1024) -->
<link rel="apple-touch-startup-image" href="images/splash/landscape.png"
media="screen and (min-device-width: 481px) and (max-device-width:
1024px) and (orientation:landscape)" />

<!-- startup image - portrait (768 x 1004) -->
<link rel="apple-touch-startup-image" href="images/splash/portrait.png"
media="screen and (min-device-width: 481px) and (max-device-width:
1024px) and (orientation:portrait)" />
```

Added the following to `index.html` style section in header to disable iOS
defaults.

```html
html * {
  -webkit-tap-highlight-color: transparent; /* turn off default press states */
  -webkit-touch-callout: none;              /* disable save image on long press */
  -webkit-user-select: none;                /* disable selection copy/paste */
  -webkit-user-drag: none;                  /* disable dragging images */
}
```
