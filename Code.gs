function createFolders() {
    var mese = 'mese esempio'; //mese
    var parentFolderId = '1EoYssPHz7MPNraJC4mD4pLzx2v0O_SlF'; //id cartella in cui creare mese
    var parentFolder = DriveApp.getFolderById(parentFolderId);
    var rootFolder = parentFolder.createFolder(mese);
    var weekNames = ['settimana1', 'settimana2', 'settimana3', 'settimana4'];
    
    // personalizza subcartelle within settimane
    var weekFolderNames = [
      ['Day1', 'Day2', 'Day3'], //settimana1
      ['Meeting1', 'Meeting2', 'Meeting3', 'Meeting4', 'Meeting5'], //settimana2
      ['Task1', 'Task2', 'Task3', 'Task4', 'Task5', 'Task6'], //settimana3
      ['Day22', 'Day23', 'Day24', 'Day25', 'Day26', 'Day27', 'Day28'] //settimana4
    ];
  
    for (var i = 0; i < weekNames.length; i++) {
      var weekFolder = rootFolder.createFolder(weekNames[i]);
      for (var j = 0; j < weekFolderNames[i].length; j++) {
        weekFolder.createFolder(weekFolderNames[i][j]);
      }
    }
  }