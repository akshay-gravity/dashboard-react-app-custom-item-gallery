import { CustomItemViewer } from 'devexpress-dashboard/common'
import { CustomItem } from 'devexpress-dashboard/model'
import { FormItemTemplates } from 'devexpress-dashboard/designer'
import Mapbox from "./MapBox/Mapbox";
import React, { Component }  from 'react';

const MAP_EXTENSION_NAME = 'CustomMapBox';

const svgIcon = `<?xml version="1.0" encoding="utf-8"?>
    <svg version="1.1" id="` + MAP_EXTENSION_NAME + `" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
    <path class="dx-dashboard-contrast-icon" d="M21,2H3C2.5,2,2,2.5,2,3v18c0,0.5,0.5,1,1,1h18c0.5,0,1-0.5,1-1V3
        C22,2.5,21.5,2,21,2z M14,4v4h-4V4H14z M10,10h4v4h-4V10z M4,4h4v4H4V4z M4,10h4v4H4V10z M4,20v-4h4v4H4z M10,20v-4h4v4H10z M20,20
        h-4v-4h4V20z M20,14h-4v-4h4V14z M20,8h-4V4h4V8z"/>
    </svg>`;

    const mapBoxMetadata = {        
        bindings: [{
            propertyName: 'longitude',
            dataItemType: 'Dimension',
            displayName: "Longitude"
        }, {
            propertyName: 'latitude',
            dataItemType: 'Dimension',
            displayName: "Latitude"
        }, {
            propertyName: 'locationName',
            dataItemType: 'Dimension',
            displayName: "LocationName"
        }, {
            propertyName: 'type',
            dataItemType: 'Dimension',
            displayName: "Type"
        }, {
            propertyName: 'zoom',
            dataItemType: 'Dimension',
            displayName: "Zoom"
        }],
        customProperties: [{
            ownerType: CustomItem,
            propertyName: 'showHeaders',
            valueType: 'string',
            defaultValue: 'Auto',
        }],
        optionsPanelSections: [{
            title: "Custom Options",
            items: [{
                dataField: 'showHeaders',
                template: FormItemTemplates.buttonGroup,
                editorOptions: {
                    items: [{ text: 'Auto' }, { text: 'Off' }, { text: 'On' }],
                }
            },{
                dataField: 'textColor',
                label: { text: 'Text Color' },
                template: FormItemTemplates.buttonGroup,
                editorOptions: {
                    items: [{ text: 'Light' }, { text: 'Dark' }]
                }
            }]
        }],        
        icon: MAP_EXTENSION_NAME,
        title: 'Map Box'
    };

    class MapBoxItemViewer extends CustomItemViewer {
        renderContent(element, changeExisting) {    
            // <Mapbox />
            <></>
            // if (!changeExisting) {
            //     while (element.firstChild)
            //         element.removeChild(element.firstChild);
            //     element.style.overflow = 'auto';
            //     this.tableElt = document.createElement('table');
    
            //     this.tableElt.setAttribute("border", "1");
            //     this.tableElt.setAttribute("cellspacing", "0");
    
            //     element.append(this.tableElt);
            // }
            // this._update(this.getPropertyValue('showHeaders'));
        }
        
        // _getTextColor() {
        //     switch (this.getPropertyValue('textColor')) {
        //         case 'Light': return "gray";
        //         case 'Dark': return "black";
        //         default:
        //     }
        // }
    
        // _update(mode) {
        //     while (this.tableElt.firstChild)
        //         this.tableElt.removeChild(this.tableElt.firstChild);
    
        //     if (mode !== 'Off') {
        //         let bindingValues = this.getBindingValue('customDimensions').concat(this.getBindingValue('customMeasure'));
        //         this._addTableRow(bindingValues.map(function (item) { return item.displayName(); }), true);
        //     }
    
        //     this.iterateData(rowDataObject => {
        //         let valueTexts = rowDataObject.getDisplayText('customDimensions').concat(rowDataObject.getDisplayText('customMeasure'));
        //         this._addTableRow(valueTexts, false);
        //     });
        // }
        // _addTableRow(rowValues, isHeader) {
        //     const row = document.createElement('tr');
    
        //     rowValues.forEach(text => {
        //         const cell = document.createElement(isHeader ? 'th' : 'td');
        //         cell.style.padding = '3px';
        //         cell.innerText = text;
        //         cell.style.color = this._getTextColor();
        //         row.appendChild(cell);
        //     });
    
        //     this.tableElt.appendChild(row);
        // }
    }

    class MapBoxViewer {
        constructor(dashboardControl) {
            dashboardControl.registerIcon(svgIcon);    
            this.name = MAP_EXTENSION_NAME;
            this.metaData = mapBoxMetadata;
        }
    
        createViewerItem(model, $element, content) {
            return new MapBoxItemViewer(model, $element, content);
        }
    }
    
    export default MapBoxViewer;