# Grouped Container <img src="https://github.com/djaskowiak/data/blob/master/grouped.png" width="45" height="35" />

This project is about creating a smart KPI object for Qlik Sense that fits to 90% of the needs of the users. From an information design perspective, the KPI object is one of the most important objects when we want to display information. For most of the users it is an indicator providing a variety of information on the first view within a couple of seconds.

### Important !
Please keep in mind, the files you find within the GitHub Repository are the "**uncompiled**" project files. These files can be downloaded to create your own version of "grouped-container". A description can be found here ([Developing the extension](#dev)). Under the ["**Releases**"](https://github.com/djaskowiak/grouped-container/releases) tab you can find the compiled version. This zip package can be imported into Qlik Sense.


# Installation

You can download the extension [here](https://github.com/djaskowiak/grouped-container/releases). Upload to Qlik Sense server or extract to appropriate Qlik Sense Desktop folder.

* Qlik Sense Desktop: unzip to a directory under [My Documents]/Qlik/Sense/Extensions.

* Qlik Sense Server: import the zip file in the QMC.

# Demo

[![Advanced KPI Object](https://raw.githubusercontent.com/djaskowiak/data/master/2019-12-05%2010_28_15-Window.png)](https://youtu.be/i2NlWX7plM4)

You can [donwload](https://github.com/djaskowiak/grouped-container/raw/main/demo/grouped-container%20examples.qvf) a Qlik Sense Demo app to see a couple of possible examples.

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