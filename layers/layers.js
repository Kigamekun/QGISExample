var wms_layers = [];


        var lyr_WazeWorld_0 = new ol.layer.Tile({
            'title': 'Waze (World)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://worldtiles3.waze.com/tiles/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_uscities_mainlandsunset_2 = new ol.format.GeoJSON();
var features_uscities_mainlandsunset_2 = format_uscities_mainlandsunset_2.readFeatures(json_uscities_mainlandsunset_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_uscities_mainlandsunset_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_uscities_mainlandsunset_2.addFeatures(features_uscities_mainlandsunset_2);
var lyr_uscities_mainlandsunset_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_uscities_mainlandsunset_2, 
                style: style_uscities_mainlandsunset_2,
                popuplayertitle: 'uscities_mainland - sunset',
                interactive: true,
    title: 'uscities_mainland - sunset<br />\
    <img src="styles/legend/uscities_mainlandsunset_2_0.png" /> Before 4:15 pm<br />\
    <img src="styles/legend/uscities_mainlandsunset_2_1.png" /> 4:30 pm<br />\
    <img src="styles/legend/uscities_mainlandsunset_2_2.png" /> 4:45 pm<br />\
    <img src="styles/legend/uscities_mainlandsunset_2_3.png" /> 5:00 pm<br />\
    <img src="styles/legend/uscities_mainlandsunset_2_4.png" /> 5:15 pm<br />\
    <img src="styles/legend/uscities_mainlandsunset_2_5.png" /> 5:30 pm<br />\
    <img src="styles/legend/uscities_mainlandsunset_2_6.png" /> 5:45 pm<br />\
    <img src="styles/legend/uscities_mainlandsunset_2_7.png" /> after 5:50 pm<br />'
        });

lyr_WazeWorld_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_uscities_mainlandsunset_2.setVisible(true);
var layersList = [lyr_WazeWorld_0,lyr_OSMStandard_1,lyr_uscities_mainlandsunset_2];
lyr_uscities_mainlandsunset_2.set('fieldAliases', {'city': 'city', 'state_id': 'state_id', 'state_name': 'state_name', 'lat': 'lat', 'lng': 'lng', 'population': 'population', 'density': 'density', 'timezone': 'timezone', 'sunrise_lo': 'sunrise_lo', 'sunset_lon': 'sunset_lon', 'sunrise_sh': 'sunrise_sh', 'sunset_sho': 'sunset_sho', 'day_length': 'day_length', 'night_leng': 'night_leng', 'daylight': 'daylight', 'max_pop': 'max_pop', 'max_sunset': 'max_sunset', });
lyr_uscities_mainlandsunset_2.set('fieldImages', {'city': 'TextEdit', 'state_id': 'TextEdit', 'state_name': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', 'population': 'TextEdit', 'density': 'TextEdit', 'timezone': 'TextEdit', 'sunrise_lo': 'TextEdit', 'sunset_lon': 'TextEdit', 'sunrise_sh': 'TextEdit', 'sunset_sho': 'TextEdit', 'day_length': 'TextEdit', 'night_leng': 'TextEdit', 'daylight': 'TextEdit', 'max_pop': 'TextEdit', 'max_sunset': 'TextEdit', });
lyr_uscities_mainlandsunset_2.set('fieldLabels', {'city': 'inline label - always visible', 'state_id': 'no label', 'state_name': 'no label', 'lat': 'no label', 'lng': 'no label', 'population': 'inline label - always visible', 'density': 'no label', 'timezone': 'no label', 'sunrise_lo': 'no label', 'sunset_lon': 'no label', 'sunrise_sh': 'no label', 'sunset_sho': 'no label', 'day_length': 'no label', 'night_leng': 'no label', 'daylight': 'no label', 'max_pop': 'no label', 'max_sunset': 'no label', });
lyr_uscities_mainlandsunset_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});