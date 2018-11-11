class Musician
{
    public static instances: Musician[] = [];

    public instrument;
    public name: string;
    public dead: boolean;
    public description: string;
    private _band: string[] = new Array();
    private _allBands: string;

    constructor(instrument: string = 'guitar')
    {
        this.instrument = instrument;
        this.description = 'this musician plays ' + this.instrument;
        this._band = [];
        this._allBands = '';
    }

    public play(): string
    {
        return 'I\'m playing ' + this.instrument;   
    }

    public static create(nom?: string): Musician
    {
        const res: Musician = new Musician(nom)
        this.instances.push(res);
        return res;
    }

    public set band(nom: string)
    {
        this._band.push(nom);
        this._allBands = 'this musician played in ';

        for(let i=0 ; i < this._band.length ; i++) {
            if (i == 0) {
                this._allBands += '' + this._band[i];
            } else {
                this._allBands += ', ' + this._band[i];
            }
        }
    }

    public get allBands()
    {
        return this._allBands;
    }

}

class Rockman extends Musician
{
    public play(): string
    {
        return 'I\'m playing guitar';
    }
}