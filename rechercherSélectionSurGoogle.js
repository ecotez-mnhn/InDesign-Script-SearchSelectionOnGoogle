﻿// version 0.2// -------------------------------------------// This script send the seleted text to Google// -------------------------------------------// test selection or notvar cont=true ;if (app.selection[0]==undefined){	cont=false;	} else {		if (app.selection[0].contents==""){			cont=false; 			} 		} // end test selection or notif (cont==true) {	var sel = app.selection ;	var url = 'https://www.google.fr/?q=' + sel[0].contents ;	var aDoc = app.documents.add ();	var myDest = aDoc.hyperlinkURLDestinations.add (url);	myDest.showDestination ();	aDoc.close (SaveOptions.no);	} else { // fin de if (cont==true)		alert ("Make a text selection before launching the script");		}