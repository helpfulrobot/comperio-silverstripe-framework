# SilverStripe Framework

This is a fork of the 2.4.x branch of [SilverStripe Framework](http://github.com/silverstripe/silverstripe-framework)
used by the OPAC software [DiscoveryNG](http://www.comperio.it/soluzioni/discoveryng/panoramica/).

The main change is the possibility to change the "ASSETS_DIR" constant, in order to be able to move the 
`assets` and `silverstripe-cache` folder wherever you want.

In DNG this is used to allow a multi-site installation of the software. The assets folder path is computed at runtime 
watching the incoming request URI.