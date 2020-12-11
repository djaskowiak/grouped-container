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
 - [Appearance](#appearance)
 - [Tipps](#tipps)
 - [Developing the extension](#dev)


# Adding objects to the container <a name="addingobjects"></a>

Before you start to create the container create Master Items from the objects you like to use. After you have positioned the **“Grouped Container”** on your canvas the initial dialogue helps you to select the appropriate Master Visualizations. If you have a lot Master Visualizations, you can also search through the list. By ticking the checkbox, you will select the item.

<p align="center"><img src="https://github.com/djaskowiak/data/blob/master/grouped-container-addingObjects.gif" width="100%" /></p>

When you have finished your selection, you can scroll down and hit **“Add Items”** to create the items in your container.

The extension will arrange the items automatically to a fixed position (width & height) depending on the amount of your selected items. We can change these settings later within the configuration.

If you like to get back to the initial configuration screen of the object you just need to remove all items within the property panel under **“Configuration”**. To do so, right-click on the appropriated item and hit **“Delete”**. Of course, you can also use the **“Add Objects”** button to add more items after the initial selection to your container. New objects will always be placed with `width: 50%` and `height: 50%`.

<p align="center"><img src="https://github.com/djaskowiak/data/blob/master/grouped-container-changingItems.gif" width="100%" /></p>

By dragging and dropping you can change the display order of the configured items.

# Item Configuration <a name="itemConfig"></a>

# Appearance <a name="appearance"></a>

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

# License <a name="license"></a>
Released under the [MIT License](LICENSE).