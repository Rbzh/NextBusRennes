
    export interface Refine {
        destination: string;
        nomcourtligne: string;
    }

    export interface Parameters {
        dataset: string[];
        refine: Refine;
        timezone: string;
        q: string;
        rows: number;
        format: string;
        facet: string[];
    }

    export interface Fields {
        nomcourtligne: string;
        depart: Date;
        departtheorique: Date;
        arriveetheorique: Date;
        idarret: string;
        destination: string;
        nomarret: string;
        precision: string;
        idcourse: string;
        arrivee: Date;
        sens: number;
        coordonnees: number[];
        idligne: string;
    }

    export interface Geometry {
        type: string;
        coordinates: number[];
    }

    export interface Record {
        datasetid: string;
        recordid: string;
        fields: Fields;
        geometry: Geometry;
        record_timestamp: Date;
    }

    export interface Facet {
        name: string;
        path: string;
        count: number;
        state: string;
    }

    export interface FacetGroup {
        name: string;
        facets: Facet[];
    }

    export interface StarbusInformation {
        nhits: number;
        parameters: Parameters;
        records: Record[];
        facet_groups: FacetGroup[];
    }

