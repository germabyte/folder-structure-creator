# Google Drive Folder Structure Creator

This is a simple Google Apps Script code that helps you create a specific folder structure inside your Google Drive. The script creates a main folder for a specific month with subfolders for each week, and in each week's folder, it creates more subfolders for daily activities or events.

## How to use

1. Open your Google Drive and create a new Google Apps Script project.
2. Copy the code from the provided script and paste it into the Code.gs file.
3. Replace the `mese` variable's value with the month you want to create the folder structure for (e.g., 'January 2022').
4. Replace the `parentFolderId` variable's value with the ID of the parent folder where you want to create the monthly folder. (To get the ID, open the parent folder in Google Drive, and the ID is the long string in the middle of the URL in the address bar.)
5. If you want to customize the names or the number of week folders and their subfolders, modify the `weekFolders` array accordingly.
6. Save the project and click the Run button (a triangle/play icon) in the toolbar.
7. The script will create the specified folder structure in the specified parent folder.

## Features

- Creates a monthly folder inside a specific parent folder in Google Drive.
- Creates weekly folders inside the monthly folder.
- Creates daily activity or event subfolders inside each weekly folder.

## Limitations

- The script doesn't check if a folder with the same name already exists, which may lead to duplicate folders when running the script multiple times.

## License

This project is released under the MIT License. Please refer to the LICENSE file for more information.
