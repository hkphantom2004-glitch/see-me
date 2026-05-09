var wms_layers = [];

var format_GROUNDS_0 = new ol.format.GeoJSON();
var features_GROUNDS_0 = format_GROUNDS_0.readFeatures(json_GROUNDS_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GROUNDS_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GROUNDS_0.addFeatures(features_GROUNDS_0);
var lyr_GROUNDS_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GROUNDS_0, 
                style: style_GROUNDS_0,
                popuplayertitle: 'GROUNDS',
                interactive: true,
                title: '<img src="styles/legend/GROUNDS_0.png" /> GROUNDS'
            });
var format_MAINGROUND_1 = new ol.format.GeoJSON();
var features_MAINGROUND_1 = format_MAINGROUND_1.readFeatures(json_MAINGROUND_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAINGROUND_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAINGROUND_1.addFeatures(features_MAINGROUND_1);
var lyr_MAINGROUND_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MAINGROUND_1, 
                style: style_MAINGROUND_1,
                popuplayertitle: 'MAIN GROUND',
                interactive: true,
                title: '<img src="styles/legend/MAINGROUND_1.png" /> MAIN GROUND'
            });
var format_PARKINGLOTS_2 = new ol.format.GeoJSON();
var features_PARKINGLOTS_2 = format_PARKINGLOTS_2.readFeatures(json_PARKINGLOTS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PARKINGLOTS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARKINGLOTS_2.addFeatures(features_PARKINGLOTS_2);
var lyr_PARKINGLOTS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARKINGLOTS_2, 
                style: style_PARKINGLOTS_2,
                popuplayertitle: 'PARKING LOTS',
                interactive: true,
                title: '<img src="styles/legend/PARKINGLOTS_2.png" /> PARKING LOTS'
            });
var format_ROADS_3 = new ol.format.GeoJSON();
var features_ROADS_3 = format_ROADS_3.readFeatures(json_ROADS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROADS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROADS_3.addFeatures(features_ROADS_3);
var lyr_ROADS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROADS_3, 
                style: style_ROADS_3,
                popuplayertitle: 'ROADS',
                interactive: true,
                title: '<img src="styles/legend/ROADS_3.png" /> ROADS'
            });

lyr_GROUNDS_0.setVisible(true);lyr_MAINGROUND_1.setVisible(true);lyr_PARKINGLOTS_2.setVisible(true);lyr_ROADS_3.setVisible(true);
var layersList = [lyr_GROUNDS_0,lyr_MAINGROUND_1,lyr_PARKINGLOTS_2,lyr_ROADS_3];
lyr_GROUNDS_0.set('fieldAliases', {'id': 'id', 'GROUNDS': 'GROUNDS', });
lyr_MAINGROUND_1.set('fieldAliases', {'id': 'id', 'MAIN GROUN': 'MAIN GROUN', });
lyr_PARKINGLOTS_2.set('fieldAliases', {'id': 'id', 'PARKING LO': 'PARKING LO', });
lyr_ROADS_3.set('fieldAliases', {'id': 'id', 'ROADS': 'ROADS', });
lyr_GROUNDS_0.set('fieldImages', {'id': '', 'GROUNDS': '', });
lyr_MAINGROUND_1.set('fieldImages', {'id': '', 'MAIN GROUN': '', });
lyr_PARKINGLOTS_2.set('fieldImages', {'id': '', 'PARKING LO': '', });
lyr_ROADS_3.set('fieldImages', {'id': '', 'ROADS': '', });
lyr_GROUNDS_0.set('fieldLabels', {'id': 'no label', 'GROUNDS': 'no label', });
lyr_MAINGROUND_1.set('fieldLabels', {'id': 'no label', 'MAIN GROUN': 'no label', });
lyr_PARKINGLOTS_2.set('fieldLabels', {'id': 'no label', 'PARKING LO': 'no label', });
lyr_ROADS_3.set('fieldLabels', {'id': 'no label', 'ROADS': 'no label', });
lyr_ROADS_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});