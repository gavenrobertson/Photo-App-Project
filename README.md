[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=9846114&assignment_repo_type=AssignmentRepo)

#Photo App

## Application layout

Your application should be laid out in two columns.  The contents of each column should be as follows:
  * **Left column** – The left column should start out containing only a button.  When the user clicks this button, a “dialog” should also appear in the left column.  More details about the dialog will be described below.
  * **Right column** – The right column will contain a list of all the photos submitted by the user.  More details about the photos will be described below.

## Photo submission dialog

When the user clicks the “open dialog” button in the left column, a dialog should appear in the left column, below the button.  This dialog will contain fields and controls that allow the user to submit information about a photo to be displayed in the application’s right column.  In particular, the dialog should contain the following elements:
  * A text field in which the user can enter the URL of a photo.
  * A text field in which the user can enter the caption of a photo.
  * An “accept” button.
  * A “cancel” button.

The dialog should have the following behaviors:
  * If the user enters values in both fields (photo URL and caption) and clicks the accept button, then a corresponding photo should be added to the right column, and the dialog should close.
  * If the user clicks the accept button while either text field is empty, then a small warning should appear to let the user know they need to enter both a URL and a caption.  The dialog should remain open in this case.
  * If the user hits the cancel button, then the dialog should close without further action.
  * Any time the dialog is closed (whether via the accept button or the cancel button), any values entered by the user in the text fields should be cleared.

Here is a screen capture demonstrating some of these behaviors:

![Screen capture of photo submission dialog](screencaps/demo-dialog.gif)

## Photo list

The application’s right column should contain a list of all the photos submitted by the user via the dialog described above.  Each photo should be displayed in a simple card component that contains both the image and its corresponding caption.  The photo cards may be laid out in any sensible way (the layout doesn’t have to match the screen captures here) with the following constraints:
  * The most recently submitted photo should appear first in the list.
  * The photos may not overflow the viewport in the horizontal direction.  In other words, the user should not have to scroll horizontally to see more photos.  Scrolling vertically is fine.

## Photo removal

Finally, you should add a button to each photo component that the user can click to remove the corresponding photo.  Only the photo corresponding to the clicked button should be removed, and all other photos should remain, displayed in the same order.

Here is a screen capture demonstrating how the photo removal functionality might work:

![Screen capture of photo removal](screencaps/demo-removal.gif)

## Application styling

To accomplish some of the layout required in the description above, you will need to write some CSS for the application.  The starter code is implemented so that CSS will be incorporated from [src/index.css](src/index.css), so it'll be easiest for you to write your CSS there.

Please don’t worry too much about giving your application a polished appearance, and don’t worry about exactly matching the styling of the screen captures here.  All you need to do is meet the layout requirements described above.  The rest of your styling can be very rudimentary.

One thing to note is that showing or hiding elements of the application (e.g. the dialog, the warning, the photos) *may not* be done using CSS.  In other words, you can’t use CSS properties like  `display: none;` or `visibility: hidden;` to hide things.  Instead, you must control the display of application elements by conditionally rendering them in your React components (e.g. based on some application state you keep).  This is the React way to do things.
