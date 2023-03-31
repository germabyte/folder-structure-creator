## Description
This script is designed to automate the creation of a folder structure on Google Drive. It creates a root folder named "mese esempio" (example month) and populates it with four subfolders named "settimana1", "settimana2", "settimana3", and "settimana4" (week1, week2, week3, and week4). Each of these subfolders contains a custom set of subfolders.

## Usage
1. Open a new Google Apps Script project in Google Drive (https://script.google.com).
2. Replace any existing code with the provided script.
3. Update the `parentFolderId` variable with the ID of the parent folder on your Google Drive where you want to create the "mese esempio" folder.
4. If desired, modify the `mese`, `weekNames`, and `weekFolderNames` variables to customize the folder structure.
5. Save the script, then click on the "Run" button to execute the `createFolders` function.
6. Check your Google Drive for the new folder structure.

## Customization
- `mese`: The name of the root folder (default: 'mese esempio').
- `parentFolderId`: The ID of the parent folder in which to create the root folder.
- `weekNames`: An array containing the names of the subfolders within the root folder.
- `weekFolderNames`: A nested array that specifies the subfolder names within each of the week folders.

## Notes
Please ensure that you have the necessary permissions to create folders in the specified parent folder on Google Drive.
