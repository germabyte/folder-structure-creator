Description
This script is designed to automate the creation of a folder structure on Google Drive. It creates a root folder named "mese esempio" (example month) and populates it with four subfolders named "settimana1", "settimana2", "settimana3", and "settimana4" (week1, week2, week3, and week4). Each of these subfolders contains a custom set of subfolders.

Usage
Open a new Google Apps Script project in Google Drive (https://script.google.com).
Replace any existing code with the provided script.
Update the parentFolderId variable with the ID of the parent folder on your Google Drive where you want to create the "mese esempio" folder.
If desired, modify the mese, weekNames, and weekFolderNames variables to customize the folder structure.
Save the script, then click on the "Run" button to execute the createFolders function.
Check your Google Drive for the new folder structure.
Customization
mese: The name of the root folder (default: 'mese esempio').
parentFolderId: The ID of the parent folder in which to create the root folder.
weekNames: An array containing the names of the subfolders within the root folder (default: ['settimana1', 'settimana2', 'settimana3', 'settimana4']).
weekFolderNames: A nested array that specifies the subfolder names within each of the week folders (default:
less
Copy code
[  ['Day1', 'Day2', 'Day3'], //settimana1
  ['Meeting1', 'Meeting2', 'Meeting3', 'Meeting4', 'Meeting5'], //settimana2
  ['Task1', 'Task2', 'Task3', 'Task4', 'Task5', 'Task6'], //settimana3
  ['Day22', 'Day23', 'Day24', 'Day25', 'Day26', 'Day27', 'Day28'] //settimana4
]
).

Notes
Please ensure that you have the necessary permissions to create folders in the specified parent folder on Google Drive.
