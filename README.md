<p align="center"><img src="https://github.com/djaskowiak/data/blob/master/logo_full%400%2C33x.png" height="100" /></p>

# Grouped Container 

The grouped-container object helps you to structure your Qlik Sense objects (Master items) freely in a container to provide you more visual capabilities. In addition to that you have a variety of options to style the container by using CSS. 

### Important !
Please keep in mind, the files you find within the GitHub Repository are the "**uncompiled**" project files. These files can be downloaded to create your own version of "grouped-container". A description can be found here ([Developing the extension](#dev)). Under the ["**Releases**"](https://github.com/djaskowiak/grouped-container/releases) tab you can find the compiled version. This zip package can be imported into Qlik Sense.


# Installation

You can download the extension [here](https://github.com/djaskowiak/grouped-container/releases). Upload to Qlik Sense server or extract to appropriate Qlik Sense Desktop folder.

* Qlik Sense Desktop: unzip to a directory under `[My Documents]/Qlik/Sense/Extensions`.

* Qlik Sense Server: import the zip file in the QMC.

# Demo

[![Advanced KPI Object](https://raw.githubusercontent.com/djaskowiak/data/master/2019-12-05%2010_28_15-Window.png)](https://youtu.be/i2NlWX7plM4)

You can [donwload](https://github.com/djaskowiak/grouped-container/raw/main/demo/grouped-container%20examples.qvf) a Qlik Sense Demo app to see a couple of possible examples.

# Table of contents
 - [Adding objects to the container](#addingobjects)
 - [Item Configuration](#itemConfig)
   - [Basic](#itemConfigBasic)
   - [Advanced Configuration](#itemConfigAdvanced)
 - [Appearance](#appearance)
   - [Background](#appearanceBackground)
   - [Custom Object CSS](#appearanceCSS)
   - [Mobile Options](#appearanceMobileOptions)
 - [Tipps](#tipps)
 - [Developing the extension](#dev)
 - [Original authors ](#authors)
 - [License](#license)


# Adding objects to the container <a name="addingobjects"></a>

Before you start to create the container create Master Items from the objects you like to use. After you have positioned the **“Grouped Container”** on your canvas the initial dialogue helps you to select the appropriate Master Visualizations. If you have a lot Master Visualizations, you can also search through the list. By ticking the checkbox, you will select the item.

<p align="center"><img src="https://github.com/djaskowiak/data/blob/master/grouped-container-addingObjects.gif" width="100%" /></p>

When you have finished your selection, you can scroll down and hit **“Add Items”** to create the items in your container.

The extension will arrange the items automatically to a fixed position (width & height) depending on the amount of your selected items. We can change these settings later within the configuration.

If you like to get back to the initial configuration screen of the object you just need to remove all items within the property panel under **“Configuration”**. To do so, right-click on the appropriated item and hit **“Delete”**. Of course, you can also use the **“Add Objects”** button to add more items after the initial selection to your container. New objects will always be placed with `width: 50%` and `height: 50%`.

<p align="center"><img src="https://github.com/djaskowiak/data/blob/master/grouped-container-changingItems.gif" width="100%" /></p>

By dragging and dropping you can change the display order of the configured items.

# Item Configuration <a name="itemConfig"></a>

## Basic <a name="itemConfigBasic"></a>

On the first layer of options you can configure `width` and `height` of the item. Here you can use:

 * Percent values (like `50%`)
 * Pixel (like `200px`)
 * emphemeral unit (like `10rem` & `10em`)
 * virtual width and virtual height (like `20vw` or `20vh`)
 * calculate with values (like `calc(100% - 10px)`)

Please keep in mind if you work with percent values this always relates to the whole **”Grouped Container”**. If your object exceeds the 100% in `width` or `height` it will be displayed in the next row or in the next column. It could also disappear to an invisible area incase it exceeds the container size.

> **Example:**

If you want to create a grid that holds **2 x 2** items you can use `width = 50%` and `height = 50%`. Incase you like to add borders you need to use `calc(50% - Xpx)` to not exceed the space of the container.

<p align="center"><img src="https://github.com/djaskowiak/data/blob/master/grouped-container-basic.gif" width="100%" /></p>

## Advanced Configuration <a name="itemConfigAdvanced"></a>

With **Advanced Configuration** you can add more style to the item. For this you have the following possibilities:

 * **add CSS Style**: This definition will only apply to the appropriated item. It can be used to add some object opacity or other CSS styles.
    
    > example:
    ```
    border-top: 2px solid #fff 
    ```
    > to generate a white border on top as a visual separator

 * **add Object Border**: You can also add standard borders by using this function to your item. If this option is **“enabled”** options for **”Border Width”, “Border Color”, “Border Type” and “Border Radius”** will be available.

    Keep in mind, if you have already 100% of width and height distributed to your items you need to calculate it into `width` and `height` (like `calc(50% - 2px)` if you have a border with 1px).

 * **Disable default Object Background**: In case you want to hide the default object background of your item you can enable this option. This will be useful when you work with the **”Background”** options under **”Appearance”**.

<p align="center"><img src="https://github.com/djaskowiak/data/blob/master/grouped-container-advanced.gif" width="100%" /></p>

# Appearance <a name="appearance"></a>

Under **Appearance** und can find a couple of options and functions to change the visual style of the container itself or you can add additional CSS style to change the look of other objects as well (like changing the background of your entire worksheet, but we will cover this later).

## Background <a name="appearanceBackground"></a>

As soon as you turn this function on you have multiple options to define your background of your **Grouped Container** object.

 * First you can choose if you want to use a **Color Picker** to choose the color from or you want to use the **Fomula** mode to define a color using an expression. This could be a good idea if you want to change the color related on a specific expression (like turn the color to red if a defined KPI reaches a threshold).

 * You can also **”Switch to CSS”** mode incase you like to write CSS to define the color. The CSS needs to be written in JSON format.

    > example:
    ```
    ='{"background-image": "linear-gradient(to bottom, #13547a, #80d0c7)"}'
    ```
    > This example defines a color gradient from top to bottom.

 * This could be also used to change the definition incase a KPI reaches a threshold. In case you have used a background picture you can define the positioning of the picture using this option.

    > example:
    ```
    ='{"background-size" : "cover", "background-position" : "center" , "opacity" : "1"}'
    ```
    > This example will cover the whole background using the centered image.

 * If you like to use a background picture you can turn **”Switch to picture”** on. After that you can chose the picture from your uploaded pictures in the app. As mentioned through **”CSS Definition”** field you can add CSS to position the picture or to apply more configuration.

<p align="center"><img src="https://github.com/djaskowiak/data/blob/master/grouped-container-background.gif" width="100%" /></p>

## Custom Object CSS <a name="appearanceCSS"></a>

| Menu |  Object |
:-------------------------:|:-------------------------:
![](https://github.com/djaskowiak/data/blob/master/grouped-container-cssExample.png)  |  ![](https://github.com/djaskowiak/data/blob/master/grouped-container-css.png)

You can define "**Custom object CSS**". his gives you the possibility to write CSS for the whole object and sheet. If you like to write specific CSS for just your created object it is possible to use the CSS selector "&". It will be replaced by "**div[tid="objID"]**" to define code that effects just a single object. 

In this example I used the following code to set a border with a radius and to overwrite theme CSS setting:

> example:

```
& { 
  box-shadow: 5px 5px 5px rgba(200, 200, 200, 0.8);
  border: none !important;
}
```
> This example will add a shadow to the container.

It is also possible to write CSS that effects the sheet or objects on the sheet.

> example:

<p align="center"><img src="https://github.com/djaskowiak/data/blob/master/grouped-container-cssSheet.png" width="100%" /></p>

```
.qv-client.qv-card #qv-stage-container .qvt-sheet:not(.qv-custom-size) {
  background-image: linear-gradient(90deg, #E9EBEE 14.4%,  #fff 1%) !important;
}

& article {
  border: none !important
}
```

> This example will add a background gradient with a hard cut at 14.4%.

## Mobile Options <a name="appearanceMobileOptions"></a>

# Tipps <a name="tipps"></a>

# Developing the extension <a name="dev"></a>

If you want to do code changes to the extension follow these simple steps to get going.

1. Get Qlik Sense Desktop
2. Create a new app and add advanced-kpi to a sheet.
3. Clone the repository
4. Run `npm install`
5. Run `npm run build` - to build a dev-version to the /dist folder.
6. Move the content of the /dist folder to the extension directory. Usually in `C:/Users/<user>/Documents/Qlik/Sense/Extensions/grouped-container`.

# Original authors <a name="authors"></a>
[github.com/djaskowiak](https://github.com/djaskowiak)

A special thanks goes to [Riley MacDonald](https://github.com/rileymd88) and [Mihael Radosevic](https://github.com/mihael-dev) for their helpfulness and their creativity!

# License <a name="license"></a>
Released under the [MIT License](LICENSE).