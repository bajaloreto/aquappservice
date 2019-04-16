import { Map, LatLng, LatLngBounds } from 'leaflet';

export interface LayerBase {
    name: string;
    status: string;
    description: string;
    map: Map;
    add(): void;
    remove(): void;
    showLegend(): void;
    showControls(): void;
    getBounds(): LatLngBounds | null;
}