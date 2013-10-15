if(typeof(ss) == 'undefined' || typeof(ss.i18n) == 'undefined') {
	if(typeof(console) != 'undefined') console.error('Class ss.i18n not defined');
} else {
	ss.i18n.addDictionary('it_IT', {
		'VALIDATOR.FIELDREQUIRED': 'Perfavore, compila "%s", è un campo obbligatorio.',
		'HASMANYFILEFIELD.UPLOADING': 'Caricamento... %s',
		'TABLEFIELD.DELETECONFIRMMESSAGE': 'Sei sicuro di voler cancellare questo record?',
		'LOADING': 'caricamento...',
		'UNIQUEFIELD.SUGGESTED': "Cambia il valore in '%s' : %s",
		'UNIQUEFIELD.ENTERNEWVALUE': 'Devi inserire un nuovo valore per questo campo',
		'UNIQUEFIELD.CANNOTLEAVEEMPTY': 'Questo campo non può essere lasciato vuoto',
		'RESTRICTEDTEXTFIELD.CHARCANTBEUSED': "Il carattere '%s' non può essere usato in questo campo",
		'UPDATEURL.CONFIRM': 'Preferisci che modifichi l\'URL in:\n\n%s/\n\nClicca OK per cambiare l\'URL, oppure Cancel per lasciarla così:\n\n%s',
		'FILEIFRAMEFIELD.DELETEFILE': 'Cancella File',
		'FILEIFRAMEFIELD.UNATTACHFILE': 'Un-Attach File',
		'FILEIFRAMEFIELD.DELETEIMAGE': 'Cancella immagine',
		'FILEIFRAMEFIELD.CONFIRMDELETE': 'Sei sicuro di voler cancellare questo file?'
	});
}
