# Reddit Expando Button Expander ![Icon](./icon.png)
A chrome extension that automatically expands all images and videos on Reddit. This will *not* un-expand it on the comments page.
## Alternative version
If you don't like using a chrome extension (or if you don't want it to be automatic), you can copy the following code and paste it into a new bookmark. Then, click it when you're on Reddit.
```javascript
javascript:for (var i = 0; i < document.getElementsByClassName("expando-button").length; i++) {document.getElementsByClassName("expando-button")[i].click()}
```
## Installation instructions
#### Packed (recommended)
You can install this extension by going to the release folder, downloading the most recent `.crx` file, and dragging it into `chrome://extensions`.
#### Unpacked (If you want to make changes)
You can install the unpacked extension by:
* Downloading the `source` folder. (there is a zip there)
* Going to `chrome://extensions` and checking the `Developer Mode` box in the top right.
* Clicking the `Load unpacked extension...` button, and selecting the source folder you downloaded.

After that, you can open `chromeredirect.js` and change the URL there to whatever you want to, effectively making the extension a new-tab redirect to whatever you want.
## Why isn't this extension on the chrome web store?
* I don't want to pay the $5 fee.
* I am too lazy to make an icon and to make a bunch of other icons and whatnot (not really, mostly the one above)
